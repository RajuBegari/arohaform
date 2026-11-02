import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';

export enum FeedCategory {
  RAW_INGREDIENT = 'RAW_INGREDIENT',
  FINISHED_FEED = 'FINISHED_FEED',
  SUPPLEMENT = 'SUPPLEMENT',
}

@Entity('feed_items')
export class FeedItem extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @Column({ length: 120 })
  name: string;

  @Column({
    type: 'varchar',
    length: 50,
    default: FeedCategory.RAW_INGREDIENT,
  })
  category: FeedCategory;

  @Column({ length: 20, default: 'KG' })
  uom: string;

  @Column({ name: 'standard_cost', type: 'decimal', precision: 10, scale: 2, default: 0 })
  standardCost: number;

  @Column({ name: 'current_stock_kg', type: 'decimal', precision: 12, scale: 2, default: 0 })
  currentStockKg: number;

  @Column({ name: 'reorder_threshold_kg', type: 'decimal', precision: 10, scale: 2, default: 500 })
  reorderThresholdKg: number;

  @Column({ name: 'protein_pct', type: 'decimal', precision: 5, scale: 2, nullable: true })
  proteinPct: number;

  @Column({ name: 'metabolic_energy_kcal', type: 'decimal', precision: 8, scale: 2, nullable: true })
  metabolicEnergyKcal: number;
}

