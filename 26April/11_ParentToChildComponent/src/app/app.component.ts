import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title='blog';
 data={
   name:'bruce',
   age:40,
   email:'test@test.com'
 }
 
}
