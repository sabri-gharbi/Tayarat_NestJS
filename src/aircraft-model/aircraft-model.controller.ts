import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AircraftModelService } from './aircraft-model.service';
import { CreateAircraftModelDto } from './dto/create-aircraft-model.dto';
import { UpdateAircraftModelDto } from './dto/update-aircraft-model.dto';

@Controller('aircraft-model')
export class AircraftModelController {
  constructor(private readonly aircraftModelService: AircraftModelService) {}

  @Post()
  create(@Body() createAircraftModelDto: CreateAircraftModelDto) {
    return this.aircraftModelService.create(createAircraftModelDto);
  }

  @Get()
  findAll() {
    return this.aircraftModelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aircraftModelService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAircraftModelDto: UpdateAircraftModelDto,
  ) {
    return this.aircraftModelService.update(+id, updateAircraftModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aircraftModelService.remove(+id);
  }
}
