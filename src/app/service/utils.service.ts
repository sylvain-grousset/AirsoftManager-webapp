import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  /**
   * Marque les controls invalid en touched lors de la soumission du formulaire.
   * @param form
   * @returns 
   */
  public checkFormsInvalid(form: FormGroup){
    if (form.invalid) {
      form.markAsTouched({ onlySelf: true });
      Object.keys(form.controls).forEach(control => {
        form.get(control)!.markAsTouched({ onlySelf: true });
      });
      return;
    }
  }
  
  /**
   * Utilisé pour changer le style d'un control dans un formulaire (gérer les erreurs).
   * @param control 
   * @returns boolean
   */
  public isInvalid(control: FormControl){
    return control.invalid && control.touched;
}
}
