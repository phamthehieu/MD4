"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    userName: String,
    password: String,
    fullName: String,
    birthday: String,
    email: String,
    phoneNumber: String,
    address: String,
    status: String
});
const Users = (0, mongoose_1.model)('User', UserSchema);
exports.Users = Users;
//# sourceMappingURL=user.js.map