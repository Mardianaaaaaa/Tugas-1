import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateDestinasiDto } from './dto/create-destinasi.dto.js';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto.js';


@ApiTags('Destinasi') 
@Controller('destinasi')
export class DestinasiController {
  @Get()
  @ApiOperation({ summary: 'Menampilkan daftar destinasi wisata' })
  @ApiResponse({ status: 200, description: 'Daftar destinasi berhasil diambil' })
  findAll() {
    return [
      {
        id:1,
        nama: 'Pantai Kuta',
        kategori: 'Pantai',
        hargaTiket: 50000
      },
      {
        id:2,
        nama: 'Gunung Bromo',
        kategori: "Gunung",
        hargaTiket: 75000
      }
    ]
  }

  // Endpoint tambahan untuk Langkah 4
  @Get(':id')
  @ApiOperation({ summary: 'Menampilkan detail satu destinasi' })
  @ApiResponse({ status: 200, description: 'Detail destinasi berhasil diambil' })
  findOne(@Param('id') id: string) {
    return {
      id:Number(id),
      nama: 'Pantai Kuta',
      kategori: 'Pantai',
      hargaTiket: 5000,
    };
  }


  @Post()
  @ApiOperation({ summary: 'Menambahkan destinasi baru (khusus admin)' })
  @ApiResponse({ status: 201, description: 'Destinasi berhasil dibuat' })
  @ApiResponse({ status: 400, description: 'Data tidak valid' })
  create(@Body() dto: CreateDestinasiDto) {
    return dto;
  }

  // Endpoint tambahan untuk Langkah 4
  @Patch(':id')
  @ApiOperation({ summary: 'Mengubah sebagian data destinasi (khusus admin)' })
  @ApiResponse({ status: 200, description: 'Destinasi berhasil diubah' })
  update(@Param('id') id: string, @Body() dto: UpdateDestinasiDto) {
    return { message: `Destinasi dengan id ${id} berhasil diubah`,
    id: Number(id),
    data: dto };
  }

  // Endpoint tambahan untuk Langkah 4
  @Delete(':id')
  @ApiOperation({ summary: 'Menghapus destinasi (khusus admin)' })
  @ApiResponse({ status: 200, description: 'Destinasi berhasil dihapus' })
  remove(@Param('id') id: string) {
    return `Destinasi dengan id ${id} berhasil dihapus`;
  }
}