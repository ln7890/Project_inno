import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'accounts', schema: 'auth' })
export class Account {
  @PrimaryGeneratedColumn('increment')
  @Column('varchar')
  id: string;

  @OneToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  @Column('varchar')
  user_id: string;

  @Column('varchar', { unique: true, nullable: false })
  email: string;

  @Column('varchar', { nullable: false })
  password_hash: string;

  @Column('enum', {
    nullable: false,
    enum: ['local', 'google', 'facebook', 'github', 'twitter'],
    default: 'local',
  })
  provider: 'local' | 'google' | 'facebook' | 'github' | 'twitter';

  @Column('varchar')
  provider_id: string;

  @Column('timestamp')
  last_login_at: Date;

  @Column({
    type: 'timestamp',
    name: 'created_at',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @OneToOne(() => User, (user) => user.id)
  createdBy: User;

  @Column('timestamp', { nullable: false })
  updatedAt: Date;

  @OneToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  updatedBy: User;

  @Column('boolean', { name: 'deleted', default: false })
  deleted: boolean;
}
