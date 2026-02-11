import { Prisma, TaskStatus } from '@prisma/client';

export const workspacePublicSelect = Prisma.validator<Prisma.WorkspaceSelect>()(
  {
    id: true,
    name: true,
    description: true,
    ownerId: true,
    avatarUrl: true,
    createdAt: true,
    updatedAt: true,
    Project: {
      select: {
        id: true,
        name: true,
        description: true,
        workspaceId: true,
        createdAt: true,
        updatedAt: true,
        endedAt: true,
        Task: {
          select: {
            status: true,
            title: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    },
  },
);
