import { Component } from '@angular/core';
import { dataType } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title='blog';

getData(){
  const data:dataType={
    name:"peter",
    id:10,
    indian:false,
    address:"Delhi, India"
  }
  return data;
}
}
