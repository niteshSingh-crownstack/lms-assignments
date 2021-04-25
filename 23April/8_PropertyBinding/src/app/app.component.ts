import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title='blog';
  name="bruce";
  disabledBox=true;
  enableBox(){
    this.disabledBox=false;
  }
}
