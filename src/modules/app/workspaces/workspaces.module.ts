import { Module } from '@nestjs/common';
import { ClientWorkspacesController } from './client/workspaces.controller';
import { WorkspacesService } from './workspaces.service';
import { AdminWorkspacesController } from './admin/workspaces.controller';

@Module({
  controllers: [ClientWorkspacesController, AdminWorkspacesController],
  providers: [WorkspacesService],
})
export class WorkspacesModule {}
