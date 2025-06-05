import { Test, TestingModule } from '@nestjs/testing';
import { GetRecipeByIdUseCase } from './get-by-id-recipe.usecase';
import { IRecipeRepository } from '@/domain/repositories/irecipe.repository';
import { RecipeEntity } from '../../../domain/entities/recipe.entity';

describe('GetRecipeByIdUseCase', () => {
  let useCase: GetRecipeByIdUseCase;
  let repository: IRecipeRepository;
  let getByIdSpy: jest.SpyInstance;

  beforeEach(async () => {
    const repositoryMock = {
      getById: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetRecipeByIdUseCase,
        {
          provide: IRecipeRepository,
          useValue: repositoryMock,
        },
      ],
    }).compile();

    useCase = module.get<GetRecipeByIdUseCase>(GetRecipeByIdUseCase);
    repository = module.get<IRecipeRepository>(IRecipeRepository);
    getByIdSpy = jest.spyOn(repository, 'getById');
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  describe('execute', () => {
    it('should return a recipe when a valid id is provided', () => {
      const recipeId = '123';
      const expectedRecipe = new RecipeEntity({
        title: 'Test Recipe',
        description: 'Test Description',
        ingredients: ['ingredient1', 'ingredient2'],
      });
      expectedRecipe.id = recipeId;

      getByIdSpy.mockReturnValue(expectedRecipe);

      const result = useCase.execute(recipeId);
      console.log(result);
      console.log(expectedRecipe);
      expect(result).toEqual(expectedRecipe);
      expect(getByIdSpy).toHaveBeenCalledWith(recipeId);
    });

    it('should return null when a non-existent id is provided', () => {
      const nonExistentId = 'non-existent-id';

      getByIdSpy.mockReturnValue(null);

      const result = useCase.execute(nonExistentId);

      expect(result).toBeNull();
      expect(getByIdSpy).toHaveBeenCalledWith(nonExistentId);
    });
  });
});
