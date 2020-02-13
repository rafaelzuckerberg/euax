(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container login-container\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <form [formGroup]=\"loginForm\" fxFlex=\"30%\" fxFlex.sm=\"50%\" fxFlex.xs=\"90%\">\r\n        <mat-card>\r\n            <mat-card-title>angular-material-template</mat-card-title>\r\n            <mat-card-subtitle>Log in to your account</mat-card-subtitle>\r\n            <mat-card-content>\r\n\r\n                <mat-form-field class=\"full-width\">\r\n                    <input id=\"emailInput\" matInput placeholder=\"Email\" formControlName=\"email\" autocomplete=\"email\"\r\n                        type=\"email\">\r\n\r\n                    <mat-error id=\"invalidEmailError\" *ngIf=\"loginForm.controls['email'].hasError('email')\">\r\n                        Please enter a valid email address\r\n                    </mat-error>\r\n                    <mat-error id=\"requiredEmailError\" *ngIf=\"loginForm.controls['email'].hasError('required')\">\r\n                        Email is\r\n                        <strong>required</strong>\r\n                    </mat-error>\r\n\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"full-width\">\r\n                    <input id=\"passwordInput\" matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\"\r\n                        autocomplete=\"current-password\">\r\n                    <mat-error id=\"requiredPasswordError\" *ngIf=\"loginForm.controls['email'].hasError('required')\">\r\n                        Password is\r\n                        <strong>required</strong>\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <div class=\"full-width\">\r\n                    <mat-slide-toggle formControlName=\"rememberMe\">Remember my email address</mat-slide-toggle>\r\n                </div>\r\n\r\n            </mat-card-content>\r\n\r\n            <mat-card-actions class=\"login-actions\">\r\n                <button mat-raised-button id=\"login\" color=\"primary\" [disabled]=\"loginForm.invalid || loading\"\r\n                    (click)=\"login()\">Login</button>\r\n                <button mat-button id=\"resetPassword\" (click)=\"resetPassword()\" type=\"button\">Reset Password</button>\r\n            </mat-card-actions>\r\n\r\n        </mat-card>\r\n\r\n        <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/password-reset-request/password-reset-request.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/password-reset-request/password-reset-request.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container login-container\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <form [formGroup]=\"form\" fxFlex=\"30%\" fxFlex.sm=\"50%\" fxFlex.xs=\"90%\">\r\n        <mat-card>\r\n            <mat-card-title>angular-material-template</mat-card-title>\r\n            <mat-card-subtitle>Reset your password</mat-card-subtitle>\r\n            <mat-card-content>\r\n\r\n                <mat-form-field class=\"full-width\">\r\n                    <input id=\"emailInput\" matInput placeholder=\"Email\" formControlName=\"email\" autocomplete=\"email\" type=\"email\">\r\n\r\n                    <mat-error id=\"invalidEmailError\" *ngIf=\"form.controls['email'].hasError('email')\">\r\n                        Please enter a valid email address\r\n                    </mat-error>\r\n                    <mat-error id=\"requiredEmailError\" *ngIf=\"form.controls['email'].hasError('required')\">\r\n                        Email is\r\n                        <strong>required</strong>\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n            </mat-card-content>\r\n\r\n            <mat-card-actions class=\"login-actions\">\r\n                <button id=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"form.invalid || loading\"\r\n                    (click)=\"resetPassword()\">Reset Password</button>\r\n                <button id=\"cancel\" mat-button (click)=\"cancel()\">Cancel</button>\r\n            </mat-card-actions>\r\n\r\n        </mat-card>\r\n\r\n        <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/password-reset/password-reset.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/password-reset/password-reset.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container login-container\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <form [formGroup]=\"form\" fxFlex=\"30%\" fxFlex.sm=\"50%\" fxFlex.xs=\"90%\">\r\n      <mat-card>\r\n          <mat-card-title>angular-material-template</mat-card-title>\r\n          <mat-card-subtitle>Reset your password</mat-card-subtitle>\r\n          <mat-card-content>\r\n\r\n              <mat-form-field class=\"full-width\">\r\n                  <input id=\"emailInput\" matInput readonly disabled [value]=\"email\">\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"full-width\">\r\n                <input id=\"passwordInput\" matInput placeholder=\"New Password\" formControlName=\"newPassword\" [type]=\"hideNewPassword ? 'password' : 'text'\" autocomplete=\"new-password\">\r\n                <mat-icon id=\"togglePasswordVisibility\" matSuffix (click)=\"hideNewPassword = !hideNewPassword\">\r\n                  {{hideNewPassword ? 'visibility' : 'visibility_off'}}\r\n                </mat-icon>\r\n          \r\n                <mat-error *ngIf=\"form.controls['newPassword'].hasError('required')\">\r\n                  Please enter a new password\r\n                </mat-error>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"full-width\">\r\n                <input id=\"passwordConfirmInput\" matInput placeholder=\"New Password Confirmation\" formControlName=\"newPasswordConfirm\" [type]=\"hideNewPasswordConfirm ? 'password' : 'text'\" autocomplete=\"new-password\">\r\n                <mat-icon id=\"togglePasswordConfirmVisibility\" matSuffix (click)=\"hideNewPasswordConfirm = !hideNewPasswordConfirm\">\r\n                  {{hideNewPasswordConfirm ? 'visibility' : 'visibility_off'}}\r\n                </mat-icon>\r\n          \r\n                <mat-error *ngIf=\"form.controls['newPasswordConfirm'].hasError('required')\">\r\n                  Please enter a your current password\r\n                </mat-error>\r\n              </mat-form-field>\r\n\r\n          </mat-card-content>\r\n\r\n          <mat-card-actions class=\"login-actions\">\r\n              <button id=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"form.invalid || loading\" (click)=\"resetPassword()\">OK</button>\r\n              <button id=\"cancel\" mat-button (click)=\"cancel()\">Back to Login</button>\r\n          </mat-card-actions>\r\n\r\n      </mat-card>\r\n\r\n      <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\r\n  </form>\r\n</div>");

/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _password_reset_request_password_reset_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./password-reset-request/password-reset-request.component */ "./src/app/auth/password-reset-request/password-reset-request.component.ts");
/* harmony import */ var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./password-reset/password-reset.component */ "./src/app/auth/password-reset/password-reset.component.ts");






var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'password-reset-request', component: _password_reset_request_password_reset_request_component__WEBPACK_IMPORTED_MODULE_4__["PasswordResetRequestComponent"] },
    { path: 'password-reset', component: _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_5__["PasswordResetComponent"] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _password_reset_request_password_reset_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./password-reset-request/password-reset-request.component */ "./src/app/auth/password-reset-request/password-reset-request.component.ts");
/* harmony import */ var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./password-reset/password-reset.component */ "./src/app/auth/password-reset/password-reset.component.ts");








var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _password_reset_request_password_reset_request_component__WEBPACK_IMPORTED_MODULE_6__["PasswordResetRequestComponent"], _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_7__["PasswordResetComponent"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_add_operator_delay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/delay */ "./node_modules/rxjs-compat/_esm5/add/operator/delay.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/notification.service */ "./src/app/core/services/notification.service.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, titleService, notificationService, authenticationService) {
        this.router = router;
        this.titleService = titleService;
        this.notificationService = notificationService;
        this.authenticationService = authenticationService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('angular-material-template - Login');
        this.authenticationService.logout();
        this.createForm();
    };
    LoginComponent.prototype.createForm = function () {
        var savedUserEmail = localStorage.getItem('savedUserEmail');
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](savedUserEmail, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](savedUserEmail !== null)
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var email = this.loginForm.get('email').value;
        var password = this.loginForm.get('password').value;
        var rememberMe = this.loginForm.get('rememberMe').value;
        this.loading = true;
        this.authenticationService
            .login(email.toLowerCase(), password)
            .subscribe(function (data) {
            if (rememberMe) {
                localStorage.setItem('savedUserEmail', email);
            }
            else {
                localStorage.removeItem('savedUserEmail');
            }
            _this.router.navigate(['/']);
        }, function (error) {
            _this.notificationService.openSnackBar(error.error);
            _this.loading = false;
        });
    };
    LoginComponent.prototype.resetPassword = function () {
        this.router.navigate(['/auth/password-reset-request']);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
        { type: _core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] },
        { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/password-reset-request/password-reset-request.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/auth/password-reset-request/password-reset-request.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcGFzc3dvcmQtcmVzZXQtcmVxdWVzdC9wYXNzd29yZC1yZXNldC1yZXF1ZXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/auth/password-reset-request/password-reset-request.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/auth/password-reset-request/password-reset-request.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PasswordResetRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetRequestComponent", function() { return PasswordResetRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../core/services/notification.service */ "./src/app/core/services/notification.service.ts");







var PasswordResetRequestComponent = /** @class */ (function () {
    function PasswordResetRequestComponent(authService, notificationService, titleService, router) {
        this.authService = authService;
        this.notificationService = notificationService;
        this.titleService = titleService;
        this.router = router;
    }
    PasswordResetRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('angular-material-template - Password Reset Request');
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email])
        });
        this.form.get('email').valueChanges
            .subscribe(function (val) { _this.email = val.toLowerCase(); });
    };
    PasswordResetRequestComponent.prototype.resetPassword = function () {
        var _this = this;
        this.loading = true;
        this.authService.passwordResetRequest(this.email)
            .subscribe(function (results) {
            _this.router.navigate(['/auth/login']);
            _this.notificationService.openSnackBar('Password verification mail has been sent to your email address.');
        }, function (error) {
            _this.loading = false;
            _this.notificationService.openSnackBar(error.error);
        });
    };
    PasswordResetRequestComponent.prototype.cancel = function () {
        this.router.navigate(['/']);
    };
    PasswordResetRequestComponent.ctorParameters = function () { return [
        { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    PasswordResetRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-password-reset-request',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password-reset-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/password-reset-request/password-reset-request.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./password-reset-request.component.css */ "./src/app/auth/password-reset-request/password-reset-request.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _core_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PasswordResetRequestComponent);
    return PasswordResetRequestComponent;
}());



/***/ }),

/***/ "./src/app/auth/password-reset/password-reset.component.css":
/*!******************************************************************!*\
  !*** ./src/app/auth/password-reset/password-reset.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcGFzc3dvcmQtcmVzZXQvcGFzc3dvcmQtcmVzZXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/password-reset/password-reset.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/auth/password-reset/password-reset.component.ts ***!
  \*****************************************************************/
/*! exports provided: PasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return PasswordResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");







var PasswordResetComponent = /** @class */ (function () {
    function PasswordResetComponent(activeRoute, router, authService, notificationService, titleService) {
        this.activeRoute = activeRoute;
        this.router = router;
        this.authService = authService;
        this.notificationService = notificationService;
        this.titleService = titleService;
        this.titleService.setTitle('angular-material-template - Password Reset');
        this.hideNewPassword = true;
        this.hideNewPasswordConfirm = true;
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.queryParamMap.subscribe(function (params) {
            _this.token = params.get('token');
            _this.email = params.get('email');
            if (!_this.token || !_this.email) {
                _this.router.navigate(['/']);
            }
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            newPasswordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    };
    PasswordResetComponent.prototype.resetPassword = function () {
        var _this = this;
        var password = this.form.get('newPassword').value;
        var passwordConfirm = this.form.get('newPasswordConfirm').value;
        if (password !== passwordConfirm) {
            this.notificationService.openSnackBar('Passwords do not match');
            return;
        }
        this.loading = true;
        this.authService.passwordReset(this.email, this.token, password, passwordConfirm)
            .subscribe(function (data) {
            _this.notificationService.openSnackBar('Your password has been changed.');
            _this.router.navigate(['/auth/login']);
        }, function (error) {
            _this.notificationService.openSnackBar(error.error);
            _this.loading = false;
        });
    };
    PasswordResetComponent.prototype.cancel = function () {
        this.router.navigate(['/']);
    };
    PasswordResetComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }
    ]; };
    PasswordResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-password-reset',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password-reset.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/password-reset/password-reset.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./password-reset.component.css */ "./src/app/auth/password-reset/password-reset.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _core_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], PasswordResetComponent);
    return PasswordResetComponent;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map