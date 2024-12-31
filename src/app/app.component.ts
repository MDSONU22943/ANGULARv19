import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    handleClickEvent(){
      console.log("Function Call")
      this.otherFunction();
      
    }
    otherFunction(){
      console.log("other function");
      
    }
}
