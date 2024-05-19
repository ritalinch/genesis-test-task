import { SubscriptionEntity } from "./subscription.entity";
import { AppDataSource } from "../db/data.source";
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";

@Injectable()
export class SubscriptionRepository {
  readonly repo: Repository<SubscriptionEntity>;
  constructor(dataSource: AppDataSource) {
    this.repo = dataSource.source.getRepository(SubscriptionEntity)
  }
}
