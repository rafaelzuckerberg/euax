import { SnackbarService } from './../../../shared/snackbar/snackbar.service';
import { Room } from './../../../shared/interfaces/room/room';
import { RoomService } from './../../../shared/services/room/room.service';
import { MatDialogRef } from '@angular/material';
import { VisitorService } from './../../../shared/services/users/visitor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-edit-visitor',
  templateUrl: './create-edit-visitor.component.html',
  styleUrls: ['./create-edit-visitor.component.css']
})
export class CreateEditVisitorComponent implements OnInit {

  formG: FormGroup;
  clicked: boolean = false;
  canEdit: boolean = false;
  rooms: Room[];

  constructor(
    private fb: FormBuilder, 
    private service: VisitorService, 
    private roomService: RoomService,
    private snackbar: SnackbarService,
    public dialogRef: MatDialogRef<CreateEditVisitorComponent>) { 
      this.initializeForm(); 
      this.getRooms()
    }

  ngOnInit() {
    if(this.service.user.id != undefined) {
      console.log(this.service.user)
      this.setFormEdit();
      this.canEdit = true;
    }
  }


  initializeForm() {
    this.formG = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required], 
      cpf: ['', Validators.required],
      date_birth: ['', Validators.required],
      room: ['', Validators.required],
    })
  }

  setFormEdit() {
    this.formG.get('name').setValue(this.service.user.name)
    this.formG.get('email').setValue(this.service.user.email)
    this.formG.get('cpf').setValue(this.service.user.cpf)
    this.formG.get('date_birth').setValue(this.service.user.date_birth)
    this.formG.get('room').setValue(this.service.user.room)
    this.formG.get('email').disable({ onlySelf: true }); 
  }


  getRooms() {
    this.roomService.getRooms()
      .subscribe(res => { 
        this.rooms = res
      })
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
