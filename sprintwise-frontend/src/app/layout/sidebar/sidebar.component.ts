import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-sidebar',
  imports: [PanelMenuModule, ButtonModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit {
  itemsPrincipal: MenuItem[] = [];
  itemsAnalise: MenuItem[] = [];
  @Input() collapsed = false;

  ngOnInit() {
    this.itemsPrincipal = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        routerLink: '/dashboard',
      },
      {
        label: 'Planning Poker',
        icon: 'fa-solid fa-dice',
        routerLink: '/planning-poker',
      },
      {
        label: 'Projetos <span class="label-pro">PRO</span>',
        icon: 'pi pi-objects-column',
        routerLink: '/projetos',
        escape: false,
        disabled: true,
        title: 'Disponível apenas para usuários PRO'
      },
      {
        label: 'Squads <span class="label-pro">PRO</span>',
        icon: 'pi pi-users',
        routerLink: '/squads',
        escape: false,
        disabled: true,
        title: 'Disponível apenas para usuários PRO'
      },
      {
        label: 'Sprints <span class="label-pro">PRO</span>',
        icon: 'pi pi-calendar-clock',
        routerLink: '/sprints',
        escape: false,
        disabled: true,
        title: 'Disponível apenas para usuários PRO'
      },
    ];

    this.itemsAnalise = [
      {
        label: 'Relatórios <span class="label-pro">PRO</span>',
        icon: 'pi pi-file-excel',
        routerLink: '/dashboard',
        escape: false,
        disabled: true,
        title: 'Disponível apenas para usuários PRO'
      },
      {
        label: 'Gráficos <span class="label-pro">PRO</span>',
        icon: 'pi pi-chart-line',
        routerLink: '/usuarios',
        escape: false,
        disabled: true,
        title: 'Disponível apenas para usuários PRO'
      },
    ];
  }
}
