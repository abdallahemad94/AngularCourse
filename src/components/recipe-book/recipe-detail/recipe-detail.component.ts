import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Recipe } from "src/models/Recipe.model";
import { RecipeService } from "src/services/recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  recipe: Recipe;
  constructor(
    private recipeService: RecipeService,
    private rotue: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.rotue.params.subscribe((params) => {
      this.id = parseInt(params["id"]);
      this.recipe = this.recipeService.getRecipeByIndex(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.Ingredients);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(["../"], { relativeTo: this.rotue });
  }
}
