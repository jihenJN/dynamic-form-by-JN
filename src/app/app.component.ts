import { AfterViewInit, Component } from '@angular/core';
import { SurveyNG, Model } from "survey-angular";
const json = require("../assets/survey.json");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'dynamic-form-by-JN';
  ngAfterViewInit() {
    SurveyNG.render("surveyElement", {
      model: new Model(json)
    })
  }
}
