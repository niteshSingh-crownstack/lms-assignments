import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './users/list/list.component';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [
{
  path:'login',
  component:LoginComponent
},{
  path:'list',
  component:ListComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
