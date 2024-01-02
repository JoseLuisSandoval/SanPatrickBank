import { Router, Request, Response, NextFunction } from 'express';
import { container } from '../../IoC';
import { ValidateReqSchema } from '../../middlewares/validationErrorMiddleware';
import { IController } from '../../controllers/IController';
import { CreateUserController } from '../../controllers/user/CreateUserController';
import { CreateUserValidator } from '../../../../../contexts/SPWeb/User/application/create/CreateUserValidator';

export const register = (router: Router): void => {
  const controller: IController = container.resolve(CreateUserController);

  router.put('/users/:id', CreateUserValidator, ValidateReqSchema, (req: Request, res: Response, next: NextFunction) => {
    controller.run(req, res, next);
  });
};
