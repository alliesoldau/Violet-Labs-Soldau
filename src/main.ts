import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // enable CORS for the entire application so that my html front end can chat with my backend
  app.enableCors();
  await app.listen(3000);
}
bootstrap();


