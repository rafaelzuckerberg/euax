import { SnackbarService } from './../../shared/snackbar/snackbar.service';
import { MatDialogRef } from '@angular/material';
import { RoomService } from './../../shared/services/room/room.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-edit-room',
  templateUrl: './create-edit-room.component.html',
  styleUrls: ['./create-edit-room.component.css']
})
export class CreateEditRoomComponent implements OnInit {

  formG: FormGroup;
  clicked: boolean = false;
  canEdit: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private service: RoomService,
    private snackbar: SnackbarService,
    public dialogRef: MatDialogRef<CreateEditRoomComponent>) { }

  ngOnInit() {
    this.initializeForm();
    console.log(this.service.room.id)
    if(this.service.room.id != undefined) {
      this.setFormEdit();
      this.canEdit = true;
    } 
  }


  initializeForm() {
    this.formG = this.fb.group({
      name: ['', Validators.required], 
    })
  }


  setFormEdit() {
    this.formG.get('name').setValue(this.service.room.name) 
  }


  submitForm() { 
    if(this.service.room.id == undefined) {
      this.save();
    } else {
      this.edit();
    }
  }


  save() {
    this.clicked = true;
    this.service.addRoom(this.formG.value)
      .subscribe(res => { 
        if(res['success']) {
          this.snackbar.openSnackBar(res['message'])
          this.dialogRef.close(true);
          this.clicked = false;
        }
      }, error => {
        console.log(error)
      })
  }


  edit() {
    this.clicked = true;
    this.formG.value['id'] = this.service.room.id;
    this.service.updateRoom(this.formG.value)
      .subscribe(res => {
        if(res['success']) {
          this.snackbar.openSnackBar(res['message'])
          this.dialogRef.close(true);
          this.clicked = false;
        }
      })
  }

}
