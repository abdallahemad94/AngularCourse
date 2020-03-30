import { Component, Input, HostBinding } from '@angular/core';
import {Recipe} from 'src/models/Recipe.model';
import { RecipeService } from "src/services/recipe.service";

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
    @HostBinding("style.margin") margin = ".25px"
    @Input() recipe: Recipe;
    constructor(private recipeService: RecipeService) {}

    onRecipeClicked() {
        this.recipeService.recipeSelected.emit(this.recipe);
    }
}