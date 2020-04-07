import { Component } from "@angular/core";
import { DataStorageService } from 'src/services/data-storage.service';
import { Recipe } from 'src/models/Recipe.model';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  constructor(private dataStorageSertive: DataStorageService){}
  onSave(){
    this.dataStorageSertive.storeRecipes().subscribe(
      (response: Recipe[]) => console.log(response),
      (error: Response) => console.log(error)
    );
  }
  onGet(){
    this.dataStorageSertive.getRecipes();
  }
}
