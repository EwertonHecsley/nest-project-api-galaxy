import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { TokenRepository } from "src/domain/user/service/token.repository";

@Injectable()
export class JwtToken implements TokenRepository {

    constructor(private readonly jwtService: JwtService) { }

    generate(value: Record<string, unknown>): string {
        return this.jwtService.sign(value);
    }
}