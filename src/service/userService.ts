import {Users} from "../model/user"

class UserService {
    constructor() {
    }
    checkLogIn = async (user) => {
     let Check = await Users.findOne({userName: user.userName, password: user.password})
        if (Check) {
            return Check;
        } else {
            return null
        }
    }
    createUser = async (users) => {
       let user = await Users.create(users)
        return user;
    }
    findById = async (id) => {
        let user = Users.findOne({_id: id})
        return user;
}
}
export default new UserService()