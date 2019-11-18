import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';
import { RouterModule } from '@angular/router';
import { MenuMainComponent } from './components/menu-main/menu-main.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { FooterMainComponent } from './components/footer-main/footer-main.component';



@NgModule({
  declarations: [
    LayoutDefaultComponent,
    MenuMainComponent,
    MenuNavComponent,
    FooterMainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    LayoutDefaultComponent,
    MenuMainComponent,
    MenuNavComponent,
    FooterMainComponent,
  ],
  entryComponents: [
    MenuMainComponent,
    MenuNavComponent,
    FooterMainComponent
  ]
})
export class LayoutsModule { }
