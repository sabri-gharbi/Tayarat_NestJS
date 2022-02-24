import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NomenclatureService } from './nomenclature.service';
import { CreateNomenclatureDto } from './dto/create-nomenclature.dto';
import { UpdateNomenclatureDto } from './dto/update-nomenclature.dto';

@Controller('nomenclature')
export class NomenclatureController {
  constructor(private readonly nomenclatureService: NomenclatureService) {}

  @Post()
  create(@Body() createNomenclatureDto: CreateNomenclatureDto) {
    return this.nomenclatureService.create(createNomenclatureDto);
  }

  @Get()
  findAll() {
    return this.nomenclatureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nomenclatureService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNomenclatureDto: UpdateNomenclatureDto,
  ) {
    return this.nomenclatureService.update(+id, updateNomenclatureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nomenclatureService.remove(+id);
  }

  @Get('/pn/:pn')
  checkPn(@Param('pn') pn: string) {
    return this.nomenclatureService.checkPn(pn);
  }
}
