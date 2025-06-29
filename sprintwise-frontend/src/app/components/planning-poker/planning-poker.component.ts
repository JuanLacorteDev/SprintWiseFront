import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { PlanningPokerService } from './services/planning-poker.service';
import { CardUser } from '../../models/user/CardUser';
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-planning-poker',
  imports: [UserCardComponent, CommonModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'none' })),
      ]),
    ]),
  ],
  templateUrl: './planning-poker.component.html',
  styleUrl: './planning-poker.component.scss',
})
export class PlanningPokerComponent implements OnInit, OnDestroy {
  public organizerUser = {
    name: 'Alguem',
    nickName: 'PO',
    userId: '8b677bb8-7633-49e0-843b-640926830a3e',
    valueVote: '0',
    labelStatus: 'Aguardando...',
    hasVoted: false,
    showVote: false,
    avatarUrl: '',
  };

  public bottomUsers: CardUser[] = [];
  public selectedVote: string = '';
  voteCards = ['1', '2', '3', '5', '8', '13', '21', '?'];

  constructor(protected planningPokerService: PlanningPokerService) {}

  ngOnDestroy(): void {
    this.planningPokerService.leavePlanning(
      '3d6e5dcf-c11a-47f3-becc-2743a862d768'
    );
  }

  async ngOnInit(): Promise<void> {
    

    this.planningPokerService.startConnection().then(() => {
      this.planningPokerService.joinPlanning(
        '3ec19a8a-b594-4888-a378-2e11c42080f7'
      );

      this.planningPokerService.listenForVotes((userVote) => {
        console.table(this.bottomUsers);
        var user = this.bottomUsers.find((bu) => bu.userId == userVote.id);
        if (user) {
          user.hasVoted = true;
          user.valueVote = userVote.voteValue;
        }
      });

      this.planningPokerService.listenForNewUser((userJoined) =>{
        if(userJoined){
          this.bottomUsers.push({
            name: userJoined.userName, 
            nickName: userJoined.userNickName,
            userId: userJoined.userId,
            valueVote: '0', 
            labelStatus: 'Votando...',
            hasVoted: false,
            showVote: false,
            avatarUrl: ''
          })
        }
      })
    });
  }

  selectVote(card: string) {
    this.selectedVote = card;
  }

  confirmVote() {
    this.bottomUsers.push({
      name: 'Alguem',
      nickName: 'PO',
      userId: '8b677bb8-7633-49e0-843b-640926830a3e',
      valueVote: '0',
      labelStatus: 'Aguardando...',
      hasVoted: false,
      showVote: false,
      avatarUrl: '',
    });

    console.log('Confirmando voto:', this.selectedVote);
  }
}

