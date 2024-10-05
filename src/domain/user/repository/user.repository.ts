import { User } from "../entity/user.entity";

export abstract class UserRepository {
    abstract create(user: User): Promise<User>;
    abstract findEmail(email: string): Promise<null | User>;
    abstract findById(id: string): Promise<User>;
    abstract list(): Promise<User[]>;
    abstract save(user: User): Promise<void>;
    abstract delete(id: string): Promise<void>;
}