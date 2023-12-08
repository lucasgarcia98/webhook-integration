import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const fs = require('fs');
require('dotenv').config();

const httpsOptions = {
  cert: fs.readFileSync('keys/cert-chain.pem'),
  key: fs.readFileSync('keys/key-private.pem'),
  // cert: fs.readFileSync('keys/cert.pem'),
  // key: fs.readFileSync('keys/privkey.pem'),
  ca: [
    fs.readFileSync('keys/cert1.pem'),
    fs.readFileSync('keys/cert2.pem'),
    fs.readFileSync('keys/cert3.pem'),
    fs.readFileSync('keys/cert4.pem'),
  ],
  requestCert: true,
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });

  await app.listen(process.env.NODE_PORT);
}
bootstrap();
