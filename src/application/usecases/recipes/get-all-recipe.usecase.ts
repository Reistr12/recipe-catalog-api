import { Injectable } from '@nestjs/common';
import { IRecipeRepository } from 'src/domain/repositories/irecipe.repository';

@Injectable()
export class GetAllRecipesUseCase {
  constructor(private readonly recipeRepository: IRecipeRepository) {}

  execute() {
    return this.recipeRepository.getAll();
  }
}
