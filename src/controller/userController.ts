import userService from "../service/userService";
import {Request, Response} from "express";
import cartService from "../service/cartService";

class UserController {
    private userService
    private cartService
    constructor() {
      this.userService = userService
        this.cartService = cartService
    }
    showFormLogIn = async (req: Request, res: Response) => {
        res.render('user/login')
    }
    login = async (req: Request, res: Response) => {
        let user = await this.userService.checkLogIn(req.body)
        if (user) {
            // @ts-ignore
            req.session.User = {
                status: user.status,
                id: user._id
            }
            // @ts-ignore
          if (user.status == 'user') {
              res.redirect(301, '/product/home')
          } else {
              res.redirect(301, '/product/homeAdmin')
          }
        } else {
            res.redirect(301, '/login')
        }
    }
    create = async (req: Request, res: Response) => {
        let users = req.body
        req.body.status = 'user'
        let user = await this.userService.createUser(users)
        let idUser = user._id.toString()
        let status = "unpaid"
        await cartService.addCart(idUser, status);
        res.redirect(301,'/login');
}

showFormUser = async (req: Request, res: Response) => {
    let idUser = req.session["User"];
   let user = await this.userService.findById(idUser.id)
    res.render("user/profile",{user: user})
}
logOut = async (req: Request, res: Response) => {
        req.session.destroy(err => {
            res.redirect(301, '/login')
        })
}
}
export default new UserController();