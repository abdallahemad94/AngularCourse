import { Component, OnInit, OnDestroy } from "@angular/core";

import { Ingredient } from "src/models/Ingredient.model";
import { ShoppingListService } from 'src/services/shopping-list.service';
import { RecipeService } from 'src/services/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
      (newIngredients: Ingredient[]) => {
        this.ingredients = newIngredients;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEditIngredient(index: number) {
    this.shoppingListService.ingredientSelected.next(this.ingredients[index]);
  }
}
