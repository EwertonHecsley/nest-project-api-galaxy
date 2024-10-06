import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
import { PassportModule } from "@nestjs/passport";
import { APP_GUARD } from "@nestjs/core";
import { JwtAuthGuard } from "./jwt.auth.guard";

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '10m' }
        })
    ],
    providers: [
        JwtStrategy,
        { provide: APP_GUARD, useClass: JwtAuthGuard }
    ]
})
export class AuthModule { }