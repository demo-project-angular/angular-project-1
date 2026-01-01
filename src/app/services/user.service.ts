import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { UserDetails } from "../models/user.model";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export  class  UserService{
    private Api_URL ='https://jsonplaceholder.typicode.com/users'
    constructor(private http: HttpClient){}

    getUser():Observable<UserDetails[]>{
    return this.http.get<UserDetails[]>(this.Api_URL);

    }
}