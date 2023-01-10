import mongoose, { Schema } from "mongoose";

const userCollection = 'users';

const UserSchema = new Schema({
  name: { type: Schema.Types.String, require: true, max: 100 },
  surname: { type: Schema.Types.String, require: true, max: 100 },
  email: { type: Schema.Types.String, require: true, max: 100 },
  user: { type: Schema.Types.String, require: true, max: 100 },
  password: { type: Schema.Types.String, require: true, max: 100 }
})

export const users = mongoose.model(userCollection, UserSchema);
