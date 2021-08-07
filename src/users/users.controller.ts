import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @Post()
  addUser(@Body() body) {
    // don't need to use async/await here since we're returning Promise<{id: string}>
    let _addedUserId = this.usersService.addUser(body);
    return _addedUserId;
  }

  @Get(':id')
  async getUser(@Param() param) {
    let _user = await this.usersService.findUser(param);
    return _user;
  }

  @Patch(':id')
  updateUser(@Param('id') id, @Body() body) {
    let _updatedUser = this.usersService.updateUser(id, body);
    return _updatedUser;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id) {
    let _deleted = await this.usersService.deleteUser(id);
    if (_deleted) return { message: 'User deleted successfully!' };
    else throw new NotFoundException('User not found!');
  }
}
