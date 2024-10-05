import { User } from "src/domain/user/entity/user.entity";

export class UserPresenter {

    static toHTTP(user: User) {
        return {
            id: user.id.valueId,
            name: user.name,
            email: user.email.value,
            category: user.category,
        }
    }
}