import { SnackbarService } from './../../../shared/snackbar/snackbar.service';
import { ConfirmDialogComponent } from './../../../shared/confirm-dialog/confirm-dialog.component';
import { CreateEditProjectComponent } from './../create-edit-project/create-edit-project.component';
import { Title } from '@angular/platform-browser';
import { NotificationService } from 'src/app/core/services/notification.service';
import { NGXLogger } from 'ngx-logger';
import { ProjectService } from './../../../shared/services/project/project.service';
import { MatSort } from '@angular/material/sort';
import { Project } from './../../../shared/interfaces/project/project';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatDialog } from '@angular/material';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'begin_date', 'end_date', 'progress', 'status', 'icon']; 
  dataSource: MatTableDataSource<Project>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator; 

  constructor(
    private service: ProjectService,
    private logger: NGXLogger,
    private notificationService: NotificationService,
    private titleService: Title,
    private dialog: MatDialog,
    private snackbar: SnackbarService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Projetos');
    this.logger.log('Projects loaded'); 
    this.getProjects()
  }


  getProjects() {
    this.service.getProjects()
      .subscribe(res => {
        console.log(res)
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }


  openModalCreate(project: Project) {
    this.service.project = Object.assign({}, project);
    let dialogRef = this.dialog.open(CreateEditProjectComponent, {
      height: '320px',
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res) {
        this.getProjects();
      }
    })
  } 


  openModalDelete(project: Project) {
    this.service.project = Object.assign({}, project);
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
    this.service.delete(this.service.project)
      .subscribe(res => {
        if(res) {
          this.getProjects(); 
          this.snackbar.openSnackBar(res['message']) 
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
