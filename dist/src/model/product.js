"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: String,
    amount: Number,
    price: Number,
    image: String,
    category: {
        type: String,
        ref: "Category"
    }
});
const products = (0, mongoose_1.model)('Product', productSchema);
exports.products = products;
//# sourceMappingURL=product.js.map