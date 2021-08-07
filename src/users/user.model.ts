import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    programmer: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  sex: string;
  programmer: boolean;
}
