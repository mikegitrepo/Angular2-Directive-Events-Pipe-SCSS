import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { AdditemRoutes } from './additem/index';


export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...AdditemRoutes
];
