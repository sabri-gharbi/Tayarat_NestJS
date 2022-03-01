import { Module } from '@nestjs/common';
import { EnsembleService } from './ensemble.service';
import { EnsembleController } from './ensemble.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ensemble } from './entities/ensemble.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ensemble])],
  controllers: [EnsembleController],
  providers: [EnsembleService],
})
export class EnsembleModule {}
