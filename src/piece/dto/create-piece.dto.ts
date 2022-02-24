import { IsNotEmpty } from 'class-validator';
import { Nomenclature } from 'src/nomenclature/entities/nomenclature.entity';

export class CreatePieceDto {
  @IsNotEmpty()
  partNumber: Nomenclature;
  @IsNotEmpty()
  serialNumber: string;
  partSituationCode: string;
  typeLocation: string;
  companyLocation: string;
  storeLocation: string;
  aircraft: string;
  aircraftPosition: string;
  partOwnerCode: string;
  levelStructure: string;
  nonStandardAgeingCode: string;
  nonStandardAgeingCode2: string;
  nonStandardAgeingCode3: string;
  partUnitPrice: number;
  ageingStatedInFlightHours: number;
  ageingSinceNew: number;
  ageingSinceOverhaul: number;
  ageingSinceInspection: number;
  ageingSinceInspection2: number;
  ageingStatedInCycles: number;
  cyclesAgeingSinceNew: number;
  cyclesAgeingSinceOverhaul: number;
  cyclesAgeingSinceInspection: number;
  cyclesAgeingSinceInspection2: number;
  daysAgeingSinceNew: number;
  daysAgeingSinceOverhaul: number;
  daysAgeingSinceInspection: number;
  daysAgeingSinceInspection2: number;
  ageingCAgeingSinceNew: number;
  ageingCAgeingSinceOverhaul: number;
  ageingCAgeingSinceInspection: number;
  ageingCAgeingSinceInspection2: number;
  nonStandardAcAgeingSinceNew: number;
  nonStandardAcAgeingSinceOverhaul: number;
  nonStandardAcAgeingSinceInspection: number;
  nonStandardAcAgeingSinceInspection2: number;
  nonStandardAc2AgeingSinceNew: number;
  nonStandardAc2AgeingSinceOverhaul: number;
  nonStandardAc2AgeingSinceInspection: number;
  nonStandardAc2AgeingSinceInspection2: number;
  nonStandardAc3AgeingSinceNew: number;
  nonStandardAc3AgeingSinceOverhaul: number;
  equipmentStructure: boolean;
  reliabilityFollowUp: boolean;
  dateOfLateMovement: Date;
}
