import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAircraftDto } from './dto/create-aircraft.dto';
import { UpdateAircraftDto } from './dto/update-aircraft.dto';
import { Aircraft } from './entities/aircraft.entity';

@Injectable()
export class AircraftService {
  constructor(
    @InjectRepository(Aircraft)
    private aircraftRepository: Repository<Aircraft>,
  ) {}

  async create(createAircraftDto: CreateAircraftDto) {
    const newAircraft = this.aircraftRepository.create(createAircraftDto);
    await this.aircraftRepository.save(newAircraft);
    return newAircraft;
  }

  findAll() {
    return this.aircraftRepository.find({ loadEagerRelations: true });
  }

  async findOne(id: number) {
    const aircraft = await this.aircraftRepository.findOne(id);
    if (!aircraft) {
      throw new HttpException('aircraft not found', HttpStatus.NOT_FOUND);
    }
    return aircraft;
  }

  async update(id: number, updateAircraftDto: UpdateAircraftDto) {
    const updateDto = await this.aircraftRepository.update(
      id,
      updateAircraftDto,
    );
    if (!updateDto.affected) {
      throw new HttpException(
        'Internal server erro',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return this.findOne(id);
  }

  async remove(id: number) {
    const deleteDto = await this.aircraftRepository.delete(id);
    if (!deleteDto.affected) {
      throw new HttpException(
        'Internal server erro',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return id;
  }
}
