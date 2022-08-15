import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1/');
  const config = await app.get(ConfigService);
  const port = config.get<number>('API_PORT');

  await app.listen(port || 3001, () => {
    console.log(`Server started on port ${port}`);
  });
}
bootstrap();
