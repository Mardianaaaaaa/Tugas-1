import { Module } from '@nestjs/common';
import { DestinasiController } from './destinasi.controller.js';

@Module({
  controllers: [DestinasiController]
})
export class DestinasiModule {}
