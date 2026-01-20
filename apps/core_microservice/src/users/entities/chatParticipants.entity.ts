import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Profile } from './profile.entity';
import { Chat } from 'src/chats/entities/chat.entity';

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
}
