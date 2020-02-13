(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard-home/dashboard-home.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard-home/dashboard-home.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayout=\"row\" fxLayoutAlign=\"center none\">\r\n\r\n  <div fxFlex=\"95%\">\r\n    <div class=\"container\" fxLayout=\"row\" fxLayoutAlign=\"center none\">\r\n\r\n      <h2>Welcome back, {{currentUser.fullName}}!</h2>\r\n\r\n    </div>\r\n\r\n    <div class=\"container\" fxLayout=\"row\" fxLayoutAlign=\"center none\">\r\n      <div fxFlex=\"50%\" class=\"text-center no-records animate\">\r\n        <mat-icon>dashboard</mat-icon>\r\n        <p>This is the dashboard.</p>\r\n      </div>\r\n      <mat-icon> </mat-icon>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/dashboard/dashboard-home/dashboard-home.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-home/dashboard-home.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".single-cards {\r\n  margin: 20px 0;\r\n}\r\n\r\n.single-card .mat-card-avatar {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.single-card .mat-icon {\r\n  font-size: 55px;\r\n}\r\n\r\n.projects-card>mat-card-content {\r\n  max-height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC1ob21lL2Rhc2hib2FyZC1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQtaG9tZS9kYXNoYm9hcmQtaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbmdsZS1jYXJkcyB7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5zaW5nbGUtY2FyZCAubWF0LWNhcmQtYXZhdGFyIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5zaW5nbGUtY2FyZCAubWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogNTVweDtcclxufVxyXG5cclxuLnByb2plY3RzLWNhcmQ+bWF0LWNhcmQtY29udGVudCB7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard-home/dashboard-home.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-home/dashboard-home.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardHomeComponent", function() { return DashboardHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");






var DashboardHomeComponent = /** @class */ (function () {
    function DashboardHomeComponent(notificationService, authService, titleService, logger) {
        this.notificationService = notificationService;
        this.authService = authService;
        this.titleService = titleService;
        this.logger = logger;
    }
    DashboardHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authService.getCurrentUser();
        this.titleService.setTitle('angular-material-template - Dashboard');
        this.logger.log('Dashboard loaded');
        setTimeout(function () {
            _this.notificationService.openSnackBar('Welcome!');
        });
    };
    DashboardHomeComponent.ctorParameters = function () { return [
        { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] },
        { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
        { type: ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"] }
    ]; };
    DashboardHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard-home/dashboard-home.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard-home.component.css */ "./src/app/dashboard/dashboard-home/dashboard-home.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"],
            src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"],
            ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"]])
    ], DashboardHomeComponent);
    return DashboardHomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/layout/layout.component */ "./src/app/shared/layout/layout.component.ts");
/* harmony import */ var _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-home/dashboard-home.component */ "./src/app/dashboard/dashboard-home/dashboard-home.component.ts");





var routes = [
    {
        path: '',
        component: _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            { path: '', component: _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_4__["DashboardHomeComponent"] },
        ]
    },
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-home/dashboard-home.component */ "./src/app/dashboard/dashboard-home/dashboard-home.component.ts");






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_5__["DashboardHomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            entryComponents: []
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map