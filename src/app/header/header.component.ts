import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() public ViewChanged: EventEmitter<string>;

    constructor() {
        this.ViewChanged = new EventEmitter<string>();
    }

    GoToRecipes() {
        this.ViewChanged.emit("Recipes");
        console.log("change to Recipes");
        return false;
    }

    GoToShopping() {
        this.ViewChanged.emit("Shopping");
        console.log("change to Shopping");
        return false;
    }
}
