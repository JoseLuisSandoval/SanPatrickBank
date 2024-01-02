import crypto from 'crypto';
import { UserPassword } from './valueObjects/UserPassword';
import { UserId } from './valueObjects/UserId';
import { UserEmail } from './valueObjects/UserEmail';
import { EntityBase } from '../../../Shared/domain/BaseEntity';
import { UserFirstname } from './valueObjects/UserFirstname';
import { UserLastname } from './valueObjects/UserLastname';
import { UserPhone } from './valueObjects/UserPhone';

export class User extends EntityBase {
  firstname: UserFirstname;
  lastname: UserLastname;
  phone: UserPhone;
  email: UserEmail;
  passwordHash: UserPassword;

  phoneConfirmed: boolean;
  emailConfirmed: boolean;
  emailConfirmedToken: string;
  securityStamp: string;
  concurrencyStamp: string;
  lockoutEnd?: string;
  lockoutEnabled: boolean;
  accesFailedCount: number;

  constructor(
    id: UserId,
    firstname: UserFirstname,
    lastname: UserLastname,
    phone: UserPhone,
    email: UserEmail,
    passwordHash: UserPassword,

    createdBy: string
  ) {
    super(id, createdBy);
    this.firstname = firstname;
    this.lastname = lastname;
    this.phone = phone;
    this.email = email;
    this.passwordHash = passwordHash;
    this.phoneConfirmed = false;
    this.emailConfirmed = false;
    this.emailConfirmedToken = this.generateEmailConfirmedToken();
    this.securityStamp = this.generateSecurityToken();
    this.concurrencyStamp = this.generateSecurityToken();
    this.lockoutEnabled = false;
    this.accesFailedCount = 0;
  }

  generateEmailConfirmedToken(): string {
    return crypto.randomUUID();
  }

  generateSecurityToken(): string {
    return crypto.randomBytes(32).toString('hex');
  }
}
