import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { FeedRecipe } from './feed-recipe.entity';
import { FeedItem } from './feed-item.entity';

@Entity('feed_recipe_items')
export class FeedRecipeItem extends BaseEntity {
  @Column({ name: 'recipe_id', type: 'uuid' })
  recipeId: string;

  @ManyToOne(() => FeedRecipe, (r) => r.items, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'recipe_id' })
  recipe: FeedRecipe;

  @Column({ name: 'feed_item_id', type: 'uuid' })
  feedItemId: string;

  @ManyToOne(() => FeedItem, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'feed_item_id' })
  feedItem: FeedItem;

  @Column({ name: 'inclusion_percentage', type: 'decimal', precision: 5, scale: 2 })
  inclusionPercentage: number;

  @Column({ name: 'quantity_kg', type: 'decimal', precision: 10, scale: 2 })
  quantityKg: number;
}

