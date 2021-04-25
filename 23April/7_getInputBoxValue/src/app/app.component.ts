import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title='blog';
  currentVal="";
  getVal(val){
    console.warn(val)
    this.currentVal=val;
  }
}
