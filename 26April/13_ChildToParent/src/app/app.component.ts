import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title='blog';
name="";
parentFunction(data){
  console.warn(data)
  this.name=data.name;
}

}
