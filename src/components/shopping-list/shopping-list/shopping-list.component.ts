import { Component } from "@angular/core";

import { Ingredient } from "src/models/Ingredient.model";

@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html",
    styleUrls: ["./shopping-list.component.css"]
})
export class SHoppingListComponent {
    ingeredients: Ingredient[] = [
        new Ingredient("apples", 5),
        new Ingredient("Tomato", 3)
    ];

    constructor() { }
    addToList(ingredient: Ingredient){
        this.ingeredients.push(ingredient);
    }
}
