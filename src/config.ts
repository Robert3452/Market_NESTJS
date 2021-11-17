import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  mysql: {
    dbName: process.env.MYSQL_DB,
    port: parseInt(process.env.MYSQL_PORT),
    password: process.env.MYSQL_PASSWORD,
    user: process.env.MYSQL_USER,
    host: process.env.MYSQL_HOST,
  },
  apiKey: process.env.API_KEY,
}));

export const enviroments = {
  dev: '.env',
  stag: '.stag.env',
  prod: '.prod.env',
};
