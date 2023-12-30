import { StringValueObject } from '../../../Shared/domain/StringValueObject';

export class UserFirstname extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureIsValidFirstname(value);
  }

  private ensureIsValidFirstname(value: string) {
    if (!value || value.trim() === '') {
      throw new Error('The name cant be empty.');
    }

    if (!/^[A-Za-záéíóúüÜñÑ\s]+$/u.test(value)) {
      throw new Error('The name can only contain alphabetical characters, spaces, and accents.');
    }
  }
}
