import { StringValueObject } from '../../../../Shared/domain/StringValueObject';

export class UserLastname extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureIsValidLastname(value);
  }

  private ensureIsValidLastname(value: string) {
    if (!value || value.trim() === '') {
      throw new Error('The lastname cant be empty.');
    }

    if (!/^[A-Za-záéíóúüÜñÑ\s]+$/u.test(value)) {
      throw new Error('The lastname can only contain alphabetical characters, spaces, and accents.');
    }
  }
}
