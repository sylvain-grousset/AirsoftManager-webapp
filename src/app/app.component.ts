/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './service/api-service.service';
import { Session } from './interface/Session';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogInscriptionComponent } from './dialog-inscription/dialog-inscription.component';
import { SessionNbrParticipant } from './interface/SessionNbrParticipant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AirsoftManager-webapp';
  
}
