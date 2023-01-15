import {Router} from "express";
import cartDetailController from "../controller/cartDetailController";
export const cartRouter = Router();
cartRouter.get("/cart",cartDetailController.showFormCart)
cartRouter.get("/addProduct/:id",cartDetailController.addCartDetail)
cartRouter.post("/quantity/:id", cartDetailController.updateQuantity)
cartRouter.get("/delete/:id", cartDetailController.deleteProductCart)
cartRouter.get("/pay", cartDetailController.payCart)
cartRouter.get("/showOrder", cartDetailController.showCartPaid)