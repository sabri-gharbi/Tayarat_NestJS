import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEnsembleDto } from './dto/create-ensemble.dto';
import { UpdateEnsembleDto } from './dto/update-ensemble.dto';
import { Ensemble } from './entities/ensemble.entity';

@Injectable()
export class EnsembleService {
  constructor(
    @InjectRepository(Ensemble)
    private ensembleRepository: Repository<Ensemble>,
  ) {}

  async create(createEnsembleDto: CreateEnsembleDto) {
    const newItem = this.ensembleRepository.create(createEnsembleDto);
    await this.ensembleRepository.save(newItem);
    return this.findOne(newItem.id);
  }

  findAll() {
    return this.ensembleRepository.find({
      relations: ['partNumber', 'serialNumber'],
    });
  }

  async findOne(id: number) {
    const item = await this.ensembleRepository.findOne(id, {
      relations: ['partNumber', 'serialNumber'],
    });
    if (!item) {
      throw new HttpException('ensemble not found', HttpStatus.NOT_FOUND);
    }
    return item;
  }

  async update(id: number, updateEnsembleDto: UpdateEnsembleDto) {
    const updatedItem = await this.ensembleRepository.update(
      id,
      updateEnsembleDto,
    );
    if (!updatedItem.affected) {
      throw new HttpException(
        'internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return this.findOne(id);
  }

  async remove(id: number) {
    const deletedItem = await this.ensembleRepository.delete(id);
    if (!deletedItem.affected) {
      throw new HttpException(
        'internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return id;
  }
}
