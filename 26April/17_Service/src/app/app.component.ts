import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title='blog';
  name='';
constructor(private user:UsersService){
  console.warn(this.user.getData());
this.name=user.getData().name;
}
}
