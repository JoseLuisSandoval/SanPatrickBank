export class EmailAlreadyExistsError extends Error {
  constructor() {
    super('User with this Emain has already been regristred');
  }
}
