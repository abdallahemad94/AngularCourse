import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCourse';
  View: string = "Recipes";

  ChangeView(newView: string) {
    this.View = newView;
  }
}
