import { ConfirmDialogComponent } from './../../shared/confirm-dialog/confirm-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { ListAdministratorsComponent } from './list-administrators/list-administrators.component';
import { DetailsAdministratorComponent } from './details-administrator/details-administrator.component';
import { CreateEditAdministratorComponent } from './create-edit-administrator/create-edit-administrator.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListAdministratorsComponent, 
    DetailsAdministratorComponent, 
    CreateEditAdministratorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdministratorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    CreateEditAdministratorComponent,
    ConfirmDialogComponent
  ]
})
export class AdministratorModule { }
