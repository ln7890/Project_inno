import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  Unique,
} from 'typeorm';
import { Post } from './post.entity';
import { Asset } from './assets.entity';

@Entity({ name: 'post_assets', schema: 'main' })
@Unique(['postId', 'assetId'])
export class PostAsset {
  @PrimaryColumn('varchar')
  id: string;

  @ManyToOne(() => Post, (post) => post.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'post_id' })
  @Column('varchar', { nullable: false, name: 'post_id' })
  postId: Post;

  @ManyToOne(() => Asset, (asset) => asset.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'asset_id' })
  @Column('varchar', { nullable: false, name: 'asset_id' })
  assetId: Asset;

  @Column('int', { nullable: false, default: 0 })
  order: number;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @ManyToOne(() => Post, (post) => post.id)
  @JoinColumn({ name: 'createdBy' })
  createdBy: Post;

  @Column('timestamp', { nullable: false })
  updatedAt: Date;

  @ManyToOne(() => Post, (post) => post.id)
  @JoinColumn({ name: 'updatedBy' })
  updatedBy: Post;
}
