import User from "./User";
export default class Product {
    id: string;
    name: string;
    price: number;
    createdAt: Date;
    createdBy: User;
    constructor(name: string, price: number);
}
