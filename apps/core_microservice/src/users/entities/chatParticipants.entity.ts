import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Profile } from './profile.entity';
import { Chat } from 'src/chats/entities/chat.entity';
import { User } from './user.entity';

enum role {
  ADMIN = 'admin',
  MEMBER = 'member',
}

@Entity({ name: 'chat_participants', schema: 'main' })
export class ChatParticipants {
  @PrimaryColumn('varchar')
  id: string;

  @ManyToOne(() => Profile, (profile) => profile.id, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'profile_id' })
  profile: Profile;

  @ManyToOne(() => Chat, (chat) => chat.id, {
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'chat_id' })
  chat: Chat;

  @Column('varchar', { nullable: false, default: 'member' })
  role: role;

  @Column('timestamp', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  joinedAt: Date;

  @Column('timestamp', { nullable: true })
  leftAt: Date;

  @Column('boolean', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @JoinColumn({ name: 'user_id' })
  @Column('varchar', { nullable: false })
  user_id: string;

  @Column('timestamp', { nullable: false })
  updated_at: Date;

  @OneToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  @Column('varchar', { nullable: true })
  updated_by: string;
}
