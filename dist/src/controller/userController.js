"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userService_1 = __importDefault(require("../service/userService"));
const cartService_1 = __importDefault(require("../service/cartService"));
class UserController {
    constructor() {
        this.showFormLogIn = async (req, res) => {
            res.render('user/login');
        };
        this.login = async (req, res) => {
            let user = await this.userService.checkLogIn(req.body);
            if (user) {
                req.session.User = {
                    status: user.status,
                    id: user._id
                };
                if (user.status == 'user') {
                    res.redirect(301, '/product/home');
                }
                else {
                    res.redirect(301, '/product/homeAdmin');
                }
            }
            else {
                res.redirect(301, '/login');
            }
        };
        this.create = async (req, res) => {
            let users = req.body;
            req.body.status = 'user';
            let user = await this.userService.createUser(users);
            let idUser = user._id.toString();
            let status = "unpaid";
            await cartService_1.default.addCart(idUser, status);
            res.redirect(301, '/login');
        };
        this.showFormUser = async (req, res) => {
            let idUser = req.session["User"];
            let user = await this.userService.findById(idUser.id);
            res.render("user/profile", { user: user });
        };
        this.logOut = async (req, res) => {
            req.session.destroy(err => {
                res.redirect(301, '/login');
            });
        };
        this.userService = userService_1.default;
        this.cartService = cartService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=userController.js.map