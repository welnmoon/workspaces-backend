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
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectResponseDto } from './dto/project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get()
  async getAll(): Promise<ProjectResponseDto[]> {
    return this.projectsService.getAll();
  }

  @Get(':id')
  async getById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProjectResponseDto> {
    return this.projectsService.getById(id);
  }

  @Post()
  async create(@Body() dto: CreateProjectDto): Promise<ProjectResponseDto> {
    return this.projectsService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateProjectDto,
  ): Promise<ProjectResponseDto> {
    return this.projectsService.update(id, dto);
  }

  @Delete(':id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProjectResponseDto> {
    return this.projectsService.delete(id);
  }
}
