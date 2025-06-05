import { Body, Controller, Get, Param } from '@nestjs/common';
import { GetRecipeByIdUseCase } from 'src/application/usecases/recipes/get-by-id-recipe..usecase';

@Controller('recipes')
export class ShowRecipeByIdController {
  constructor(private readonly GetRecipeByIdUseCase: GetRecipeByIdUseCase) {}
  @Get(':id')
  getById(@Param('id') id: string) {
    const recipe = this.GetRecipeByIdUseCase.execute(id);
    if (!recipe) {
      return { message: 'Recipe not found' };
    }
    return recipe;
  }
}
