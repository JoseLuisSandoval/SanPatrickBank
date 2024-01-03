import { inject, injectable } from 'inversify';
import { IUserRepository } from '../../domain/IUserRepository';
import { User } from '../../domain/User';
import 'reflect-metadata';
import { ICreateUserRequest } from './ICreateUserRequest';
import { ResponseBase } from '../../../../Shared/application/ResponseBase';
import { IRequestHandler } from '../../../../Shared/application/IRequestHandler';
import { EmailAlreadyExistsError } from '../../domain/errors/EmailAlreadyExistError';
import { UserFirstname } from '../../domain/valueObjects/UserFirstname';
import { UserLastname } from '../../domain/valueObjects/UserLastname';
import { UserPhone } from '../../domain/valueObjects/UserPhone';
import { UserId } from '../../domain/valueObjects/UserId';
import { UserPassword } from '../../domain/valueObjects/UserPassword';
import { hashPassword } from '../../../../Shared/infrastructure/hashPassword';
import { UserEmail } from '../../domain/valueObjects/UserEmail';

@injectable()
export class CreateUserHandler implements IRequestHandler {
  private readonly userRepository: IUserRepository;

  constructor(@inject('UserRepository') userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async handle(request: ICreateUserRequest): Promise<ResponseBase<void>> {
    const existUser = await this.userRepository.getByEmail(request.email);

    if (existUser !== undefined) {
      throw new EmailAlreadyExistsError();
    }
    const user = new User(
      new UserId(request.id),
      new UserFirstname(request.firstname),
      new UserLastname(request.lastname),
      new UserPhone(request.phone),
      new UserEmail(request.email),
      new UserPassword(await hashPassword(request.passwordHash)),

      'system'
    );
    await this.userRepository.create(user);
    const response = new ResponseBase<void>(true);
    return response;
  }
}
