import { Component, Input } from '@angular/core'
import { Recipe } from 'src/models/Recipe.model'
import { RecipeService } from 'src/services/recipe.service';
import { Ingredient } from 'src/models/Ingredient.model';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
    @Input() recipe: Recipe;
    constructor(private recipeService: RecipeService) { }

    onAddToShoppingList()
    {
        this.recipeService.addIngredientsToShoppingListh(this.recipe.Ingredients);
    }

}