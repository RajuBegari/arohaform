import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Farm } from './farm.entity';
import { InventoryItem } from './inventory-item.entity';

export enum InventoryTxType {
  PURCHASE_RECEIPT = 'PURCHASE_RECEIPT',
  PRODUCTION_OUTPUT = 'PRODUCTION_OUTPUT',
  CONSUMPTION_ISSUE = 'CONSUMPTION_ISSUE',
  SALES_DISPATCH = 'SALES_DISPATCH',
  STOCK_ADJUSTMENT = 'STOCK_ADJUSTMENT',
  TRANSFER_IN = 'TRANSFER_IN',
  TRANSFER_OUT = 'TRANSFER_OUT',
  WASTAGE_LOSS = 'WASTAGE_LOSS',
}

@Entity('inventory_transactions')
export class InventoryTransaction extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @Column({ name: 'farm_id', type: 'uuid' })
  farmId: string;

  @ManyToOne(() => Farm, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'farm_id' })
  farm: Farm;

  @Column({ name: 'item_id', type: 'uuid' })
  itemId: string;

  @ManyToOne(() => InventoryItem, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'item_id' })
  item: InventoryItem;

  @Column({
    name: 'transaction_type',
    type: 'varchar',
    length: 50,
  })
  transactionType: InventoryTxType;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  quantity: number;

  @Column({ name: 'unit_price', type: 'decimal', precision: 10, scale: 2, default: 0 })
  unitPrice: number;

  @Column({ name: 'total_value', type: 'decimal', precision: 12, scale: 2, default: 0 })
  totalValue: number;

  @Column({ name: 'reference_type', length: 50, nullable: true }) // 'PO', 'SALES_ORDER', 'PRODUCTION', 'ADJUSTMENT'
  referenceType: string;

  @Column({ name: 'reference_id', type: 'uuid', nullable: true })
  referenceId: string;

  @Column({ type: 'text', nullable: true })
  notes: string;
}

