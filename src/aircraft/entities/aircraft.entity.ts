import { AircraftModel } from 'src/aircraft-model/entities/aircraft-model.entity';
import { Kardex } from 'src/kardex/entities/kardex.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'aircraft' })
export class Aircraft {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  registration: string;
  @Column({ nullable: true })
  ageingWindow: string;
  @Column({ nullable: true })
  lastTechLog: string;
  @Column({ nullable: true })
  officialRegistration: string;
  @Column({ nullable: true })
  msn: string;
  @Column({ nullable: true })
  active: boolean;
  @Column({ nullable: true })
  etops: boolean;
  @Column({ nullable: true })
  kardexFollowUp: boolean;
  @Column({ nullable: true })
  blocked: boolean;
  @Column({ nullable: true })
  interfaced: boolean;
  @Column({ nullable: true })
  date: Date;
  @Column({ nullable: true })
  introductionDate: Date;
  @Column({ nullable: true })
  acceptanceDate: Date;

  @ManyToOne(() => AircraftModel, (AircraftModel) => AircraftModel.aircrafts, {
    eager: true,
  })
  model: AircraftModel;

  @OneToMany(() => Kardex, (Kardex) => Kardex.aircraft)
  kardexes: Kardex[];
}
