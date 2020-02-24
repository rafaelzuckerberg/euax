import { SnackbarService } from './../../../shared/snackbar/snackbar.service';
import { MatDialogRef } from '@angular/material';
import { AdministratorService } from './../../../shared/services/users/administrator.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-edit-administrator',
  templateUrl: './create-edit-administrator.component.html',
  styleUrls: ['./create-edit-administrator.component.css']
})
export class CreateEditAdministratorComponent implements OnInit {

  formG: FormGroup;
  clicked: boolean = false;
  canEdit: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private service: AdministratorService, 
    private snackbar: SnackbarService,
    public dialogRef: MatDialogRef<CreateEditAdministratorComponent>) { }

  ngOnInit() {
    this.initializeForm();
    console.log(this.service.user.id)
    if(this.service.user.id != undefined) {
      this.setFormEdit();
      this.canEdit = true;
    } 
  }


  initializeForm() {
    this.formG = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  setFormEdit() {
    this.formG.get('name').setValue(this.service.user.name)
    this.formG.get('email').setValue(this.service.user.email)
    this.formG.get('email').disable({ onlySelf: true });
    this.formG.get('password').setValidators(null);
  }


  submitForm() { 
    if(this.service.user.id == undefined) {
      this.save();
    } else {
      this.edit();
    }
  }


  save() {
    this.clicked = true;
    this.service.addUser(this.formG.value)
      .subscribe(res => {
        if(res['success']) { 
          this.snackbar.openSnackBar(res['message'])
          this.dialogRef.close(true);
          this.clicked = false;
        }
      })
  }


  edit() {
    this.clicked = true;
    this.formG.value['id'] = this.service.user.id;
    this.service.updateUser(this.formG.value)
      .subscribe(res => {
        if(res['success']) { 
          this.snackbar.openSnackBar(res['message'])
          this.dialogRef.close(true);
          this.clicked = false;
        }
      })
  }

}
