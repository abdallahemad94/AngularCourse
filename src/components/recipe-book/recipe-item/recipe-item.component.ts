import { Component, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import {Recipe} from 'src/models/Recipe.model';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
    @Input() recipe: Recipe;
    @Output() viewRecipeDetail: EventEmitter<Recipe>;
    constructor() {
        this.viewRecipeDetail = new EventEmitter<Recipe>();
    }

    RecipeDetail() {
        this.viewRecipeDetail.emit(this.recipe);
    }
}