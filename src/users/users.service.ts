import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.model";

@Injectable()
export class UsersService {

  constructor(@InjectModel("User") private userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return [] as User[];
  }
  
  async create(): Promise<User> {
    return {} as any;
  }

  // async findOneById(id: string): Promise<Recipe> {
  //   return {} as any;
  // }

  // async remove(id: string): Promise<boolean> {
  //   return true;
  // }
}