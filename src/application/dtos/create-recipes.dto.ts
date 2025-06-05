/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, MinLength, IsArray, ArrayMinSize } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  @MinLength(3, { message: 'Title must be at least 3 characters long' })
  title: string;

  @IsArray()
  @ArrayMinSize(1, { message: 'At least one ingredient is required' })
  @IsString({ each: true, message: 'Each ingredient must be a string' })
  ingredients: string[];

  @IsString()
  @MinLength(10, {
    message: 'Instructions must be at least 10 characters long',
  })
  description: string;
}
