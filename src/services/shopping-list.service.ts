import { Ingredient } from "src/models/Ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
  ingredientsChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  ingredientSelected: Subject<Ingredient> = new Subject<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient("apples", 5),
    new Ingredient("Tomato", 3),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngeredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngeredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(ingred: Ingredient) {
    let index = this.ingredients.findIndex(i => i === ingred);
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
