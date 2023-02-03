import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const AUTH_API = 'http://localhost:8080/api/auth/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, senha: string): Observable<any> {
    return this.http.post(AUTH_API + 'logar', {
      username,
      senha
    }, httpOptions);
  }

  register(username: string, email: string, senha: string): Observable<any> {
    return this.http.post(AUTH_API + 'deslogar', {
      username,
      email,
      senha
    }, httpOptions);
  }
}