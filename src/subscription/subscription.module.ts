import { Module } from '@nestjs/common';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';
import { DataSourceModule } from "../db/data.source.module";
import { SubscriptionRepository } from "./subscription.repository";
import { AppDataSource } from "../db/data.source";

@Module({
  imports: [DataSourceModule],
  controllers: [SubscriptionController],
  providers: [SubscriptionService, SubscriptionRepository, AppDataSource],
})
export class SubscriptionModule {}
