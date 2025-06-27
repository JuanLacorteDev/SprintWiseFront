import { Component, Input } from '@angular/core';
import { CardUser } from '../../../models/user/CardUser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})


export class UserCardComponent {
  @Input() user: CardUser | undefined;
}
