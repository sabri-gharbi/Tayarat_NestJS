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
  @Column()
  levelInStructure: number;
  @Column()
  removal: boolean;
  @Column({ nullable: true })
  quantity: number;

  @ManyToOne(
    () => Nomenclature,
    (nomenclature) => nomenclature.nomenclatureTypes,
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
