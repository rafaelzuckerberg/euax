(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-home/about-home.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-home/about-home.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayout=\"row\" fxLayoutAlign=\"center none\">\r\n  <div fxFlex=\"95%\">\r\n\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <h2>About</h2>\r\n\r\n        <p>\r\n          Built on top of <a rel=\"noreferrer noopener\" aria-label=\"Angular (opens in a new tab)\"\r\n            href=\"http://angular.io\" target=\"_blank\">Angular</a> &amp; <a rel=\"noreferrer noopener\"\r\n            aria-label=\"Angular Material (opens in a new tab)\" href=\"http://material.angular.io\"\r\n            target=\"_blank\">Angular Material</a>, angular-material-template provides a simple template that you can use for your next project.\r\n        </p>\r\n\r\n        <p>\r\n          Support the project by starring it on <a href=\"https://github.com/umutesen/angular-material-template\"\r\n            target=\"_blank\">\r\n            GitHub\r\n          </a>.\r\n        </p>\r\n\r\n        <p>\r\n          Made with <mat-icon>favorite</mat-icon> by <a href=\"https://onthecode.co.uk\" target=\"_blank\"\r\n            aria-label=\"onthecode (opens in a new tab)\">onthecode</a>.\r\n        </p>\r\n\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/about/about-home/about-home.component.css":
/*!***********************************************************!*\
  !*** ./src/app/about/about-home/about-home.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-icon {\r\n    color: rgb(200, 0, 0);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQtaG9tZS9hYm91dC1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC1ob21lL2Fib3V0LWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1pY29uIHtcclxuICAgIGNvbG9yOiByZ2IoMjAwLCAwLCAwKTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/about/about-home/about-home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/about/about-home/about-home.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutHomeComponent", function() { return AboutHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutHomeComponent = /** @class */ (function () {
    function AboutHomeComponent() {
    }
    AboutHomeComponent.prototype.ngOnInit = function () {
    };
    AboutHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about-home/about-home.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about-home.component.css */ "./src/app/about/about-home/about-home.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutHomeComponent);
    return AboutHomeComponent;
}());



/***/ }),

/***/ "./src/app/about/about-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/layout/layout.component */ "./src/app/shared/layout/layout.component.ts");
/* harmony import */ var _about_home_about_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-home/about-home.component */ "./src/app/about/about-home/about-home.component.ts");





var routes = [
    {
        path: '',
        component: _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            { path: '', component: _about_home_about_home_component__WEBPACK_IMPORTED_MODULE_4__["AboutHomeComponent"] },
        ]
    }
];
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/about/about-routing.module.ts");
/* harmony import */ var _about_home_about_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-home/about-home.component */ "./src/app/about/about-home/about-home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_about_home_about_home_component__WEBPACK_IMPORTED_MODULE_4__["AboutHomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _about_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutRoutingModule"]
            ]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map