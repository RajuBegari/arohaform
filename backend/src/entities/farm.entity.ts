import { Entity, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Organization } from './organization.entity';
import { Shed } from './shed.entity';

export enum FarmType {
  POULTRY = 'POULTRY',
  DAIRY = 'DAIRY',
  INTEGRATED = 'INTEGRATED',
  FEED_MILL = 'FEED_MILL',
}

@Entity('farms')
export class Farm extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @ManyToOne(() => Organization, (org) => org.farms, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'organization_id' })
  organization: Organization;

  @Column({ length: 150 })
  name: string;

  @Column({
    name: 'farm_type',
    type: 'varchar',
    length: 50,
    default: FarmType.INTEGRATED,
  })
  farmType: FarmType;

  @Column({ type: 'text' })
  address: string;

  @Column({ name: 'latitude', type: 'decimal', precision: 10, scale: 6, nullable: true })
  latitude: number;

  @Column({ name: 'longitude', type: 'decimal', precision: 10, scale: 6, nullable: true })
  longitude: number;

  @Column({ name: 'total_area_acres', type: 'decimal', precision: 8, scale: 2, nullable: true })
  totalAreaAcres: number;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @OneToMany(() => Shed, (shed) => shed.farm)
  sheds: Shed[];
}

