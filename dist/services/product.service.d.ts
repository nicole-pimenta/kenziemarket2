import { Product } from "../entities";
interface UserBody {
    name: string;
    price: number;
}
export declare const createProduct: (body: UserBody) => Promise<Product>;
export declare const listProduct: (page?: number) => Promise<import("typeorm").Repository<Product>>;
export declare const listByProfile: (userUuid: string, data: any) => Promise<Product | undefined>;
export {};
