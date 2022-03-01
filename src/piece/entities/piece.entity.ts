import { Ensemble } from 'src/ensemble/entities/ensemble.entity';
import { Kardex } from 'src/kardex/entities/kardex.entity';
import { Nomenclature } from 'src/nomenclature/entities/nomenclature.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'piece' })
export class Piece {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  serialNumber: string;
  @Column({ nullable: true })
  partSituationCode: string;
  @Column({ nullable: true })
  typeLocation: string;
  @Column({ nullable: true })
  companyLocation: string;
  @Column({ nullable: true })
  storeLocation: string;
  @Column({ nullable: true })
  aircraft: string;
  @Column({ nullable: true })
  aircraftPosition: string;
  @Column({ nullable: true })
  partOwnerCode: string;
  @Column({ nullable: true })
  levelStructure: string;
  @Column({ nullable: true })
  nonStandardAgeingCode: string;
  @Column({ nullable: true })
  nonStandardAgeingCode2: string;
  @Column({ nullable: true })
  nonStandardAgeingCode3: string;
  @Column({ nullable: true })
  partUnitPrice: number;
  @Column({ nullable: true })
  ageingStatedInFlightHours: number;
  @Column({ nullable: true })
  ageingSinceNew: number;
  @Column({ nullable: true })
  ageingSinceOverhaul: number;
  @Column({ nullable: true })
  ageingSinceInspection: number;
  @Column({ nullable: true })
  ageingSinceInspection2: number;
  @Column({ nullable: true })
  ageingStatedInCycles: number;
  @Column({ nullable: true })
  cyclesAgeingSinceNew: number;
  @Column({ nullable: true })
  cyclesAgeingSinceOverhaul: number;
  @Column({ nullable: true })
  cyclesAgeingSinceInspection: number;
  @Column({ nullable: true })
  cyclesAgeingSinceInspection2: number;
  @Column({ nullable: true })
  daysAgeingSinceNew: number;
  @Column({ nullable: true })
  daysAgeingSinceOverhaul: number;
  @Column({ nullable: true })
  daysAgeingSinceInspection: number;
  @Column({ nullable: true })
  daysAgeingSinceInspection2: number;
  @Column({ nullable: true })
  ageingCAgeingSinceNew: number;
  @Column({ nullable: true })
  ageingCAgeingSinceOverhaul: number;
  @Column({ nullable: true })
  ageingCAgeingSinceInspection: number;
  @Column({ nullable: true })
  ageingCAgeingSinceInspection2: number;
  @Column({ nullable: true })
  nonStandardAcAgeingSinceNew: number;
  @Column({ nullable: true })
  nonStandardAcAgeingSinceOverhaul: number;
  @Column({ nullable: true })
  nonStandardAcAgeingSinceInspection: number;
  @Column({ nullable: true })
  nonStandardAcAgeingSinceInspection2: number;
  @Column({ nullable: true })
  nonStandardAc2AgeingSinceNew: number;
  @Column({ nullable: true })
  nonStandardAc2AgeingSinceOverhaul: number;
  @Column({ nullable: true })
  nonStandardAc2AgeingSinceInspection: number;
  @Column({ nullable: true })
  nonStandardAc2AgeingSinceInspection2: number;
  @Column({ nullable: true })
  nonStandardAc3AgeingSinceNew: number;
  @Column({ nullable: true })
  nonStandardAc3AgeingSinceOverhaul: number;
  @Column({ nullable: true })
  equipmentStructure: boolean;
  @Column({ nullable: true })
  reliabilityFollowUp: boolean;
  @Column({ nullable: true })
  dateOfLateMovement: Date;

  @ManyToOne(() => Nomenclature, (nomenclature) => nomenclature.pieces, {
    eager: true,
  })
  partNumber: Nomenclature;

  @OneToMany(() => Ensemble, (ensemble) => ensemble.serialNumber)
  ensembles: Ensemble[];

  @OneToMany(() => Kardex, (kardex) => kardex.serialNumber)
  kardexes: Kardex[];
}
