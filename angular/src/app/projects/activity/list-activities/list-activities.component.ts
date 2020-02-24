import { ConfirmDialogComponent } from './../../../shared/confirm-dialog/confirm-dialog.component';
import { CreateEditActivityComponent } from './../create-edit-activity/create-edit-activity.component';
import { Title } from '@angular/platform-browser';
import { NotificationService } from 'src/app/core/services/notification.service';
import { NGXLogger } from 'ngx-logger';
import { ActivityService } from './../../../shared/services/project/activity.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatDialog } from '@angular/material';
import { Activity } from 'src/app/shared/interfaces/project/activity';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.css']
})
export class ListActivitiesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'project_name', 'activity_name', 'begin_date', 'end_date', 'status', 'icon']; 
  dataSource: MatTableDataSource<Activity>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; 

  constructor(
    private service: ActivityService,
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private titleService: Title,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Atividades');
    this.logger.log('Atividades loaded'); 
    this.getActivities()
  }


  getActivities() {
    this.service.getActivities()
      .subscribe(res => {
        console.log(res)
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }


  openModalCreate(activity: Activity) {
    this.service.activity = Object.assign({}, activity);
    let dialogRef = this.dialog.open(CreateEditActivityComponent, {
      height: '380px',
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res) {
        this.getActivities();
      }
    })
  } 


  openModalDelete(activity: Activity) {
    this.service.activity = Object.assign({}, activity);
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: '190px',
      width: '450px',
      data: {
        title: 'Projeto'
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res) {
        this.delete(); 
      }
    })
  }


  delete() {
    this.service.delete(this.service.activity)
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
