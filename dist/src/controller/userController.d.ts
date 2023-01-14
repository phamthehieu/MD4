import { Request, Response } from "express";
declare class UserController {
    private userService;
    private cartService;
    constructor();
    showFormLogIn: (req: Request, res: Response) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    showFormUser: (req: Request, res: Response) => Promise<void>;
    logOut: (req: Request, res: Response) => Promise<void>;
}
declare const _default: UserController;
export default _default;
