import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddUserArgs, UpdateUserArgs } from './dto/users.args';
import { User } from './user.model';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  getAllUsers(): Promise<User[]> {
    const _users = this.usersService.getUsers();
    return _users;
  }

  @Mutation(() => User)
  addUser(@Args() args: AddUserArgs): Promise<User> {
    const _user = this.usersService.addUser(args);
    return _user;
  }

  @Query(() => User)
  getSingleUser(@Args('id') id: string): Promise<User> {
    const _user = this.usersService.getUser(id);
    return _user;
  }

  @Mutation(() => Boolean)
  deleteUser(@Args('id') id: string) {
    return this.usersService.deleteUser(id);
  }

  @Mutation(() => User)
  updateUser(@Args('id') id: string, @Args() body: UpdateUserArgs) {
    return this.usersService.updateUser(id, body);
  }
}
