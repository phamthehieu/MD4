import { Request, Response } from "express";
declare class ProductController {
    private productService;
    private categoryService;
    constructor();
    showHome: (req: Request, res: Response) => Promise<void>;
    showHomeAdmin: (req: Request, res: Response) => Promise<void>;
    showFormCreate: (req: Request, res: Response) => Promise<void>;
    createProducts: (req: Request, res: Response) => Promise<void>;
    deleteProducts: (req: Request, res: Response) => Promise<void>;
    showFormEdit: (req: Request, res: Response) => Promise<void>;
    editProduct: (req: Request, res: Response) => Promise<void>;
    searchByName: (req: Request, res: Response) => Promise<void>;
    searchByPrice: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
