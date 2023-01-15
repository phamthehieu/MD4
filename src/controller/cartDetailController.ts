import categoryService from "../service/categoryService";
import userService from "../service/userService";
import productService from "../service/productService";
import cartService from "../service/cartService";
import cartDetailService from "../service/cartDetailService";
import {Request, Response} from "express";
class CartDetailController {
    private productService
    private categoryService
    private userService
    constructor() {
        this.productService = productService;
        this.categoryService = categoryService;
        this.userService = userService;
    }
    showFormCart = async (req: Request, res: Response) => {
        let id = req.session["User"];
        let Cart = await cartService.findById(id.id)
        let idCart = Cart._id.toString()
        let products = await cartDetailService.finById(idCart)
        res.render('products/cart', {product1: products, cart: Cart})
    }
    addCartDetail = async (req: Request, res: Response) => {
        const idProduct = req.params.id;
        let id = req.session["User"];
        let Cart = await cartService.findById(id.id)
        let idCart = Cart._id.toString()
        let checkIdProduct = await cartDetailService.fillProduct(idProduct)
        let priceProduct = await productService.findProduct(idProduct)
        let amountProduct = 1
        let total = amountProduct * priceProduct.price
        await cartDetailService.addCartDetail(idProduct, idCart,amountProduct, total)
        let totalProduct = await cartDetailService.fillTotal(idCart)
        let totalCart = totalProduct[totalProduct.length - 1].total
        await cartService.addTotal(id.id,totalCart)
        res.redirect(301, '/product/home')
    }
    updateQuantity = async (req: Request, res: Response) => {
        const idProduct = req.params.id;
        let quantity = req.body;
        let id = req.session["User"];
        let Cart = await cartService.findById(id.id)
        let idCart = Cart._id.toString()
        await cartDetailService.updateQuantity(idProduct, quantity.amountProduct)
        let priceProduct = await productService.findProduct(idProduct)
        let amount = await cartDetailService.fillProduct(idProduct)
        let total = priceProduct.price * amount.amountProduct
        await cartDetailService.updateTotal(idProduct, total)
        let totalProduct = await cartDetailService.fillTotal(idCart)
        let totalCart = totalProduct[totalProduct.length - 1].total
        await cartService.addTotal(id.id,totalCart)
        res.redirect('/cart/cart')
    }
    deleteProductCart = async (req: Request, res: Response) => {
        let idCartDetail = req.params.id;
        let id = req.session["User"];
        await cartDetailService.deleteCartDetail(idCartDetail)
        let Cart = await cartService.findById(id.id)
        let idCart = Cart._id.toString()
        let totalProduct = await cartDetailService.fillTotal(idCart)
        let totalCart = totalProduct[totalProduct.length - 1].total
        await cartService.addTotal(id.id,totalCart)
        res.redirect('/cart/cart')
    }
    payCart = async (req: Request, res: Response) => {
        let status = "Paid"
        let id = req.session["User"];
        let Cart = await cartService.findById(id.id)
        let idCart = Cart._id.toString()
        await cartService.updateStatus(idCart,status)
        res.redirect(301, '/product/home')
    }
    showCartPaid = async (req: Request, res: Response) => {
        let cart = await cartService.findByStatus()
        if(cart)
            console.log(cart)
        res.render("products/CardPaid",{cart: cart[0]})
    }
}
export default new CartDetailController();