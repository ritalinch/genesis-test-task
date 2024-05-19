import { DataSource } from "typeorm";
import { SubscriptionEntity } from "../subscription/subscription.entity";
import { Injectable } from "@nestjs/common";
import { ENV_VARIABLE } from "../common/envvars";

@Injectable()
export class AppDataSource {
  readonly source: DataSource;
  constructor() {
    this.source = new DataSource({
      type: 'postgres',
      host: ENV_VARIABLE.DB_HOST(),
      port: ENV_VARIABLE.DB_PORT(),
      username: ENV_VARIABLE.DB_USERNAME(),
      password: ENV_VARIABLE.DB_PASSWORD(),
      database: ENV_VARIABLE.DB_DATABASE_NAME(),
      synchronize: true,
      logging: true,
      entities: [SubscriptionEntity],
      subscribers: [],
      migrations: [],
    })

    this.source.initialize()
      .then(() => {})
      .catch((error) => console.log(error))
  }
}
