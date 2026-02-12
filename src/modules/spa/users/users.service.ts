import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserResponseDto } from './dto/user.dto';
import { Prisma } from '@prisma/client';
import { userPublicSelect } from './prisma/user.select';
import { UpdateUserDto } from './dto/update-user.dto';
import bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

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
    } catch (e: unknown) {
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
  async create(dto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    return this.prisma.user.create({
      data: {
        email: dto.email,
        password: hashedPassword,
        firstName: dto.firstName,
        lastName: dto.lastName,
        nickname: dto.nickname,
        image: dto.image,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  async update(id: string, dto: UpdateUserDto): Promise<UserResponseDto> {
    return this.prisma.user.update({
      where: { id },
      data: dto,

      select: userPublicSelect,
    });
  }

  async delete(id: string) {
    try {
      return await this.prisma.user.delete({
        where: { id },
        select: userPublicSelect,
      });
    } catch (error: unknown) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException('User not found');
      }

      throw error;
    }
  }
}
