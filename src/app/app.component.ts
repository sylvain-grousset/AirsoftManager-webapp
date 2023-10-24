import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit{
  title = 'AirsoftManager-webapp';

  constructor(private apiService: ApiService){}

  lesSessions: SessionNbrParticipant[] = [];

  ngOnInit(): void {
      this.apiService.getAllSessions().subscribe(res => {
        this.lesSessions = res;
        console.log(res);
      })
  }

}
