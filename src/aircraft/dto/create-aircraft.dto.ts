import { IsNotEmpty } from 'class-validator';
import { AircraftModel } from 'src/aircraft-model/entities/aircraft-model.entity';

export class CreateAircraftDto {
  model: AircraftModel;
  @IsNotEmpty()
  registration: string;
  ageingWindow: string;
  lastTechLog: string;
  officialRegistration: string;
  msn: string;
  active: boolean;
  etops: boolean;
  kardexFollowUp: boolean;
  blocked: boolean;
  interfaced: boolean;
  date: Date;
  introductionDate: Date;
  acceptanceDate: Date;
}
