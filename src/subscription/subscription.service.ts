import { Injectable } from '@nestjs/common';
import { SubscriptionRepository } from "./subscription.repository";
import { SubscriptionEntity } from "./subscription.entity";
import { QueryFailedError, Repository } from "typeorm";
import { ResponseError } from "../common/exceptions";

@Injectable()
export class SubscriptionService {
  private readonly subscriptionRepository: Repository<SubscriptionEntity>;
  constructor(subscriptionRepository: SubscriptionRepository) {
    this.subscriptionRepository = subscriptionRepository.repo
  }

  async handleSubscribeRequest(email: string): Promise<void> {
    try {
      await this.subscriptionRepository.save(SubscriptionEntity.create(email))
    } catch (error: unknown) {
      if(error instanceof QueryFailedError) {
        throw ResponseError.Conflict('Email already exist')
      }
      else throw ResponseError.InternalServerError()
    }
  }
}
