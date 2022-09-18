import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
})
export class MainContainerComponent implements OnInit {
  items: MenuItem[] = [
    {
      title: 'Home',
      icon: 'pi pi-home',
      routerLink: '/',
    },
    {
      label: 'Shipping Address',
      title: 'Shipping Address',
      icon: 'pi pi-send',
    },
    {
      label: 'RxJs Basics',
      routerLink: '/rxjs/basics',
    },
    {
      label: 'RxJs Master',
      routerLink: '/rxjs/master',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
