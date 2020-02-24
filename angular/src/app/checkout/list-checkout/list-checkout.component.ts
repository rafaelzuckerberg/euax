import { CheckoutConfirmComponent } from './../checkout-confirm/checkout-confirm.component';
import { ConfirmDialogComponent } from './../../shared/confirm-dialog/confirm-dialog.component';
import { Title } from '@angular/platform-browser';
import { NotificationService } from './../../core/services/notification.service';
import { NGXLogger } from 'ngx-logger';
import { VisitorService } from './../../shared/services/users/visitor.service';
import { MatSort } from '@angular/material/sort';
import { Visitor } from 'src/app/shared/interfaces/user/visitor';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatDialog } from '@angular/material';

@Component({
  selector: 'app-list-checkout',
  templateUrl: './list-checkout.component.html',
  styleUrls: ['./list-checkout.component.css']
})
export class ListCheckoutComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'status', 'entry', 'check-out', 'icon']; 
  dataSource: MatTableDataSource<Visitor>;

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
    this.titleService.setTitle('Stark - Check-Out'); 
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
    let dialogRef = this.dialog.open(CheckoutConfirmComponent, {
      height: '200px',
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
