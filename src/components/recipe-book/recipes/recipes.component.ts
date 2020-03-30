import {Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/Recipe.model';
import { RecipeService } from 'src/services/recipe.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css'],
    providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
    selectedRecipe: Recipe;
    constructor(private recipeService: RecipeService) {}
    
    ngOnInit(){
        this.recipeService.recipeSelected.subscribe((recipe: Recipe) => this.selectedRecipe = recipe);
    }
}