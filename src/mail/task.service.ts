import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { SubscriptionRepository } from "../subscription/subscription.repository";
import { MailService } from "./mail.service";
import { getTodayMidnight, now } from "../common/helpers";
import { Repository } from "typeorm";
import { SubscriptionEntity } from "../subscription/subscription.entity";

@Injectable()
export class TaskService {
  private readonly subscriptionRepository: Repository<SubscriptionEntity>;
  constructor(private readonly mailService: MailService, subscriptionRepository: SubscriptionRepository) {
    this.subscriptionRepository = subscriptionRepository.repo
  }

  @Cron('0 0 0 * * *')
  async scheduleMailSend() {
    const recipients = await this.subscriptionRepository.createQueryBuilder("sub")
      .select()
      .where("sub.lastEmailSentTimestamp < :subLastEmailSentTimestamp")
      .setParameters({ subLastEmailSentTimestamp: getTodayMidnight() })
      .getMany()

    recipients.forEach(it => {
      this.mailService.sendMail(it.email)
      it.lastEmailSentTimestamp = now()
    })

    await this.subscriptionRepository.save(recipients)
  }
}
