import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails, UserPayload, UserRequest } from '../models/user.model';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'  
})
export class UserDetailsService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/users'
    constructor(private http: HttpClient) { }
     getUserById(id: any): Observable<UserDetails> {
    return this.http.get<UserDetails>(`${this.apiUrl}/${id}`);
  }

   createUser(payload: UserRequest): Observable<UserPayload> {
    return this.http.post<UserPayload>(this.apiUrl, payload);
  }
}