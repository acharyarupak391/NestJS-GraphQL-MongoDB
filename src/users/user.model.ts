import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(type => ID)
  private id: string;

  @Field()
  private name: string;

  @Field()
  private email: string;

  @Field(type => Int)
  private age: number;

  @Field()
  private sex: string;

  constructor(id: string, name: string, email: string, age: number, sex: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
    this.sex = sex;
  }

  get _id() {
    return this.id;
  }
}