import { Prisma } from '@prisma/client';

export const projectPublicSelect = Prisma.validator<Prisma.ProjectSelect>()({
  id: true,
  name: true,
  description: true,
  workspaceId: true,
  createdAt: true,
  updatedAt: true,
  endedAt: true,
  Sprint: {
    select: {
      id: true,
      name: true,
    },
  },
  _count: {
    select: {
      Task: true,
    },
  },
});
