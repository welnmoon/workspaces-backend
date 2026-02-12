import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectListItemDto } from './dto/project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { projectPublicSelect } from './prisma/project.select';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  // ====================
  // Query methods
  // ====================
  async getAll(): Promise<ProjectListItemDto[]> {
    const projects = await this.prisma.project.findMany({
      select: projectPublicSelect,
    });

    const doneByProject = await this.prisma.task.groupBy({
      by: ['projectId'],
      where: { status: 'DONE' },
      _count: { _all: true },
    });

    const doneMap = new Map(
      doneByProject.map((x) => [x.projectId, x._count._all]),
    );

    return projects.map((p) => ({
      ...p,
      tasksTotal: p._count.Task,
      tasksDone: doneMap.get(p.id) ?? 0,
    }));
  }

  async getById(id: number): Promise<ProjectListItemDto> {
    try {
      return await this.prisma.project.findUniqueOrThrow({
        where: { id },
        select: projectPublicSelect,
      });
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException(`Project with ID ${id} not found`);
      }
      throw e;
    }
  }

  // ====================
  // Command methods
  // ====================
  async create(dto: CreateProjectDto): Promise<ProjectListItemDto> {
    return this.prisma.project.create({
      data: {
        ...dto,
        updatedAt: new Date(),
      },
      select: projectPublicSelect,
    });
  }

  async update(id: number, dto: UpdateProjectDto): Promise<ProjectListItemDto> {
    return this.prisma.project.update({
      where: { id },
      data: dto,
      select: projectPublicSelect,
    });
  }

  async delete(id: number): Promise<ProjectListItemDto> {
    try {
      return await this.prisma.project.delete({
        where: { id },
        select: projectPublicSelect,
      });
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException(`Project with ID ${id} not found`);
      }
      throw e;
    }
  }
}
