import { environment } from './../../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from './../../interfaces/project/project';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  project: Project;
  url: string = 'dashboard/projects';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(environment.api + this.url);
  }

  add(project: Project) {
    return this.http.post<Project>(environment.api + this.url, project);
  }
 
  update(project: Project) {
    return this.http.put<Project>(environment.api + this.url + `/${project.id}`, project);
  }

  delete(project: Project) {
    return this.http.delete<Project>(environment.api + this.url + `/${project.id}`);
  }

}
