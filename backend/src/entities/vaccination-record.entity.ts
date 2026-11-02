import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Farm } from './farm.entity';

@Entity('vaccination_records')
export class VaccinationRecord extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @Column({ name: 'farm_id', type: 'uuid' })
  farmId: string;

  @ManyToOne(() => Farm, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'farm_id' })
  farm: Farm;

  @Column({ name: 'target_type', length: 50 }) // 'POULTRY_BATCH' or 'ANIMAL'
  targetType: string;

  @Column({ name: 'target_id', type: 'uuid' })
  targetId: string;

  @Column({ name: 'vaccine_name', length: 150 })
  vaccineName: string;

  @Column({ name: 'administered_date', type: 'date' })
  administeredDate: string;

  @Column({ name: 'next_due_date', type: 'date', nullable: true })
  nextDueDate: string;

  @Column({ name: 'administered_by', length: 100 })
  administeredBy: string;

  @Column({ name: 'batch_number', length: 50, nullable: true })
  batchNumber: string;

  @Column({ type: 'text', nullable: true })
  notes: string;
}

