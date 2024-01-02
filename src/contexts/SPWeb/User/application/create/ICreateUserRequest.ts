import { IRequest } from '../../../../Shared/application/IRequest';

export interface ICreateUserRequest extends IRequest {
  id: string;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  passwordHash: string;
}
