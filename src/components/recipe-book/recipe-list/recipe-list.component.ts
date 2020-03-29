import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import {RecipeService} from "src/services/recipe.service";
import { Recipe } from 'src/models/Recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() Recipeselected: EventEmitter<Recipe>;
    recipes: Recipe[] = [];
    
    constructor(private recipeService: RecipeService) {
        this.Recipeselected = new EventEmitter<Recipe>();
    }

    ngOnInit(): void {
        this.recipes = this.recipeService.getRecipes();
     }

    viewRecipeDetail(selected: Recipe) {
        this.Recipeselected.emit(selected);
    }
}
