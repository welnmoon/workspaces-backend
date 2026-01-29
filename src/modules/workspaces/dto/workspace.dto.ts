export class WorkspaceResponseDto {
  id: number;
  name: string;
  description: string | null;
  ownerId: string | null;
  avatarUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}
