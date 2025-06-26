import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-layout',
  imports: [
    CommonModule,
    RouterModule,
    BadgeModule,
    PanelMenuModule,
    SidebarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  itemsPrincipal: MenuItem[] = [];
  itemsAnalise: MenuItem[] = [];

  ngOnInit() {
    this.itemsPrincipal = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: '/projetos',
      },
      {
        label: 'Projetos',
        icon: 'pi pi-objects-column',
        routerLink: '/projetos',
      },
      {
        label: 'Squads',
        icon: 'pi pi-users',
        routerLink: '/squads',
      },
      {
        label: 'Sprints',
        icon: 'pi pi-calendar-clock',
        routerLink: '/sprints',
      },
    ];

    this.itemsAnalise = [
      {
        label: 'Relatórios',
        icon: 'pi pi-file-excel',
        routerLink: '/dashboard',
      },
      {
        label: 'Gráficos',
        icon: 'pi pi-chart-line',
        routerLink: '/usuarios',
      },
    ];
  }
}
