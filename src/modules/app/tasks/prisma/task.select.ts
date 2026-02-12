import { Prisma } from '@prisma/client';

export const taskPublicSelect = Prisma.validator<Prisma.TaskSelect>()({
  id: true,
  title: true,
  description: true,
  status: true,
  dueDate: true,
  projectId: true,
  assigneeId: true,
  createdAt: true,
  updatedAt: true,
  priority: true,
  sprintId: true,
  completedAt: true,
});
