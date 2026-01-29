import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

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

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.usersService.update(id, dto);
  }
}

export class GetUserByIdParamsDto {}
