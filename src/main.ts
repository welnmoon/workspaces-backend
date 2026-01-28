// import dotenv from 'dotenv';
// dotenv.config({ override: true });
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // const url = process.env.DATABASE_URL;
  // console.log(
  //   'BOOT DATABASE_URL:',
  //   typeof url,
  //   url ? url.slice(0, 40) + '...' : url,
  //   'cwd:',
  //   process.cwd(),
  // );

  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
