import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'comments', schema: 'main' })
export class Comment {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => Post, (post) => post.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'postId' })
  postId: Post;

  @ManyToOne(() => Comment, (comment) => comment.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'parentCommentId' })
  parentCommentId: string | null;

  @Column('text', { nullable: false })
  content: string;

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
