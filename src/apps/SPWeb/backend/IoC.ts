import { Container } from 'inversify';
import { IController } from './controllers/IController';
import CheckStatusController from './controllers/status/CheckStatusController';
import { IUserRepository } from '../../../contexts/SPWeb/User/domain/IUserRepository';
import { IRequestHandler } from '../../../contexts/Shared/application/IRequestHandler';
import { CreateUserController } from './controllers/user/CreateUserController';
import { CreateUserHandler } from '../../../contexts/SPWeb/User/application/create/CreateUserHandler';
import { UserRepository } from '../../../contexts/SPWeb/User/infrastructure/UserRepository';
import { EntityTarget } from 'typeorm';
import { User } from '../../../contexts/SPWeb/User/domain/User';
import { UserSchema } from '../../../contexts/SPWeb/User/infrastructure/UserSchema';

export const container = new Container();
container.bind<IController>('CheckStatusController').to(CheckStatusController);

container.bind<EntityTarget<User>>('UserSchema').toConstantValue(UserSchema);
container.bind<IUserRepository>('UserRepository').to(UserRepository);
container.bind<IRequestHandler>('CreateUserHandler').to(CreateUserHandler);
container.bind<IController>('CreateUserController').to(CreateUserController);
