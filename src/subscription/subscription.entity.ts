import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { DAY_IN_SECONDS, now } from "../common/helpers";

@Entity()
export class SubscriptionEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  email: string

  @Column({ nullable: true })
  lastEmailSentTimestamp: number

  static create(email: string): SubscriptionEntity {
    const entity = new SubscriptionEntity()
    entity.email = email
    entity.lastEmailSentTimestamp = now() - DAY_IN_SECONDS
    return entity
  }
}
