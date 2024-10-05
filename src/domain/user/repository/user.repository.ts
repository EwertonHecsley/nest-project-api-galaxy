import { User } from "../entity/user.entity";

export abstract class UserRepository {
    abstract create(user: User): Promise<User>;
    abstract findEmail(email: string): Promise<null | User>;
}