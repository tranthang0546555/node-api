import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/users/users.module';
import { env } from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Node-api')
    .setDescription('The API description')
    .setVersion('1.0')
    .addServer('https://fictional-space-computing-machine-g649p5679gq2q7r-3000.app.github.dev/', 'Codespace')
    .addServer('http://localhost:3000/', 'Local environment')
    .addServer('https://production.yourapi.com/', 'Production')
    // .addTag('NestJS')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);


  await app.listen(process.env.PORT || 3000);
}
bootstrap();
