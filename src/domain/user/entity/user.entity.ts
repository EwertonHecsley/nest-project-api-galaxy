import Entity from "src/core/generics/entity";

type UserType = {
    name: string;
    email: string;
    password: string;
    category: string;
}

export class User extends Entity<UserType> { }