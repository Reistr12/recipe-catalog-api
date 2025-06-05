import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './presentation/recipe.module';

@Module({
  imports: [RecipeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
