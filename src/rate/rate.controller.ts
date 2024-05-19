import { Controller, Get } from '@nestjs/common';
import { RateService } from './rate.service';

@Controller('api')
export class RateController {
  constructor(private readonly rateService: RateService) {}

  @Get('rate')
  async getHello(): Promise<number> {
    return await this.rateService.getCurrentRate();
  }
}
