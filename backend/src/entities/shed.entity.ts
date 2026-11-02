import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Farm } from './farm.entity';

export enum ShedType {
  BROILER = 'BROILER',
  LAYER = 'LAYER',
  COUNTRY_CHICKEN = 'COUNTRY_CHICKEN',
  MILKING_PARLOR = 'MILKING_PARLOR',
  CALF_PEN = 'CALF_PEN',
  STORAGE = 'STORAGE',
}

@Entity('sheds')
export class Shed extends BaseEntity {
  @Column({ name: 'farm_id', type: 'uuid' })
  farmId: string;

  @ManyToOne(() => Farm, (farm) => farm.sheds, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'farm_id' })
  farm: Farm;

  @Column({ length: 100 })
  name: string;

  @Column({
    name: 'shed_type',
    type: 'varchar',
    length: 50,
  })
  shedType: ShedType;

  @Column({ type: 'int' })
  capacity: number;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;
}

