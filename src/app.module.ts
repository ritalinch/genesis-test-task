import { Module } from '@nestjs/common';
import { RateModule } from "./rate/rate.module";
import { RateController } from "./rate/rate.controller";
import { RateService } from "./rate/rate.service";
import { SubscriptionModule } from "./subscription/subscription.module";
import { SubscriptionController } from "./subscription/subscription.controller";
import { SubscriptionService } from "./subscription/subscription.service";
import { MailModule } from "./mail/mail.module";
import { ScheduleModule } from "@nestjs/schedule";
import { ConfigModule } from "@nestjs/config";
import { SubscriptionRepository } from "./subscription/subscription.repository";
import { AppDataSource } from "./db/data.source";

@Module({
  imports: [RateModule, SubscriptionModule, MailModule, ScheduleModule.forRoot(), ConfigModule.forRoot()],
  controllers: [RateController, SubscriptionController],
  providers: [RateService, SubscriptionService, SubscriptionRepository, AppDataSource],
})
export class AppModule {
}
