import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'app works!';

  greeting: string ; 
  constructor(){
    this.greeting ='Hello Angular 2 old one -_-! '
  }



}
