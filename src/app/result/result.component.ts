import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  providers:[MainComponent],
  template: `<div class="results">
  <h1>Simple Date Converter</h1>
  <br> <br>
  <p>Converted result</p>
  <br>
  <h2>{{ this.date | date:'EEEE, d MMMM y' }}</h2>
  <br>
  <a routerLink="">back to main page</a>
  </div>`,
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  date = null;
constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.date = this.route.snapshot.queryParamMap.get('inputValue');

    if (this.date.length < 10){
        this.date = null;
    }
  }

}
