import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { WorkspaceResponseDto } from './dto/workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { workspacePublicSelect } from './prisma/workspace.select';

@Injectable()
export class WorkspacesService {
  constructor(private prisma: PrismaService) {}

  // ====================
  // Query methods
  // ====================
  async getAll(): Promise<WorkspaceResponseDto[]> {
    return this.prisma.workspace.findMany({ select: workspacePublicSelect });
  }

  async getById(id: number): Promise<WorkspaceResponseDto> {
    try {
      return await this.prisma.workspace.findUniqueOrThrow({
        where: { id },
        select: workspacePublicSelect,
      });
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException(`Workspace with ID ${id} not found`);
      }
      throw e;
    }
  }

  // ====================
  // Command methods
  // ====================
  async create(dto: CreateWorkspaceDto): Promise<WorkspaceResponseDto> {
    return this.prisma.workspace.create({
      data: {
        ...dto,
        updatedAt: new Date(),
      },
      select: workspacePublicSelect,
    });
  }

  async update(
    id: number,
    dto: UpdateWorkspaceDto,
  ): Promise<WorkspaceResponseDto> {
    return this.prisma.workspace.update({
      where: { id },
      data: dto,
      select: workspacePublicSelect,
    });
  }

  async delete(id: number): Promise<WorkspaceResponseDto> {
    try {
      return await this.prisma.workspace.delete({
        where: { id },
        select: workspacePublicSelect,
      });
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException(`Workspace with ID ${id} not found`);
      }
      throw e;
    }
  }
}
