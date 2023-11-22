import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn} from 'typeorm';

@Entity('articles') // This decorator tells TypeORM that this class is an entity
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  author: string;

  // Add later User relation
//   @Column()
//   user_id: number;
}
