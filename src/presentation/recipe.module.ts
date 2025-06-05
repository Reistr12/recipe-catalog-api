import { Module } from '@nestjs/common';
import { CreateRecipeController } from './controllers/recipes/create-recipe.controller';
import { ShowAllRecipesController } from './controllers/recipes/get-all-recipe.controller';
import { ShowRecipeByIdController } from './controllers/recipes/get-by-id-recipe.controller';
import { CreateRecipeUseCase } from 'src/application/usecases/recipes/create-recipe.usecase';
import { GetAllRecipesUseCase } from 'src/application/usecases/recipes/get-all-recipe.usecase';
import { IRecipeRepository } from '@/domain/repositories/irecipe.repository';
import { RecipeRepository } from 'src/infrastructure/repositories/recipe.repository';
import { GetRecipeByIdUseCase } from '@/application/usecases/recipes/get-by-id-recipe.usecase';

@Module({
  imports: [],
  controllers: [
    CreateRecipeController,
    ShowAllRecipesController,
    ShowRecipeByIdController,
  ],
  providers: [
    {
      provide: IRecipeRepository,
      useClass: RecipeRepository,
    },
    GetRecipeByIdUseCase,
    CreateRecipeUseCase,
    GetAllRecipesUseCase,
  ],
})
export class RecipeModule {}
