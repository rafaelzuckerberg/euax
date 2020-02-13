(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["icons-icons-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/icons/icons/icons.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/icons/icons/icons.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayout=\"row\" fxLayoutAlign=\"center none\">\r\n    <div fxFlex=\"95%\">\r\n\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <h2>Icons</h2>\r\n\r\n                <iframe src=\"https://design.google.com/icons/\">\r\n                    <p>Your browser does not support iframes.</p>\r\n                </iframe>\r\n\r\n            </mat-card-content>\r\n        </mat-card>\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/icons/icons-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/icons/icons-routing.module.ts ***!
  \***********************************************/
/*! exports provided: IconsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsRoutingModule", function() { return IconsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/layout/layout.component */ "./src/app/shared/layout/layout.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/icons/icons/icons.component.ts");





var routes = [
    {
        path: '',
        component: _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            { path: '', component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_4__["IconsComponent"] },
        ]
    }
];
var IconsRoutingModule = /** @class */ (function () {
    function IconsRoutingModule() {
    }
    IconsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], IconsRoutingModule);
    return IconsRoutingModule;
}());



/***/ }),

/***/ "./src/app/icons/icons.module.ts":
/*!***************************************!*\
  !*** ./src/app/icons/icons.module.ts ***!
  \***************************************/
/*! exports provided: IconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsModule", function() { return IconsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _icons_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons-routing.module */ "./src/app/icons/icons-routing.module.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/icons/icons/icons.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






var IconsModule = /** @class */ (function () {
    function IconsModule() {
    }
    IconsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_icons_icons_component__WEBPACK_IMPORTED_MODULE_4__["IconsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _icons_routing_module__WEBPACK_IMPORTED_MODULE_3__["IconsRoutingModule"]
            ]
        })
    ], IconsModule);
    return IconsModule;
}());



/***/ }),

/***/ "./src/app/icons/icons/icons.component.css":
/*!*************************************************!*\
  !*** ./src/app/icons/icons/icons.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("iframe {\r\n    width: 100%;\r\n    height: 650px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaWNvbnMvaWNvbnMvaWNvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaWNvbnMvaWNvbnMvaWNvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlmcmFtZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjUwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/icons/icons/icons.component.ts":
/*!************************************************!*\
  !*** ./src/app/icons/icons/icons.component.ts ***!
  \************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-icons',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./icons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/icons/icons/icons.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./icons.component.css */ "./src/app/icons/icons/icons.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=icons-icons-module.js.map