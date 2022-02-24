import { Module } from '@nestjs/common';
import { NomenclatureTypeService } from './nomenclature-type.service';
import { NomenclatureTypeController } from './nomenclature-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NomenclatureType } from './entities/nomenclature-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NomenclatureType])],
  controllers: [NomenclatureTypeController],
  providers: [NomenclatureTypeService],
})
export class NomenclatureTypeModule {}
