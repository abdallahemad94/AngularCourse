import { Component, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";

import { Ingredient } from 'src/models/Ingredient.model';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
    @ViewChild("nameInput") nameInput: ElementRef;
    @ViewChild("amountInput") amountInput: ElementRef;
    @Output() IngredientAdded: EventEmitter<Ingredient>;

    constructor() {
        this.IngredientAdded = new EventEmitter<Ingredient>();
     }

    addIngrediant() {
        let ingredient = new Ingredient (
            this.nameInput.nativeElement.value,
            this.amountInput.nativeElement.value);

        this.IngredientAdded.emit(ingredient);
        return false;
    }
}