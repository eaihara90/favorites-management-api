export class ErrorMessage extends Error {
  public status: number;
  constructor(message: string, status: number) {
    super();
    this.message = message;
    this.status = status;
  }
}