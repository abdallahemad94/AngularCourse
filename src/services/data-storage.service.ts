import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "./recipe.service";
import { Recipe } from "src/models/Recipe.model";

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    return this.http.put<Recipe[]>(
      "https://udemy-angularcourse-15a0d.firebaseio.com/recipes.json",
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    this.http
      .get<Recipe[]>(
        "https://udemy-angularcourse-15a0d.firebaseio.com/recipes.json"
      )
      .subscribe((recipes: Recipe[]) => {
        for (let recipe of recipes){
          if (!recipe.Ingredients)
            recipe.Ingredients = undefined;
        }
        this.recipeService.setRecipes(recipes);
      });
  }
}
