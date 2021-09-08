import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/folder/Dashboard', icon: 'list' },
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Zahtjev za posudbu', url: '/posudba', icon: 'book' },
    { title: 'Statistika', url: '/statistika', icon: 'stats-chart' },

  ];
  constructor() {}
}
