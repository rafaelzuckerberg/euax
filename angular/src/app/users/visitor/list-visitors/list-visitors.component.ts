import { CreateEditVisitorComponent } from './../create-edit-visitor/create-edit-visitor.component';
import { VisitorService } from './../../../shared/services/users/visitor.service';
import { ConfirmDialogComponent } from './../../../shared/confirm-dialog/confirm-dialog.component';
import { Title } from '@angular/platform-browser';
import { NotificationService } from './../../../core/services/notification.service';
import { NGXLogger } from 'ngx-logger';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Administrator } from 'src/app/shared/interfaces/user/administrator';
import { MatPaginator, MatDialog } from '@angular/material';
import { Visitor } from 'src/app/shared/interfaces/user/visitor';

@Component({
  selector: 'app-list-visitors',
  templateUrl: './list-visitors.component.html',
  styleUrls: ['./list-visitors.component.css']
})
export class ListVisitorsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'status', 'icon']; 
  dataSource: MatTableDataSource<Administrator>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; 

  constructor(
    private service: VisitorService,
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private titleService: Title,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Stark - Visitantes'); 
    this.getUsers()
  }

  getUsers() {
    this.service.getUsers()
      .subscribe(res => {
        console.log(res)
        this.dataSource = new MatTableDataSource(res) 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  openModalCreate(user: Visitor) {
    this.service.user = Object.assign({}, user);
    let dialogRef = this.dialog.open(CreateEditVisitorComponent, {
      height: '430px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res) {
        this.getUsers();
      }
    })
  } 


  openModalDelete(user: Visitor) {
    this.service.user = Object.assign({}, user);
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '190px',
      width: '450px',
      data: {
        title: 'Visitante'
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res) {
        this.delete(); 
      }
    })
  }


  delete() {
    this.service.deleteUser(this.service.user)
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
