import { Injectable } from "@nestjs/common";
import { CURRENCY_MAIL_SUBJECT, MAIL_CONFIG } from "./constants";
import { ENV_VARIABLE } from "../common/envvars";
import { RateService } from "../rate/rate.service";
import { ExternalApiError } from "../common/exceptions";
import nodemailer = require("nodemailer");

@Injectable()
export class MailService {
  constructor(private readonly rateService: RateService) {
  }

  async sendMail(recipient: string) {
    const transporter = nodemailer.createTransport({
      ...MAIL_CONFIG,
      auth: {
        user: ENV_VARIABLE.SENDER_EMAIL(),
        pass: ENV_VARIABLE.SENDER_PASSWORD()
      }
    });

    const mailOptions = {
      from: ENV_VARIABLE.SENDER_EMAIL(),
      to: recipient,
      subject: CURRENCY_MAIL_SUBJECT,
      text: `Current USD -> UAH rate is ${await this.rateService.getCurrentRate()}`
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) throw new ExternalApiError('Error while sending email', error)
    });
  }
}
