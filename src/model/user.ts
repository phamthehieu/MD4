import {model, Schema} from "mongoose";
export interface IUser {
    userName: string;
    password: string;
    fullName ?: string;
    birthday ?: string;
    email ?: string;
    phoneNumber ?: string;
    address: string;
    status: string;

}

const UserSchema = new Schema<IUser>({
    userName: String,
    password: String,
    fullName: String,
    birthday: String,
    email: String,
    phoneNumber: String,
    address: String,
    status: String
})

const Users = model<IUser>('User', UserSchema);
export {Users}