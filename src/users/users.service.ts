import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.model";

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async getUsers(): Promise<User[]> {
    const _users = await this.userModel.find().sort({createdAt: "desc"}).exec();
    return _users;
  }

  async addUser(body: {
    name: string;
    email: string;
    age: number;
    sex: string;
  }): Promise<{id: string}> {
    let _newUser = new this.userModel({
      name: body.name,
      email: body.email,
      age: body.age,
      sex: body.sex,
    });
    const result = await _newUser.save();    // save to collection
    return {id: result._id};
  }

  async findUser(param: { id: string }): Promise<User> {
    let _user;
    try {
      _user = await this.userModel.findById(param.id);
    } catch(err) {
      throw new NotFoundException('User not found!')
    }
    return _user;
  }

  async updateUser(
    id: string,
    body,
  ): Promise<{id: string}> {
    let _user;
    try {
      _user = await this.userModel.findByIdAndUpdate(id, body, {new: true, useFindAndModify: false});
    } catch(err) {
      throw new NotFoundException("User not found!")
    }
    return {id: _user._id}
  }

  async deleteUser(id: string): Promise<User> {
    let _deleted;
    try {
      _deleted = await this.userModel.findByIdAndDelete(id)
    } catch(err) {
      throw new NotFoundException("User not found!")
    }
    return _deleted;
  }
}