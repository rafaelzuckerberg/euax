import { environment } from './../../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from '../../interfaces/project/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  activity: Activity;
  url: string = 'dashboard/activities';

  constructor(private http: HttpClient) { }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(environment.api + this.url);
  }

  add(activity: Activity) {
    return this.http.post<Activity>(environment.api + this.url, activity);
  }
 
  update(activity: Activity) {
    return this.http.put<Activity>(environment.api + this.url + `/${activity.id}`, activity);
  }

  delete(activity: Activity) {
    return this.http.delete<Activity>(environment.api + this.url + `/${activity.id}`);
  }

}
