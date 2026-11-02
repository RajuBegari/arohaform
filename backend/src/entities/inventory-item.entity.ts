import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export enum ItemCategory {
  FEED = 'FEED',
  MEDICINE = 'MEDICINE',
  VACCINE = 'VACCINE',
  EQUIPMENT = 'EQUIPMENT',
  PRODUCE_EGG = 'PRODUCE_EGG',
  PRODUCE_MILK = 'PRODUCE_MILK',
  PRODUCE_CHICKEN = 'PRODUCE_CHICKEN',
  PACKAGING = 'PACKAGING',
  OTHER = 'OTHER',
}

@Entity('inventory_items')
export class InventoryItem extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 50, unique: true })
  sku: string;

  @Column({
    type: 'varchar',
    length: 50,
    default: ItemCategory.OTHER,
  })
  category: ItemCategory;

  @Column({ length: 20, default: 'UNIT' })
  uom: string;

  @Column({ name: 'current_stock', type: 'decimal', precision: 12, scale: 2, default: 0 })
  currentStock: number;

  @Column({ name: 'reorder_level', type: 'decimal', precision: 12, scale: 2, default: 10 })
  reorderLevel: number;

  @Column({ name: 'unit_cost', type: 'decimal', precision: 10, scale: 2, default: 0 })
  unitCost: number;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;
}

