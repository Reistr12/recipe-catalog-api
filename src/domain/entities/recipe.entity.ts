export class RecipeEntity {
  id?: string;
  title: string;
  description: string;
  ingredients: string[];
  createdAt?: Date;
  updatedAt?: Date;

  constructor(entity: RecipeEntity) {
    this.title = entity.title;
    this.description = entity.description;
    this.ingredients = entity.ingredients;
  }
}
