import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Farm } from './farm.entity';

export enum ExpenseCategory {
  FEED = 'FEED',
  LABOUR = 'LABOUR',
  VETERINARY = 'VETERINARY',
  ELECTRICITY = 'ELECTRICITY',
  FUEL_AND_TRANSPORT = 'FUEL_AND_TRANSPORT',
  MAINTENANCE = 'MAINTENANCE',
  CHICKS_PURCHASE = 'CHICKS_PURCHASE',
  ADMIN_AND_OVERHEAD = 'ADMIN_AND_OVERHEAD',
}

@Entity('expenses')
export class Expense extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @Column({ name: 'farm_id', type: 'uuid' })
  farmId: string;

  @ManyToOne(() => Farm, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'farm_id' })
  farm: Farm;

  @Column({ name: 'expense_date', type: 'date' })
  expenseDate: string;

  @Column({
    type: 'varchar',
    length: 50,
    default: ExpenseCategory.FEED,
  })
  category: ExpenseCategory;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  amount: number;

  @Column({ name: 'allocation_type', length: 50, default: 'OVERHEAD' }) // 'POULTRY_BATCH', 'DAIRY_OPERATION', 'OVERHEAD'
  allocationType: string;

  @Column({ name: 'target_batch_id', type: 'uuid', nullable: true })
  targetBatchId: string;

  @Column({ name: 'paid_to', length: 150 })
  paidTo: string;

  @Column({ name: 'payment_mode', length: 50, default: 'BANK_TRANSFER' })
  paymentMode: string;

  @Column({ type: 'text', nullable: true })
  description: string;
}

