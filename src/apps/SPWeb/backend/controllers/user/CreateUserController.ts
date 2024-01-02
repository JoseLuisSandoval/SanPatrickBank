import { Request, Response, NextFunction } from 'express';
import { IController } from '../IController';
import httpStatus from 'http-status';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { CreateUserHandler } from '../../../../../contexts/SPWeb/User/application/create/CreateUserHandler';

type CreatePutRequest = Request & {
  body: {
    id: string;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    passwordHash: string;
  };
};

@injectable()
export class CreateUserController implements IController {
  private createUserHandler: CreateUserHandler;
  constructor(@inject('CreateUserHandler') createUserHandler: CreateUserHandler) {
    this.createUserHandler = createUserHandler;
  }

  async run(req: CreatePutRequest, res: Response, next: NextFunction): Promise<void> {
    const { id, firstname, lastname, phone, email, passwordHash } = req.body;

    this.createUserHandler
      .handle({ id, firstname, lastname, phone, email, passwordHash })
      .then((result) => {
        res.status(httpStatus.CREATED).send(result);
      })
      .catch((error) => {
        next(error);
      });
  }
}
