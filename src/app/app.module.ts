import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ShoppingListComponent } from "src/components/shopping-list/shopping-list/shopping-list.component";
import { ShoppingListEditComponent } from "src/components/shopping-list/shopping-list-edit/shopping-list-edit.component";
import { RecipesComponent } from "src/components/recipe-book/recipes/recipes.component";
import { RecipeListComponent } from "src/components/recipe-book/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "src/components/recipe-book/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "src/components/recipe-book/recipe-detail/recipe-detail.component";
import { DropDownDirective } from "src/directives/dropdown.directive";
import { ShoppingListService } from "src/services/shopping-list.service";
import { AppRoutingModule } from "./app-routing.module";
import { RecipeStartComponent } from "src/components/recipe-book/recipe-start/recipe-start.component";
import { RecipeEditComponent } from '../components/recipe-book/recipe-edit/recipe-edit.component';
import { RecipeService } from 'src/services/recipe.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropDownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
