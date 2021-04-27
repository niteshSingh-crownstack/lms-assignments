import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef,
} from '@angular/core';
import { UserlistComponent } from './userlist/userlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blog';
  constructor(
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  async loadAdmin() {
    this.vcr.clear();
    const { AdminlistComponent } = await import(
      './adminlist/adminlist.component'
    );
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(AdminlistComponent)
    );
  }

  async loadUser() {
    this.vcr.clear();
    const { UserlistComponent } = await import('./userlist/userlist.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(UserlistComponent)
    );
  }
}
