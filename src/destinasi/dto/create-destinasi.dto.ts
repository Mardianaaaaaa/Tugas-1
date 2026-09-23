import { IsString, IsNumber, IsNotEmpty, Min } from 'class-validator';

export class CreateDestinasiDto {
  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsString()
  @IsNotEmpty()
  kategori: string;

  @IsNumber()
  @Min(0)
  hargaTiket: number;
}
