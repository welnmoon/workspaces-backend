import { Prisma } from '@prisma/client';

export const workspacePublicSelect = Prisma.validator<Prisma.WorkspaceSelect>()({
  id: true,
  name: true,
  description: true,
  ownerId: true,
  avatarUrl: true,
  createdAt: true,
  updatedAt: true,
});
