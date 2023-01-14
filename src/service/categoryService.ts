import {Category} from "../model/category";
class CategoryService {
    constructor() {
    }
    getAll = async () => {
        let categories = await Category.find();
        return categories;
    }
    findById = async (id) => {
        let category = await Category.findOne({_id: id})
        return category;
}
}
export default new CategoryService();