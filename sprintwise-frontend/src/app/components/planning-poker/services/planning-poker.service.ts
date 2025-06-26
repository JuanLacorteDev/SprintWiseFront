import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanningPokerService {
  private hubConnection!: signalR.HubConnection;

  public startConnection(): Promise<void> {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.apiBaseUrl}/planningpokernotificationhub`) // ajuste se necessário
      .withAutomaticReconnect()
      .build();

    return this.hubConnection
      .start()
      .then(() => console.log('Conectado ao SignalR'))
      .catch(err => console.error('Erro ao conectar SignalR:', err));
  }

  public joinPlanning(planningId: string): void {
    this.hubConnection.invoke('JoinPlanningGroup', planningId)
      .then(() => console.log(`Entrou no grupo ${planningId}`))
      .catch(err => console.error('Erro ao entrar no grupo:', err));
  }

  public listenForVotes(callback: (vote: any) => void): void {
    this.hubConnection.on('SendPlanningVote', callback);
  }

  public leavePlanning(planningId: string): void {
    this.hubConnection.invoke('LeavePlanningGroup', planningId)
      .then(() => console.log(`Saiu do grupo ${planningId}`))
      .catch(err => console.error('Erro ao sair do grupo:', err));
  }
}
