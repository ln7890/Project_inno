import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Post } from './post.entity';
import { User } from 'src/users/entities/user.entity';

@Entity({ name: 'PostLike   ', schema: 'main' })
export class PostLike {
  @ManyToOne(() => Post, (post) => post.id, { onDelete: 'CASCADE' })
  postId: Post;

  @JoinColumn({ name: 'postId' })
  post: Post;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  created_by: User;

  @Column('timestamp', { nullable: false })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'updatedBy' })
  updatedBy: User;
}
