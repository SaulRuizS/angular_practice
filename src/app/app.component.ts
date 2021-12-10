import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
  // styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: String = "Movies";
  movies: Array<{ name: String; available: number }> = [
    {
      name: "SpiderMan",
      available: 6
    },
    {
      name: "StarWars",
      available: 8
    }
  ];
}
