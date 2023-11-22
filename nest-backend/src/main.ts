import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000' // Le port de votre application React en développement
  });

  // Servir les fichiers statiques de React build
  await app.listen(3001); // Le port sur lequel votre API NestJS sera accessible
}

bootstrap();

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3001);
// }
// bootstrap();