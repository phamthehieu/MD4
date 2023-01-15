import {Carts} from "../model/cart";

class CartService {
    constructor() {
    }
    addCart = async (idUser, status) => {
        await Carts.create({user: idUser,status: status})
    }
    findById = async (idUser) => {
        let idCart = await Carts.findOne({user: idUser})
        return idCart;
    }
    addTotal = async (idUser, totalCart) => {
        await Carts.updateOne({user: idUser}, {total: totalCart})
    }
    updateStatus = async (idCart, status) => {
        await Carts.updateOne({_id: idCart}, {status: status})
    }
    findByStatus = async () => {
        let cart = await Carts.find({status: "Paid"}).populate('user')
        return cart;
    }
}
export default new CartService();