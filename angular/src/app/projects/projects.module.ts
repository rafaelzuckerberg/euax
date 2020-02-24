import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ListProjectsComponent } from './project/list-projects/list-projects.component';
import { CreateEditProjectComponent } from './project/create-edit-project/create-edit-project.component';
import { ListActivitiesComponent } from './activity/list-activities/list-activities.component';
import { CreateEditActivityComponent } from './activity/create-edit-activity/create-edit-activity.component';


@NgModule({
  declarations: [
    ListProjectsComponent, 
    CreateEditProjectComponent, 
    ListActivitiesComponent, 
    CreateEditActivityComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ],
  entryComponents: [
    CreateEditProjectComponent,
    CreateEditActivityComponent
  ]
})
export class ProjectsModule { }
