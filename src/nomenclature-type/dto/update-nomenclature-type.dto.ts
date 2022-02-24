import { PartialType } from '@nestjs/mapped-types';
import { CreateNomenclatureTypeDto } from './create-nomenclature-type.dto';

export class UpdateNomenclatureTypeDto extends PartialType(
  CreateNomenclatureTypeDto,
) {}
