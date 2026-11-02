import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { PoultryBatch } from './poultry-batch.entity';

@Entity('daily_poultry_logs')
export class DailyPoultryLog extends BaseEntity {
  @Column({ name: 'batch_id', type: 'uuid' })
  batchId: string;

  @ManyToOne(() => PoultryBatch, (b) => b.dailyLogs, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'batch_id' })
  batch: PoultryBatch;

  @Column({ name: 'log_date', type: 'date' })
  logDate: string;

  @Column({ name: 'mortality_count', type: 'int', default: 0 })
  mortalityCount: number;

  @Column({ name: 'culling_count', type: 'int', default: 0 })
  cullingCount: number;

  @Column({ name: 'average_weight_grams', type: 'decimal', precision: 8, scale: 2, default: 0 })
  averageWeightGrams: number;

  @Column({ name: 'feed_consumed_kg', type: 'decimal', precision: 10, scale: 2, default: 0 })
  feedConsumedKg: number;

  @Column({ name: 'water_consumed_litres', type: 'decimal', precision: 10, scale: 2, default: 0 })
  waterConsumedLitres: number;

  @Column({ name: 'temperature_celsius', type: 'decimal', precision: 5, scale: 2, nullable: true })
  temperatureCelsius: number;

  @Column({ name: 'humidity_pct', type: 'decimal', precision: 5, scale: 2, nullable: true })
  humidityPct: number;

  @Column({ type: 'text', nullable: true })
  remarks: string;
}

