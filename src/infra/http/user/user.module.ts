import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infra/database/database.module";
import { CreateUserController } from "./controller/create.controller";
import { CreateUserUseCase } from "src/domain/user/use-case/create.user";
import { UserRepository } from "src/domain/user/repository/user.repository";
import { HashRepository } from "src/domain/user/service/hash.repository";
import { CryptoModule } from "src/infra/crypto/crypo.module";

@Module({
    imports: [DatabaseModule, CryptoModule],
    providers: [
        {
            provide: CreateUserUseCase,
            useFactory: (userRepository: UserRepository, hashRepository: HashRepository) => {
                return new CreateUserUseCase(userRepository, hashRepository);
            },
            inject: [UserRepository, HashRepository]
        }
    ],
    controllers: [CreateUserController]
})
export class UserModule { }