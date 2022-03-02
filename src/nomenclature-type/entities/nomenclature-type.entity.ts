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
  levelInStructure: number;
  @Column({ nullable: true })
  removal: boolean;
  @Column({ nullable: true })
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
