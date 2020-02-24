import { MatDialogRef } from '@angular/material';
import { SnackbarService } from './../../../shared/snackbar/snackbar.service';
import { ProjectService } from './../../../shared/services/project/project.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-edit-project',
  templateUrl: './create-edit-project.component.html',
  styleUrls: ['./create-edit-project.component.css']
})
export class CreateEditProjectComponent implements OnInit {

  formG: FormGroup;
  clicked: boolean = false;
  canEdit: boolean = false; 

  constructor(
    private fb: FormBuilder, 
    private service: ProjectService,  
    private snackbar: SnackbarService,
    public dialogRef: MatDialogRef<CreateEditProjectComponent>) { 
      this.initializeForm();  
    }

  ngOnInit() {
    if(this.service.project.id != undefined) {
      console.log(this.service.project)
      this.setFormEdit();
      this.canEdit = true;
    }
  }


  initializeForm() {
    this.formG = this.fb.group({
      project_name: ['', Validators.required], 
      begin_date: ['', Validators.required], 
      end_date: ['', Validators.required], 
    })
  }


  setFormEdit() {
    this.formG.get('project_name').setValue(this.service.project.project_name)
    this.formG.get('begin_date').setValue(this.service.project.begin_date)
    this.formG.get('end_date').setValue(this.service.project.end_date) 
  } 


  submitForm() { 
    if(this.service.project.id == undefined) { 
      this.save();
    } else {
      this.edit();
    }
  }


  save() {
    this.clicked = true;
    this.service.add(this.formG.value)
      .subscribe(res => {
        console.log(res)
        if(res['success']) {
          this.snackbar.openSnackBar(res['message'])
          this.dialogRef.close(true);
          this.clicked = false;
        } else {
          this.snackbar.openSnackBar(res['message'])
          this.clicked = false;
          this.formG.get('room').reset()
        }
      }, error => {
        console.log(error)
      })
  }


  edit() {
    this.clicked = true;
    this.formG.value['id'] = this.service.project.id;
    this.service.update(this.formG.value)
      .subscribe(res => {
        if(res['success']) {
          this.snackbar.openSnackBar(res['message'])
          this.dialogRef.close(true);
          this.clicked = false;
        }
      })
  }

}
