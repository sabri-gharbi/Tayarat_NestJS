import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(process.env.API_PREFIX);
  await app.listen(parseInt(process.env.PORT, 10) || 3000);
}
bootstrap();
