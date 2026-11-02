import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Farm } from './farm.entity';

@Entity('employees')
export class Employee extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @Column({ name: 'farm_id', type: 'uuid' })
  farmId: string;

  @ManyToOne(() => Farm, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'farm_id' })
  farm: Farm;

  @Column({ name: 'employee_code', length: 50, unique: true })
  employeeCode: string;

  @Column({ name: 'full_name', length: 150 })
  fullName: string;

  @Column({ length: 100 })
  designation: string; // e.g., 'Shed Supervisor', 'Milking Operator', 'Feed Handler'

  @Column({ length: 30 })
  phone: string;

  @Column({ name: 'monthly_salary', type: 'decimal', precision: 10, scale: 2, default: 0 })
  monthlySalary: number;

  @Column({ name: 'daily_wage_rate', type: 'decimal', precision: 8, scale: 2, default: 0 })
  dailyWageRate: number;

  @Column({ name: 'joining_date', type: 'date' })
  joiningDate: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;
}

