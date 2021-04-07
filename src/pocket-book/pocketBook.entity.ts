import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, ObjectIdColumn, OneToOne, PrimaryColumn } from 'typeorm';

@Entity('pocket-book')
export class PocketBookEntity {
  @PrimaryColumn()
  id: string;

  /**
   * Note: 并不需要这些
   * 因为我们这个是mongodb 不需要搞的这么麻烦
   */
  // @ManyToOne((type) => UserEntity, (user) => user.pocket_books)
  @Column()
  note_name: string;

  // @ManyToOne((type) => UserEntity, (user) => user.email)
  @Column()
  creator: string;

  @Column()
  cover: string;
}