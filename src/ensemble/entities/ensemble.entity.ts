import { Nomenclature } from 'src/nomenclature/entities/nomenclature.entity';
import { Piece } from 'src/piece/entities/piece.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'ensemble' })
export class Ensemble {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  positionDescription: string;
  @Column()
  fileName: string;
  @Column({
    type: 'json',
    array: false,
    default: () => "'[]'",
    nullable: false,
  })
  sousEnsemble: Array<{ partNumber: string; serialNumber: string }>;

  @ManyToOne(() => Nomenclature, (nomenclature) => nomenclature.ensembles, {
    eager: true,
  })
  partNumber: Nomenclature;

  @ManyToOne(() => Piece, (piece) => piece.ensembles, { eager: true })
  serialNumber: Piece;
}
