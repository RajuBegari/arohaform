import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Farm } from './farm.entity';
import { Shed } from './shed.entity';

export enum AnimalSpecies {
  COW = 'COW',
  BUFFALO = 'BUFFALO',
}

export enum LactationStage {
  EARLY = 'EARLY',
  MID = 'MID',
  LATE = 'LATE',
  DRY = 'DRY',
  HEIFER = 'HEIFER',
}

export enum HealthStatus {
  HEALTHY = 'HEALTHY',
  UNDER_TREATMENT = 'UNDER_TREATMENT',
  QUARANTINED = 'QUARANTINED',
  DECEASED = 'DECEASED',
}

@Entity('animals')
export class Animal extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @Column({ name: 'farm_id', type: 'uuid' })
  farmId: string;

  @ManyToOne(() => Farm, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'farm_id' })
  farm: Farm;

  @Column({ name: 'shed_id', type: 'uuid', nullable: true })
  shedId: string;

  @ManyToOne(() => Shed, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn({ name: 'shed_id' })
  shed: Shed;

  @Column({ name: 'tag_number', length: 50 })
  tagNumber: string;

  @Column({
    type: 'varchar',
    length: 30,
    default: AnimalSpecies.COW,
  })
  species: AnimalSpecies;

  @Column({ length: 100 })
  breed: string;

  @Column({ length: 10, default: 'FEMALE' })
  gender: string;

  @Column({ name: 'birth_date', type: 'date', nullable: true })
  birthDate: string;

  @Column({
    name: 'lactation_stage',
    type: 'varchar',
    length: 30,
    default: LactationStage.EARLY,
  })
  lactationStage: LactationStage;

  @Column({ name: 'lactation_number', type: 'int', default: 1 })
  lactationNumber: number;

  @Column({
    name: 'health_status',
    type: 'varchar',
    length: 30,
    default: HealthStatus.HEALTHY,
  })
  healthStatus: HealthStatus;

  @Column({ name: 'current_weight_kg', type: 'decimal', precision: 6, scale: 2, nullable: true })
  currentWeightKg: number;
}

