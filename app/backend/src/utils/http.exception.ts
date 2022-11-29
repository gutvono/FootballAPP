class Exception extends Error {
  public statusCode: number;
  public message: string;

  constructor(status: number, message: string) {
    super(message);
    this.statusCode = status;
    this.message = message;
  }
}

export default Exception;
