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
import { WorkspaceResponseDto } from '../dto/workspace.dto';
import { CreateWorkspaceDto } from '../dto/create-workspace.dto';
import { UpdateWorkspaceDto } from '../dto/update-workspace.dto';

@Controller('api/admin/workspaces')
export class AdminWorkspacesController {
  constructor(private workspacesService: WorkspacesService) {}

  @Get()
  async getAll(): Promise<WorkspaceResponseDto[]> {
    return this.workspacesService.getAll();
  }

  @Get(':id')
  async getById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<WorkspaceResponseDto> {
    return this.workspacesService.getById(id);
  }

  @Post()
  async create(@Body() dto: CreateWorkspaceDto): Promise<WorkspaceResponseDto> {
    return this.workspacesService.create(dto);
  }

  @Patch(':id')
  async updateWorkspace(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateWorkspaceDto,
  ): Promise<WorkspaceResponseDto> {
    return this.workspacesService.update(id, dto);
  }

  @Delete(':id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<WorkspaceResponseDto> {
    return this.workspacesService.delete(id);
  }
}
