import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ExternalApiError } from "../common/exceptions";
import { ENV_VARIABLE } from "../common/envvars";
import { getRateRequestHeaders, getRateRequestParams } from "./utils";

type RateExternalResponse = {
  success: boolean,
  info: {
    rate: number
  }
}

@Injectable()
export class RateService {
  async getCurrentRate(): Promise<number> {
    const url = ENV_VARIABLE.CURRENCY_API_URL()
    const headers = getRateRequestHeaders()
    const params = getRateRequestParams()

    try {
      const response = await axios.get(url, {
        headers, params
      });
      const data = <RateExternalResponse> response.data
      return data.info.rate
    } catch (error: unknown) {
      throw new ExternalApiError('Request to currency converter failed', <Error> error)
    }
  }
}
