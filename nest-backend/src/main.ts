import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.static(join(__dirname, '..', 'react-frontend/build')));
  await app.listen(3000);
}
bootstrap();
