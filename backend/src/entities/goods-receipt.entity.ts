import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { PurchaseOrder } from './purchase-order.entity';
import { Farm } from './farm.entity';

@Entity('goods_receipts')
export class GoodsReceipt extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @Column({ name: 'farm_id', type: 'uuid' })
  farmId: string;

  @ManyToOne(() => Farm, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'farm_id' })
  farm: Farm;

  @Column({ name: 'purchase_order_id', type: 'uuid' })
  purchaseOrderId: string;

  @ManyToOne(() => PurchaseOrder, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'purchase_order_id' })
  purchaseOrder: PurchaseOrder;

  @Column({ name: 'grn_number', length: 50, unique: true })
  grnNumber: string;

  @Column({ name: 'receipt_date', type: 'date' })
  receiptDate: string;

  @Column({ name: 'delivery_challan_number', length: 50, nullable: true })
  deliveryChallanNumber: string;

  @Column({ name: 'received_by', length: 100 })
  receivedBy: string;

  @Column({ type: 'text', nullable: true })
  remarks: string;
}

