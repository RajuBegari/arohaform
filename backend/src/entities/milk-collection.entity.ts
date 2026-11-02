import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Farm } from './farm.entity';
import { Animal } from './animal.entity';

export enum MilkingShift {
  MORNING = 'MORNING',
  AFTERNOON = 'AFTERNOON',
  EVENING = 'EVENING',
}

@Entity('milk_collections')
export class MilkCollection extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @Column({ name: 'farm_id', type: 'uuid' })
  farmId: string;

  @ManyToOne(() => Farm, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'farm_id' })
  farm: Farm;

  @Column({ name: 'animal_id', type: 'uuid', nullable: true })
  animalId: string;

  @ManyToOne(() => Animal, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'animal_id' })
  animal: Animal;

  @Column({ name: 'collection_date', type: 'date' })
  collectionDate: string;

  @Column({
    type: 'varchar',
    length: 20,
    default: MilkingShift.MORNING,
  })
  shift: MilkingShift;

  @Column({ name: 'quantity_litres', type: 'decimal', precision: 8, scale: 2 })
  quantityLitres: number;

  @Column({ name: 'fat_percentage', type: 'decimal', precision: 4, scale: 2, default: 4.0 })
  fatPercentage: number;

  @Column({ name: 'snf_percentage', type: 'decimal', precision: 4, scale: 2, default: 8.5 })
  snfPercentage: number;

  @Column({ name: 'temperature_celsius', type: 'decimal', precision: 4, scale: 1, nullable: true })
  temperatureCelsius: number;

  @Column({ type: 'text', nullable: true })
  remarks: string;
}

