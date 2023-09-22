import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../interface/Session';
import { InscriptionParticipant } from '../interface/InscriptionParticipant';
import { SessionNbrParticipant } from '../interface/SessionNbrParticipant';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'https://localhost:7289/api'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };  

  constructor(private http: HttpClient) { }

  getAllSessions(){
    return this.http.get<SessionNbrParticipant[]>(this.API_URL + '/Session/GetAll');
  }

  inscriptionParticipant(leParticipant: InscriptionParticipant){
    let data = JSON.stringify(leParticipant);
    return this.http.post(this.API_URL + '/Participant/InscriptionParticipant', data, this.httpOptions); 
  }

}
