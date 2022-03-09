import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateTime } from 'luxon';
import { IExerciseData, IExerciseResultData, IUserData, IWorkElement } from '../models/work.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  // Data that the processing will include
  workData: IWorkElement[] = [];

  // Task defines that data to be considered is on date 24/03/2015, from 00:00 to 11:30 UTC
  startDate = DateTime.utc(2015, 3, 24, 0, 0);
  endDate = DateTime.utc(2015, 3, 24, 11, 30);

  // Unique user IDs
  uniqueUserIds: number[] = [];
  usersData: IUserData[] = [];

  // Unique exercise IDs
  uniqueExerciseIds: number[] = [];
  displayedColumns: string[] = ['SubmittedAnswerId', 'SubmitDateTime', 'Correct', 'Progress'];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Resolver retrieves all data from 'work.json'
    const allWorkData: IWorkElement[] = this.route.snapshot.data['workData'];

    // Extract today's data
    this.workData = allWorkData.filter(
      workItem =>
        this.startDate < DateTime.fromISO(workItem.SubmitDateTime) &&
        DateTime.fromISO(workItem.SubmitDateTime) < this.endDate
    );

    this.processWorkData();
  }

  processWorkData(): void {
    // Dividing by users
    this.uniqueUserIds = [...new Set(this.workData.map(item => item.UserId))];

    // Dividing by exercises
    this.uniqueExerciseIds = [...new Set(this.workData.map(item => item.ExerciseId))];

    // Mapping data to user objects
    this.usersData = this.uniqueUserIds.map(uid => {
      const allUserExercises = this.workData.filter(wd => wd.UserId === uid);
      const uniqueUserExerciseIds = [...new Set(allUserExercises.map(item => item.ExerciseId))];
      const exercises: IExerciseData[] = uniqueUserExerciseIds.map(ueid => {
        const firstData = allUserExercises.find(ue => ue.ExerciseId === ueid);

        return {
          ExerciseId: ueid,
          Difficulty: firstData?.Difficulty,
          Domain: firstData?.Domain,
          LearningObjective: firstData?.LearningObjective,
          Subject: firstData?.Subject,
          Data: allUserExercises
            .filter(ue => ue.ExerciseId === ueid)
            .map(ue => {
              return {
                Correct: ue.Correct,
                Progress: ue.Progress,
                SubmitDateTime: ue.SubmitDateTime,
                SubmittedAnswerId: ue.SubmittedAnswerId
              } as IExerciseResultData;
            })
        } as IExerciseData;
      });

      return {
        UserId: uid,
        Exercises: exercises
      };
    });
  }
}
