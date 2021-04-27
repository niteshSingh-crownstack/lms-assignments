import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { UsersRoutingModule } from './users-routing.module';

console.warn('users module loaded');
@NgModule({
  declarations: [ListComponent, LoginComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
