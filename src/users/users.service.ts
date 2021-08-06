import { Injectable } from "@nestjs/common";
import { User } from "./user.model";

@Injectable()
export class UsersService {
  private users: User[] = []

  getUsers(): User[] {
    return [...this.users];
  }

  addUser(body: {name: string, age: number, sex: string, programmer: boolean}): User {
    let _userId = new Date().getTime();
    let _newUser = new User(_userId, body.name, body.age, body.sex, body.programmer);
    this.users.push(_newUser);
    return _newUser;
  }
}