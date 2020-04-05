import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";

import { ActivatedRoute, Params, Router } from "@angular/router";
import { RecipeService } from "src/services/recipe.service";
import { Recipe } from "src/models/Recipe.model";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"],
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  recipe: Recipe;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editMode = params["id"] != null;
      this.recipe = this.recipeService.getRecipeByIndex(this.id);
    });
    this.initForm();
  }

  private initForm(): void {
    let recipeName: string = "";
    let recipeDescription: string = "";
    let recipeImagePath: string = "";
    let ingredientsArray = new FormArray([]);

    if (this.editMode) {
      recipeName = this.recipe.name;
      recipeDescription = this.recipe.description;
      recipeImagePath = this.recipe.imagePath;
      if (this.recipe["Ingredients"]) {
        for (let ingredient of this.recipe.Ingredients) {
          let nameCtrl = new FormControl(ingredient.name, Validators.required);
          let amountCtrl = new FormControl(ingredient.amount, [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/),
          ]);
          ingredientsArray.push(
            new FormGroup({
              name: nameCtrl,
              amount: amountCtrl,
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      Ingredients: ingredientsArray,
    });
  }

  onSubmit() {
    if (this.editMode)
      this.recipeService.updateRecipe(<Recipe>this.recipeForm.value, this.id);
    else this.recipeService.addRecipe(<Recipe>this.recipeForm.value);
    this.router.navigate(["recipes"]);
  }

  onCancel() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get("Ingredients")).push(
      new FormGroup({
        name: new FormControl("", Validators.required),
        amount: new FormControl(0, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onRemoveIngredient(index: number) {
    (<FormArray>this.recipeForm.get("Ingredients")).removeAt(index);
  }

  trackByFn(index: any, item: any) { return index;}
}
