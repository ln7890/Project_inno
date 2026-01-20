import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users', schema: 'auth' })
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    nullable: false,
    type: 'enum',
    enum: ['user', 'admin'],
    default: 'user',
  })
  role: 'user' | 'admin';

  @Column('boolean', { default: false, nullable: false })
  disabled: boolean;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToOne(() => User, (user) => user.id)
  @Column('varchar')
  createdBy: User;

  @Column('timestamp', { nullable: false })
  updatedAt: Date;

  @OneToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  @Column('varchar')
  updatedBy: User;
}
