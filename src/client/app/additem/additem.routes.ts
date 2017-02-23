import { Route } from '@angular/router';
import { AdditemComponent } from './index';

export const AdditemRoutes: Route[] = [
  {
    path: 'additem/:id',
    component: AdditemComponent
  },
  {
    path: 'additem',
    component: AdditemComponent
  }
];
