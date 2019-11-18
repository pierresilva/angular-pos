import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppMenu } from '../components/app-menu';
import { App } from '../components/app';
import { Components } from '../components/components';

declare var $: any;
@Component({
  selector: 'app-layout-default',
  templateUrl: './layout-default.component.html',
  styleUrls: ['./layout-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutDefaultComponent implements OnInit {

  constructor(
    public appMenu: AppMenu,
    public app: App,
    public components: Components,
  ) { }

  ngOnInit() {
    $('body').removeClass();
    $('body').addClass('vertical-layout vertical-menu-modern 2-columns menu-collapsed dark-layout');
    this.appMenu.init(window, document, $);
    this.app.init(window, document, $);
    this.components.init(window, document, $);
  }

}
