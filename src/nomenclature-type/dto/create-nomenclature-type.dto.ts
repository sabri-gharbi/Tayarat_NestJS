import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Nomenclature } from 'src/nomenclature/entities/nomenclature.entity';
import { NomenclatureType } from '../entities/nomenclature-type.entity';

export class CreateNomenclatureTypeDto {
  @IsNotEmpty()
  structureNumber: string;
  @IsNotEmpty()
  nomenclature: Nomenclature;
  @IsOptional()
  @IsNotEmpty()
  higherNomenclature: NomenclatureType;
  @IsOptional()
  @IsNumber()
  quantity: number;
}
