import { Controller, Get } from '@nestjs/common';
import { GetAllRecipesUseCase } from 'src/application/usecases/recipes/get-all-recipe.usecase';

@Controller('recipes')
export class ShowAllRecipesController {
  constructor(private readonly GetAllRecipesUseCase: GetAllRecipesUseCase) {}
  @Get()
  ShowRecipes() {
    return this.GetAllRecipesUseCase.execute();
  }
}
