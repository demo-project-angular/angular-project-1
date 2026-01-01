import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
export interface UserDetails {
    id: number;
    name: string;
    username: string;
    email: string;

}
@Injectable({ providedIn: 'root' })
export class LoginService {
    private baseUrl = 'https://jsonplaceholder.typicode.com/users/1'

    constructor(private http: HttpClient) {

    }
    getUserDetails(): Observable<any> {
        return this.http.get<UserDetails>(this.baseUrl)
    }
}