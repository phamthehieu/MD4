/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
declare class CartDetailService {
    constructor();
    addCartDetail: (idProduct: any, idCart: any, amount: any, total: any) => Promise<void>;
    finById: (idCart: any) => Promise<Omit<import("mongoose").Document<unknown, any, import("../model/cartDetail").ICartDetail> & import("../model/cartDetail").ICartDetail & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    updateQuantity: (idCartDetail: any, quantity: any) => Promise<void>;
    fillProduct: (idProduct: any) => Promise<import("mongoose").Document<unknown, any, import("../model/cartDetail").ICartDetail> & import("../model/cartDetail").ICartDetail & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateTotal: (idProduct: any, total: any) => Promise<void>;
    fillTotal: (idCart: any) => Promise<any[]>;
    deleteCartDetail: (idCart: any) => Promise<void>;
}
declare const _default: CartDetailService;
export default _default;
