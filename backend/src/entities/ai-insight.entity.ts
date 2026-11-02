import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Farm } from './farm.entity';

export enum InsightSeverity {
  INFO = 'INFO',
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
}

export enum InsightType {
  ANOMALY_MORTALITY = 'ANOMALY_MORTALITY',
  ANOMALY_PRODUCTION_DROP = 'ANOMALY_PRODUCTION_DROP',
  FEED_SHORTAGE_RISK = 'FEED_SHORTAGE_RISK',
  UNUSUAL_FEED_CONSUMPTION = 'UNUSUAL_FEED_CONSUMPTION',
  EXPENSE_DEVIATION = 'EXPENSE_DEVIATION',
  PROFITABILITY_RECOMMENDATION = 'PROFITABILITY_RECOMMENDATION',
  DISEASE_OUTBREAK_RISK = 'DISEASE_OUTBREAK_RISK',
}

@Entity('ai_insights')
export class AIInsight extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @Column({ name: 'farm_id', type: 'uuid', nullable: true })
  farmId: string;

  @ManyToOne(() => Farm, { onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'farm_id' })
  farm: Farm;

  @Column({
    name: 'insight_type',
    type: 'varchar',
    length: 50,
  })
  insightType: InsightType;

  @Column({
    type: 'varchar',
    length: 20,
    default: InsightSeverity.INFO,
  })
  severity: InsightSeverity;

  @Column({ length: 255 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ name: 'recommended_action', type: 'text' })
  recommendedAction: string;

  @Column({ name: 'supporting_metrics', type: 'simple-json', nullable: true })
  supportingMetrics: Record<string, any>;

  @Column({ name: 'is_acknowledged', default: false })
  isAcknowledged: boolean;

  @Column({ name: 'acknowledged_by', length: 100, nullable: true })
  acknowledgedBy: string;
}

