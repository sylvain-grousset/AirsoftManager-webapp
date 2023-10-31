import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InscriptionParticipant } from '../interface/InscriptionParticipant';
import { ApiService } from '../service/api-service.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
  errorMessage: string = "";

  public participantForm = new FormGroup({
    participantNom: new FormControl('', [Validators.required]),
    participantPrenom: new FormControl('', [Validators.required]),
    participantEmail: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  });

  constructor(private apiService: ApiService){
    
  }

  public onSubmit(e: any) {
    if(!this.participantForm.invalid){
      let leParticipant: InscriptionParticipant = {
        sessionID: 1,
        nom: this.participantForm.controls.participantNom.value!,
        prenom: this.participantForm.controls.participantPrenom.value!,
        email: this.participantForm.controls.participantEmail.value!
      }
  
      this.apiService.inscriptionParticipant(leParticipant).subscribe(res => {
        if(res == "Already registered"){
          this.errorMessage = "Impossible de s'inscrire plusieurs fois à la même session";
        }else if(res == false){
          this.errorMessage = "Erreur";
        }else{
          //Ok
        }
      });
  
    }
  }

}
