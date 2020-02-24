import { environment } from './../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';  
import { Visitor } from '../../interfaces/user/visitor';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  user: Visitor;
  url: string = 'dashboard/visitors';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Visitor[]> {
    return this.http.get<Visitor[]>(environment.api + this.url);
  }

  addUser(user: Visitor) {
    return this.http.post<Visitor>(environment.api + this.url, user);
  }
 
  updateUser(user: Visitor) {
    return this.http.put<Visitor>(environment.api + this.url + `/${user.id}`, user);
  }

  deleteUser(user: Visitor) {
    return this.http.delete<Visitor>(environment.api + this.url + `/${user.id}`);
  }

}
