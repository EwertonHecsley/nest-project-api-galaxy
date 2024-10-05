import { Injectable } from "@nestjs/common";
import { User } from "../../../domain/user/entity/user.entity";
import { UserRepository } from "../../../domain/user/repository/user.repository";
import { UserPrismaMapper } from "../prisma/mappers/user.prisma.mapper";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UserPrismaRepository implements UserRepository {

    constructor(private readonly prismaService: PrismaService) { }

    async create(user: User): Promise<User> {
        const data = UserPrismaMapper.toDatabase(user);

        const newUser = await this.prismaService.user.create({ data });

        return UserPrismaMapper.toDomain(newUser);
    }

    async findEmail(email: string): Promise<null | User> {
        const userFromDatabase = await this.prismaService.user.findFirst({ where: { email } });

        return userFromDatabase ? UserPrismaMapper.toDomain(userFromDatabase) : null;
    }
}