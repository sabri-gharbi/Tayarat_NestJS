import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Nomenclature } from 'src/nomenclature/entities/nomenclature.entity';
import { NomenclatureType } from '../entities/nomenclature-type.entity';

export class CreateNomenclatureTypeDto {
  @IsNotEmpty()
  nomenclature: Nomenclature;
  @IsNotEmpty()
  @IsNumber()
  levelInStructure: number;
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  structureNumber: string;
  @IsOptional()
  @IsNotEmpty()
  higherNomenclature: NomenclatureType;
  @IsOptional()
  @IsNotEmpty()
  @IsBoolean()
  removal: boolean;
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
