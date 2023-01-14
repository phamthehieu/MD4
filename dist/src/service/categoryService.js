"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = require("../model/category");
class CategoryService {
    constructor() {
        this.getAll = async () => {
            let categories = await category_1.Category.find();
            return categories;
        };
        this.findById = async (id) => {
            let category = await category_1.Category.findOne({ _id: id });
            return category;
        };
    }
}
exports.default = new CategoryService();
//# sourceMappingURL=categoryService.js.map