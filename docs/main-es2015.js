(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _incrementator_incrementor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incrementator/incrementor.component */ "./src/app/incrementator/incrementor.component.ts");



class AppComponent {
    constructor() {
        this.title = 'customer-app';
        this.bodovi = 20;
    }
    ngOnInit() { }
    duplirajBodove() {
        this.bodovi *= 2;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[3, "brojBodova"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "inkrementor", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() { return ctx.duplirajBodove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dupliraj bodove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("brojBodova", ctx.bodovi);
    } }, directives: [_incrementator_incrementor_component__WEBPACK_IMPORTED_MODULE_1__["IncrementorComponent"]], styles: ["[_nghost-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpbWl0cmlqZS9Xb3Jrcy9GQVgvTGF6eSBsb2FkIHByaW1lciBkaXBsb21za2kvZGVmYXVsdC9jdXN0b21lci1hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _incrementator_incremetor_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./incrementator/incremetor.module */ "./src/app/incrementator/incremetor.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _incrementator_incremetor_module__WEBPACK_IMPORTED_MODULE_4__["IncrementorModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _incrementator_incremetor_module__WEBPACK_IMPORTED_MODULE_4__["IncrementorModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _incrementator_incremetor_module__WEBPACK_IMPORTED_MODULE_4__["IncrementorModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/incrementator/incrementor.component.ts":
/*!********************************************************!*\
  !*** ./src/app/incrementator/incrementor.component.ts ***!
  \********************************************************/
/*! exports provided: IncrementorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncrementorComponent", function() { return IncrementorComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




const _c0 = ["brojBodova"];
class IncrementorComponent {
    constructor(_zone, _pipe) {
        this._zone = _zone;
        this._pipe = _pipe;
        this.trajanjePromeneMS = 1000;
        this.inkrementMS = 10;
        this._brojBodova = 0;
    }
    set brojBodova(val) {
        this._brojBodova = val;
        if (this.label) {
            this.label.nativeElement.innerText = this._pipe.transform(this.brojBodova, '1.0-0');
        }
    }
    get brojBodova() {
        return this._brojBodova;
    }
    ngOnInit() {
        this.brojBodova = this.brojBodova;
    }
    ngOnChanges(changes) {
        const change = changes.brojBodova;
        if (!change) {
            return;
        }
        if (typeof change.previousValue !== 'number') {
            this.brojBodova = change.currentValue;
        }
        else {
            this.brojBodova = change.previousValue;
            this._zone.runOutsideAngular(() => {
                this._postepenoPovecaj(change.currentValue);
            });
        }
    }
    _postepenoPovecaj(novaVrednost) {
        const razlikaDo = novaVrednost - this.brojBodova;
        const inkrement = this.inkrementMS * (razlikaDo / this.trajanjePromeneMS);
        const pocetnoBodova = this.brojBodova;
        this._incrementInterval = setInterval(() => {
            let sledeciBod = Math.ceil(pocetnoBodova + razlikaDo);
            if (this.brojBodova >= sledeciBod) {
                this.brojBodova = pocetnoBodova + razlikaDo;
                clearInterval(this._incrementInterval);
            }
            else {
                this.brojBodova += inkrement;
            }
        }, this.inkrementMS);
    }
}
IncrementorComponent.ɵfac = function IncrementorComponent_Factory(t) { return new (t || IncrementorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"])); };
IncrementorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: IncrementorComponent, selectors: [["inkrementor"]], viewQuery: function IncrementorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.label = _t.first);
    } }, inputs: { trajanjePromeneMS: "trajanjePromeneMS", inkrementMS: "inkrementMS", brojBodova: "brojBodova" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[2, "width", "200px", "height", "50px", "font-size", "40px", "text-align", "center"], ["brojBodova", ""]], template: function IncrementorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IncrementorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'inkrementor',
                template: '<div #brojBodova style="width: 200px; height: 50px; font-size: 40px; text-align: center;"></div>',
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"] }]; }, { trajanjePromeneMS: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], inkrementMS: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['brojBodova', { static: true }]
        }], brojBodova: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/incrementator/incremetor.module.ts":
/*!****************************************************!*\
  !*** ./src/app/incrementator/incremetor.module.ts ***!
  \****************************************************/
/*! exports provided: IncrementorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncrementorModule", function() { return IncrementorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _incrementor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./incrementor.component */ "./src/app/incrementator/incrementor.component.ts");




class IncrementorModule {
}
IncrementorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IncrementorModule });
IncrementorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IncrementorModule_Factory(t) { return new (t || IncrementorModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IncrementorModule, { declarations: [_incrementor_component__WEBPACK_IMPORTED_MODULE_2__["IncrementorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_incrementor_component__WEBPACK_IMPORTED_MODULE_2__["IncrementorComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IncrementorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [_incrementor_component__WEBPACK_IMPORTED_MODULE_2__["IncrementorComponent"]],
                exports: [_incrementor_component__WEBPACK_IMPORTED_MODULE_2__["IncrementorComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .then((module) => {
    const appRef = module.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]);
    const appComponent = appRef.components[0];
    Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["enableDebugTools"])(appComponent);
})
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dimitrije/Works/FAX/Lazy load primer diplomski/default/customer-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map