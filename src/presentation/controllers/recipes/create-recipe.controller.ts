import { Body, Controller, Post } from '@nestjs/common';
import { CreateRecipeDto } from 'src/application/dtos/create-recipes.dto';
import { CreateRecipeUseCase } from 'src/application/usecases/recipes/create-recipe.usecase';

@Controller('recipes')
export class CreateRecipeController {
  constructor(private readonly createRecipeUseCase: CreateRecipeUseCase) {}

  @Post()
  createRecipe(@Body() body: CreateRecipeDto) {
    return this.createRecipeUseCase.execute(body);
  }
}
