import { IUserRepository } from '../../../../../src/contexts/SPWeb/User/domain/IUserRepository';
import { User } from '../../../../../src/contexts/SPWeb/User/domain/User';

export class UserRepositoryMock implements IUserRepository {
  private createMock: jest.Mock;
  private getMock: jest.Mock;
  users: Array<User> = [];

  constructor() {
    this.createMock = jest.fn();
    this.getMock = jest.fn();
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
    await Promise.resolve();
    return this.createMock(user);
  }
  getAll!: () => Promise<User[]>;
  async getByEmail(email: string): Promise<User | undefined> {
   // return this.users?.find((user) => user.email.value === email);
   return this.getMock(email);
  }

  assertSaveHaveBeenCalledWith(expected: User): void {
    expect(this.createMock).toHaveBeenCalledWith(expected);
  }
}
