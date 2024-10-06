import { HashService } from "src/infra/crypto/hash.service";
import { UserRepository } from "../repository/user.repository";
import { TokenRepository } from "../service/token.repository";
import { Either, left, right } from "src/domain/errors/either/either";
import { BadRequestException, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { User } from "../entity/user.entity";

type Request = {
    email: string;
    password: string;
}

type Response = Either<BadRequestException | NotFoundException | UnauthorizedException, { token: string, user: User }>;

export class AuthUserUseCase {

    constructor(
        private readonly userRepository: UserRepository,
        private readonly hashService: HashService,
        private readonly tokenService: TokenRepository,
    ) { }

    async execute({ email, password }: Request): Promise<Response> {
        const user = await this.userRepository.findEmail(email);

        if (!user) {
            return left(new UnauthorizedException('Invalid email'));
        }

        const isPasswordValid = await this.hashService.compare(password, user.password);

        if (!isPasswordValid) {
            return left(new UnauthorizedException('Invalid password'));
        }

        const token = this.tokenService.generate({ userId: user.id.valueId, userEmail: user.email.value });

        return right({ token, user });
    }
}