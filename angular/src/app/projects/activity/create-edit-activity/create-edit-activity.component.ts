import { Project } from './../../../shared/interfaces/project/project';
import { ProjectService } from './../../../shared/services/project/project.service';
import { MatDialogRef } from '@angular/material';
import { SnackbarService } from './../../../shared/snackbar/snackbar.service';
import { ActivityService } from './../../../shared/services/project/activity.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-edit-activity',
  templateUrl: './create-edit-activity.component.html',
  styleUrls: ['./create-edit-activity.component.css']
})
export class CreateEditActivityComponent implements OnInit {

  formG: FormGroup;
  clicked: boolean = false;
  canEdit: boolean = false; 
  projects: Project[];

  constructor(
    private fb: FormBuilder, 
    private service: ActivityService, 
    private _service: ProjectService, 
    private snackbar: SnackbarService,
    public dialogRef: MatDialogRef<CreateEditActivityComponent>) { 
      this.initializeForm();  
      this.getProjects()
    }

  ngOnInit() {
    if(this.service.activity.id != undefined) {
      console.log(this.service.activity)
      this.setFormEdit();
      this.canEdit = true;
    }
  }


  initializeForm() {
    this.formG = this.fb.group({
      project_id: ['', Validators.required], 
      activity_name: ['', Validators.required], 
      begin_date: ['', Validators.required], 
      end_date: ['', Validators.required],  
    })
  }


  setFormEdit() {
    this.formG.get('project_id').setValue(this.service.activity.project_id)
    this.formG.get('activity_name').setValue(this.service.activity.activity_name)
    this.formG.get('begin_date').setValue(this.service.activity.activity_begin_name)
    this.formG.get('end_date').setValue(this.service.activity.activity_end_name)  
  } 

  getProjects() {
    this._service.getProjects()
          .subscribe(res => {
            this.projects = res
          })
  }


  submitForm() { 
    if(this.service.activity.id == undefined) { 
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
    this.formG.value['id'] = this.service.activity.id;
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
