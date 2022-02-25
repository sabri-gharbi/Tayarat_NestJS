import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNomenclatureTypeDto } from './dto/create-nomenclature-type.dto';
import { UpdateNomenclatureTypeDto } from './dto/update-nomenclature-type.dto';
import { NomenclatureType } from './entities/nomenclature-type.entity';

@Injectable()
export class NomenclatureTypeService {
  constructor(
    @InjectRepository(NomenclatureType)
    private nomeclatureTypeRepository: Repository<NomenclatureType>,
  ) {}

  async create(createNomenclatureTypeDto: CreateNomenclatureTypeDto) {
    const newNomenclature = this.nomeclatureTypeRepository.create(
      createNomenclatureTypeDto,
    );
    await this.nomeclatureTypeRepository.save(newNomenclature);
    return this.findOne(newNomenclature.id);
  }

  findAll() {
    return this.nomeclatureTypeRepository.find({
      relations: ['higherNomenclature', 'nomenclature'],
    });
  }

  async findOne(id: number) {
    const nomenclature = await this.nomeclatureTypeRepository.findOne(id, {
      relations: ['higherNomenclature', 'nomenclature'],
    });
    if (!nomenclature) {
      throw new HttpException('nomenclature not found', HttpStatus.NOT_FOUND);
    }
    return nomenclature;
  }

  async update(
    id: number,
    updateNomenclatureTypeDto: UpdateNomenclatureTypeDto,
  ) {
    const updateManufacturer = await this.nomeclatureTypeRepository.update(
      id,
      updateNomenclatureTypeDto,
    );
    if (!updateManufacturer.affected) {
      throw new HttpException(
        'internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return this.findOne(id);
  }

  async remove(id: number) {
    const deletedDto = await this.nomeclatureTypeRepository.delete(id);
    if (!deletedDto.affected) {
      throw new HttpException(
        'internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return id;
  }
}
