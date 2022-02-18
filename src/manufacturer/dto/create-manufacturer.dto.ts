import { IsNotEmpty } from 'class-validator';

export class CreateManufacturerDto {
  @IsNotEmpty()
  companyName: string;
  country: string;
  address: string;
  phone: string;
  manufacturer: boolean;
  operator: boolean;
  engineering: boolean;
  mro: boolean;
  repairCenter: boolean;
  rotorRepair: boolean;
  owner: boolean;
  company: boolean;
  components: boolean;
  services: boolean;
  repairer: boolean;
  provider: boolean;
  customer: boolean;
}
