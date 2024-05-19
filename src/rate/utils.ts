import { ENV_VARIABLE } from "../common/envvars";

export const getRateRequestHeaders = () => ({
  'X-RapidAPI-Key': ENV_VARIABLE.CURRENCY_API_KEY(),
  'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
});

export const getRateRequestParams = () => ({
  from: 'USD',
  to: 'UAH',
  amount: '1'
})
