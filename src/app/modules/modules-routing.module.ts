import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutDefaultComponent } from '../layouts/layout-default/layout-default.component';
import { LayoutAuthComponent } from '../layouts/layout-auth/layout-auth.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {
        path: '',
        loadChildren: './home/home.module#HomeModule',
      }
    ]
  },
  {
    path: '',
    component: LayoutAuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
