import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DateTime } from 'luxon';
import { IWorkElement } from '../models/work.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  workData: IWorkElement[] = [];

  // End date requirement: 24/03/2015 11:30:00 UTC
  endDate = DateTime.utc(2015, 3, 24, 11, 30);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const allWorkData: IWorkElement[] = this.route.snapshot.data['workData'];
    this.workData = allWorkData.filter(workItem => DateTime.fromISO(workItem.SubmitDateTime) < this.endDate);
  }
}
