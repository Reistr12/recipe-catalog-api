import { RecipeEntity } from '../entities/recipe.entity';

export abstract class IRecipeRepository {
  abstract create(recipeData: RecipeEntity): RecipeEntity;
  abstract getAll(): RecipeEntity[];
  abstract getById(id: string): RecipeEntity | null;
}
