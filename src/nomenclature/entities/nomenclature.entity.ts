import { NomenclatureType } from 'src/nomenclature-type/entities/nomenclature-type.entity';
import { Piece } from 'src/piece/entities/piece.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'nomenclature' })
export class Nomenclature {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  pn: string;
  @Column({ nullable: true, unique: true })
  partNumber: string;
  @Column({ nullable: true })
  manufacturerCode: string;
  @Column({ nullable: true })
  description: string;
  @Column({ nullable: true })
  equipmentType: string;
  @Column({ nullable: true })
  productType: string;
  @Column({ nullable: true })
  classificationHazardouness: string;
  @Column({ nullable: true })
  hazardousnessLevel: string;
  @Column({ nullable: true })
  specialHandlingCondition: string;
  @Column({ nullable: true })
  packagingClassification: string;
  @Column({ nullable: true })
  defaultIngredientType: string;
  @Column({ nullable: true })
  accountUnit: string;
  @Column({ nullable: true })
  packagingUnit: string;
  @Column({ nullable: true })
  nmnogo: string;
  @Column({ nullable: true })
  depreciationType: string;
  @Column({ nullable: true })
  administratorCompanyCode: string;
  @Column({ nullable: true })
  customsPriceCode: string;
  @Column({ nullable: true })
  atapartBelongs: string;
  @Column({ nullable: true })
  typeJobPerformed: string;
  @Column({ nullable: true })
  officialAuthority: string;
  @Column({ nullable: true })
  certificateNumber: string;
  @Column({ nullable: true })
  workDuringDisposal: string;
  @Column({ nullable: true })
  workDuringOverhaul: string;
  @Column({ nullable: true })
  workDuringInspection2: string;
  @Column({ nullable: true })
  workDuringInspection: string;
  @Column({ nullable: true })
  nonStandardAgeingCode1: string;
  @Column({ nullable: true })
  nonStandardAgeingCode2: string;
  @Column({ nullable: true })
  nonStandardAgeingCode3: string;
  @Column({ nullable: true })
  masterPN: string;
  @Column({ nullable: true })
  materialFamily: string;
  @Column({ nullable: true })
  blacklistReason: string;
  @Column({ nullable: true })
  usrmaj: string;
  @Column({ nullable: true })
  levelInStructure: number;
  @Column({ nullable: true })
  coefficientPackagingUnit: number;
  @Column({ nullable: true })
  parteigWhtStated: number;
  @Column({ nullable: true })
  heightSated: number;
  @Column({ nullable: true })
  lengthStated: number;
  @Column({ nullable: true })
  widthStated: number;
  @Column({ nullable: true })
  provisioningCodeUsed: number;
  @Column({ nullable: true })
  currentAssetCode: number;
  @Column({ nullable: true })
  administratorStoreCode: number;
  @Column({ nullable: true })
  basicPrice: number;
  @Column({ nullable: true })
  unitSalePrice: number;
  @Column({ nullable: true })
  customsUnitPrice: number;
  @Column({ nullable: true })
  numberInventoryCards: number;
  @Column({ nullable: true })
  partShelfTime: number;
  @Column({ nullable: true })
  maxCalendarDeadline: number;
  @Column({ nullable: true })
  overhaulCalendarDeadline: number;
  @Column({ nullable: true })
  inspectionToCalendarDeadline: number;
  @Column({ nullable: true })
  inspectionCalendarDeadline: number;
  @Column({ nullable: true })
  dateHourCreation: Date;
  @Column({ nullable: true })
  dateHourUpdate: Date;
  @Column({ nullable: true })
  containsModel: boolean;
  @Column({ nullable: true })
  nlaCode: boolean;
  @Column({ nullable: true })
  hazardousMaterial: boolean;
  @Column({ nullable: true })
  specialTransportCondition: boolean;
  @Column({ nullable: true })
  specialStorageCondition: boolean;
  @Column({ nullable: true })
  specialDisposalCondition: boolean;
  @Column({ nullable: true })
  etopsEquipment: boolean;
  @Column({ nullable: true })
  reliabilityTracking: boolean;
  @Column({ nullable: true })
  approval: boolean;
  @Column({ nullable: true })
  calendarFollowUp: boolean;
  @Column({ nullable: true })
  referenceBlackList: boolean;

  @OneToMany(
    () => NomenclatureType,
    (nomenclatureType) => nomenclatureType.nomenclature,
  )
  nomenclatureTypes: NomenclatureType[];

  @OneToMany(() => Piece, (piece) => piece.serialNumber)
  pieces: Piece[];
}
