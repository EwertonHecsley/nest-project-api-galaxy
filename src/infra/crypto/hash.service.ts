import { Injectable } from "@nestjs/common";
import { HashRepository } from "src/domain/user/service/hash.repository";
import { hash, compare } from 'bcrypt';

@Injectable()
export class HashService implements HashRepository {

    async hash(key: string): Promise<string> {
        return await hash(key, 10);
    }

    async compare(key: string, value: string): Promise<boolean> {
        return compare(key, value);
    }
}