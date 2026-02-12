import { Prisma } from '@prisma/client';

export type WorkspaceWithProjectsType = Prisma.WorkspaceGetPayload<{
  select: {
    id: true;
    name: true;
    description: true;
    avatarUrl: true;
    createdAt: true;
    updatedAt: true;
    Project: {
      select: {
        id: true;
        name: true;
        Task: {
          select: {
            title: true;
            status: true;
          };
        };
      };
    };
  };
}>;
