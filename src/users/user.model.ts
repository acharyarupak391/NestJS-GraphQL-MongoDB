import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import * as mongoose from "mongoose";

@ObjectType()
export class User {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(type => Int)
  age: number;

  @Field()
  sex: string;
}

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  sex: String
}, {collection: "users-gql"})