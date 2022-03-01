import { Aircraft } from 'src/aircraft/entities/aircraft.entity';
import { Nomenclature } from 'src/nomenclature/entities/nomenclature.entity';
import { Piece } from 'src/piece/entities/piece.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'kardex' })
export class Kardex {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Nomenclature, (nomenclature) => nomenclature.kardexes)
  partNumber: Nomenclature;
  @ManyToOne(() => Piece, (piece) => piece.kardexes)
  serialNumber: Piece;
  @ManyToOne(() => Aircraft, (aircraft) => aircraft.kardexes, { eager: true })
  aircraft: Aircraft;

  @Column({ nullable: true })
  positionOnAircraft: string;
  @Column({ nullable: true })
  kardexPositionDescription: string;
  @Column({ nullable: true })
  fin: string;
  @Column({ nullable: true })
  amm: string;
  @Column({ nullable: true })
  aircraftZone: string;
  @Column({ nullable: true })
  calendarFollowUpType: string;
  @Column({ nullable: true })
  nonStandardAgeing1: string;
  @Column({ nullable: true })
  tycod2: string;
  @Column({ nullable: true })
  nonStandard3: string;
  @Column({ nullable: true })
  codeJobPerformedDuringOverhaul: string;
  @Column({ nullable: true })
  codeJobPerformedDuringInspection2: string;
  @Column({ nullable: true })
  codeJobPerformedDuringI0nspection: string;
  @Column({ nullable: true })
  checkCodeLifeLimit: string;
  @Column({ nullable: true })
  checkCodeOverhaul: string;
  @Column({ nullable: true })
  checkCodeInspection2: string;
  @Column({ nullable: true })
  checkCodeInspection: string;
  @Column({ nullable: true })
  kardexProtocolType: string;
  @Column({ nullable: true })
  phasing: string;
  @Column({ nullable: true })
  nextHigherAssembly: string;
  @Column({ nullable: true })
  structureNumber: string;
  @Column({ nullable: true })
  levelPositionAircraft: string;
  @Column({ nullable: true })
  lowestLevelHierarchy: string;
  @Column({ nullable: true })
  amendmentNumber: string;
  @Column({ nullable: true })
  amendmentDate: string;
  @Column({ nullable: true })
  versiNumber: string;
  @Column({ nullable: true })
  versionDate: string;
  @Column({ nullable: true })
  potentialOrigin: string;
  @Column({ nullable: true })
  potentialOriginProgram: string;
  @Column({ nullable: true })
  keyWords1: string;
  @Column({ nullable: true })
  keyWords2: string;
  @Column({ nullable: true })
  keyWords3: string;
  @Column({ nullable: true })
  keyWords4: string;
  @Column({ nullable: true })
  keyWords5: string;
  @Column({ nullable: true })
  maintenanceLevelMandatory: string;
  @Column({ nullable: true })
  potentialLimit: number;
  @Column({ nullable: true })
  aircraftAgeingInHoursEquipment: number;
  @Column({ nullable: true })
  aircraftAgeingInCyclesEquipment: number;
  @Column({ nullable: true })
  aircraftNonStandardAgeing1Equipment: number;
  @Column({ nullable: true })
  aircraftNonStandardAgeing2Equipment: number;
  @Column({ nullable: true })
  aircraftNonStandardAgeing3Equipment: number;
  @Column({ nullable: true })
  aircraftNonStandardAgeing4Equipment: number;
  @Column({ nullable: true })
  aircraftNonStandardAgeing5Equipment: number;
  @Column({ nullable: true })
  aircraftNonStandardAgeing6Equipment: number;
  @Column({ nullable: true })
  aircraftNonStandardAgeing7Equipment: number;
  @Column({ nullable: true })
  aircraftNonStandardAgeing8Equipment: number;
  @Column({ nullable: true })
  aircraftNonStandardAgeing9Equipment: number;
  @Column({ nullable: true })
  aircraftNonStandardAgeing10Equipment: number;
  @Column({ nullable: true })
  aircraftNonStandardAgeing11Equipment: number;
  @Column({ nullable: true })
  aircraftNonStandardAgeing12Equipment: number;
  @Column({ nullable: true })
  aircraftNonStandardAgeing13Equipment: number;
  @Column({ nullable: true })
  aircraftNonStandardAgeing14Equipment: number;
  @Column({ nullable: true })
  aircraftNonStandardAgeing15Equipment: number;
  @Column({ nullable: true })
  aircraftNonStandardAgeing16Equipment: number;
  @Column({ nullable: true })
  aircraftNonStandardAgeing17Equipment: number;
  @Column({ nullable: true })
  aircraftNonStandardAgeing18Equipment: number;
  @Column({ nullable: true })
  aircraftNonStandardAgeing19Equipment: number;
  @Column({ nullable: true })
  aircraftNonStandardAgeing20Equipment: number;
  @Column({ nullable: true })
  hLifelimit: number;
  @Column({ nullable: true })
  hOverhaul: number;
  @Column({ nullable: true })
  hInspection2: number;
  @Column({ nullable: true })
  hInspection: number;
  @Column({ nullable: true })
  cLifelimit: number;
  @Column({ nullable: true })
  cOverhaul: number;
  @Column({ nullable: true })
  cInspection: number;
  @Column({ nullable: true })
  cInspection2: number;
  @Column({ nullable: true })
  lifelimit: number;
  @Column({ nullable: true })
  overhaul: number;
  @Column({ nullable: true })
  inspection: number;
  @Column({ nullable: true })
  inspection2: number;
  @Column({ nullable: true })
  nonStandard1LifeLimit: number;
  @Column({ nullable: true })
  nonStandard1Overhaul: number;
  @Column({ nullable: true })
  nonStandard1Inspection2: number;
  @Column({ nullable: true })
  nonStandard1Inspection: number;
  @Column({ nullable: true })
  nonStandard2LifeLimit: number;
  @Column({ nullable: true })
  nonStandard2Overhaul: number;
  @Column({ nullable: true })
  nonStandard2Inspection2: number;
  @Column({ nullable: true })
  nonStandard2Inspection: number;
  @Column({ nullable: true })
  nonStandard3LifeLimit: number;
  @Column({ nullable: true })
  nonStandard3Overhaul: number;
  @Column({ nullable: true })
  nonStandard3Inspection2: number;
  @Column({ nullable: true })
  nonStandard3Inspection: number;
  @Column({ nullable: true })
  followedInSection: boolean;
  @Column({ nullable: true })
  followedInLogBook: boolean;
  @Column({ nullable: true })
  etops: boolean;
  @Column({ nullable: true })
  optionalPosition: boolean;
  @Column({ nullable: true })
  overhaulThreshold: boolean;
  @Column({ nullable: true })
  inspectThreshold: boolean;
  @Column({ nullable: true })
  nextHigherAssembylCode: boolean;
  @Column({ nullable: true })
  controlledPotential: boolean;
  @Column({ nullable: true })
  deactivatedPosition: boolean;
}
