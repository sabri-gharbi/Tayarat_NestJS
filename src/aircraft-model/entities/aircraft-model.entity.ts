import { Aircraft } from 'src/aircraft/entities/aircraft.entity';
import { Manufacturer } from 'src/manufacturer/entities/manufacturer.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'aircraft_model' })
export class AircraftModel {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  aircraftTypeDesignation: string;
  @Column({ nullable: true })
  type: string;
  @Column({ nullable: true })
  model: string;
  @Column({ nullable: true })
  variant: string;

  @ManyToOne(() => Manufacturer, (manufacturer) => manufacturer.aircraftModels)
  company: Manufacturer;
  @OneToMany(() => Aircraft, (aircraft) => aircraft.model)
  aircrafts: Aircraft[];
}
