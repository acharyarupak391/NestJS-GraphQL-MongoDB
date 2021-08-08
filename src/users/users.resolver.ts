import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersArgs } from './dto/users.args';
import { User } from './user.model';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  getAllUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Mutation(() => User)
  async addUser(@Args() args: UsersArgs): Promise<any> {
    const recipe = await this.usersService.addUser(args);
    
  }

  // @Query( => Recipe)
  // async recipe(@Args('id') id: string): Promise<Recipe> {
  //   const recipe = await this.usersService.findOneById(id);
  //   if (!recipe) {
  //     throw new NotFoundException(id);
  //   }
  //   return recipe;
  // }

  // @Mutation( => Boolean)
  // async removeRecipe(@Args('id') id: string) {
  //   return this.usersService.remove(id);
  // }

  // @Subscription( => Recipe)
  // recipeAdded() {
  //   return pubSub.asyncIterator('recipeAdded');
  // }
}
