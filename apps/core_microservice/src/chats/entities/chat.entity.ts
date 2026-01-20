import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

enum ChatType {
  PRIVATE = 'private',
  GROUP = 'group',
}

@Entity({ name: 'chats', schema: 'main' })
export class Chat {
  @PrimaryColumn('varchar')
  id: string;

  @Column('varchar', { nullable: false })
  name: string;

  @Column('varchar')
  description: string;

  @Column('varchar', { nullable: false, default: 'private' })
  type: ChatType;

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
