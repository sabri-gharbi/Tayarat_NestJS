import { Nomenclature } from 'src/nomenclature/entities/nomenclature.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'nomenclature_type' })
export class NomenclatureType {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  structureNumber: string;
  @Column({ nullable: true })
  quantity: number;

  @ManyToOne(
    () => Nomenclature,
    (nomenclature) => nomenclature.nomenclatureTypes,
    { eager: true },
  )
  nomenclature: Nomenclature;

  @OneToMany(
    () => NomenclatureType,
    (nomenclatureType) => nomenclatureType.higherNomenclature,
  )
  lowerAssembly: NomenclatureType[];

  @ManyToOne(
    () => NomenclatureType,
    (nomenclatureType) => nomenclatureType.lowerAssembly,
  )
  higherNomenclature: NomenclatureType;
}
