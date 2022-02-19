import { Module } from '@nestjs/common';
import { NomenclatureService } from './nomenclature.service';
import { NomenclatureController } from './nomenclature.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nomenclature } from './entities/nomenclature.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Nomenclature])],
  controllers: [NomenclatureController],
  providers: [NomenclatureService],
})
export class NomenclatureModule {}
