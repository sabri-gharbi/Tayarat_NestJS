import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateManufacturerDto } from './dto/create-manufacturer.dto';
import { UpdateManufacturerDto } from './dto/update-manufacturer.dto';
import { Manufacturer } from './entities/manufacturer.entity';

@Injectable()
export class ManufacturerService {
  constructor(
    @InjectRepository(Manufacturer)
    private manufacturerRepository: Repository<Manufacturer>,
  ) {}

  //get all
  findAll() {
    return this.manufacturerRepository.find();
  }

  //get one
  async findOne(id: number) {
    const manufacturer = await this.manufacturerRepository.findOne(id);
    if (manufacturer) {
      return manufacturer;
    }
    throw new HttpException('manufacturer not found', HttpStatus.NOT_FOUND);
  }

  //create
  async create(createManufacturerDto: CreateManufacturerDto) {
    const newManufacturer = this.manufacturerRepository.create(
      createManufacturerDto,
    );
    await this.manufacturerRepository.save(newManufacturer);
    return newManufacturer;
  }

  //update
  async update(id: number, updateManufacturerDto: UpdateManufacturerDto) {
    const updateManufacturer = await this.manufacturerRepository.update(
      id,
      updateManufacturerDto,
    );
    if (!updateManufacturer.affected) {
      throw new HttpException('manufacturer not found', HttpStatus.NOT_FOUND);
    }
    return this.findOne(id);
  }

  //delete
  async remove(id: number) {
    const deletedDto = await this.manufacturerRepository.delete(id);
    if (!deletedDto.affected) {
      throw new HttpException('manufacturer not found', HttpStatus.NOT_FOUND);
    }
  }
}
