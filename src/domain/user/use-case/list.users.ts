import { Either, right } from "src/domain/errors/either/either";
import { UserRepository } from "../repository/user.repository";
import { User } from "../entity/user.entity";

type Response = Either<null, User[]>

export class ListUserUseCase {

    constructor(private readonly userRepository: UserRepository) { }

    async execute(): Promise<Response> {
        const listUsers = await this.userRepository.list();

        if (!listUsers) {
            return null;
        }

        return right(listUsers);
    }
}