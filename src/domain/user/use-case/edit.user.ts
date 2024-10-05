import { Either, left, right } from "src/domain/errors/either/either";
import { UserRepository } from "../repository/user.repository";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { Email } from "src/domain/shared/value-object/email";
import { HashRepository } from "../service/hash.repository";

type Request = {
    id: string;
    name?: string;
    email?: string;
    password?: string;
    category?: string;
}

type Response = Either<NotFoundException | BadRequestException, boolean>;

export class EditUserUseCase {

    constructor(private readonly userRepository: UserRepository, private readonly hashRepository: HashRepository) { }

    async execute(data: Request): Promise<Response> {
        const user = await this.userRepository.findById(data.id);

        if (!user) {
            return left(new NotFoundException('User nor found'))
        }

        if (data.email) {
            const emailExist = await this.userRepository.findEmail(data.email);

            if (emailExist) {
                return left(new BadRequestException('Email already exists'))
            }

            const emailEdited = Email.crate(data.email);

            if (!emailEdited.validate()) {
                return left(new BadRequestException('Email is not valid'))
            }

            user.email = emailEdited;
        }

        if (data.name) user.name = data.name;

        if (data.password) {
            const hashPassword = await this.hashRepository.hash(data.password);

            user.password = hashPassword;
        }

        if (data.category) user.category = data.category;

        await this.userRepository.save(user);

        return right(true);
    }
}