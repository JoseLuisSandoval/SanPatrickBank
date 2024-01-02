import { IRepository } from "../../../Shared/domain/IRepository";
import { User } from "./User";

export interface IUserRepository extends IRepository<User> {
    getByEmail (email: string) : Promise<User | undefined>;
}