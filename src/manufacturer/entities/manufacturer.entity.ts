import { AircraftModel } from 'src/aircraft-model/entities/aircraft-model.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'manufacturer' })
export class Manufacturer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  companyName: string;
  @Column({ nullable: true })
  country: string;
  @Column({ nullable: true })
  address: string;
  @Column({ nullable: true })
  phone: string;
  @Column({ nullable: true })
  manufacturer: boolean;
  @Column({ nullable: true })
  operator: boolean;
  @Column({ nullable: true })
  engineering: boolean;
  @Column({ nullable: true })
  mro: boolean;
  @Column({ nullable: true })
  repairCenter: boolean;
  @Column({ nullable: true })
  rotorRepair: boolean;
  @Column({ nullable: true })
  owner: boolean;
  @Column({ nullable: true })
  company: boolean;
  @Column({ nullable: true })
  components: boolean;
  @Column({ nullable: true })
  services: boolean;
  @Column({ nullable: true })
  repairer: boolean;
  @Column({ nullable: true })
  provider: boolean;
  @Column({ nullable: true })
  customer: boolean;

  @OneToMany(() => AircraftModel, (aircraftModel) => aircraftModel.company)
  aircraftModels: AircraftModel[];
}
