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

    async findById(id: string): Promise<User> {
        const user = await this.prismaService.user.findFirst({ where: { id } });

        return user ? UserPrismaMapper.toDomain(user) : null;
    }

    async list(): Promise<User[]> {
        const users = await this.prismaService.user.findMany();

        return users.map(UserPrismaMapper.toDomain);

    }

    async save(user: User): Promise<void> {
        const data = UserPrismaMapper.toDatabase(user);

        await this.prismaService.user.update({ where: { id: data.id }, data });
    }

    async delete(id: string): Promise<void> {
        const data = await this.prismaService.user.findFirst({ where: { id } });

        if (!data) {
            return null;
        }

        await this.prismaService.user.delete({ where: { id: data.id } });
    }
}