import Product from "./Product";
export default class User {
    uuid: string;
    name: string;
    email: string;
    password: string;
    isAdm: boolean;
    products: Product[];
    hashPassword(): void;
    constructor(email: string, password: string, name: string, isAdm: boolean);
    outputUser(): {
        uuid: string;
        name: string;
        email: string;
        isAdm: boolean;
    };
}
