import { Module } from "@nestjs/common";
import { HashRepository } from "src/domain/user/service/hash.repository";
import { HashService } from "./hash.service";

@Module({
    providers: [
        {
            provide: HashRepository,
            useClass: HashService
        }
    ],
    exports: [HashRepository]
})
export class CryptoModule { }