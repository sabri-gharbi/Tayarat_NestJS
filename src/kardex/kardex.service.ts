import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKardexDto } from './dto/create-kardex.dto';
import { UpdateKardexDto } from './dto/update-kardex.dto';
import { Kardex } from './entities/kardex.entity';

@Injectable()
export class KardexService {
  constructor(
    @InjectRepository(Kardex)
    private kardexRepository: Repository<Kardex>,
  ) {}

  async create(createKardexDto: CreateKardexDto) {
    const newKardex = this.kardexRepository.create(createKardexDto);
    await this.kardexRepository.save(newKardex);
    return newKardex;
  }

  findAll() {
    return this.kardexRepository.find();
  }

  async findOne(id: number) {
    const kardex = await this.kardexRepository.findOne(id);
    if (!kardex) {
      throw new HttpException('kardex not found', HttpStatus.NOT_FOUND);
    }
    return kardex;
  }

  async update(id: number, updateKardexDto: UpdateKardexDto) {
    const updatekardex = await this.kardexRepository.update(
      id,
      updateKardexDto,
    );
    if (!updatekardex.affected) {
      throw new HttpException(
        'internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return this.findOne(id);
  }

  async remove(id: number) {
    const deletedDto = await this.kardexRepository.delete(id);
    if (!deletedDto.affected) {
      throw new HttpException(
        'internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return id;
  }
}
