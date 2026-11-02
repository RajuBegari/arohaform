import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('audit_logs')
export class AuditLog extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @Column({ name: 'user_id', type: 'uuid', nullable: true })
  userId: string;

  @Column({ name: 'user_email', length: 150, nullable: true })
  userEmail: string;

  @Column({ length: 100 })
  action: string; // e.g. 'CREATE_BATCH', 'LOG_MORTALITY', 'ISSUE_PO', 'RECORD_EXPENSE'

  @Column({ name: 'resource_name', length: 100 })
  resourceName: string;

  @Column({ name: 'resource_id', length: 100, nullable: true })
  resourceId: string;

  @Column({ name: 'old_value', type: 'simple-json', nullable: true })
  oldValue: Record<string, any>;

  @Column({ name: 'new_value', type: 'simple-json', nullable: true })
  newValue: Record<string, any>;

  @Column({ name: 'ip_address', length: 50, nullable: true })
  ipAddress: string;
}

