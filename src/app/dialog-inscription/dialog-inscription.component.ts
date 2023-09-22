import { Component } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { InscriptionParticipant } from '../interface/InscriptionParticipant';
import { ApiService } from '../service/api-service.service';

@Component({
  selector: 'app-dialog-inscription',
  templateUrl: './dialog-inscription.component.html',
  styleUrls: ['./dialog-inscription.component.scss']
})
export class DialogInscriptionComponent {

  selectedSessionID!: number;
  public participantForm = new FormGroup({
    participantNom: new FormControl('', [Validators.required]),
    participantPrenom: new FormControl('', [Validators.required]),
    participantEmail: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  });

constructor(@Inject(MAT_DIALOG_DATA) public data:any, private apiService: ApiService){
  this.selectedSessionID = data.sessionID;
}

public onSubmit(e: any) {
  if(!this.participantForm.invalid){
    let leParticipant: InscriptionParticipant = {
      sessionID: this.selectedSessionID,
      nom: this.participantForm.controls.participantNom.value!,
      prenom: this.participantForm.controls.participantPrenom.value!,
      email: this.participantForm.controls.participantEmail.value!
    }

    this.apiService.inscriptionParticipant(leParticipant).subscribe(res => {
      if(res == "Already registered"){
        //L'utilisateur ne peut s'inscrire deux fois à la même session.
      }else if(res == false){
        //Erreur lors de l'insertion du participant à la session.
      }else{
        //Ok
      }
    });

  }
}

}
