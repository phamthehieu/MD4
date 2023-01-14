"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const userController_1 = __importDefault(require("../controller/userController"));
const productRouter_1 = require("./productRouter");
const cartRouter_1 = require("./cartRouter");
exports.router = (0, express_1.Router)();
exports.router.get('/login', userController_1.default.showFormLogIn);
exports.router.post('/login', userController_1.default.login);
exports.router.post('/create', userController_1.default.create);
exports.router.get('/profile', userController_1.default.showFormUser);
exports.router.get('/logout', userController_1.default.logOut);
exports.router.use('/product', productRouter_1.productRouter);
exports.router.use('/cart', cartRouter_1.cartRouter);
//# sourceMappingURL=userRouter.js.map