import { Repository } from "typeorm";
import { User } from "../entities";
declare class userRepository extends Repository<User> {
    findPaginated(page?: number): Promise<User[] | undefined>;
    findByEmail(email: string): Promise<User | undefined>;
}
export default userRepository;
