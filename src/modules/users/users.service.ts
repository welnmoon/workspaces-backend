import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserResponseDto } from './dto/user.dto';
import { Prisma } from '@prisma/client';
import { userPublicSelect } from './prisma/user.select';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<UserResponseDto[]> {
    return this.prisma.user.findMany({ select: userPublicSelect });
    // return [{ id: 1, name: 'John Doe' }];
  }

  async getUserById(id: string): Promise<UserResponseDto> {
    try {
      return await this.prisma.user.findUniqueOrThrow({
        where: {
          id,
        },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          nickname: true,
          createdAt: true,
          image: true,
          emailVerified: true,
          wasOnline: true,
          platformRole: true,
          updatedAt: true,
          currentTariff: true,
        },
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
}
