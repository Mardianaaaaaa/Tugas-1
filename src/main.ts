import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'node:fs'; // 1. Perbaikan: Import modul fs
import { AppModule, ObserveInstrument } from './app.module.js';

async function bootstrap() {
  // 1. Inisialisasi aplikasi NestJS
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  // 2. Konfigurasi ValidationPipe Global
  app.useGlobalPipes(
    new ValidationPipe({ 
      whitelist: true,
      transform: true 
    })
  );

  // 3. Konfigurasi Swagger (Dokumentasi API)
  const config = new DocumentBuilder()
    .setTitle('WisataKu API')
    .setDescription('API untuk platform informasi dan reservasi destinasi wisata')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // Simpan file openapi.json
  fs.writeFileSync('./openapi.json', JSON.stringify(document, null, 2));

  // 4. Menjalankan server (Cukup panggil sekali saja)
  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  
  console.log(`Server is running on: http://localhost:${port}`);
  console.log(`Swagger docs available at: http://localhost:${port}/api/docs`);
}

bootstrap();