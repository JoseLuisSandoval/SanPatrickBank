import { container } from '../../../../../src/apps/SPWeb/backend/IoC';
import { CreateUserHandler } from '../../../../../src/contexts/SPWeb/User/application/create/CreateUserHandler';
import { User } from '../../../../../src/contexts/SPWeb/User/domain/User';
import { UserEmail } from '../../../../../src/contexts/SPWeb/User/domain/valueObjects/UserEmail';
import { UserFirstname } from '../../../../../src/contexts/SPWeb/User/domain/valueObjects/UserFirstname';
import { UserId } from '../../../../../src/contexts/SPWeb/User/domain/valueObjects/UserId';
import { UserLastname } from '../../../../../src/contexts/SPWeb/User/domain/valueObjects/UserLastname';
import { UserPassword } from '../../../../../src/contexts/SPWeb/User/domain/valueObjects/UserPassword';
import { UserPhone } from '../../../../../src/contexts/SPWeb/User/domain/valueObjects/UserPhone';
import { IRequestHandler } from '../../../../../src/contexts/Shared/application/IRequestHandler';
import { ValidationError } from '../../../../../src/contexts/Shared/domain/ValidationError';
import { hashPassword } from '../../../../../src/contexts/Shared/infrastructure/hashPassword';
import { UserRepositoryMock } from '../mocks/UserRepositoryMock';
import { faker } from '@faker-js/faker';

let repository: UserRepositoryMock;
let command: IRequestHandler;

beforeEach(() => {
  repository = new UserRepositoryMock();
  //command = container.resolve<IRequestHandler>(CreateUserHandler);
  command = new CreateUserHandler(repository);
});

describe('UserCreator', () => {
  it('should create a valid account for user', async () => {
    const id = faker.string.uuid();
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const phone = faker.string.numeric('##########');
    const email = faker.internet.email();
    const password = await hashPassword(faker.internet.password());
    const createdBy = 'system';

    const expectedUser = new User(
      new UserId(id),
      new UserFirstname(firstname),
      new UserLastname(lastname),
      new UserPhone(phone),
      new UserEmail(email),
      new UserPassword(password),
      createdBy
    );
    await command.handle({ id, firstname, lastname, phone, email, password });

    repository.assertSaveHaveBeenCalledWith(expectedUser);
  });

  it('Should throw error if the phone user has invalid format', async () => {
    const id = faker.string.uuid();
    const firstname = faker.person.firstName();
    const lastname = faker.person.lastName();
    const phone = faker.string.numeric('##########');
    const email = faker.internet.email();
    const password = await hashPassword(faker.internet.password());
    const createdBy = 'system';

    expect(async () => {
      const expectedUser = new User(
        new UserId(id),
        new UserFirstname(firstname),
        new UserLastname(lastname),
        new UserPhone(phone),
        new UserEmail(email),
        new UserPassword(password),
        createdBy
      );
      await command.handle({ id, firstname, lastname, phone, email, password });

      repository.assertSaveHaveBeenCalledWith(expectedUser);
    }).toThrow(ValidationError);
  });
});
