import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class UsersArgs {
  @Field(type => String)
  name;
  
  @Field(type => String)
  email;
  
  @Field(type => Int)
  age;
  
  @Field(type => String)
  sex;
}