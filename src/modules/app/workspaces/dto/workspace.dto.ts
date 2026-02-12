import { TaskStatus } from '@prisma/client';

export class WorkspaceResponseDto {
  id: number;
  name: string;
  description: string | null;
  ownerId: string | null;
  avatarUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
  Project: {
    name: string;
    id: number;
    description: string | null;
    workspaceId: number;
    createdAt: Date;
    updatedAt: Date;
    endedAt: Date | null;
    Task: {
      status: TaskStatus;
      title: string;
    }[];
  }[];
}
