import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from 'prisma-generated/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.user.findMany({});
    // return [{ id: 1, name: 'John Doe' }];
  }

  async getUserById(id: string): Promise<User> {
    try {
      return await this.prisma.user.findUniqueOrThrow({
        where: {
          id,
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
