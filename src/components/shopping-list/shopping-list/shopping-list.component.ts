import { Component, OnInit } from "@angular/core";

import { Ingredient } from "src/models/Ingredient.model";
import { ShoppingListService } from 'src/services/shopping-list.service';
import { RecipeService } from 'src/services/recipe.service';

@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html",
    styleUrls: ["./shopping-list.component.css"],
})
export class SHoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [];

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit() {
        this.ingredients = this.shoppingListService.getIngredients();
        this.shoppingListService.ingredientsChanged.subscribe((newIngredients: Ingredient[]) => { 
            this.ingredients = newIngredients; 
        });
    }

    
}
