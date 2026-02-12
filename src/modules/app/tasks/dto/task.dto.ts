import { TaskPriority, TaskStatus } from '@prisma/client';

export class TaskResponseDto {
  id: number;
  title: string;
  description: string | null;
  status: TaskStatus;
  dueDate: Date | null;
  projectId: number;
  assigneeId: string | null;
  createdAt: Date;
  updatedAt: Date;
  priority: TaskPriority;
  sprintId: number | null;
  completedAt: Date | null;
}
