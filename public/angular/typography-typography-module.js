(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["typography-typography-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/typography/typography/typography.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/typography/typography/typography.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" fxLayout=\"row\" fxLayoutAlign=\"center none\">\r\n    <div fxFlex=\"95%\">\r\n\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <h2>Typography</h2>\r\n\r\n\r\n                <span class=\"note\">Header 1</span>\r\n                <h1>\r\n                    The Life of Material Dashboard\r\n                </h1>\r\n\r\n                <span class=\"note\">Header 2</span>\r\n                <h2>\r\n                    The Life of Material Dashboard\r\n                </h2>\r\n\r\n                <span class=\"note\">Header 3</span>\r\n                <h3>\r\n                    The Life of Material Dashboard\r\n                </h3>\r\n\r\n                <span class=\"note\">Header 4</span>\r\n                <h4>\r\n                    The Life of Material Dashboard\r\n                </h4>\r\n\r\n                <span class=\"note\">Header 5</span>\r\n                <h5>\r\n                    The Life of Material Dashboard\r\n                </h5>\r\n\r\n                <span class=\"note\">Header 6</span>\r\n                <h6>\r\n                    The Life of Material Dashboard\r\n                </h6>\r\n\r\n                <span class=\"note\">Paragraph</span>\r\n                <p>\r\n                    I will be the leader of a company that ends up being worth billions of dollars, because I got\r\n                    the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I\r\n                    have, to push possibilities, to show people, this is the level that things could be at.\r\n                </p>\r\n\r\n                <span class=\"note\">Quote</span>\r\n                <blockquote class=\"blockquote\">\r\n                    <p>\r\n                        I will be the leader of a company that ends up being worth billions of dollars, because I\r\n                        got the answers. I understand culture. I am the nucleus. I think that’s a responsibility\r\n                        that I have, to push possibilities, to show people, this is the level that things could be\r\n                        at.\r\n                    </p>\r\n                    <small>\r\n                        Kanye West, Musician\r\n                    </small>\r\n                </blockquote>\r\n\r\n            </mat-card-content>\r\n        </mat-card>\r\n\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/typography/typography-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/typography/typography-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: TypographyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyRoutingModule", function() { return TypographyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/layout/layout.component */ "./src/app/shared/layout/layout.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/typography/typography/typography.component.ts");





var routes = [
    {
        path: '',
        component: _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            { path: '', component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_4__["TypographyComponent"] },
        ]
    }
];
var TypographyRoutingModule = /** @class */ (function () {
    function TypographyRoutingModule() {
    }
    TypographyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TypographyRoutingModule);
    return TypographyRoutingModule;
}());



/***/ }),

/***/ "./src/app/typography/typography.module.ts":
/*!*************************************************!*\
  !*** ./src/app/typography/typography.module.ts ***!
  \*************************************************/
/*! exports provided: TypographyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyModule", function() { return TypographyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _typography_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typography-routing.module */ "./src/app/typography/typography-routing.module.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/typography/typography/typography.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






var TypographyModule = /** @class */ (function () {
    function TypographyModule() {
    }
    TypographyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_typography_typography_component__WEBPACK_IMPORTED_MODULE_4__["TypographyComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _typography_routing_module__WEBPACK_IMPORTED_MODULE_3__["TypographyRoutingModule"]
            ]
        })
    ], TypographyModule);
    return TypographyModule;
}());



/***/ }),

/***/ "./src/app/typography/typography/typography.component.css":
/*!****************************************************************!*\
  !*** ./src/app/typography/typography/typography.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R5cG9ncmFwaHkvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/typography/typography/typography.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/typography/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typography',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./typography.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/typography/typography/typography.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./typography.component.css */ "./src/app/typography/typography/typography.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=typography-typography-module.js.map