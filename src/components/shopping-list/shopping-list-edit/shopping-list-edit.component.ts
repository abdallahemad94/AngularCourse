import { Component, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from 'src/models/Ingredient.model';
import { ShoppingListService } from 'src/services/shopping-list.service';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
    @ViewChild("nameInput") nameInput: ElementRef;
    @ViewChild("amountInput") amountInput: ElementRef;

    constructor(private shoppingListService: ShoppingListService) {}

    addIngrediant() {
        let ingredient = new Ingredient (
            this.nameInput.nativeElement.value,
            this.amountInput.nativeElement.value
            );
        this.shoppingListService.addIngeredient(ingredient);
        return false;
    }
}