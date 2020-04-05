import { Ingredient } from "./Ingredient.model";

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public Ingredients: Ingredient[];
  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.Ingredients = ingredients;
  }
}
