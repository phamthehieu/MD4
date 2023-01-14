"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const productController_1 = __importDefault(require("../controller/productController"));
exports.productRouter = (0, express_1.Router)();
exports.productRouter.get("/home", productController_1.default.showHome);
exports.productRouter.get("/homeAdmin", productController_1.default.showHomeAdmin);
exports.productRouter.get("/createProduct", productController_1.default.showFormCreate);
exports.productRouter.post('/delete/:id', productController_1.default.deleteProducts);
exports.productRouter.get('/edit/:id', productController_1.default.showFormEdit);
exports.productRouter.post('/edit/:id', productController_1.default.editProduct);
exports.productRouter.post("/create", productController_1.default.createProducts);
//# sourceMappingURL=productRouter.js.map