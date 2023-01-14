import productService from "../service/productService";
import {Request, Response} from "express";
import categoryService from "../service/categoryService";

class ProductController {
    private productService;
    private categoryService;
constructor() {
    this.productService = productService;
    this.categoryService = categoryService;
}
    showHome = async (req: Request, res: Response) => {
    let products = await productService.findAll()
        res.render('home',{products: products})
    }
    showHomeAdmin = async (req: Request, res: Response) => {
        let products = await productService.findAll()
        res.render('homeAdmin',{products: products})
    }
    showFormCreate = async (req: Request, res: Response) => {
    let categories = await categoryService.getAll()
    res.render('products/createProducts', {categories: categories})
    }
    createProducts = async (req: Request, res: Response) => {
        if (req["files"]) {
            let image = req["files"].image;
            if ("mv" in image) {
                await image.mv('./public/storage/' + image.name)
                let product = req.body;
                product.image = '/storage/' + image.name;
                await productService.createProduct(product)
                res.redirect(301, '/product/homeAdmin')
            }
        }
    }
    deleteProducts = async (req: Request, res: Response) => {
        const idProduct = req.params.id;
        await productService.deleteProduct(idProduct)
        res.redirect(301, '/product/homeAdmin')
    }
    showFormEdit = async (req: Request, res: Response) => {
        const idProduct = req.params.id;
        let products = await productService.findProduct(idProduct)
        let category = await categoryService.findById(products.category)
        let categories = await categoryService.getAll()
        res.render('products/editProducts',{products: products,category: category,categories: categories})
    }
    editProduct = async (req: Request, res: Response) => {
        const idProduct = req.params.id;
        if (req["files"]) {
            let image = req["files"].image;
            if ("mv" in image) {
                await image.mv('./public/storage/' + image.name)
                let product = req.body;
                product.image = '/storage/' + image.name;
                await productService.editProduct(idProduct, product)
                res.redirect(301, '/product/homeAdmin')
            }
        }
    }
    addCart = async (req: Request, res: Response) => {

    }
}
export default new ProductController();