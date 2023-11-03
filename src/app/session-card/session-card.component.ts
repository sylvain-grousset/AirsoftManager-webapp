import { Component, Input } from '@angular/core';
import { SessionNbrParticipant } from '../interface/SessionNbrParticipant';
import { Router } from '@angular/router';

@Component({
  selector: '[app-session-card]',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.scss']
})

export class SessionCardComponent {
  @Input() uneSession!: SessionNbrParticipant;

  constructor(private router: Router){}

  gotoInscription(sessionID: number){
    this.router.navigateByUrl('inscription/'+sessionID)
  }

  formatDate(date: Date): string {
    date = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    };
    return date.toLocaleDateString('fr-FR', options);
  }

}
