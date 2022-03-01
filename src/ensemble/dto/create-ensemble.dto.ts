import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Nomenclature } from 'src/nomenclature/entities/nomenclature.entity';
import { Piece } from 'src/piece/entities/piece.entity';
import { Ensemble } from '../entities/ensemble.entity';

export class CreateEnsembleDto {
  @IsNotEmpty()
  partNumber: Nomenclature;
  @IsNotEmpty()
  serialNumber: Piece;
  @IsNotEmpty()
  positionDescription: string;
  // @IsOptional()
  // @IsNotEmpty()
  // higherEnsemble: Ensemble;
  // @IsNotEmpty()
  // @IsNumber()
  // level: number;
}
