import { UserPassword } from './valueObjects/UserPassword';
import { UserId } from './valueObjects/UserId';
import { UserEmail } from './valueObjects/UserEmail';
import { EntityBase } from '../../Shared/domain/BaseEntity';
import { UserFirstname } from './valueObjects/UserFirstname';
import { UserLastname } from './valueObjects/UserLastname';

export class User extends EntityBase {
  email: UserEmail;
  password: UserPassword;
  firstname: UserFirstname;
  lastname: UserLastname;

  constructor(
    id: UserId,
    email: UserEmail,
    password: UserPassword,
    firstname: UserFirstname,
    lastname: UserLastname,
    createdBy: string
  ) {
    super(id, createdBy);
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
