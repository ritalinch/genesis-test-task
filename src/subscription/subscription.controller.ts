import { Body, Controller, HttpCode, Post, Req } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscribeRequest } from "./types";
import { validateSubscribeRequest } from "./validators";

@Controller('api')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Post('subscribe')
  @HttpCode(200)
  async handleSubscribe(@Body() body: SubscribeRequest, @Req() requestObject: Request): Promise<void> {
    validateSubscribeRequest(requestObject, body)
    return await this.subscriptionService.handleSubscribeRequest(body.email);
  }
}
