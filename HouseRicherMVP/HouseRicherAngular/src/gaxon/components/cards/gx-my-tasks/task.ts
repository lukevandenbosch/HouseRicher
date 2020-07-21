export class Task {
  id: string;
  title: string;
  content: string;
  completed: boolean;
  labels: any[];
  created: Date;
  dueDate: Date;
  user_id: string;
  project_id: string;
  deleted: boolean;
}
