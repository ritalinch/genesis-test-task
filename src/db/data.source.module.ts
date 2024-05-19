import { Global, Module } from "@nestjs/common";
import { AppDataSource } from "./data.source";
import { SubscriptionRepository } from "../subscription/subscription.repository";

@Global()
@Module({
  imports: [],
  providers: [AppDataSource],
})
export class DataSourceModule {}
