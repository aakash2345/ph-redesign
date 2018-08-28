import { Component, AfterContentInit, OnInit } from '@angular/core';
import { GlobalState } from '../../global.state';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-content-routes',
  templateUrl: './content-routes.component.html',
  styleUrls: ['./content-routes.component.scss'],
  providers: [GlobalState]
})
export class ContentRoutesComponent {

  public activePageTitle: string = '';
  route: string;
  constructor(private _state: GlobalState, router: Router, location: Location) {
    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.route = location.path();
        this.activePageTitle = location.path();

      }
    });

    this._state.subscribe('menu.activeLink', (activeLink) => {
      // if (activeLink.title == undefined) {
      //   if (this.route.indexOf('users') > -1) {
      //     activeLink.title = 'general.menu.users';
      //   }
      //   else if (this.route.indexOf('account') > -1) {
      //     activeLink.title = 'general.menu.accounts';
      //   }
      //   else if (this.route.indexOf('asset') > -1) {
      //     activeLink.title = 'general.menu.asset';
      //   }
      // }
      this.activePageTitle = activeLink.title;
    });
  }



}
