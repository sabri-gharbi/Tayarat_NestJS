import { Nomenclature } from 'src/nomenclature/entities/nomenclature.entity';
import { Piece } from 'src/piece/entities/piece.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'ensemble' })
export class Ensemble {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  positionDescription: string;
  // @Column()
  // level: number;
  @ManyToOne(() => Nomenclature, (nomenclature) => nomenclature.ensembles, {
    eager: true,
  })
  partNumber: Nomenclature;

  @ManyToOne(() => Piece, (piece) => piece.ensembles, { eager: true })
  serialNumber: Piece;

  // @OneToMany(() => Ensemble, (ensemble) => ensemble.higherEnsemble)
  // lowerEnsemble: Ensemble[];

  // @ManyToOne(() => Ensemble, (ensemble) => ensemble.lowerEnsemble)
  // higherEnsemble: Ensemble;
}
