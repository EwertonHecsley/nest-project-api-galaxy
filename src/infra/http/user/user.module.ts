import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infra/database/database.module";
import { CreateUserController } from "./controller/create.controller";
import { CreateUserUseCase } from "src/domain/user/use-case/create.user";
import { UserRepository } from "src/domain/user/repository/user.repository";
import { HashRepository } from "src/domain/user/service/hash.repository";
import { CryptoModule } from "src/infra/crypto/crypo.module";
import { FindUserController } from "./controller/find.controller";
import { FindUserUseCase } from "src/domain/user/use-case/find.user";

@Module({
    imports: [DatabaseModule, CryptoModule],
    providers: [
        {
            provide: CreateUserUseCase,
            useFactory: (userRepository: UserRepository, hashRepository: HashRepository) => {
                return new CreateUserUseCase(userRepository, hashRepository);
            },
            inject: [UserRepository, HashRepository]
        },
        {
            provide: FindUserUseCase,
            useFactory: (userRepository: UserRepository) => {
                return new FindUserUseCase(userRepository);
            },
            inject: [UserRepository]
        }
    ],
    controllers: [CreateUserController, FindUserController]
})
export class UserModule { }