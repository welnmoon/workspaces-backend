import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAll(): Promise<any[]> {
    return this.usersService.getAll();
  }

  @Get(':id')
  async getUserById(@Param() params: { id: string }): Promise<any> {
    const { id } = params;
    return this.usersService.getUserById(id);
  }
}

export class GetUserByIdParamsDto {}
