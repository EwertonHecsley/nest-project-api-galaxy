import { Either, left, right } from "src/domain/errors/either/either";
import { UserRepository } from "../repository/user.repository";
import { HashRepository } from "../service/hash.repository";
import { BadRequestException } from "@nestjs/common";
import { User } from "../entity/user.entity";
import { Email } from "src/domain/shared/value-object/email";

type Request = {
    name: string;
    password: string;
    email: string;
    category: string;
}

type Response = Either<null | BadRequestException, User>

export class CreateUserUseCase {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly hashRepository: HashRepository
    ) { }

    async execute({ name, email, password, category }: Request): Promise<Response> {
        const userExist = await this.userRepository.findEmail(email);

        if (userExist) {
            return left(new BadRequestException(`User ${name} already exists`));
        }

        const emailEntity = Email.crate(email);

        if (!emailEntity.validate()) {
            return left(new BadRequestException('Invalid email address'));
        }

        const passwordHashed = await this.hashRepository.hash(password);

        const user = User.create({
            name,
            email: emailEntity,
            password: passwordHashed,
            category
        });

        await this.userRepository.create(user);

        return right(user);
    }
}