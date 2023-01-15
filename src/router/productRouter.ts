import {Router} from "express";
import productController from "../controller/productController"
export const productRouter = Router();
productRouter.get("/home",productController.showHome)
productRouter.get("/homeAdmin", productController.showHomeAdmin)
productRouter.get("/createProduct", productController.showFormCreate)
productRouter.post('/delete/:id',productController.deleteProducts)
productRouter.get('/edit/:id', productController.showFormEdit)
productRouter.post('/edit/:id',productController.editProduct)
productRouter.post("/create",productController.createProducts)
productRouter.post("/search", productController.searchByName)
productRouter.get("/searchPrice/:id", productController.searchByPrice)
