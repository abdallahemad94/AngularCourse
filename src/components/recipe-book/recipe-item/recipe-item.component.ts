import { Component, Input, HostBinding } from "@angular/core";
import { Recipe } from "src/models/Recipe.model";
import { RecipeService } from "src/services/recipe.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private router: Router, private route: ActivatedRoute) {}
}
