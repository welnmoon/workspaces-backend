export class ProjectResponseDto {
  id: number;
  name: string;
  description: string | null;
  workspaceId: number;
  createdAt: Date;
  updatedAt: Date;
  endedAt: Date | null;
}
