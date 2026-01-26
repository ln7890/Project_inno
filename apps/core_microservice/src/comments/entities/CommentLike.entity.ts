import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Comment } from './comment.entity';
import { Profile } from 'src/users/entities/profile.entity';
import { User } from 'src/users/entities/user.entity';

@Entity({ name: 'CommentLike', schema: 'main' })
export class CommentLike {
  @ManyToOne(() => Comment, (comment) => comment.id, { onDelete: 'CASCADE' })
  commentId: Comment;

  @JoinColumn({ name: 'commentId' })
  comment: Comment;

  @ManyToOne(() => Profile, (profile) => profile.id, { onDelete: 'CASCADE' })
  profile: Profile;

  @JoinColumn({ name: 'profileId' })
  profileId: Profile;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'createdBy' })
  createdBy: Profile;

  @Column('timestamp', { nullable: false })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'updatedBy' })
  updatedBy: User;
}
