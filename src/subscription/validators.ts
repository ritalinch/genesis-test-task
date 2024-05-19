import { EMAIL_REGEX, SUBSCRIBE_REQUEST_REQUIRED_HEADERS } from "./constants";
import { ResponseError } from "../common/exceptions";
import { SubscribeRequest } from "./types";

export const validateSubscribeRequest = (request: Request, requestBody: SubscribeRequest) => {
  if(typeof requestBody.email !== 'string' || requestBody.email.length === 0) {
    throw ResponseError.BadRequest('Email is required')
  }
  const emailRegexMatch = requestBody.email.match(EMAIL_REGEX)
  if(!emailRegexMatch) {
    throw ResponseError.BadRequest('Email is invalid')
  }
  Object.entries(SUBSCRIBE_REQUEST_REQUIRED_HEADERS).forEach(([key, value]) => {
    if(request.headers[key] !== value) throw ResponseError.BadRequest('Invalid Content type')
  })
}
