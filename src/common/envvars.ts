import * as process from "process";

export const ENV_VARIABLE = {
  SENDER_EMAIL: () => process.env.SENDER_EMAIL,
  SENDER_PASSWORD: () => process.env.SENDER_PASSWORD,
  DB_USERNAME: () => process.env.DB_USERNAME,
  DB_PASSWORD: () => process.env.DB_PASSWORD,
  DB_DATABASE_NAME: () => process.env.DB_DATABASE_NAME,
  DB_PORT: () => Number(process.env.DB_PORT),
  DB_HOST: () => process.env.DB_HOST,
  CURRENCY_API_KEY: () => process.env.CURRENCY_API_KEY,
  CURRENCY_API_URL: () => process.env.CURRENCY_API_URL,
}
