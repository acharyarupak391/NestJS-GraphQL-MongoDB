import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class AddUserArgs {
  @Field(type => String)
  name;
  
  @Field(type => String)
  email;
  
  @Field(type => Int)
  age;
  
  @Field(type => String)
  sex;
}

@ArgsType()
export class UpdateUserArgs {
  @Field(type => String, {nullable: true})
  name;
  
  @Field(type => String, {nullable: true})
  email;
  
  @Field(type => Int, {nullable: true})
  age;
  
  @Field(type => String, {nullable: true})
  sex;
}