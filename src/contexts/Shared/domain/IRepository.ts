import { EntityBase } from './BaseEntity';

export interface IRepository<T extends EntityBase> {
  create(entity: T): Promise<void>;
  update(entity: T): Promise<void>;
  delete(entity: T): Promise<void>;
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | null>;
}
