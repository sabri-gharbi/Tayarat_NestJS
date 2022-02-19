import { IsNotEmpty } from 'class-validator';
import { Manufacturer } from 'src/manufacturer/entities/manufacturer.entity';

export class CreateAircraftModelDto {
  @IsNotEmpty()
  aircraftTypeDesignation: string;
  type: string;
  model: string;
  variant: string;
  company: Manufacturer;
}
