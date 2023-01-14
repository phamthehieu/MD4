import {model, Schema} from "mongoose";
import {ICategory} from "./category";

export interface IProduct {
    name: string;
    amount: number;
    price: number;
    image: string;
    category?: ICategory;
}
const productSchema = new Schema<IProduct>({
    name: String,
    amount:Number,
    price: Number,
    image: String,
    category: {
        type: String,
        ref: "Category"
    }
})

const products = model<IProduct>('Product', productSchema)
export {products}