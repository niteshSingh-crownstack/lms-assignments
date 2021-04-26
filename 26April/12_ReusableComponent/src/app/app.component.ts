import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title='blog';
 users=[{
   name:'peter',
   age:25,
   address:'noida'
 },
 {
  name:'bruce',
  age:25,
  address:'gurgaon'
},
{
  name:'tony',
  age:25,
  address:'Delhi'
},

]
}
