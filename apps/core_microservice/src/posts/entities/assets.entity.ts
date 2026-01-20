import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'assets', schema: 'main' })
export class Asset {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column('varchar', { nullable: false })
  fileName: string;

  @Column('varchar', { nullable: false })
  fileType: string;

  @Column('integer', { nullable: false })
  fileSize: number;

  @Column('int', { nullable: false, default: 0 })
  orderIndex: number;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'createdBy' })
  createdBy: User;

  @Column('timestamp', { nullable: false })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'updatedBy' })
  updatedBy: User;
}
