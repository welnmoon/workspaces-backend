import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '@prisma/client';

class TaskSummaryDTO {
  @ApiProperty()
  title: string;

  @ApiProperty()
  status: TaskStatus;
}

class ProjectSummaryDTO {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty({ type: () => [TaskSummaryDTO] })
  tasks: TaskSummaryDTO[];
}

export class ClientWorkspaceDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ nullable: true })
  description: string | null;

  @ApiProperty({ nullable: true })
  avatarUrl: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ type: () => [ProjectSummaryDTO] })
  projects: ProjectSummaryDTO[];
}
