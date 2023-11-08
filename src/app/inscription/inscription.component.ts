import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InscriptionParticipant } from '../interface/InscriptionParticipant';
import { ApiService } from '../service/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../service/utils.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
  public triedToSubmit = false;
  sessionID!: number;
  public imageSource!: string;
  public waitingForQR = true;

  public participantForm = new FormGroup({
    participantNom: new FormControl('', [Validators.required]),
    participantPrenom: new FormControl('', [Validators.required]),
    participantEmail: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  });

  constructor(private apiService: ApiService, private route: ActivatedRoute, private sanitizer: DomSanitizer, public utilsService: UtilsService){
    
  }

  ngOnInit(){
    this.route.params.subscribe(params => {this.sessionID = params['idSession']});
    this.waitingForQR = true;
  }

  public onSubmit(e: any) {
    if(this.participantForm.invalid) this.triedToSubmit = true;
    
    this.utilsService.checkFormsInvalid(this.participantForm);
    if(!this.participantForm.invalid){
      let leParticipant: InscriptionParticipant = {
        sessionID: this.sessionID,
        nom: this.participantForm.controls.participantNom.value!,
        prenom: this.participantForm.controls.participantPrenom.value!,
        email: this.participantForm.controls.participantEmail.value!
      }
  
      this.apiService.inscriptionParticipant(leParticipant).subscribe(res => {
        if(res == "Already registered"){
          console.log('Impossible de s\'inscrire plusieurs fois à la même session.');
        }else if(res == false){
         console.log('Backend erreur');
        }else{
          this.triedToSubmit = false;
          this.waitingForQR = false;
          this.imageSource = res.toString();
        }
      });
  
    }
  }

  downloadImage() {
    let downloadedImage = this.imageSource.substring(this.imageSource.indexOf(',')+1);    
    const blob = this.base64ToBlob(downloadedImage);
    const blobUrl = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = 'QRCode.png';
    a.click();
  }

  private base64ToBlob(base64: string): Blob {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    return new Blob([new Uint8Array(byteNumbers)], { type: 'image/png' });
  }

}
