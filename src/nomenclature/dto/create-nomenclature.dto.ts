import { IsNotEmpty } from 'class-validator';

export class CreateNomenclatureDto {
  @IsNotEmpty()
  pn: string;
  partNumber: string;
  manufacturerCode: string;
  description: string;
  equipmentType: string;
  productType: string;
  classificationHazardouness: string;
  hazardousnessLevel: string;
  specialHandlingCondition: string;
  packagingClassification: string;
  defaultIngredientType: string;
  accountUnit: string;
  packagingUnit: string;
  nmnogo: string;
  depreciationType: string;
  administratorCompanyCode: string;
  customsPriceCode: string;
  atapartBelongs: string;
  typeJobPerformed: string;
  officialAuthority: string;
  certificateNumber: string;
  workDuringDisposal: string;
  workDuringOverhaul: string;
  workDuringInspection: string;
  workDuringInspection2: string;
  nonStandardAgeingCode1: string;
  nonStandardAgeingCode2: string;
  nonStandardAgeingCode3: string;
  masterPN: string;
  materialFamily: string;
  blacklistReason: string;
  usrmaj: string;
  levelInStructure: number;
  coefficientPackagingUnit: number;
  parteigWhtStated: number;
  heightSated: number;
  lengthStated: number;
  widthStated: number;
  provisioningCodeUsed: number;
  currentAssetCode: number;
  administratorStoreCode: number;
  basicPrice: number;
  unitSalePrice: number;
  customsUnitPrice: number;
  numberInventoryCards: number;
  partShelfTime: number;
  maxCalendarDeadline: number;
  overhaulCalendarDeadline: number;
  inspectionToCalendarDeadline: number;
  inspectionCalendarDeadline: number;
  dateHourCreation: Date;
  dateHourUpdate: Date;
  containsModel: boolean;
  nlacode: boolean;
  hazardousMaterial: boolean;
  specialTransportCondition: boolean;
  specialStorageCondition: boolean;
  specialDisposalCondition: boolean;
  etopsEquipment: boolean;
  reliabilityTracking: boolean;
  approval: boolean;
  calendarFollowUp: boolean;
  referenceBlackList: boolean;
}