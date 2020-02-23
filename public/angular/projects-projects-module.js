(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/activity/create-edit-activity/create-edit-activity.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/activity/create-edit-activity/create-edit-activity.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>{{ canEdit ? 'Editar' : 'Cadastrar' }} Atividade</h2>\n\n<div class=\"example-container\">\n\n    <form [formGroup]=\"formG\" (ngSubmit)=\"submitForm()\">\n        <mat-form-field>\n            <mat-label>Selecione o Projeto</mat-label>\n            <mat-select formControlName=\"project_id\">\n                <mat-option *ngFor=\"let project of projects\" [value]='project.id'>{{ project.project_name }}</mat-option> \n            </mat-select>\n        </mat-form-field>\n\n        <mat-form-field>\n            <mat-label>Digite o nome da Atividade</mat-label>\n            <input type=\"text\" matInput formControlName=\"activity_name\">\n        </mat-form-field>  \n\n        <mat-form-field>\n            <mat-label>Data Início</mat-label>\n                <input matInput [matDatepicker]=\"picker\" formControlName=\"begin_date\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n        \n        <mat-form-field>\n            <mat-label>Data Fim</mat-label>\n                <input matInput [matDatepicker]=\"_picker\" formControlName=\"end_date\">\n                <mat-datepicker-toggle matSuffix [for]=\"_picker\"></mat-datepicker-toggle>\n            <mat-datepicker #_picker></mat-datepicker>\n        </mat-form-field> \n    \n        <button mat-raised-button color=\"primary\" [disabled]=\"!formG.valid || clicked\">{{ canEdit ? 'Editar' : 'Cadastrar' }}</button>\n    </form>\n    \n    \n</div>   \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/activity/list-activities/list-activities.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/activity/list-activities/list-activities.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayout=\"row\" fxLayoutAlign=\"center none\">\n    <div fxFlex=\"95%\">\n  \n      <mat-card>\n        <mat-card-content>\n          <h2>Atividades</h2>\n\n          <mat-form-field>\n            <mat-label>Pesuisar</mat-label>\n            <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Pesquisar por Administradores\">\n          </mat-form-field>\n  \n          <table mat-table [dataSource]=\"dataSource\" matSort>\n  \n            <!-- ID Column -->\n            <ng-container matColumnDef=\"id\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n              <td mat-cell *matCellDef=\"let activity\"> {{ activity.id }} </td>\n            </ng-container>\n          \n            <!-- Name project Column -->\n            <ng-container matColumnDef=\"project_name\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Nome Projeto </th>\n              <td mat-cell *matCellDef=\"let activity\"> {{ activity.project_name }} </td>\n            </ng-container>\n            \n            <!-- Name activity Column -->\n            <ng-container matColumnDef=\"activity_name\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Nome Atividade </th>\n              <td mat-cell *matCellDef=\"let activity\"> {{ activity.activity_name }} </td>\n            </ng-container>\n            \n            <!-- Begin Date activity Column -->\n            <ng-container matColumnDef=\"begin_date\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Data Início </th>\n              <td mat-cell *matCellDef=\"let activity\"> {{ activity.activity_begin_name | date: 'dd/MM/yyyy' }} </td>\n            </ng-container>\n            \n            <!-- End Date activity Column -->\n            <ng-container matColumnDef=\"end_date\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Data Fim </th>\n              <td mat-cell *matCellDef=\"let activity\"> {{ activity.activity_end_name | date: 'dd/MM/yyyy' }} </td>\n            </ng-container> \n            \n            <!-- Status de usuários Column -->\n             <ng-container matColumnDef=\"status\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Finalizada </th>\n              <td mat-cell *matCellDef=\"let activity\"> {{ activity.finished == 0 ? 'Não' : 'Sim' }} </td>\n            </ng-container>\n        \n            \n            <!-- Icon Column -->\n            <ng-container matColumnDef=\"icon\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>  </th>\n              <td mat-cell *matCellDef=\"let activity\"> \n                <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" (click)=\"openModalCreate(activity)\">edit</mat-icon>\n                <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" (click)=\"openModalDelete(activity)\">delete</mat-icon>\n              </td>\n            </ng-container>\n          \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n          \n        </mat-card-content>\n      </mat-card>\n  \n    </div>\n  </div>\n\n\n  <div class=\"example-button-row\"> \n    <button mat-fab color=\"primary\" aria-label=\"Example icon-button with a heart icon\" (click)=\"openModalCreate(null)\">\n      <mat-icon>add</mat-icon>\n    </button> \n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/project/create-edit-project/create-edit-project.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/project/create-edit-project/create-edit-project.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>{{ canEdit ? 'Editar' : 'Cadastrar' }} Projeto</h2>\n\n<div class=\"example-container\">\n\n    <form [formGroup]=\"formG\" (ngSubmit)=\"submitForm()\">\n        <mat-form-field>\n            <mat-label>Digite o nome do usuário</mat-label>\n            <input type=\"text\" matInput formControlName=\"project_name\">\n        </mat-form-field>  \n\n        <mat-form-field>\n            <mat-label>Data Início</mat-label>\n                <input matInput [matDatepicker]=\"picker\" formControlName=\"begin_date\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n        \n        <mat-form-field>\n            <mat-label>Data Fim</mat-label>\n                <input matInput [matDatepicker]=\"_picker\" formControlName=\"end_date\">\n                <mat-datepicker-toggle matSuffix [for]=\"_picker\"></mat-datepicker-toggle>\n            <mat-datepicker #_picker></mat-datepicker>\n        </mat-form-field> \n    \n        <button mat-raised-button color=\"primary\" [disabled]=\"!formG.valid || clicked\">{{ canEdit ? 'Editar' : 'Cadastrar' }}</button>\n    </form>\n    \n    \n</div>   \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/project/list-projects/list-projects.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/project/list-projects/list-projects.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayout=\"row\" fxLayoutAlign=\"center none\">\n    <div fxFlex=\"95%\">\n  \n      <mat-card>\n        <mat-card-content>\n          <h2>Porjetos</h2>\n\n          <mat-form-field>\n            <mat-label>Pesuisar</mat-label>\n            <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Pesquisar por Administradores\">\n          </mat-form-field>\n  \n          <table mat-table [dataSource]=\"dataSource\" matSort>\n  \n            <!-- ID Column -->\n            <ng-container matColumnDef=\"id\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n              <td mat-cell *matCellDef=\"let project\"> {{ project.id }} </td>\n            </ng-container>\n          \n            <!-- Name project Column -->\n            <ng-container matColumnDef=\"name\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Nome Projeto </th>\n              <td mat-cell *matCellDef=\"let project\"> {{ project.project_name }} </td>\n            </ng-container>\n            \n            \n            <!-- Begin Date project Column -->\n            <ng-container matColumnDef=\"begin_date\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Data Início </th>\n              <td mat-cell *matCellDef=\"let project\"> {{ project.begin_date | date: 'dd/MM/yyyy h:mm' }} </td>\n            </ng-container>\n            \n            <!-- End Date project Column -->\n            <ng-container matColumnDef=\"end_date\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Data Fim </th>\n              <td mat-cell *matCellDef=\"let project\"> {{ project.end_date | date: 'dd/MM/yyyy h:mm' }} </td>\n            </ng-container>\n\n             <!-- Progress Project Column -->\n             <ng-container matColumnDef=\"progress\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> % Completo </th>\n              <td mat-cell *matCellDef=\"let project\"> 50% </td>\n            </ng-container>\n            \n            <!-- Status de usuários Column -->\n             <ng-container matColumnDef=\"status\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Atrasado </th>\n              <td mat-cell *matCellDef=\"let project\"> Sim </td>\n            </ng-container>\n        \n            \n            <!-- Icon Column -->\n            <ng-container matColumnDef=\"icon\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>  </th>\n              <td mat-cell *matCellDef=\"let project\"> \n                <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" (click)=\"openModalCreate(project)\">edit</mat-icon>\n                <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" (click)=\"openModalDelete(project)\">delete</mat-icon>\n              </td>\n            </ng-container>\n          \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n          \n        </mat-card-content>\n      </mat-card>\n  \n    </div>\n  </div>\n\n\n  <div class=\"example-button-row\"> \n    <button mat-fab color=\"primary\" aria-label=\"Example icon-button with a heart icon\" (click)=\"openModalCreate(null)\">\n      <mat-icon>add</mat-icon>\n    </button> \n  </div>");

/***/ }),

/***/ "./src/app/projects/activity/create-edit-activity/create-edit-activity.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/projects/activity/create-edit-activity/create-edit-activity.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field\r\n{\r\n    width: 100%;\r\n}\r\n\r\nh2\r\n{\r\n    text-align: center;\r\n}\r\n\r\nbutton\r\n{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvYWN0aXZpdHkvY3JlYXRlLWVkaXQtYWN0aXZpdHkvY3JlYXRlLWVkaXQtYWN0aXZpdHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL2FjdGl2aXR5L2NyZWF0ZS1lZGl0LWFjdGl2aXR5L2NyZWF0ZS1lZGl0LWFjdGl2aXR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZFxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaDJcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b25cclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/projects/activity/create-edit-activity/create-edit-activity.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/projects/activity/create-edit-activity/create-edit-activity.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CreateEditActivityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditActivityComponent", function() { return CreateEditActivityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_project_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/project/project.service */ "./src/app/shared/services/project/project.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/snackbar/snackbar.service */ "./src/app/shared/snackbar/snackbar.service.ts");
/* harmony import */ var _shared_services_project_activity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared/services/project/activity.service */ "./src/app/shared/services/project/activity.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var CreateEditActivityComponent = /** @class */ (function () {
    function CreateEditActivityComponent(fb, service, _service, snackbar, dialogRef) {
        this.fb = fb;
        this.service = service;
        this._service = _service;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.clicked = false;
        this.canEdit = false;
        this.initializeForm();
        this.getProjects();
    }
    CreateEditActivityComponent.prototype.ngOnInit = function () {
        if (this.service.activity.id != undefined) {
            console.log(this.service.activity);
            this.setFormEdit();
            this.canEdit = true;
        }
    };
    CreateEditActivityComponent.prototype.initializeForm = function () {
        this.formG = this.fb.group({
            project_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            activity_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            begin_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            end_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    };
    CreateEditActivityComponent.prototype.setFormEdit = function () {
        this.formG.get('project_id').setValue(this.service.activity.project_id);
        this.formG.get('activity_name').setValue(this.service.activity.activity_name);
        this.formG.get('begin_date').setValue(this.service.activity.activity_begin_name);
        this.formG.get('end_date').setValue(this.service.activity.activity_end_name);
    };
    CreateEditActivityComponent.prototype.getProjects = function () {
        var _this = this;
        this._service.getProjects()
            .subscribe(function (res) {
            _this.projects = res;
        });
    };
    CreateEditActivityComponent.prototype.submitForm = function () {
        if (this.service.activity.id == undefined) {
            this.save();
        }
        else {
            this.edit();
        }
    };
    CreateEditActivityComponent.prototype.save = function () {
        var _this = this;
        this.clicked = true;
        this.service.add(this.formG.value)
            .subscribe(function (res) {
            console.log(res);
            if (res['success']) {
                _this.snackbar.openSnackBar(res['message']);
                _this.dialogRef.close(true);
                _this.clicked = false;
            }
            else {
                _this.snackbar.openSnackBar(res['message']);
                _this.clicked = false;
                _this.formG.get('room').reset();
            }
        }, function (error) {
            console.log(error);
        });
    };
    CreateEditActivityComponent.prototype.edit = function () {
        var _this = this;
        this.clicked = true;
        this.formG.value['id'] = this.service.activity.id;
        this.service.update(this.formG.value)
            .subscribe(function (res) {
            if (res['success']) {
                _this.snackbar.openSnackBar(res['message']);
                _this.dialogRef.close(true);
                _this.clicked = false;
            }
        });
    };
    CreateEditActivityComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _shared_services_project_activity_service__WEBPACK_IMPORTED_MODULE_4__["ActivityService"] },
        { type: _shared_services_project_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"] },
        { type: _shared_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackbarService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
    ]; };
    CreateEditActivityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-create-edit-activity',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-edit-activity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/activity/create-edit-activity/create-edit-activity.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-edit-activity.component.css */ "./src/app/projects/activity/create-edit-activity/create-edit-activity.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _shared_services_project_activity_service__WEBPACK_IMPORTED_MODULE_4__["ActivityService"],
            _shared_services_project_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"],
            _shared_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_3__["SnackbarService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], CreateEditActivityComponent);
    return CreateEditActivityComponent;
}());



/***/ }),

/***/ "./src/app/projects/activity/list-activities/list-activities.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/projects/activity/list-activities/list-activities.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted {\r\n    color: black;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\r\n\r\ntd, th {\r\n    /* width: 25%; */\r\n}\r\n\r\n.mat-column-id\r\n{\r\n    width: 6%; \r\n}\r\n\r\n.mat-column-name\r\n{\r\n    width: 20%; \r\n}\r\n\r\n.mat-column-icon\r\n{\r\n    width: 10%; \r\n}\r\n\r\n.example-button-row button,\r\n.example-button-row a {\r\n    position: fixed;\r\n    bottom: 35px;\r\n    right: 2%;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvYWN0aXZpdHkvbGlzdC1hY3Rpdml0aWVzL2xpc3QtYWN0aXZpdGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFHQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksU0FBUztBQUNiOztBQUVBOztJQUVJLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksZUFBZTtJQUNmLFlBQVk7SUFDWixTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9hY3Rpdml0eS9saXN0LWFjdGl2aXRpZXMvbGlzdC1hY3Rpdml0aWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIFxyXG4gIFxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuICBcclxudGQsIHRoIHtcclxuICAgIC8qIHdpZHRoOiAyNSU7ICovXHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWlkXHJcbntcclxuICAgIHdpZHRoOiA2JTsgXHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLW5hbWVcclxue1xyXG4gICAgd2lkdGg6IDIwJTsgXHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWljb25cclxue1xyXG4gICAgd2lkdGg6IDEwJTsgXHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxyXG4uZXhhbXBsZS1idXR0b24tcm93IGEge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAzNXB4O1xyXG4gICAgcmlnaHQ6IDIlO1xyXG59XHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/projects/activity/list-activities/list-activities.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/projects/activity/list-activities/list-activities.component.ts ***!
  \********************************************************************************/
/*! exports provided: ListActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListActivitiesComponent", function() { return ListActivitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _create_edit_activity_create_edit_activity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../create-edit-activity/create-edit-activity.component */ "./src/app/projects/activity/create-edit-activity/create-edit-activity.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");
/* harmony import */ var _shared_services_project_activity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../shared/services/project/activity.service */ "./src/app/shared/services/project/activity.service.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");











var ListActivitiesComponent = /** @class */ (function () {
    function ListActivitiesComponent(service, logger, notificationService, titleService, dialog) {
        this.service = service;
        this.logger = logger;
        this.notificationService = notificationService;
        this.titleService = titleService;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'project_name', 'activity_name', 'begin_date', 'end_date', 'status', 'icon'];
    }
    ListActivitiesComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Atividades');
        this.logger.log('Atividades loaded');
        this.getActivities();
    };
    ListActivitiesComponent.prototype.getActivities = function () {
        var _this = this;
        this.service.getActivities()
            .subscribe(function (res) {
            console.log(res);
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](res);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    ListActivitiesComponent.prototype.openModalCreate = function (activity) {
        var _this = this;
        this.service.activity = Object.assign({}, activity);
        var dialogRef = this.dialog.open(_create_edit_activity_create_edit_activity_component__WEBPACK_IMPORTED_MODULE_2__["CreateEditActivityComponent"], {
            height: '380px',
            width: '450px',
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                _this.getActivities();
            }
        });
    };
    ListActivitiesComponent.prototype.openModalDelete = function (activity) {
        var _this = this;
        this.service.activity = Object.assign({}, activity);
        var dialogRef = this.dialog.open(_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"], {
            height: '190px',
            width: '450px',
            data: {
                title: 'Projeto'
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                _this.delete();
            }
        });
    };
    ListActivitiesComponent.prototype.delete = function () {
        var _this = this;
        this.service.delete(this.service.activity)
            .subscribe(function (res) {
            if (res) {
                _this.delete();
                console.log(res);
            }
        });
    };
    ListActivitiesComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListActivitiesComponent.ctorParameters = function () { return [
        { type: _shared_services_project_activity_service__WEBPACK_IMPORTED_MODULE_6__["ActivityService"] },
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"] },
        { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
    ], ListActivitiesComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"])
    ], ListActivitiesComponent.prototype, "paginator", void 0);
    ListActivitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"])({
            selector: 'app-list-activities',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-activities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/activity/list-activities/list-activities.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-activities.component.css */ "./src/app/projects/activity/list-activities/list-activities.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_project_activity_service__WEBPACK_IMPORTED_MODULE_6__["ActivityService"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"],
            src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]])
    ], ListActivitiesComponent);
    return ListActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/projects/project/create-edit-project/create-edit-project.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/projects/project/create-edit-project/create-edit-project.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field\r\n{\r\n    width: 100%;\r\n}\r\n\r\nh2\r\n{\r\n    text-align: center;\r\n}\r\n\r\nbutton\r\n{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdC9jcmVhdGUtZWRpdC1wcm9qZWN0L2NyZWF0ZS1lZGl0LXByb2plY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3QvY3JlYXRlLWVkaXQtcHJvamVjdC9jcmVhdGUtZWRpdC1wcm9qZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZFxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaDJcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b25cclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/projects/project/create-edit-project/create-edit-project.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/projects/project/create-edit-project/create-edit-project.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CreateEditProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEditProjectComponent", function() { return CreateEditProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/snackbar/snackbar.service */ "./src/app/shared/snackbar/snackbar.service.ts");
/* harmony import */ var _shared_services_project_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/services/project/project.service */ "./src/app/shared/services/project/project.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var CreateEditProjectComponent = /** @class */ (function () {
    function CreateEditProjectComponent(fb, service, snackbar, dialogRef) {
        this.fb = fb;
        this.service = service;
        this.snackbar = snackbar;
        this.dialogRef = dialogRef;
        this.clicked = false;
        this.canEdit = false;
        this.initializeForm();
    }
    CreateEditProjectComponent.prototype.ngOnInit = function () {
        if (this.service.project.id != undefined) {
            console.log(this.service.project);
            this.setFormEdit();
            this.canEdit = true;
        }
    };
    CreateEditProjectComponent.prototype.initializeForm = function () {
        this.formG = this.fb.group({
            project_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            begin_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            end_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    CreateEditProjectComponent.prototype.setFormEdit = function () {
        this.formG.get('project_name').setValue(this.service.project.project_name);
        this.formG.get('begin_date').setValue(this.service.project.begin_date);
        this.formG.get('end_date').setValue(this.service.project.end_date);
    };
    CreateEditProjectComponent.prototype.submitForm = function () {
        if (this.service.project.id == undefined) {
            this.save();
        }
        else {
            this.edit();
        }
    };
    CreateEditProjectComponent.prototype.save = function () {
        var _this = this;
        this.clicked = true;
        this.service.add(this.formG.value)
            .subscribe(function (res) {
            console.log(res);
            if (res['success']) {
                _this.snackbar.openSnackBar(res['message']);
                _this.dialogRef.close(true);
                _this.clicked = false;
            }
            else {
                _this.snackbar.openSnackBar(res['message']);
                _this.clicked = false;
                _this.formG.get('room').reset();
            }
        }, function (error) {
            console.log(error);
        });
    };
    CreateEditProjectComponent.prototype.edit = function () {
        var _this = this;
        this.clicked = true;
        this.formG.value['id'] = this.service.project.id;
        this.service.update(this.formG.value)
            .subscribe(function (res) {
            if (res['success']) {
                _this.snackbar.openSnackBar(res['message']);
                _this.dialogRef.close(true);
                _this.clicked = false;
            }
        });
    };
    CreateEditProjectComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _shared_services_project_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] },
        { type: _shared_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_2__["SnackbarService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }
    ]; };
    CreateEditProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-create-edit-project',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-edit-project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/project/create-edit-project/create-edit-project.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-edit-project.component.css */ "./src/app/projects/project/create-edit-project/create-edit-project.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_services_project_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"],
            _shared_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_2__["SnackbarService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], CreateEditProjectComponent);
    return CreateEditProjectComponent;
}());



/***/ }),

/***/ "./src/app/projects/project/list-projects/list-projects.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/projects/project/list-projects/list-projects.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted {\r\n    color: black;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\r\n\r\ntd, th {\r\n    /* width: 25%; */\r\n}\r\n\r\n.mat-column-id\r\n{\r\n    width: 6%; \r\n}\r\n\r\n.mat-column-name\r\n{\r\n    width: 20%; \r\n}\r\n\r\n.mat-column-icon\r\n{\r\n    width: 10%; \r\n}\r\n\r\n.example-button-row button,\r\n.example-button-row a {\r\n    position: fixed;\r\n    bottom: 35px;\r\n    right: 2%;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdC9saXN0LXByb2plY3RzL2xpc3QtcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksVUFBVTtBQUNkOztBQUVBOztJQUVJLGVBQWU7SUFDZixZQUFZO0lBQ1osU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvcHJvamVjdC9saXN0LXByb2plY3RzL2xpc3QtcHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4gXHJcbiAgXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4gIFxyXG50ZCwgdGgge1xyXG4gICAgLyogd2lkdGg6IDI1JTsgKi9cclxufVxyXG5cclxuLm1hdC1jb2x1bW4taWRcclxue1xyXG4gICAgd2lkdGg6IDYlOyBcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tbmFtZVxyXG57XHJcbiAgICB3aWR0aDogMjAlOyBcclxufVxyXG5cclxuLm1hdC1jb2x1bW4taWNvblxyXG57XHJcbiAgICB3aWR0aDogMTAlOyBcclxufVxyXG5cclxuLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24sXHJcbi5leGFtcGxlLWJ1dHRvbi1yb3cgYSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDM1cHg7XHJcbiAgICByaWdodDogMiU7XHJcbn1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/projects/project/list-projects/list-projects.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/projects/project/list-projects/list-projects.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProjectsComponent", function() { return ListProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/snackbar/snackbar.service */ "./src/app/shared/snackbar/snackbar.service.ts");
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _create_edit_project_create_edit_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../create-edit-project/create-edit-project.component */ "./src/app/projects/project/create-edit-project/create-edit-project.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");
/* harmony import */ var _shared_services_project_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../shared/services/project/project.service */ "./src/app/shared/services/project/project.service.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");












var ListProjectsComponent = /** @class */ (function () {
    function ListProjectsComponent(service, logger, notificationService, titleService, dialog, snackbar) {
        this.service = service;
        this.logger = logger;
        this.notificationService = notificationService;
        this.titleService = titleService;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.displayedColumns = ['id', 'name', 'begin_date', 'end_date', 'progress', 'status', 'icon'];
    }
    ListProjectsComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Projetos');
        this.logger.log('Projects loaded');
        this.getProjects();
    };
    ListProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this.service.getProjects()
            .subscribe(function (res) {
            console.log(res);
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](res);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    ListProjectsComponent.prototype.openModalCreate = function (project) {
        var _this = this;
        this.service.project = Object.assign({}, project);
        var dialogRef = this.dialog.open(_create_edit_project_create_edit_project_component__WEBPACK_IMPORTED_MODULE_3__["CreateEditProjectComponent"], {
            height: '320px',
            width: '450px',
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                _this.getProjects();
            }
        });
    };
    ListProjectsComponent.prototype.openModalDelete = function (project) {
        var _this = this;
        this.service.project = Object.assign({}, project);
        var dialogRef = this.dialog.open(_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
            height: '190px',
            width: '450px',
            data: {
                title: 'Projeto'
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res) {
                _this.delete();
            }
        });
    };
    ListProjectsComponent.prototype.delete = function () {
        var _this = this;
        this.service.delete(this.service.project)
            .subscribe(function (res) {
            if (res) {
                _this.getProjects();
                _this.snackbar.openSnackBar(res['message']);
            }
        });
    };
    ListProjectsComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    ListProjectsComponent.ctorParameters = function () { return [
        { type: _shared_services_project_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"] },
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_6__["NGXLogger"] },
        { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] },
        { type: _shared_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_1__["SnackbarService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"])
    ], ListProjectsComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginator"])
    ], ListProjectsComponent.prototype, "paginator", void 0);
    ListProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"])({
            selector: 'app-list-projects',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/project/list-projects/list-projects.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-projects.component.css */ "./src/app/projects/project/list-projects/list-projects.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_project_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_6__["NGXLogger"],
            src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"],
            _shared_snackbar_snackbar_service__WEBPACK_IMPORTED_MODULE_1__["SnackbarService"]])
    ], ListProjectsComponent);
    return ListProjectsComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/projects/projects-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function() { return ProjectsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _activity_list_activities_list_activities_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activity/list-activities/list-activities.component */ "./src/app/projects/activity/list-activities/list-activities.component.ts");
/* harmony import */ var _project_list_projects_list_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/list-projects/list-projects.component */ "./src/app/projects/project/list-projects/list-projects.component.ts");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/layout/layout.component */ "./src/app/shared/layout/layout.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var routes = [
    {
        path: '',
        component: _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            {
                path: 'projetos',
                component: _project_list_projects_list_projects_component__WEBPACK_IMPORTED_MODULE_2__["ListProjectsComponent"]
            },
            {
                path: 'atividades',
                component: _activity_list_activities_list_activities_component__WEBPACK_IMPORTED_MODULE_1__["ListActivitiesComponent"]
            },
        ]
    }
];
var ProjectsRoutingModule = /** @class */ (function () {
    function ProjectsRoutingModule() {
    }
    ProjectsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], ProjectsRoutingModule);
    return ProjectsRoutingModule;
}());



/***/ }),

/***/ "./src/app/projects/projects.module.ts":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects-routing.module */ "./src/app/projects/projects-routing.module.ts");
/* harmony import */ var _project_list_projects_list_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project/list-projects/list-projects.component */ "./src/app/projects/project/list-projects/list-projects.component.ts");
/* harmony import */ var _project_create_edit_project_create_edit_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project/create-edit-project/create-edit-project.component */ "./src/app/projects/project/create-edit-project/create-edit-project.component.ts");
/* harmony import */ var _activity_list_activities_list_activities_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./activity/list-activities/list-activities.component */ "./src/app/projects/activity/list-activities/list-activities.component.ts");
/* harmony import */ var _activity_create_edit_activity_create_edit_activity_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./activity/create-edit-activity/create-edit-activity.component */ "./src/app/projects/activity/create-edit-activity/create-edit-activity.component.ts");









var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _project_list_projects_list_projects_component__WEBPACK_IMPORTED_MODULE_5__["ListProjectsComponent"],
                _project_create_edit_project_create_edit_project_component__WEBPACK_IMPORTED_MODULE_6__["CreateEditProjectComponent"],
                _activity_list_activities_list_activities_component__WEBPACK_IMPORTED_MODULE_7__["ListActivitiesComponent"],
                _activity_create_edit_activity_create_edit_activity_component__WEBPACK_IMPORTED_MODULE_8__["CreateEditActivityComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _projects_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProjectsRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
            ],
            entryComponents: [
                _project_create_edit_project_create_edit_project_component__WEBPACK_IMPORTED_MODULE_6__["CreateEditProjectComponent"],
                _activity_create_edit_activity_create_edit_activity_component__WEBPACK_IMPORTED_MODULE_8__["CreateEditActivityComponent"]
            ]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());



/***/ }),

/***/ "./src/app/shared/services/project/activity.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/project/activity.service.ts ***!
  \*************************************************************/
/*! exports provided: ActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityService", function() { return ActivityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var ActivityService = /** @class */ (function () {
    function ActivityService(http) {
        this.http = http;
        this.url = 'dashboard/activities';
    }
    ActivityService.prototype.getActivities = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].api + this.url);
    };
    ActivityService.prototype.add = function (activity) {
        return this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].api + this.url, activity);
    };
    ActivityService.prototype.update = function (activity) {
        return this.http.put(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].api + this.url + ("/" + activity.id), activity);
    };
    ActivityService.prototype.delete = function (activity) {
        return this.http.delete(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].api + this.url + ("/" + activity.id));
    };
    ActivityService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ActivityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ActivityService);
    return ActivityService;
}());



/***/ }),

/***/ "./src/app/shared/services/project/project.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/project/project.service.ts ***!
  \************************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.url = 'dashboard/projects';
    }
    ProjectService.prototype.getProjects = function () {
        return this.http.get(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].api + this.url);
    };
    ProjectService.prototype.add = function (project) {
        return this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].api + this.url, project);
    };
    ProjectService.prototype.update = function (project) {
        return this.http.put(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].api + this.url + ("/" + project.id), project);
    };
    ProjectService.prototype.delete = function (project) {
        return this.http.delete(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].api + this.url + ("/" + project.id));
    };
    ProjectService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");


var environment = {
    production: true,
    logLevel: ngx_logger__WEBPACK_IMPORTED_MODULE_1__["NgxLoggerLevel"].OFF,
    serverLogLevel: ngx_logger__WEBPACK_IMPORTED_MODULE_1__["NgxLoggerLevel"].ERROR,
    api: 'http://127.0.0.1:8000/api/'
};


/***/ })

}]);
//# sourceMappingURL=projects-projects-module.js.map