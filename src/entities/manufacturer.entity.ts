import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Manufacturer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  companyName: string;
  @Column()
  country: string;
  @Column()
  address: string;
  @Column()
  phone: string;
  @Column()
  manufacturer: boolean;
  @Column()
  operator: boolean;
  @Column()
  engineering: boolean;
  @Column()
  mro: boolean;
  @Column()
  repairCenter: boolean;
  @Column()
  rotorRepair: boolean;
  @Column()
  owner: boolean;
  @Column()
  company: boolean;
  @Column()
  components: boolean;
  @Column()
  services: boolean;
  @Column()
  repairer: boolean;
  @Column()
  provider: boolean;
  @Column()
  customer: boolean;
}

export default Manufacturer;
