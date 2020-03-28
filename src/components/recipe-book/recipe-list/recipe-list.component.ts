import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { Recipe } from 'src/models/Recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe(
            'test 1',
            'desc 1',
            'https://pinchofyum.com/wp-content/uploads/Lo-Mein-Recipe.jpg'),
        new Recipe(
            'test 2',
            'desc 2',
            'https://diethood.com/wp-content/uploads/2019/09/Roasted-Pork-Loin-4.jpg')
    ];

    @Output() Recipeselected: EventEmitter<Recipe>;
    constructor() {
        this.Recipeselected = new EventEmitter<Recipe>();
    }

    ngOnInit(): void { }

    viewRecipeDetail(selected: Recipe) {
        this.Recipeselected.emit(selected);
    }
}
