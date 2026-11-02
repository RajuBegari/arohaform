import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('customers')
export class Customer extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @Column({ length: 150 })
  name: string;

  @Column({ name: 'customer_type', length: 50, default: 'WHOLESALE_BUYER' }) // 'RETAIL', 'WHOLESALE_BUYER', 'DISTRIBUTOR', 'DAIRY_PLANT'
  customerType: string;

  @Column({ name: 'contact_person', length: 100, nullable: true })
  contactPerson: string;

  @Column({ length: 100, nullable: true })
  email: string;

  @Column({ length: 30 })
  phone: string;

  @Column({ type: 'text', nullable: true })
  address: string;

  @Column({ length: 50, nullable: true })
  gstin: string;

  @Column({ name: 'outstanding_balance', type: 'decimal', precision: 12, scale: 2, default: 0 })
  outstandingBalance: number;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;
}

