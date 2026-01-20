import {
  Check,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  Unique,
} from 'typeorm';
import { Profile } from './profile.entity';
import { User } from './user.entity';

@Entity({ name: 'profile_follows', schema: 'main' })
@Unique(['followerProfile', 'followedProfile'])
@Check(`"follower_profile_id" <> "followed_profile_id"`)
export class ProfileFollow {
  @PrimaryColumn('varchar')
  id: string;

  @ManyToOne(() => Profile, (profile) => profile.id, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'follower_profile_id' })
  followerProfile: Profile;

  @ManyToOne(() => Profile, (profile) => profile.id, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'followed_profile_id' })
  followedProfile: Profile;

  @Column('boolean')
  accepted: boolean;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'created_by' })
  createdBy: User;

  @Column('timestamp', { nullable: false })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'updated_by' })
  updatedBy: User;
}
