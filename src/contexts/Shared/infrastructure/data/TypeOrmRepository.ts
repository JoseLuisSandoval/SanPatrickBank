
import { Repository, EntityTarget, FindOneOptions } from 'typeorm';
import { injectable } from 'inversify';
import 'reflect-metadata';
import { EntityBase } from '../../domain/BaseEntity';
import { IRepository } from '../../domain/IRepository';
import { AppDataSource } from './DataSource';

@injectable()
export abstract class TypeOrmRepository<T extends EntityBase> implements IRepository<T> {
	protected _repository: Repository<T>;

	constructor( entity: EntityTarget<T>) {
		this._repository = AppDataSource.getRepository<T>(entity);
	}
	async create(entity: T): Promise<void> {
		await this._repository.save(entity);
	}

	async update(entity: T): Promise<void> {
		await this._repository.save(entity);
	}

	async delete(entity: T): Promise<void> {
		await this._repository.remove(entity);
	}

	async getAll(): Promise<T[]> {
		return await this._repository.find();
	}

	async getById(id: string): Promise<T | null> {
		const entity = await this._repository.findOne({ id } as FindOneOptions<T>);
		return entity || null;
	}
}