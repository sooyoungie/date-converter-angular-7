import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `<div class="border">
  <h1>Simple Date Converter</h1>
  <br>
  <br>
  <p>Input RFC-3339 Formatted Date: (eg: 2002-10-02T15:00:00Z)</p>
  
    <div id="in" class="block">
      <input id="date" name="date" #myInput="ngModel" class="form-control"
      required minlength="15" maxlength="20" [(ngModel)]="inputValue" >
        <br> <br>
        <button class="btn" [routerLink]="['result']" [queryParams]="{inputValue: inputValue}" >Convert Date</button>
          <br><br>
        <div class="validator" *ngIf="myInput.invalid && (myInput.dirty || myInput.touched)"
              class="alert alert-danger">

        <div class="validator" *ngIf="myInput.errors.required">
              Field must be filled.
        </div>
        <div class="validator" *ngIf="myInput.errors.minlength">
              please fill the field with correct date format.
        </div>
        </div>
    
    <br>
    <br>
  </div>  `,
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  
}
