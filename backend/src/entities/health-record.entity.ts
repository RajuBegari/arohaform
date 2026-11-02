import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Farm } from './farm.entity';

@Entity('health_records')
export class HealthRecord extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @Column({ name: 'farm_id', type: 'uuid' })
  farmId: string;

  @ManyToOne(() => Farm, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'farm_id' })
  farm: Farm;

  @Column({ name: 'target_type', length: 50 }) // 'ANIMAL' or 'POULTRY_BATCH'
  targetType: string;

  @Column({ name: 'target_id', type: 'uuid' })
  targetId: string;

  @Column({ name: 'diagnosis_date', type: 'date' })
  diagnosisDate: string;

  @Column({ name: 'symptoms_observed', type: 'text' })
  symptomsObserved: string;

  @Column({ name: 'diagnosis_condition', length: 150 })
  diagnosisCondition: string;

  @Column({ name: 'treatment_prescribed', type: 'text' })
  treatmentPrescribed: string;

  @Column({ name: 'veterinarian_name', length: 100 })
  veterinarianName: string;

  @Column({ name: 'withdrawal_period_days', type: 'int', default: 0 })
  withdrawalPeriodDays: number;

  @Column({ name: 'cost_amount', type: 'decimal', precision: 10, scale: 2, default: 0 })
  costAmount: number;

  @Column({ name: 'is_resolved', default: false })
  isResolved: boolean;
}

