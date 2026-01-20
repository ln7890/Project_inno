import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'profiles', schema: 'main' })
export class Profile {
  @PrimaryGeneratedColumn('increment')
  @Column('varchar')
  id: string;

  @OneToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  user_id: string;

  @Column('varchar', { name: 'username', nullable: false, unique: true })
  username: string;

  @Column('varchar', { name: 'display_name', nullable: false })
  displayName: string;

  @Column('date', { nullable: false })
  birthday: Date;

  @Column('varchar', { nullable: true })
  bio: string | null;

  @Column('varchar', { nullable: true })
  avatar_url: string | null;

  @Column('boolean', { nullable: false, default: true })
  is_public: boolean;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
