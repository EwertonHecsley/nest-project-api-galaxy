import { Either, left, right } from "src/domain/errors/either/either";
import { UserRepository } from "../repository/user.repository";
import { NotFoundException } from "@nestjs/common";

type Request = {
    id: string;
}

type Response = Either<null | NotFoundException, boolean>;

export class DeleteUserUseCase {

    constructor(private readonly userRepository: UserRepository) { }

    async execute({ id }: Request): Promise<Response> {
        const user = await this.userRepository.findById(id);

        if (!user) {
            return left(new NotFoundException(`User with id ${id} not found.`));
        }

        await this.userRepository.delete(id);

        return right(true);
    }

}