import { Body, Controller, Get, Header, Post, Req } from '@nestjs/common';
import { User } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  // @Header('Content-Type', 'application/json')
  getUsers(): User[] {
    return this.usersService.getUsers();
  }

  @Post()
  // addUser(@Req() req)    // will give the whole request object
  addUser(@Body() body): { id: number } {
    let _addedUser = this.usersService.addUser(body);
    return { id: _addedUser.id };
  }
}
