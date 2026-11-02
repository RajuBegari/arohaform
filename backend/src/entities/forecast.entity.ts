import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Farm } from './farm.entity';

export enum TargetMetric {
  MILK_YIELD_LITRES = 'MILK_YIELD_LITRES',
  EGG_PRODUCTION_COUNT = 'EGG_PRODUCTION_COUNT',
  POULTRY_OUTPUT_KG = 'POULTRY_OUTPUT_KG',
  FEED_REQUIREMENT_KG = 'FEED_REQUIREMENT_KG',
}

@Entity('forecasts')
export class Forecast extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @Column({ name: 'farm_id', type: 'uuid' })
  farmId: string;

  @ManyToOne(() => Farm, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'farm_id' })
  farm: Farm;

  @Column({
    name: 'target_metric',
    type: 'varchar',
    length: 50,
  })
  targetMetric: TargetMetric;

  @Column({ name: 'horizon_days', type: 'int' }) // 7, 15, or 30
  horizonDays: number;

  @Column({ name: 'forecast_date', type: 'date' })
  forecastDate: string;

  @Column({ name: 'predicted_value', type: 'decimal', precision: 12, scale: 2 })
  predictedValue: number;

  @Column({ name: 'confidence_lower', type: 'decimal', precision: 12, scale: 2 })
  confidenceLower: number;

  @Column({ name: 'confidence_upper', type: 'decimal', precision: 12, scale: 2 })
  confidenceUpper: number;

  @Column({ name: 'model_algorithm', length: 50, default: 'HOLT_WINTERS_EXPONENTIAL_SMOOTHING' })
  modelAlgorithm: string;

  @Column({ name: 'historical_mape', type: 'decimal', precision: 5, scale: 2, default: 4.8 })
  historicalMape: number;
}

