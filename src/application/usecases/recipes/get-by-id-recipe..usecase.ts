import { Injectable } from '@nestjs/common';
import { RecipeEntity } from 'src/domain/entities/recipe.entity';
import { IRecipeRepository } from 'src/domain/repositories/irecipe.repository';

@Injectable()
export class GetRecipeByIdUseCase {
  constructor(private readonly repository: IRecipeRepository) {}

  execute(id: string): RecipeEntity | null {
    return this.repository.getById(id);
  }
}
