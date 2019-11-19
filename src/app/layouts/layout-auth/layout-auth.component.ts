import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-layout-auth',
  templateUrl: './layout-auth.component.html',
  styleUrls: ['./layout-auth.component.scss']
})
export class LayoutAuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('body').removeClass();
    $('body').addClass('vertical-layout vertical-menu-modern 1-column navbar-floating footer-static bg-full-screen-image blank-page dark-layout');
  }

}
