import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { FeedRecipeItem } from './feed-recipe-item.entity';

@Entity('feed_recipes')
export class FeedRecipe extends BaseEntity {
  @Column({ name: 'organization_id', type: 'uuid' })
  organizationId: string;

  @Column({ length: 150 })
  name: string;

  @Column({ name: 'target_species', length: 50 })
  targetSpecies: string;

  @Column({ name: 'standard_batch_size_kg', type: 'decimal', precision: 10, scale: 2, default: 1000 })
  standardBatchSizeKg: number;

  @Column({ name: 'cost_per_kg', type: 'decimal', precision: 10, scale: 2, default: 0 })
  costPerKg: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(() => FeedRecipeItem, (item) => item.recipe, { cascade: true })
  items: FeedRecipeItem[];
}

