import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Organization } from './organization.entity';

export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ORG_ADMIN = 'ORG_ADMIN',
  FARM_MANAGER = 'FARM_MANAGER',
  VETERINARIAN = 'VETERINARIAN',
  FEED_STORE_OFFICER = 'FEED_STORE_OFFICER',
  ACCOUNTANT = 'ACCOUNTANT',
  WORKER = 'WORKER',
}

@Entity('users')
export class User extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @ManyToOne(() => Organization, (org) => org.users, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'organization_id' })
  organization: Organization;

  @Column({ length: 255 })
  email: string;

  @Column({ name: 'password_hash', length: 255 })
  passwordHash: string;

  @Column({ name: 'first_name', length: 100 })
  firstName: string;

  @Column({ name: 'last_name', length: 100 })
  lastName: string;

  @Column({ length: 30, nullable: true })
  phone: string;

  @Column({
    type: 'varchar',
    length: 50,
    default: UserRole.FARM_MANAGER,
  })
  role: UserRole;

  @Column({ name: 'assigned_farm_ids', type: 'simple-json', nullable: true })
  assignedFarmIds: string[];

  @Column({ name: 'is_active', default: true })
  isActive: boolean;
}

