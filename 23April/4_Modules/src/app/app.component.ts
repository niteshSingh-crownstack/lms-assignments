import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appName = 'blog app'
name = "bruce";
getName(){
  return this.name;
}
obj = {
  name:'keily',
  age:20
}
arr = ['bruce','tony','peter'];
siteUrl=window.location.href;

}
