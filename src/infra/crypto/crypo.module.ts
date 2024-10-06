import { Module } from "@nestjs/common";
import { HashRepository } from "src/domain/user/service/hash.repository";
import { HashService } from "./hash.service";
import { TokenRepository } from "src/domain/user/service/token.repository";
import { JwtToken } from "./jwt.service";

@Module({
    providers: [
        {
            provide: HashRepository,
            useClass: HashService
        },
        {
            provide: TokenRepository, useClass: JwtToken
        }
    ],
    exports: [HashRepository, TokenRepository]
})
export class CryptoModule { }