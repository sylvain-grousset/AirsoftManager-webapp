import { Component, Input } from '@angular/core';
import { SessionNbrParticipant } from '../interface/SessionNbrParticipant';
import { MatDialog } from '@angular/material/dialog';
import { DialogInscriptionComponent } from '../dialog-inscription/dialog-inscription.component';

@Component({
  selector: '[app-session-card]',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.scss']
})

export class SessionCardComponent {
  @Input() uneSession!: SessionNbrParticipant;

  constructor(private dialog: MatDialog){}

  openDialog(sessionID: number){

    this.dialog.open(DialogInscriptionComponent, {
      data: { sessionID },
      disableClose: true
      
    });
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
