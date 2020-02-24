import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorRoutingModule } from './visitor-routing.module';
import { ListVisitorsComponent } from './list-visitors/list-visitors.component';
import { CreateEditVisitorComponent } from './create-edit-visitor/create-edit-visitor.component';
import { DetailsVisitorComponent } from './details-visitor/details-visitor.component';


@NgModule({
  declarations: [
    ListVisitorsComponent, 
    CreateEditVisitorComponent, 
    DetailsVisitorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    VisitorRoutingModule
  ],
  entryComponents: [
    CreateEditVisitorComponent
  ]
})
export class VisitorModule { }
