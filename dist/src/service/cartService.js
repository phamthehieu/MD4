"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cart_1 = require("../model/cart");
class CartService {
    constructor() {
        this.addCart = async (idUser, status) => {
            await cart_1.Carts.create({ user: idUser, status: status });
        };
        this.findById = async (idUser) => {
            let idCart = await cart_1.Carts.findOne({ user: idUser });
            return idCart;
        };
        this.addTotal = async (idUser, totalCart) => {
            await cart_1.Carts.updateOne({ user: idUser }, { total: totalCart });
        };
        this.updateStatus = async (idCart, status) => {
            await cart_1.Carts.updateOne({ _id: idCart }, { status: status });
        };
        this.findByStatus = async () => {
            let cart = await cart_1.Carts.find({ status: "Paid" }).populate('user');
            return cart;
        };
    }
}
exports.default = new CartService();
//# sourceMappingURL=cartService.js.map