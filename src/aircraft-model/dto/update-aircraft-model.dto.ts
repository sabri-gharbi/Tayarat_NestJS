import { PartialType } from '@nestjs/mapped-types';
import { CreateAircraftModelDto } from './create-aircraft-model.dto';

export class UpdateAircraftModelDto extends PartialType(
  CreateAircraftModelDto,
) {}
