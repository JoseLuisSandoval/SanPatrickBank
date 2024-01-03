import { faker } from '@faker-js/faker';
import 'reflect-metadata';
import { IUserRepository } from '../../../../../src/contexts/SPWeb/User/domain/IUserRepository';
import { AppDataSource } from '../../../../../src/contexts/Shared/infrastructure/data/DataSource';
import { container } from '../../../../../src/apps/SPWeb/backend/IoC';
import { UserRepository } from '../../../../../src/contexts/SPWeb/User/infrastructure/UserRepository';
import { UserId } from '../../../../../src/contexts/SPWeb/User/domain/valueObjects/UserId';
import { UserFirstname } from '../../../../../src/contexts/SPWeb/User/domain/valueObjects/UserFirstname';
import { UserLastname } from '../../../../../src/contexts/SPWeb/User/domain/valueObjects/UserLastname';
import { UserPhone } from '../../../../../src/contexts/SPWeb/User/domain/valueObjects/UserPhone';
import { UserEmail } from '../../../../../src/contexts/SPWeb/User/domain/valueObjects/UserEmail';
import { UserPassword } from '../../../../../src/contexts/SPWeb/User/domain/valueObjects/UserPassword';
import { User } from '../../../../../src/contexts/SPWeb/User/domain/User';
import { UserRepositoryMock } from '../mocks/UserRepositoryMock';
import { hashPassword } from '../../../../../src/contexts/Shared/infrastructure/hashPassword';

describe('LocalUserRepository', () => {
  let repository: IUserRepository;

  beforeAll(async () => {
    await AppDataSource;
  });

  beforeEach(() => {
    //repository = container.resolve<IUserRepository>(UserRepository);
    repository = new UserRepositoryMock();
  });

  it('should create a new account for the user', async () => {
    const userId = new UserId(faker.string.uuid());
    const firstname = new UserFirstname(faker.person.firstName());
    const lastname = new UserLastname(faker.person.lastName());
    const phone = new UserPhone(faker.string.numeric('##########'));
    const email = new UserEmail(faker.internet.email());
    const password = new UserPassword(await hashPassword(faker.internet.password()));
    const createdBy = 'system';

    const expectedUser = new User(userId, firstname, lastname, phone, email, password, createdBy);

    repository.create(expectedUser);

    const user = await repository.getByEmail(email.value);
    expect(user).toEqual(expectedUser);
  });
});
