import { ConfirmDialogComponent } from './../../../shared/confirm-dialog/confirm-dialog.component';
import { CreateEditAdministratorComponent } from './../create-edit-administrator/create-edit-administrator.component';
import { Administrator } from './../../../shared/interfaces/user/administrator';
import { AdministratorService } from './../../../shared/services/users/administrator.service';
import { Title } from '@angular/platform-browser';
import { NotificationService } from './../../../core/services/notification.service';
import { NGXLogger } from 'ngx-logger';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatDialog } from '@angular/material';


@Component({
  selector: 'app-list-administrators',
  templateUrl: './list-administrators.component.html',
  styleUrls: ['./list-administrators.component.css']
})
export class ListAdministratorsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'status', 'created_at', 'icon']; 
  dataSource: MatTableDataSource<Administrator>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; 

  constructor(
    private service: AdministratorService,
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private titleService: Title,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Stark - Administradores');
    this.logger.log('Adminsitrators loaded'); 
    this.getUsers()
  }

  getUsers() {
    this.service.getUsers()
      .subscribe(res => {
        this.dataSource = new MatTableDataSource(res) 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  openModalCreate(user: Administrator) {
    this.service.user = Object.assign({}, user);
    let dialogRef = this.dialog.open(CreateEditAdministratorComponent, {
      height: '350px',
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res) {
        this.getUsers();
      }
    })
  } 


  openModalDelete(user: Administrator) {
    this.service.user = Object.assign({}, user);
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
