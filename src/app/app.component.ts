import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   count:number=0
    increment(){
      this.count++
    }
    decrement(){
      this.count--
    }
    reset(){
      this.count=0
    }

    handleCounter(val:string){
      if(val==='increment'){
        this.increment()
      }
      else if(val==='decrement'){
        this.decrement()
      }
      else{
        this.reset()
      }
    }
  }
