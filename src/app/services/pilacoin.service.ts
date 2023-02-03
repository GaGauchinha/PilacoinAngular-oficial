import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pilacoin} from "../models/pilacoin/pilacoin.model";


const baseUrl = 'http://localhost:8080/api/pilacoin';

@Injectable({
  providedIn: 'root'
})
export class PilacoinService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Pilacoin[]> {
    return this.http.get<Pilacoin[]>(baseUrl);
  }

  get(id: any): Observable<Pilacoin> {
    return this.http.get<Pilacoin>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
}
