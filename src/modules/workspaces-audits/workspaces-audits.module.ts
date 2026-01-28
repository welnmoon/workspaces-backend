import { Module } from '@nestjs/common';
import { WorkspacesAuditsService } from './workspaces-audits.service';
import { WorkspacesAuditsController } from './workspaces-audits.controller';

@Module({
  providers: [WorkspacesAuditsService],
  controllers: [WorkspacesAuditsController]
})
export class WorkspacesAuditsModule {}
