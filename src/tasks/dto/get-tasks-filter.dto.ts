import { TasksStatus } from '../taks.model';

export class GetTasksFilterDto {
  status: TasksStatus;
  search: string;
}
