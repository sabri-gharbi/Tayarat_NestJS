import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Aircraft } from 'src/aircraft/entities/aircraft.entity';
import { Nomenclature } from 'src/nomenclature/entities/nomenclature.entity';
import { Piece } from 'src/piece/entities/piece.entity';

export class CreateKardexDto {
  @IsNotEmpty()
  partNumber: Nomenclature;
  @IsNotEmpty()
  serialNumber: Piece;
  @IsNotEmpty()
  aircraft: Aircraft;
  @IsOptional()
  @IsString()
  positionOnAircraft: string;
  @IsOptional()
  @IsString()
  kardexPositionDescription: string;
  @IsOptional()
  @IsString()
  fin: string;
  @IsOptional()
  @IsString()
  amm: string;
  @IsOptional()
  @IsString()
  aircraftZone: string;
  @IsOptional()
  @IsString()
  calendarFollowUpType: string;
  @IsOptional()
  @IsString()
  nonStandardAgeing1: string;
  @IsOptional()
  @IsString()
  tycod2: string;
  @IsOptional()
  @IsString()
  nonStandard3: string;
  @IsOptional()
  @IsString()
  codeJobPerformedDuringOverhaul: string;
  @IsOptional()
  @IsString()
  codeJobPerformedDuringInspection2: string;
  @IsOptional()
  @IsString()
  codeJobPerformedDuringI0nspection: string;
  @IsOptional()
  @IsString()
  checkCodeLifeLimit: string;
  @IsOptional()
  @IsString()
  checkCodeOverhaul: string;
  @IsOptional()
  @IsString()
  checkCodeInspection2: string;
  @IsOptional()
  @IsString()
  checkCodeInspection: string;
  @IsOptional()
  @IsString()
  kardexProtocolType: string;
  @IsOptional()
  @IsString()
  phasing: string;
  @IsOptional()
  @IsString()
  nextHigherAssembly: string;
  @IsOptional()
  @IsString()
  structureNumber: string;
  @IsOptional()
  @IsString()
  levelPositionAircraft: string;
  @IsOptional()
  @IsString()
  lowestLevelHierarchy: string;
  @IsOptional()
  @IsString()
  amendmentNumber: string;
  @IsOptional()
  @IsString()
  amendmentDate: string;
  @IsOptional()
  @IsString()
  versiNumber: string;
  @IsOptional()
  @IsString()
  versionDate: string;
  @IsOptional()
  @IsString()
  potentialOrigin: string;
  @IsOptional()
  @IsString()
  potentialOriginProgram: string;
  @IsOptional()
  @IsString()
  keyWords1: string;
  @IsOptional()
  @IsString()
  keyWords2: string;
  @IsOptional()
  @IsString()
  keyWords3: string;
  @IsOptional()
  @IsString()
  keyWords4: string;
  @IsOptional()
  @IsString()
  keyWords5: string;
  @IsOptional()
  @IsString()
  maintenanceLevelMandatory: string;
  @IsOptional()
  // @IsNumber()
  potentialLimit: number;
  @IsOptional()
  // @IsNumber()
  aircraftAgeingInHoursEquipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftAgeingInCyclesEquipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftNonStandardAgeing1Equipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftNonStandardAgeing2Equipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftNonStandardAgeing3Equipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftNonStandardAgeing4Equipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftNonStandardAgeing5Equipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftNonStandardAgeing6Equipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftNonStandardAgeing7Equipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftNonStandardAgeing8Equipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftNonStandardAgeing9Equipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftNonStandardAgeing10Equipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftNonStandardAgeing11Equipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftNonStandardAgeing12Equipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftNonStandardAgeing13Equipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftNonStandardAgeing14Equipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftNonStandardAgeing15Equipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftNonStandardAgeing16Equipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftNonStandardAgeing17Equipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftNonStandardAgeing18Equipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftNonStandardAgeing19Equipment: number;
  @IsOptional()
  // @IsNumber()
  aircraftNonStandardAgeing20Equipment: number;
  @IsOptional()
  // @IsNumber()
  hLifelimit: number;
  @IsOptional()
  // @IsNumber()
  hOverhaul: number;
  @IsOptional()
  // @IsNumber()
  hInspection2: number;
  @IsOptional()
  // @IsNumber()
  hInspection: number;
  @IsOptional()
  // @IsNumber()
  cLifelimit: number;
  @IsOptional()
  // @IsNumber()
  cOverhaul: number;
  @IsOptional()
  // @IsNumber()
  cInspection: number;
  @IsOptional()
  // @IsNumber()
  cInspection2: number;
  @IsOptional()
  // @IsNumber()
  lifelimit: number;
  @IsOptional()
  // @IsNumber()
  overhaul: number;
  @IsOptional()
  // @IsNumber()
  inspection: number;
  @IsOptional()
  // @IsNumber()
  inspection2: number;
  @IsOptional()
  // @IsNumber()
  nonStandard1LifeLimit: number;
  @IsOptional()
  // @IsNumber()
  nonStandard1Overhaul: number;
  @IsOptional()
  // @IsNumber()
  nonStandard1Inspection2: number;
  @IsOptional()
  // @IsNumber()
  nonStandard1Inspection: number;
  @IsOptional()
  // @IsNumber()
  nonStandard2LifeLimit: number;
  @IsOptional()
  // @IsNumber()
  nonStandard2Overhaul: number;
  @IsOptional()
  // @IsNumber()
  nonStandard2Inspection2: number;
  @IsOptional()
  // @IsNumber()
  nonStandard2Inspection: number;
  @IsOptional()
  // @IsNumber()
  nonStandard3LifeLimit: number;
  @IsOptional()
  // @IsNumber()
  nonStandard3Overhaul: number;
  @IsOptional()
  // @IsNumber()
  nonStandard3Inspection2: number;
  @IsOptional()
  // @IsNumber()
  nonStandard3Inspection: number;
  @IsOptional()
  @IsBoolean()
  followedInSection: boolean;
  @IsOptional()
  @IsBoolean()
  followedInLogBook: boolean;
  @IsOptional()
  @IsBoolean()
  etops: boolean;
  @IsOptional()
  @IsBoolean()
  optionalPosition: boolean;
  @IsOptional()
  @IsBoolean()
  overhaulThreshold: boolean;
  @IsOptional()
  @IsBoolean()
  inspectThreshold: boolean;
  @IsOptional()
  @IsBoolean()
  nextHigherAssembylCode: boolean;
  @IsOptional()
  @IsBoolean()
  controlledPotential: boolean;
  @IsOptional()
  @IsBoolean()
  deactivatedPosition: boolean;
}
