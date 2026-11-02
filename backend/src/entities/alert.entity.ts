import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Farm } from './farm.entity';

@Entity('alerts')
export class Alert extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @Column({ name: 'farm_id', type: 'uuid', nullable: true })
  farmId: string;

  @ManyToOne(() => Farm, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'farm_id' })
  farm: Farm;

  @Column({ length: 150 })
  title: string;

  @Column({ type: 'text' })
  message: string;

  @Column({ length: 30, default: 'HIGH' }) // 'INFO', 'WARNING', 'CRITICAL'
  severity: string;

  @Column({ name: 'is_read', default: false })
  isRead: boolean;

  @Column({ name: 'action_link', length: 255, nullable: true })
  actionLink: string;
}

