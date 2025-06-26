import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { PlanningPokerService } from './services/planning-poker.service';

@Component({
  selector: 'app-planning-poker',
  imports: [UserCardComponent, CommonModule],
  templateUrl: './planning-poker.component.html',
  styleUrl: './planning-poker.component.scss',
})
export class PlanningPokerComponent implements OnInit, OnDestroy {
  constructor(protected planningPokerService: PlanningPokerService) {}
  ngOnDestroy(): void {
    this.planningPokerService.leavePlanning(
      '3ec19a8a-b594-4888-a378-2e11c42080f7'
    );
  }

  ngOnInit(): void {
    this.planningPokerService.startConnection().then(() => {
      this.planningPokerService.joinPlanning(
        '3ec19a8a-b594-4888-a378-2e11c42080f7'
      );
      
      this.planningPokerService.listenForVotes((value) => {
        var userVote = this.bottomUsers.find((bu) => bu.userId == value.userId);
        if (userVote) userVote.voteValue = value.voteValue;
      });

    });
  }

  public bottomUsers: User[] = [
    {
      name: 'Lucas',
      status: 'Votando...',
      userId: '5d29f6ee-5e5e-4a90-b0d6-0901450b12a6',
      voteValue: 0,
    },
    {
      name: 'Breno',
      status: 'Votando...',
      userId: 'fe0d4f61-72a8-4b6f-8fc5-e54f13eebdd5',
      voteValue: 0,
    },
    {
      name: 'Rafael',
      status: 'Votando...',
      userId: '8b677bb8-7633-49e0-843b-640926830a3e',
      voteValue: 0,
    },
  ];
  public rightUsers: any = [{ name: 'juan', status: 'Votando...' }];
  public cards = ['1', '2', '3', '5', '8', '13', '21', '34', '?'];
}

export class User {
  name!: string;
  status!: string;
  userId!: string;
  voteValue!: number;
}
