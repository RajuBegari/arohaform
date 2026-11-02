import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Farm } from './farm.entity';
import { FeedItem } from './feed-item.entity';

@Entity('feed_consumptions')
export class FeedConsumption extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @Column({ name: 'farm_id', type: 'uuid' })
  farmId: string;

  @ManyToOne(() => Farm, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'farm_id' })
  farm: Farm;

  @Column({ name: 'feed_item_id', type: 'uuid' })
  feedItemId: string;

  @ManyToOne(() => FeedItem, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'feed_item_id' })
  feedItem: FeedItem;

  @Column({ name: 'consumption_date', type: 'date' })
  consumptionDate: string;

  @Column({ name: 'quantity_kg', type: 'decimal', precision: 10, scale: 2 })
  quantityKg: number;

  @Column({ name: 'target_type', length: 50 }) // 'POULTRY_BATCH' or 'DAIRY_HERD'
  targetType: string;

  @Column({ name: 'target_id', type: 'uuid', nullable: true })
  targetId: string;

  @Column({ name: 'total_cost', type: 'decimal', precision: 12, scale: 2, default: 0 })
  totalCost: number;

  @Column({ type: 'text', nullable: true })
  remarks: string;
}

