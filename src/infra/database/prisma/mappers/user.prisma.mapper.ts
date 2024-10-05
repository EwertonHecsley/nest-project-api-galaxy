import { User as UserDatabase } from "@prisma/client";
import Idendity from "src/core/generics/identity";
import { Email } from "src/domain/shared/value-object/email";
import { User } from "src/domain/user/entity/user.entity";

export class UserPrismaMapper {

    static toDomain(entity: UserDatabase): User {
        return User.create(
            {
                name: entity.name,
                email: Email.crate(entity.email),
                password: entity.password,
                category: entity.category
            },
            new Idendity(entity.id)
        )
    }

    static toDatabase(entity: User): UserDatabase {
        return {
            id: entity.id.valueId,
            name: entity.name,
            email: entity.email.value,
            password: entity.password,
            category: entity.category,
        }
    }
}