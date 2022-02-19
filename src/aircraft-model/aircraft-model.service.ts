import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAircraftModelDto } from './dto/create-aircraft-model.dto';
import { UpdateAircraftModelDto } from './dto/update-aircraft-model.dto';
import { AircraftModel } from './entities/aircraft-model.entity';

@Injectable()
export class AircraftModelService {
  constructor(
    @InjectRepository(AircraftModel)
    private aircraftModelRepository: Repository<AircraftModel>,
  ) {}

  // create
  async create(createAircraftModelDto: CreateAircraftModelDto) {
    const newAircraftModel = this.aircraftModelRepository.create(
      createAircraftModelDto,
    );
    await this.aircraftModelRepository.save(newAircraftModel);
    return newAircraftModel;
  }

  // get all
  findAll() {
    return this.aircraftModelRepository.find();
  }

  // get one
  findOne(id: number) {
    const aircraftModel = this.aircraftModelRepository.findOne(id);
    if (!aircraftModel) {
      throw new HttpException('aircraftModel not found', HttpStatus.NOT_FOUND);
    }
    return aircraftModel;
  }

  // update
  async update(id: number, updateAircraftModelDto: UpdateAircraftModelDto) {
    const updateAircraftModel = await this.aircraftModelRepository.update(
      id,
      updateAircraftModelDto,
    );
    if (!updateAircraftModel.affected) {
      throw new HttpException(
        'Internal server erro',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return this.findOne(id);
  }

  // delete
  async remove(id: number) {
    const deletedDto = await this.aircraftModelRepository.delete(id);
    if (!deletedDto.affected) {
      throw new HttpException(
        'Internal server erro',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return id;
  }
}
