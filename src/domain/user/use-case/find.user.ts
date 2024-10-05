import { NotFoundException } from "@nestjs/common";
import { UserRepository } from "../repository/user.repository";
import { User } from "../entity/user.entity";
import { Either, left, right } from "src/domain/errors/either/either";

type Request = {
    id: string;
}

type Response = Either<NotFoundException, User>;

export class FindUserUseCase {

    constructor(private readonly userRepository: UserRepository) { }

    async execute({ id }: Request): Promise<Response> {
        const user = await this.userRepository.findById(id);

        if (!user) return left(new NotFoundException(`User with id ${id} not found.`));

        return right(user);
    }
}