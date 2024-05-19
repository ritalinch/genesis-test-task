import { Module } from "@nestjs/common";
import { TaskService } from "./task.service";
import { MailService } from "./mail.service";
import { RateModule } from "../rate/rate.module";
import { RateService } from "../rate/rate.service";
import { DataSourceModule } from "../db/data.source.module";
import { SubscriptionRepository } from "../subscription/subscription.repository";
import { AppDataSource } from "../db/data.source";

@Module({
  imports: [RateModule, DataSourceModule],
  providers: [TaskService, MailService, RateService, SubscriptionRepository, AppDataSource],
})
export class MailModule {}
