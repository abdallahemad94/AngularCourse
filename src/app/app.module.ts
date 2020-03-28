import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SHoppingListComponent } from 'src/components/shopping-list/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from 'src/components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipesComponent } from 'src/components/recipe-book/recipes/recipes.component';
import { RecipeListComponent } from 'src/components/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from 'src/components/recipe-book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from 'src/components/recipe-book/recipe-detail/recipe-detail.component';
import { DropDownDirective } from 'src/directives/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SHoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropDownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
