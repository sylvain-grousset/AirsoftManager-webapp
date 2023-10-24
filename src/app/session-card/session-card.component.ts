import { Component, Input } from '@angular/core';
import { SessionNbrParticipant } from '../interface/SessionNbrParticipant';
import { MatDialog } from '@angular/material/dialog';
import { DialogInscriptionComponent } from '../dialog-inscription/dialog-inscription.component';

@Component({
  selector: 'app-session-card',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.scss']
})

export class SessionCardComponent {
  @Input() lesSessions: SessionNbrParticipant[] = [];

  constructor(private dialog: MatDialog){}

  openDialog(sessionID: number){

    this.dialog.open(DialogInscriptionComponent, {
      data: { sessionID },
      disableClose: true
      
    });
  }

}
