import { ConfirmDialogComponent } from './../../shared/confirm-dialog/confirm-dialog.component';
import { CreateEditRoomComponent } from './../create-edit-room/create-edit-room.component';
import { Title } from '@angular/platform-browser';
import { NotificationService } from 'src/app/core/services/notification.service';
import { NGXLogger } from 'ngx-logger';
import { RoomService } from './../../shared/services/room/room.service';
import { MatSort } from '@angular/material/sort';
import { Room } from './../../shared/interfaces/room/room';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatDialog } from '@angular/material';

@Component({
  selector: 'app-list-rooms',
  templateUrl: './list-rooms.component.html',
  styleUrls: ['./list-rooms.component.css']
})
export class ListRoomsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'quant', 'status', 'icon']; 
  dataSource: MatTableDataSource<Room>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; 

  constructor(
    private service: RoomService,
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private titleService: Title,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Stark - Salas');
    this.logger.log('Rooms loaded'); 
    this.getRooms()
  }


  getRooms() {
    this.service.getRooms()
      .subscribe(res => {
        console.log(res)
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }


  openModalCreate(room: Room) {
    this.service.room = Object.assign({}, room);
    let dialogRef = this.dialog.open(CreateEditRoomComponent, {
      height: '200px',
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res) {
        this.getRooms();
      }
    })
  } 


  openModalDelete(room: Room) {
    this.service.room = Object.assign({}, room);
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '190px',
      width: '450px',
      data: {
        title: 'Administrador'
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res) {
        this.delete(); 
      }
    })
  }


  delete() {
    this.service.deleteRoom(this.service.room)
      .subscribe(res => {
        if(res) {
          this.delete(); 
          console.log(res)
        }
      })
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
