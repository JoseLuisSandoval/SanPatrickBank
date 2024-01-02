import { StringValueObject } from "../../../../Shared/domain/StringValueObject";
import { ValidationError } from "../../../../Shared/domain/ValidationError";


export class UserPhone extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureIsValidPhone(value);
  }

  private ensureIsValidPhone(value: string) {
    if (!/^\d{10}$/.test(value)) {
      console.log(value)
      throw new ValidationError({"phone":"The phone should be valid."});
    }
  }
}