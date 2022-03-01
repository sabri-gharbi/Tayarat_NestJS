import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNomenclatureDto } from './dto/create-nomenclature.dto';
import { UpdateNomenclatureDto } from './dto/update-nomenclature.dto';
import { Nomenclature } from './entities/nomenclature.entity';

@Injectable()
export class NomenclatureService {
  constructor(
    @InjectRepository(Nomenclature)
    private nomeclatureRepository: Repository<Nomenclature>,
  ) {}

  async create(createNomenclatureDto: CreateNomenclatureDto) {
    const newNomenclature = this.nomeclatureRepository.create(
      createNomenclatureDto,
    );
    await this.nomeclatureRepository.save(newNomenclature);
    return newNomenclature;
  }

  findAll() {
    return this.nomeclatureRepository.find();
  }

  async findOne(id: number) {
    const nomenclature = await this.nomeclatureRepository.findOne(id);
    if (!nomenclature) {
      throw new HttpException('nomenclature not found', HttpStatus.NOT_FOUND);
    }
    return nomenclature;
  }

  async update(id: number, updateNomenclatureDto: UpdateNomenclatureDto) {
    const updateNomenclature = await this.nomeclatureRepository.update(
      id,
      updateNomenclatureDto,
    );
    if (!updateNomenclature.affected) {
      throw new HttpException(
        'internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return this.findOne(id);
  }

  async remove(id: number) {
    const deletedDto = await this.nomeclatureRepository.delete(id);
    if (!deletedDto.affected) {
      throw new HttpException(
        'internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return id;
  }

  async checkPn(pn: string) {
    const nomenclature = await this.nomeclatureRepository.findOne({ pn });
    if (
      nomenclature &&
      nomenclature.nlaCode === true &&
      (nomenclature.equipmentType === '5' || nomenclature.equipmentType === '6')
    ) {
      return nomenclature.id;
    }
    return 0;
  }
}
