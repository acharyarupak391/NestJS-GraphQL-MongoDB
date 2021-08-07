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
    this.users.unshift(_newUser);   // add new user to beginning of the array
    return _newUser;
  }

  findUser(param: {id: string}): User {
    return this.users.find(user => user.id === parseInt(param.id));
  } 
  
  updateUser(id: string, body: {name: string, age: string, sex: string, programmer: string}): User {
    let _user = this.findUser({id: id});
    if(!_user) return _user;
    if(body.name) _user._name = body.name;
    if(body.age) _user._age = body.age;
    if(body.sex) _user._sex = body.sex;
    if(body.programmer) _user._programmer = body.programmer;    
    return _user;
  }

  deleteUser(id: string): boolean {
    if(this.users.findIndex(user => user.id === parseInt(id)) === -1) return false;
    this.users = this.users.filter(user => user.id !== parseInt(id));
    return true;
  }
}