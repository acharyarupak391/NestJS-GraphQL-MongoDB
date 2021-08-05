export class User {
  constructor(
    private _id: number,
    private name: string,
    private age: number,
    private sex: string,
    private programmer: boolean,
  ) {}

  get id() {
    return this._id;
  }
}