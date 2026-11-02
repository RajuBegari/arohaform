import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Farm } from './farm.entity';

export enum ProductType {
  COW_MILK = 'COW_MILK',
  BUFFALO_MILK = 'BUFFALO_MILK',
  EGGS = 'EGGS',
  LIVE_BROILER_KG = 'LIVE_BROILER_KG',
  COUNTRY_CHICKEN_KG = 'COUNTRY_CHICKEN_KG',
  MANURE_BAGS = 'MANURE_BAGS',
}

@Entity('daily_productions')
export class DailyProduction extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @Column({ name: 'farm_id', type: 'uuid' })
  farmId: string;

  @ManyToOne(() => Farm, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'farm_id' })
  farm: Farm;

  @Column({ name: 'production_date', type: 'date' })
  productionDate: string;

  @Column({
    name: 'product_type',
    type: 'varchar',
    length: 50,
  })
  productType: ProductType;

  @Column({ name: 'total_quantity', type: 'decimal', precision: 12, scale: 2 })
  totalQuantity: number;

  @Column({ name: 'saleable_quantity', type: 'decimal', precision: 12, scale: 2 })
  saleableQuantity: number;

  @Column({ name: 'wastage_quantity', type: 'decimal', precision: 12, scale: 2, default: 0 })
  wastageQuantity: number;

  @Column({ length: 20, default: 'LITRES' })
  uom: string;

  @Column({ name: 'quality_grade', length: 20, default: 'GRADE_A' })
  qualityGrade: string;

  @Column({ name: 'unit_production_cost', type: 'decimal', precision: 10, scale: 2, default: 0 })
  unitProductionCost: number;

  @Column({ type: 'text', nullable: true })
  notes: string;
}

