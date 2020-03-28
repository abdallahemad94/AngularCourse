import {Component } from '@angular/core';
import { Recipe } from 'src/models/Recipe.model';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
    selectedRecipe: Recipe;
    constructor() {}
    OnRecipeSelected(recipe: Recipe){
        this.selectedRecipe = recipe;
    }
}