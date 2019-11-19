import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutDefaultComponent} from './layout-default/layout-default.component';
import {RouterModule} from '@angular/router';
import {MenuMainComponent} from './components/menu-main/menu-main.component';
import {MenuNavComponent} from './components/menu-nav/menu-nav.component';
import {FooterMainComponent} from './components/footer-main/footer-main.component';
import {BreadCrumbsComponent} from './components/bread-crumbs/bread-crumbs.component';
import {LayoutAuthComponent} from './layout-auth/layout-auth.component';
import {AppMenu} from './components/app-menu';
import {App} from './components/app';
import {Components} from './components/components';
import {SharedModule} from '../modules/shared/shared.module';

@NgModule({
  declarations: [
    LayoutDefaultComponent,
    MenuMainComponent,
    MenuNavComponent,
    FooterMainComponent,
    BreadCrumbsComponent,
    LayoutAuthComponent,
  ],
  providers: [
    AppMenu,
    App,
    Components,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    LayoutDefaultComponent,
    MenuMainComponent,
    MenuNavComponent,
    FooterMainComponent,
    BreadCrumbsComponent,
    LayoutAuthComponent,
  ],
  entryComponents: [
    MenuMainComponent,
    MenuNavComponent,
    FooterMainComponent,
    BreadCrumbsComponent,
    LayoutAuthComponent
  ]
})
export class LayoutsModule {
}
