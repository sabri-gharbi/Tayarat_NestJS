import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NomenclatureTypeService } from './nomenclature-type.service';
import { CreateNomenclatureTypeDto } from './dto/create-nomenclature-type.dto';
import { UpdateNomenclatureTypeDto } from './dto/update-nomenclature-type.dto';

@Controller('nomenclature-type')
export class NomenclatureTypeController {
  constructor(
    private readonly nomenclatureTypeService: NomenclatureTypeService,
  ) {}

  @Post()
  create(@Body() createNomenclatureTypeDto: CreateNomenclatureTypeDto) {
    return this.nomenclatureTypeService.create(createNomenclatureTypeDto);
  }

  @Get()
  findAll() {
    return this.nomenclatureTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nomenclatureTypeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNomenclatureTypeDto: UpdateNomenclatureTypeDto,
  ) {
    return this.nomenclatureTypeService.update(+id, updateNomenclatureTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nomenclatureTypeService.remove(+id);
  }
}
