import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { WorkspacesService } from '../workspaces.service';

@Controller('api/workspaces')
export class ClientWorkspacesController {
  constructor(private workspacesService: WorkspacesService) {}

  @Get(':id')
  async getUserWorkspaces(@Param() params: { id: string }) {
    const id = params.id;
    return this.workspacesService.getUserWorkspaces(id);
  }
}
