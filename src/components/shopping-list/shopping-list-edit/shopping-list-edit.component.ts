import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";

import { Ingredient } from "src/models/Ingredient.model";
import { ShoppingListService } from "src/services/shopping-list.service";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild("form") form: NgForm;
  subscription: Subscription;
  editMode: boolean = false;
  ingred: Ingredient;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.ingredientSelected.subscribe(
      (ingred: Ingredient) => {
        this.editMode = true;
        this.ingred = ingred;
        this.form.setValue({
          name: this.ingred.name,
          amount: this.ingred.amount,
        });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddIngrediant(form: NgForm) {
    const value = form.value;
    let ingredient = new Ingredient(value["name"], parseInt(value["amount"]));
    if (!this.editMode) {
      this.shoppingListService.addIngeredient(ingredient);
    } else {
      this.ingred.name = ingredient.name;
      this.ingred.amount = ingredient.amount;
      this.editMode = false;
    }
    form.reset();
    this.ingred = null;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.ingred);
    this.form.reset();
    this.ingred = null;
    this.editMode = false;
  }

  onClear() {
    this.form.reset();
    this.ingred = null;
    this.editMode = false;
  }
}
