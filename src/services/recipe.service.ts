import { Recipe } from "src/models/Recipe.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/models/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      "test 1",
      "desc 1",
      "../assets/Lo-Mein-Recipe.jpg",
      [
        new Ingredient("ingred1", 1),
        new Ingredient("ingred2", 10),
      ]
    ),
    new Recipe(
      "test 2",
      "desc 2",
      "../assets/Roasted-Pork-Loin-4.jpg",
      [
        new Ingredient("ingred1",2),
        new Ingredient("ingred2", 2),
      ]
    )
  ];

  /**
   *
   */
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingListh(ingredients: Ingredient[]) {
    this.shoppingListService.addIngeredients(ingredients);
  }

}
