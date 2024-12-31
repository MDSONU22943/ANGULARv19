import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Code step by step';
  name="Anil Sidhu"
  x=10;
  y=20
  user1="anil"
  user2 = "peter"
}
