import { Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { PlanningPokerComponent } from './components/planning-poker/planning-poker.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
       {
        path: 'planning-poker',
        component: PlanningPokerComponent
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./components/dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTES)
      }
    ]
  }
];

export default routes;