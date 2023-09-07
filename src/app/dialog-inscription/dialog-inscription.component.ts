import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-inscription',
  templateUrl: './dialog-inscription.component.html',
  styleUrls: ['./dialog-inscription.component.scss']
})
export class DialogInscriptionComponent {
constructor(@Inject(MAT_DIALOG_DATA) public data:any){
  console.log(data.sessionID);
}
}
