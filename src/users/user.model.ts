export class User {
  constructor(
    private _id: number,
    private name: string,
    private age: number,
    private sex: string,
    private programmer: boolean,
  ) {}

  get id(): number {
    return this._id;
  }

  set _name(newName) {
    this.name = newName;
  }

  set _age(newAge) {
    this.age = newAge;
  }

  set _sex(newSex) {
    this.sex = newSex;
  }

  set _programmer(newProgrammer) {
    this.programmer = newProgrammer;
  }
}