(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customers-customers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-list/customer-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-list/customer-list.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayout=\"row\" fxLayoutAlign=\"center none\">\r\n  <div fxFlex=\"95%\">\r\n\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <h2>Customers</h2>\r\n\r\n        <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n          <!-- Position Column -->\r\n          <ng-container matColumnDef=\"position\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n          </ng-container>\r\n        \r\n          <!-- Name Column -->\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n          </ng-container>\r\n        \r\n          <!-- Weight Column -->\r\n          <ng-container matColumnDef=\"weight\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n          </ng-container>\r\n        \r\n          <!-- Symbol Column -->\r\n          <ng-container matColumnDef=\"symbol\">\r\n            <th mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n          </ng-container>\r\n        \r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n        \r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/customers/customer-list/customer-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/customers/customer-list/customer-list.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n    width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted {\r\n    color: black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJzL2N1c3RvbWVyLWxpc3QvY3VzdG9tZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci1saXN0L2N1c3RvbWVyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/customers/customer-list/customer-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/customers/customer-list/customer-list.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/notification.service */ "./src/app/core/services/notification.service.ts");







var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(logger, notificationService, titleService) {
        this.logger = logger;
        this.notificationService = notificationService;
        this.titleService = titleService;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
    }
    CustomerListComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('angular-material-template - Customers');
        this.logger.log('Customers loaded');
        this.dataSource.sort = this.sort;
    };
    CustomerListComponent.ctorParameters = function () { return [
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"] },
        { type: _core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], CustomerListComponent.prototype, "sort", void 0);
    CustomerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer-list/customer-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer-list.component.css */ "./src/app/customers/customer-list/customer-list.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"],
            _core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], CustomerListComponent);
    return CustomerListComponent;
}());



/***/ }),

/***/ "./src/app/customers/customers-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/customers/customers-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersRoutingModule", function() { return CustomersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/layout/layout.component */ "./src/app/shared/layout/layout.component.ts");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/customers/customer-list/customer-list.component.ts");





var routes = [
    {
        path: '',
        component: _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            { path: '', component: _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_4__["CustomerListComponent"] },
        ]
    }
];
var CustomersRoutingModule = /** @class */ (function () {
    function CustomersRoutingModule() {
    }
    CustomersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CustomersRoutingModule);
    return CustomersRoutingModule;
}());



/***/ }),

/***/ "./src/app/customers/customers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers-routing.module */ "./src/app/customers/customers-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-list/customer-list.component */ "./src/app/customers/customer-list/customer-list.component.ts");






var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _customers_routing_module__WEBPACK_IMPORTED_MODULE_3__["CustomersRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [
                _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_5__["CustomerListComponent"]
            ],
            entryComponents: []
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ })

}]);
//# sourceMappingURL=customers-customers-module.js.map