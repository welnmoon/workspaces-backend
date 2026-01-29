import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAll(): Promise<UserResponseDto[]> {
    return this.usersService.getAll();
  }

  @Get(':id')
  async getUserById(@Param() params: { id: string }): Promise<UserResponseDto> {
    const { id } = params;
    return this.usersService.getUserById(id);
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.usersService.update(id, dto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.usersService.delete(id);
  }

  @Post()
  async createUser(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto);
  }
}

export class GetUserByIdParamsDto {}
