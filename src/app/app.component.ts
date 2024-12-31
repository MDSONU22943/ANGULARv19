import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
@Component({
  selector: 'app-root',
  imports: [LoginComponent,SignupComponent],
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
