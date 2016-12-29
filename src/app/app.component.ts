import { Component, ViewEncapsulation } from '@angular/core';  // just use my scss, added ViewEncapsulation



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None    // just use my scss, None, Emulate(default) or Native

})
export class AppComponent {
  title = 'app works!';

  greeting: string ; 
  constructor(){
    this.greeting ='Hello Angular 2 old one -_-! '
  }



}
