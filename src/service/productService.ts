import {products} from "../model/product";
class ProductService {
    constructor() {
    }
    findAll = async () => {
        let product = await products.find();
        return product;
    }
    createProduct = async (product) => {
        await products.create(product)
    }
    deleteProduct = async (idProduct) => {
        await products.deleteOne({_id: idProduct})
    }
    findProduct = async (id) => {
        let product = await products.findOne({_id: id})
        return product;
}
editProduct = async (id, newProduct) => {
    let product = await products.findOne({_id : id})
    if (!product) {
        return null
    }
    newProduct._id = id
    await products.updateOne({_id: id}, newProduct)
}
}
export default new ProductService();