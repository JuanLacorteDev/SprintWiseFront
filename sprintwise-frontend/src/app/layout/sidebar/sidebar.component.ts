import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-sidebar',
  imports: [PanelMenuModule, ButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
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
