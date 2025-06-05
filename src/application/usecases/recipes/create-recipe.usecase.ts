import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from 'src/application/dtos/create-recipes.dto';
import { RecipeEntity } from 'src/domain/entities/recipe.entity';
import { IRecipeRepository } from 'src/domain/repositories/irecipe.repository';

@Injectable()
export class CreateRecipeUseCase {
  constructor(private readonly recipeRepository: IRecipeRepository) {}

  execute(recipeData: CreateRecipeDto) {
    const recipe = new RecipeEntity(recipeData);

    const recipeCreated = this.recipeRepository.create(recipe);
    return recipeCreated;
  }
}
