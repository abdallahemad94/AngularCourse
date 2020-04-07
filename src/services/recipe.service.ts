import { Recipe } from "src/models/Recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "src/models/Ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesUpdated: Subject<Recipe[]> = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe("test 1", "desc 1", "../assets/Lo-Mein-Recipe.jpg", [
      new Ingredient("ingred1", 1),
      new Ingredient("ingred2", 10),
    ]),
    new Recipe("test 2", "desc 2", "../assets/Roasted-Pork-Loin-4.jpg", [
      new Ingredient("ingred1", 2),
      new Ingredient("ingred2", 2),
    ]),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngeredients(ingredients);
  }

  getRecipeByIndex(index: number): Recipe {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesUpdated.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes.slice();
    this.recipesUpdated.next(this.recipes);
  }
  updateRecipe(recipe: Recipe, index: number) {
    this.recipes[index] = recipe;
    this.recipesUpdated.next(this.recipes.slice());
  }
 
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesUpdated.next(this.recipes.slice());
  }
}
