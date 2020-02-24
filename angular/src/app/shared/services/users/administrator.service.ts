import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Administrator } from './../../interfaces/user/administrator';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  user: Administrator;
  url: string = 'dashboard/administrators';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Administrator[]> {
    return this.http.get<Administrator[]>(environment.api + this.url);
  }

  addUser(user: Administrator) {
    return this.http.post<Administrator>(environment.api + this.url, user);
  }
 
  updateUser(user: Administrator) {
    return this.http.put<Administrator>(environment.api + this.url + `/${user.id}`, user);
  }

  deleteUser(user: Administrator) {
    return this.http.delete<Administrator>(environment.api + this.url + `/${user.id}`);
  }

}
