import { IsNotEmpty } from 'class-validator';
import { Nomenclature } from 'src/nomenclature/entities/nomenclature.entity';
import { Piece } from 'src/piece/entities/piece.entity';

export class CreateEnsembleDto {
  @IsNotEmpty()
  partNumber: Nomenclature;
  @IsNotEmpty()
  serialNumber: Piece;
  @IsNotEmpty()
  positionDescription: string;
  @IsNotEmpty()
  fileName: string;
  @IsNotEmpty()
  sousEnsemble: Array<{ partNumber: string; serialNumber: string }>;
}
