import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ManufacturerModule } from './manufacturer/manufacturer.module';
import { AircraftModelModule } from './aircraft-model/aircraft-model.module';
import { AircraftModule } from './aircraft/aircraft.module';
import { NomenclatureModule } from './nomenclature/nomenclature.module';
import { NomenclatureTypeModule } from './nomenclature-type/nomenclature-type.module';
import { PieceModule } from './piece/piece.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ManufacturerModule,
    AircraftModelModule,
    AircraftModule,
    NomenclatureModule,
    NomenclatureTypeModule,
    PieceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
