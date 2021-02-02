import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


import * as serveStatic from 'serve-static';
import { NestExpressApplication } from '@nestjs/platform-express';
const path = require('path');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  app.enableCors();

  console.log('path: ', __dirname);
  app.use(
    '/public',
    serveStatic(path.join(__dirname, '../public'), {
      maxAge: '1d',
      extensions: ['jpg', 'jpeg', 'png', 'gif'],
    }),
  );

  // app.useStaticAssets(path.join(__dirname, '../public/'))

  await app.listen(3000);
  // app.useStaticAssets('/public');
}
bootstrap();
