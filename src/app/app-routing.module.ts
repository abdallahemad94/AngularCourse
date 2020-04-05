import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "src/components/recipe-book/recipes/recipes.component";
import { ShoppingListComponent } from "src/components/shopping-list/shopping-list/shopping-list.component";
import { ShoppingListEditComponent } from "src/components/shopping-list/shopping-list-edit/shopping-list-edit.component";
import { RecipeStartComponent } from "src/components/recipe-book/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "src/components/recipe-book/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "src/components/recipe-book/recipe-edit/recipe-edit.component";

const routes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    component: RecipesComponent,
    children: [
      { path: "", component: RecipeStartComponent },
      { path: "new", component: RecipeEditComponent },
      { path: ":id", component: RecipeDetailComponent },
      { path: ":id/edit", component: RecipeEditComponent }
    ]
  },
  {
    path: "shoppingList",
    component: ShoppingListComponent,
    children: [{ path: "edit", component: ShoppingListEditComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
