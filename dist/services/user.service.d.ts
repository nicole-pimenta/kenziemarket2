import { User } from "../entities";
interface UserBody {
    name: string;
    password: string;
    email: string;
    isAdm: boolean;
}
export declare const createUser: (body: UserBody) => Promise<User>;
export declare const listUser: (page?: number) => Promise<User[] | undefined>;
export declare const listByProfile: (userUuid: string, data: any) => Promise<User | undefined>;
export {};
