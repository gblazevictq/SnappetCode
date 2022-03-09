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
