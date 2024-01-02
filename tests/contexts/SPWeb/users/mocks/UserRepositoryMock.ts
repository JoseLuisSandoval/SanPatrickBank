import { IUserRepository } from '../../../../../src/contexts/SPWeb/User/domain/IUserRepository';
import { User } from '../../../../../src/contexts/SPWeb/User/domain/User';

export class UserRepositoryMock implements IUserRepository {
  private createMock: jest.Mock;

  constructor() {
    this.createMock = jest.fn();
  }
  update(entity: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(entity: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
  async create(user: User): Promise<void> {
    
  }
  getAll!: () => Promise<User[]>;
  getByEmail! :(rfc: string) => Promise<User | undefined>;

  assertSaveHaveBeenCalledWith(expected: User) : void {
    expect(this.createMock).toHaveBeenCalledWith(expected);
  }
}
