"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productService_1 = __importDefault(require("../service/productService"));
const categoryService_1 = __importDefault(require("../service/categoryService"));
class ProductController {
    constructor() {
        this.showHome = async (req, res) => {
            let products = await productService_1.default.findAll();
            res.render('home', { products: products });
        };
        this.showHomeAdmin = async (req, res) => {
            let products = await productService_1.default.findAll();
            res.render('homeAdmin', { products: products });
        };
        this.showFormCreate = async (req, res) => {
            let categories = await categoryService_1.default.getAll();
            res.render('products/createProducts', { categories: categories });
        };
        this.createProducts = async (req, res) => {
            if (req["files"]) {
                let image = req["files"].image;
                if ("mv" in image) {
                    await image.mv('./public/storage/' + image.name);
                    let product = req.body;
                    product.image = '/storage/' + image.name;
                    await productService_1.default.createProduct(product);
                    res.redirect(301, '/product/homeAdmin');
                }
            }
        };
        this.deleteProducts = async (req, res) => {
            const idProduct = req.params.id;
            await productService_1.default.deleteProduct(idProduct);
            res.redirect(301, '/product/homeAdmin');
        };
        this.showFormEdit = async (req, res) => {
            const idProduct = req.params.id;
            let products = await productService_1.default.findProduct(idProduct);
            let category = await categoryService_1.default.findById(products.category);
            let categories = await categoryService_1.default.getAll();
            res.render('products/editProducts', { products: products, category: category, categories: categories });
        };
        this.editProduct = async (req, res) => {
            const idProduct = req.params.id;
            if (req["files"]) {
                let image = req["files"].image;
                if ("mv" in image) {
                    await image.mv('./public/storage/' + image.name);
                    let product = req.body;
                    product.image = '/storage/' + image.name;
                    await productService_1.default.editProduct(idProduct, product);
                    res.redirect(301, '/product/homeAdmin');
                }
            }
        };
        this.searchByName = async (req, res) => {
            let name = req.body;
            let products = await productService_1.default.searchByName(name.name);
            res.render('home', { products: products });
        };
        this.searchByPrice = async (req, res) => {
            const idProduct = req.params.id;
            let lowest = 0;
            let tallest = 0;
            if (idProduct === "1") {
                tallest = 10;
                let products = await productService_1.default.searchByPrice(lowest, tallest);
                res.render('home', { products: products });
            }
            if (idProduct === "2") {
                lowest = 10;
                tallest = 20;
                let products = await productService_1.default.searchByPrice(lowest, tallest);
                res.render('home', { products: products });
            }
            if (idProduct === "3") {
                lowest = 20;
                tallest = 30;
                let products = await productService_1.default.searchByPrice(lowest, tallest);
                res.render('home', { products: products });
            }
        };
        this.productService = productService_1.default;
        this.categoryService = categoryService_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map