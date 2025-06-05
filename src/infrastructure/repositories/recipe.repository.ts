import { Injectable } from '@nestjs/common';
import { RecipeEntity } from 'src/domain/entities/recipe.entity';
import { IRecipeRepository } from 'src/domain/repositories/irecipe.repository';

@Injectable()
export class RecipeRepository implements IRecipeRepository {
  public database: Map<string, RecipeEntity> = new Map();

  constructor() {}

  public create(recipe: RecipeEntity): RecipeEntity {
    const id = crypto.randomUUID();
    recipe = { ...recipe, id, createdAt: new Date(), updatedAt: new Date() }; // Assuming RecipeEntity has an 'id' property
    this.database.set(id, recipe);
    return recipe;
  }

  public getAll(): RecipeEntity[] {
    return Array.from(this.database.values());
  }

  getById(id: string): RecipeEntity | null {
    const recipe = this.database.get(id);
    return recipe ? recipe : null;
  }
}
