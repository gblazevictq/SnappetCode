export interface IWorkElement {
  SubmittedAnswerId: number;
  SubmitDateTime: string; // ISO format date
  Correct: number;
  Progress: number;
  UserId: number;
  ExerciseId: number;
  Difficulty: string;
  Subject: string;
  Domain: string;
  LearningObjective: string;
}

export interface IExerciseResultData {
  SubmittedAnswerId: number;
  SubmitDateTime: string; // ISO format date
  Correct: number;
  Progress: number;
}

export interface IExerciseData {
  ExerciseId: number;
  Difficulty: string;
  Subject: string;
  Domain: string;
  LearningObjective: string;
  Data: IExerciseResultData[];
}

export interface IUserData {
  UserId: number;
  Exercises: IExerciseData[];
}
