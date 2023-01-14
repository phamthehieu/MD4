import {Router} from "express";
import UserController from "../controller/userController";
import {productRouter} from "./productRouter";
import {cartRouter} from "./cartRouter";

export const router = Router();
router.get('/login', UserController.showFormLogIn)
router.post('/login', UserController.login)
router.post('/create', UserController.create)
router.get('/profile',UserController.showFormUser)
router.get('/logout',UserController.logOut)
router.use('/product', productRouter)
router.use('/cart',cartRouter)