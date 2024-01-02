import { v4 as uuidv4, validate } from 'uuid';
import { IUuid } from '../domain/IUuid';

export class Uuid extends String implements IUuid {
  readonly value: string;
  /**
   *
   */
  constructor(value: string) {
    super(value);
      this.value = value;
    
  }
  generate(): string {
    return uuidv4();
  }

  validate(uuid: string): boolean {
    return validate(uuid);
  }
}
