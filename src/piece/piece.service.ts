import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePieceDto } from './dto/create-piece.dto';
import { UpdatePieceDto } from './dto/update-piece.dto';
import { Piece } from './entities/piece.entity';

@Injectable()
export class PieceService {
  constructor(
    @InjectRepository(Piece)
    private pieceRepository: Repository<Piece>,
  ) {}

  async create(createPieceDto: CreatePieceDto) {
    const item = this.pieceRepository.create(createPieceDto);
    await this.pieceRepository.save(item);
    return this.findOne(item.id);
  }

  findAll() {
    return this.pieceRepository.find();
  }

  async findOne(id: number) {
    const item = await this.pieceRepository.findOne(id);
    if (!item) {
      throw new HttpException('Piece not found', HttpStatus.NOT_FOUND);
    }
    return item;
  }

  async update(id: number, updatePieceDto: UpdatePieceDto) {
    const updatedItem = this.pieceRepository.update(id, updatePieceDto);
    if (!(await updatedItem).affected) {
      throw new HttpException(
        'internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return this.findOne(id);
  }

  async remove(id: number) {
    const deletedDto = await this.pieceRepository.delete(id);
    if (!deletedDto.affected) {
      throw new HttpException(
        'internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return id;
  }
}
