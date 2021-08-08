import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "./user.model";

@Injectable()
export class UsersService {
  users: User[] = [];

  getUsers(): User[] {
    return [...this.users];
  }

  addUser(body: {
    name: string;
    email: string;
    age: number;
    sex: string;
  }): User {
    const _id = new Date().getTime().toString();
    const _user = new User(_id, body.name, body.email, body.age, body.sex);
    this.users.unshift(_user);
    return _user;
  }
}