import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api-service.service';
import { Session } from './interface/Session';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogInscriptionComponent } from './dialog-inscription/dialog-inscription.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AirsoftManager-webapp';

  constructor(private apiService: ApiService, public dialog: MatDialog){}

  lesSessions: Session[] = [];

  ngOnInit(): void {
      this.apiService.getAllSessions().subscribe(res => {
        this.lesSessions = res;
      })
  }

  openDialog(sessionID: number){
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";

    this.dialog.open(DialogInscriptionComponent, {
      data: { sessionID },
      
    });
  }

}
