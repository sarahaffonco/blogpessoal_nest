import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Postagem } from '../../postagem/entities/postagem.entity';

@Entity({ name: 'tb_temas' })
export class Tema {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  descricao: string;

  @OneToMany(() => Postagem, (postagem) => postagem.tema)
  postagem: Postagem[];

  @JoinColumn({ name: 'tema_id' })
  tema: Tema;
}
