import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { User } from './user.entity';
import { Farm } from './farm.entity';

@Entity('organizations')
export class Organization extends BaseEntity {
  @Column({ length: 150 })
  name: string;

  @Column({ length: 50, unique: true })
  code: string;

  @Column({ length: 3, default: 'INR' })
  currency: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @Column({ type: 'simple-json', nullable: true })
  settings: Record<string, any>;

  @OneToMany(() => User, (user) => user.organization)
  users: User[];

  @OneToMany(() => Farm, (farm) => farm.organization)
  farms: Farm[];
}

