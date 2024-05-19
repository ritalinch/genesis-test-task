export class ExternalApiError extends Error {
  private originalError: Error

  constructor(message: string, error: Error) {
    super(message);
    this.originalError = error
  }
}

export class ResponseError extends Error {
  private constructor(message: string, private statusCode: number) {
    super(message);
  }

  static BadRequest(message: string = 'Bad request'): ResponseError {
    return new ResponseError(message, 400);
  }

  static InternalServerError(message: string = 'InternalServerError'): ResponseError {
    return new ResponseError(message, 500);
  }

  static Conflict(message: string = 'Conflict'): ResponseError {
    return new ResponseError(message, 409);
  }
}

