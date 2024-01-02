import { EntityTarget, FindOneOptions } from 'typeorm';
import { User } from '../domain/User';
import { IUserRepository } from '../domain/IUserRepository';
import { inject, injectable, unmanaged } from 'inversify';
import 'reflect-metadata';
import { TypeOrmRepository } from '../../../Shared/infrastructure/data/TypeOrmRepository';
import { UserEmail } from '../domain/valueObjects/UserEmail';

type FindUserOptions = FindOneOptions<User> & {
	where?: {
		email: UserEmail;
	};
};

@injectable()
export class UserRepository extends TypeOrmRepository<User> implements IUserRepository {
	protected entity: EntityTarget<User>;

	constructor(@inject('UserSchema') entity: EntityTarget<User>) {
		super(entity);
		this.entity = entity;
	}

	async getByEmail(email: string): Promise<User | undefined> {
		const repository = await this._repository;
		const result = await repository.findOne({
			where: {
				email: new UserEmail(email),
			},
		} as FindUserOptions);
		if (result === null) {
			return undefined;
		}
		return result;
	}
}