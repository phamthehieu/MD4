"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../model/user");
class UserService {
    constructor() {
        this.checkLogIn = async (user) => {
            let Check = await user_1.Users.findOne({ userName: user.userName, password: user.password });
            if (Check) {
                return Check;
            }
            else {
                return null;
            }
        };
        this.createUser = async (users) => {
            let user = await user_1.Users.create(users);
            return user;
        };
        this.findById = async (id) => {
            let user = user_1.Users.findOne({ _id: id });
            return user;
        };
    }
}
exports.default = new UserService();
//# sourceMappingURL=userService.js.map