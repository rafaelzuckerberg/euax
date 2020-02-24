import { ListActivitiesComponent } from './activity/list-activities/list-activities.component';
import { ListProjectsComponent } from './project/list-projects/list-projects.component';
import { LayoutComponent } from './../shared/layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'projetos',
        component: ListProjectsComponent
      },
      {
        path: 'atividades',
        component: ListActivitiesComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
