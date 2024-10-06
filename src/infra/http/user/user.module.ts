import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/infra/database/database.module";
import { CreateUserController } from "./controller/create.controller";
import { CreateUserUseCase } from "src/domain/user/use-case/create.user";
import { UserRepository } from "src/domain/user/repository/user.repository";
import { HashRepository } from "src/domain/user/service/hash.repository";
import { CryptoModule } from "src/infra/crypto/crypo.module";
import { FindUserController } from "./controller/find.controller";
import { FindUserUseCase } from "src/domain/user/use-case/find.user";
import { ListUserController } from "./controller/list.controller";
import { ListUserUseCase } from "src/domain/user/use-case/list.users";
import { EditUserController } from "./controller/edit.controller";
import { EditUserUseCase } from "src/domain/user/use-case/edit.user";
import { DeleteUserController } from "./controller/delete.controller";
import { DeleteUserUseCase } from "src/domain/user/use-case/delete.user";
import { LoginController } from "./controller/login.controller";
import { AuthUserUseCase } from "src/domain/user/use-case/auth.user";
import { TokenRepository } from "src/domain/user/service/token.repository";

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
        },
        {
            provide: ListUserUseCase,
            useFactory: (userRepository: UserRepository) => {
                return new ListUserUseCase(userRepository);
            },
            inject: [UserRepository]
        },
        {
            provide: EditUserUseCase,
            useFactory: (userRepository: UserRepository, hashRepository: HashRepository) => {
                return new EditUserUseCase(userRepository, hashRepository);
            },
            inject: [UserRepository, HashRepository]
        },
        {
            provide: DeleteUserUseCase,
            useFactory: (userRepository: UserRepository) => {
                return new DeleteUserUseCase(userRepository);
            },
            inject: [UserRepository]
        },
        {
            provide: AuthUserUseCase,
            useFactory: (userRepository: UserRepository, hashService: HashRepository, tokenService: TokenRepository) => {
                return new AuthUserUseCase(userRepository, hashService, tokenService)
            },
            inject: [UserRepository, HashRepository, TokenRepository]
        }
    ],
    controllers: [CreateUserController, FindUserController, ListUserController, EditUserController, DeleteUserController, LoginController]
})
export class UserModule { }