import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskResponseDto } from './dto/task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { taskPublicSelect } from './prisma/task.select';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  // ====================
  // Query methods
  // ====================
  async getAll(): Promise<TaskResponseDto[]> {
    return this.prisma.task.findMany({ select: taskPublicSelect });
  }

  async getById(id: number): Promise<TaskResponseDto> {
    try {
      return await this.prisma.task.findUniqueOrThrow({
        where: { id },
        select: taskPublicSelect,
      });
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      }
      throw e;
    }
  }

  // ====================
  // Command methods
  // ====================
  async create(dto: CreateTaskDto): Promise<TaskResponseDto> {
    return this.prisma.task.create({
      data: {
        ...dto,
        updatedAt: new Date(),
      },
      select: taskPublicSelect,
    });
  }

  async update(id: number, dto: UpdateTaskDto): Promise<TaskResponseDto> {
    return this.prisma.task.update({
      where: { id },
      data: dto,
      select: taskPublicSelect,
    });
  }

  async delete(id: number): Promise<TaskResponseDto> {
    try {
      return await this.prisma.task.delete({
        where: { id },
        select: taskPublicSelect,
      });
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException(`Task with ID ${id} not found`);
      }
      throw e;
    }
  }
}
