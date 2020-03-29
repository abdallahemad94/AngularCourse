import { Recipe } from "src/models/Recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "test 1",
      "desc 1",
      "https://pinchofyum.com/wp-content/uploads/Lo-Mein-Recipe.jpg"
    ),
    new Recipe(
      "test 2",
      "desc 2",
      "https://diethood.com/wp-content/uploads/2019/09/Roasted-Pork-Loin-4.jpg"
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
