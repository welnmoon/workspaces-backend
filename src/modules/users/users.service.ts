import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserResponseDto } from './dto/user.dto';
import { Prisma } from '@prisma/client';
import { userPublicSelect } from './prisma/user.select';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  // ====================
  // Query methods
  // ====================
  async getAll(): Promise<UserResponseDto[]> {
    return this.prisma.user.findMany({ select: userPublicSelect });
  }

  async getUserById(id: string): Promise<UserResponseDto> {
    try {
      return await this.prisma.user.findUniqueOrThrow({
        where: {
          id,
        },
        select: userPublicSelect,
      });
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      throw e;
    }
  }

  // ====================
  // Command methods
  // ====================
  async create() {}
  async update(id: string, dto: UpdateUserDto): Promise<UserResponseDto> {
    return this.prisma.user.update({
      where: { id },
      data: dto,

      select: userPublicSelect,
    });
  }
  async delete() {}
}
