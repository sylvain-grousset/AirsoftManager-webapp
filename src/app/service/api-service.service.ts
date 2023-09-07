import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../interface/Session';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'https://localhost:7289/api'

  constructor(private http: HttpClient) { }

  getAllSessions(){
    return this.http.get<Session[]>(this.API_URL + '/Session/GetAll');
  }

}
