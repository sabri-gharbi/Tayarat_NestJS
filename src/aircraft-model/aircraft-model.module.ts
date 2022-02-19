import { Module } from '@nestjs/common';
import { AircraftModelService } from './aircraft-model.service';
import { AircraftModelController } from './aircraft-model.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AircraftModel } from './entities/aircraft-model.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AircraftModel])],
  controllers: [AircraftModelController],
  providers: [AircraftModelService],
})
export class AircraftModelModule {}
