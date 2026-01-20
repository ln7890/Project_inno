import { Profile } from 'src/users/entities/profile.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'posts', schema: 'main' })
export class Post {
  @PrimaryColumn('varchar')
  id: string;

  @ManyToOne(() => Profile, (profile) => profile.id, { onDelete: 'CASCADE' })
  profileId: string;

  @Column('varchar')
  content: string;

  @Column('boolean', { default: false, nullable: false })
  isArchived: boolean;

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
