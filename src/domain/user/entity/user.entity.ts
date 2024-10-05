import Entity from "src/core/generics/entity";
import Idendity from "src/core/generics/identity";
import { Email } from "src/domain/shared/value-object/email";

type UserType = {
    name: string;
    email: Email;
    password: string;
    category: string;
}

export class User extends Entity<UserType> {

    static create(data: UserType, id?: Idendity) {
        return new User(data, id)
    }

    get name(): string {
        return this.attributes.name;
    }

    get email(): Email {
        return this.attributes.email;
    }

    get password(): string {
        return this.attributes.password;
    }

    get category(): string {
        return this.attributes.category;
    }

    set name(name: string) {
        this.attributes.name = name;
    }

    set email(email: Email) {
        this.attributes.email = email;
    }

    set password(password: string) {
        this.attributes.password = password;
    }

    set category(category: string) {
        this.attributes.category = category;
    }
}