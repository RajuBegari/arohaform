import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Farm } from './farm.entity';
import { Shed } from './shed.entity';
import { DailyPoultryLog } from './daily-poultry-log.entity';

export enum BirdType {
  BROILER = 'BROILER',
  LAYER = 'LAYER',
  COUNTRY_CHICKEN = 'COUNTRY_CHICKEN',
  BREEDER = 'BREEDER',
}

export enum BatchStatus {
  PLANNED = 'PLANNED',
  ACTIVE = 'ACTIVE',
  HARVESTED = 'HARVESTED',
  CLOSED = 'CLOSED',
}

@Entity('poultry_batches')
export class PoultryBatch extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @Column({ name: 'farm_id', type: 'uuid' })
  farmId: string;

  @ManyToOne(() => Farm, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'farm_id' })
  farm: Farm;

  @Column({ name: 'shed_id', type: 'uuid' })
  shedId: string;

  @ManyToOne(() => Shed, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'shed_id' })
  shed: Shed;

  @Column({ name: 'batch_code', length: 50 })
  batchCode: string;

  @Column({
    name: 'bird_type',
    type: 'varchar',
    length: 50,
    default: BirdType.BROILER,
  })
  birdType: BirdType;

  @Column({ length: 100 })
  breed: string;

  @Column({ name: 'initial_bird_count', type: 'int' })
  initialBirdCount: number;

  @Column({ name: 'current_bird_count', type: 'int' })
  currentBirdCount: number;

  @Column({ name: 'placement_date', type: 'date' })
  placementDate: string;

  @Column({ name: 'expected_harvest_date', type: 'date', nullable: true })
  expectedHarvestDate: string;

  @Column({
    type: 'varchar',
    length: 50,
    default: BatchStatus.ACTIVE,
  })
  status: BatchStatus;

  @Column({ name: 'unit_cost_at_placement', type: 'decimal', precision: 10, scale: 2, default: 0 })
  unitCostAtPlacement: number;

  @OneToMany(() => DailyPoultryLog, (log) => log.batch)
  dailyLogs: DailyPoultryLog[];
}

