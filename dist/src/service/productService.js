"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../model/product");
class ProductService {
    constructor() {
        this.findAll = async () => {
            let product = await product_1.products.find();
            return product;
        };
        this.createProduct = async (product) => {
            await product_1.products.create(product);
        };
        this.deleteProduct = async (idProduct) => {
            await product_1.products.deleteOne({ _id: idProduct });
        };
        this.findProduct = async (id) => {
            let product = await product_1.products.findOne({ _id: id });
            return product;
        };
        this.editProduct = async (id, newProduct) => {
            let product = await product_1.products.findOne({ _id: id });
            if (!product) {
                return null;
            }
            newProduct._id = id;
            await product_1.products.updateOne({ _id: id }, newProduct);
        };
        this.searchByName = async (name) => {
            let product = await product_1.products.find({ "name": { "$regex": name } });
            return product;
        };
        this.searchByPrice = async (lowest, tallest) => {
            let product = await product_1.products.find({ price: { $gte: lowest, $lte: tallest } });
            return product;
        };
    }
}
exports.default = new ProductService();
//# sourceMappingURL=productService.js.map