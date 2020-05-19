import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AtoZ Solutions - User Management App';
  fullName = "Narendra G ";

  // creating date object
  todaysDate = new Date();

  // In Typescript, constructors cannot be overloaded
  // Only one constuctor per class
  constructor(){
    // setInterval() asynchronous function 
    // Arrow functions ( => )
    setInterval(()=>{
      this.todaysDate = new Date();
    },1000);
  }
}
