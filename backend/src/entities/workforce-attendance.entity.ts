import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Employee } from './employee.entity';
import { Farm } from './farm.entity';

export enum AttendanceStatus {
  PRESENT = 'PRESENT',
  HALF_DAY = 'HALF_DAY',
  ABSENT = 'ABSENT',
  LEAVE = 'LEAVE',
}

@Entity('workforce_attendance')
export class WorkforceAttendance extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @Column({ name: 'farm_id', type: 'uuid' })
  farmId: string;

  @ManyToOne(() => Farm, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'farm_id' })
  farm: Farm;

  @Column({ name: 'employee_id', type: 'uuid' })
  employeeId: string;

  @ManyToOne(() => Employee, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @Column({ name: 'attendance_date', type: 'date' })
  attendanceDate: string;

  @Column({
    type: 'varchar',
    length: 30,
    default: AttendanceStatus.PRESENT,
  })
  status: AttendanceStatus;

  @Column({ name: 'hours_worked', type: 'decimal', precision: 4, scale: 2, default: 8.0 })
  hoursWorked: number;

  @Column({ name: 'allocated_cost', type: 'decimal', precision: 8, scale: 2, default: 0 })
  allocatedCost: number;

  @Column({ name: 'assigned_shed_id', type: 'uuid', nullable: true })
  assignedShedId: string;
}

