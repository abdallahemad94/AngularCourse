import {EventEmitter } from "@angular/core";
import { Ingredient } from "src/models/Ingredient.model";

export class ShoppingListService {
    ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient("apples", 5),
        new Ingredient("Tomato", 3)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngeredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngeredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}