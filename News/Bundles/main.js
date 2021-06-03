(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+rEv":
/*!**************************************************************************!*\
  !*** ./src/app/components/datavisual/videosedit/videosedit.component.ts ***!
  \**************************************************************************/
/*! exports provided: VideoseditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoseditComponent", function() { return VideoseditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class VideoseditComponent {
    constructor() { }
    ngOnInit() {
    }
}
VideoseditComponent.ɵfac = function VideoseditComponent_Factory(t) { return new (t || VideoseditComponent)(); };
VideoseditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoseditComponent, selectors: [["app-videosedit"]], decls: 2, vars: 0, template: function VideoseditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "videosedit works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlb3NlZGl0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "/0gr":
/*!*****************************************************!*\
  !*** ./src/app/components/autor/autor.component.ts ***!
  \*****************************************************/
/*! exports provided: AutorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutorComponent", function() { return AutorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_principal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/principal.service */ "Z86e");


class AutorComponent {
    constructor(service) {
        this.service = service;
        this.autor = {
            urlautor: "",
            textautor: "",
            urlwwa: "",
            textwwa: "",
        };
    }
    ngOnInit() {
        this.service.Getmain().subscribe((res) => {
            this.autores = res;
            this.autor.textautor = this.autores[0].textautor;
            this.autor.urlautor = this.autores[0].urlautor;
            this.autor.urlwwa = this.autores[0].urlwwa;
            this.autor.textwwa = this.autores[0].textwwa;
        });
    }
}
AutorComponent.ɵfac = function AutorComponent_Factory(t) { return new (t || AutorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_principal_service__WEBPACK_IMPORTED_MODULE_1__["PrincipalService"])); };
AutorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutorComponent, selectors: [["app-autor"]], decls: 14, vars: 1, consts: [[1, "cuerpoDos"], [1, "bloq"], [1, "maginate"], [1, "mayor"], [1, "blan"], [1, "textPers"], [1, "foto"], ["src", "../../../assets/David.jpg", "loading", "lazy", "alt", ""], [1, "colores"], [1, "blanc1"]], template: function AutorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "David Scarlett Wakelyn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.autor.textautor);
    } }, styles: [".cuerpoDos[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    min-height: 50vh;\r\n    margin-top: 1rem;\r\n}\r\n.bloq[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    display: block;\r\n    height: 31rem;\r\n    position: relative;\r\n    background-image: url('Edificio.png');\r\n    background-position: top;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    overflow: hidden;\r\n    margin-bottom: 2rem;\r\n}\r\n.maginate[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    display: flex;\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: 2;\r\n    background: #020568e0;\r\n}\r\n.cuerpoDos[_ngcontent-%COMP%]   .mayor[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n    text-align: justify;\r\n}\r\n.cuerpoDos[_ngcontent-%COMP%]   .textPers[_ngcontent-%COMP%]{\r\n    color: var(--blanco);\r\n    width: 100%;\r\n    padding: 2rem 1rem 2rem 6rem;\r\n    box-sizing: border-box;\r\n}\r\n.cuerpoDos[_ngcontent-%COMP%]   .textPers[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n    display: -webkit-box;\r\n    -webkit-box-orient: vertical;\r\n    overflow: hidden;\r\n    -webkit-line-clamp: 13;\r\n    \r\n}\r\n.cuerpoDos[_ngcontent-%COMP%]   .blan[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 2em;\r\n    background: var(--blanco);\r\n}\r\n.cuerpoDos[_ngcontent-%COMP%]   .foto[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    height: 18rem;\r\n    display: flex;\r\n    text-align: center;\r\n    margin: 11vh auto 0px auto;\r\n}\r\n.blanco[_ngcontent-%COMP%]{\r\n    width: 55%;\r\n    height: 2rem;\r\n    background: var(--blanco);\r\n}\r\n.foto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 12rem;\r\n    height: 13rem;\r\n    margin: auto 0px auto 2rem;\r\n    align-items: baseline;\r\n}\r\n.colores[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 1.8rem;\r\n}\r\n.colores[_ngcontent-%COMP%]   .blanc1[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    background: var(--blanco);\r\n    height: 100%;\r\n}\r\n@media(max-width: 700px){\r\n\r\n    \r\n    body[_ngcontent-%COMP%]{\r\n        font-size: 10px;\r\n    }\r\n    \r\n    .cuerpoDos[_ngcontent-%COMP%]   .bloq[_ngcontent-%COMP%]{\r\n        height: 40rem;\r\n        background: var(--azul);\r\n    }\r\n    .cuerpoDos[_ngcontent-%COMP%]   .bloq[_ngcontent-%COMP%]   .textPers[_ngcontent-%COMP%]{\r\n        padding: 0px;\r\n    }\r\n    .cuerpoDos[_ngcontent-%COMP%]   .maginate[_ngcontent-%COMP%]{\r\n        display: block;\r\n        padding-top: 20px;\r\n    }\r\n    .cuerpoDos[_ngcontent-%COMP%]   .mayor[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n        margin: 0px auto;\r\n    }\r\n    .cuerpoDos[_ngcontent-%COMP%]   .colores[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .cuerpoDos[_ngcontent-%COMP%]   .foto[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n        margin: 10px auto;\r\n    }\r\n    .cuerpoDos[_ngcontent-%COMP%]   .foto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    .edific[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .sobre[_ngcontent-%COMP%]{\r\n        position: relative;\r\n    }\r\n    .cuerpoDos[_ngcontent-%COMP%]{\r\n        min-height: 30vh;\r\n        width: 100%;\r\n        margin-bottom: 1rem;\r\n    }\r\n    .cuerpoDos[_ngcontent-%COMP%]   .foto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        border-radius: 10px;\r\n        margin: 0px auto;\r\n    }\r\n    .cuerpoDos[_ngcontent-%COMP%]   .blan[_ngcontent-%COMP%], .colores[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .cuerpoTres[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        margin: 10px 0px;\r\n    }\r\n    .cuerpoTres[_ngcontent-%COMP%]   .busqueda[_ngcontent-%COMP%]{\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        width: 90%;\r\n        margin: 5px auto;\r\n    }\r\n    .cuerpoTre[_ngcontent-%COMP%]   .busqueda[_ngcontent-%COMP%]   .distinte1[_ngcontent-%COMP%]{\r\n        grid-column: 1 / 3;\r\n    }\r\n    .cuerpoTres[_ngcontent-%COMP%]   .busqueda[_ngcontent-%COMP%]   .distinte[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    .cuerpoTres[_ngcontent-%COMP%]   .busqueda[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        padding-right: 5px;\r\n        padding-left: 5px;\r\n    }\r\n    .cuerpoTres[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n        width: 10em;\r\n    }\r\n    .cuerpoCuatro[_ngcontent-%COMP%]{\r\n        grid-template-columns: 1fr;\r\n    }\r\n    .cuerpoCuatro[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n        margin: .5rem auto;\r\n    }\r\n    .cuerpoCuatro[_ngcontent-%COMP%]   .buscar[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        width: 90%;\r\n        margin: .5rem auto;\r\n    }\r\n    .cuerpoCuatro[_ngcontent-%COMP%]   .buscar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n        height: 80%;\r\n    }\r\n    footer[_ngcontent-%COMP%]{\r\n        grid-template-columns: 1fr 2fr 2fr;\r\n        background-image: url('LOGO.png');\r\n        background-position: top;\r\n        background-size: contain;\r\n        background-repeat: no-repeat;\r\n    }\r\n    footer[_ngcontent-%COMP%]   .anclas1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .anclas2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        font-size: 1rem;\r\n    }\r\n    .logoPie[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .enlaces[_ngcontent-%COMP%]{\r\n        margin-right: 5px;\r\n        width: 100%;\r\n    }\r\n    .cuerpoCuatro[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        margin: 0px;\r\n    }\r\n    \r\n    .cuerpoCuatro[_ngcontent-%COMP%]   .buscar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        height: 100%;\r\n        width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFDQUFtRDtJQUNuRCx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsc0JBQXNCOztBQUUxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFFQTs7SUFFSSxjQUFjO0lBQ2Q7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksY0FBYztRQUNkLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCO0lBQ0E7O1FBRUksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLFVBQVU7UUFDVixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1Ysa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGtDQUFrQztRQUNsQyxpQ0FBK0M7UUFDL0Msd0JBQXdCO1FBQ3hCLHdCQUF3QjtRQUN4Qiw0QkFBNEI7SUFDaEM7SUFDQTs7UUFFSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsV0FBVztJQUNmOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6ImF1dG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VlcnBvRG9ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcbi5ibG9xe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMzFyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL0VkaWZpY2lvLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbi5tYWdpbmF0ZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDIwNTY4ZTA7XHJcbn1cclxuLmN1ZXJwb0RvcyAubWF5b3J7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4uY3VlcnBvRG9zIC50ZXh0UGVyc3tcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFuY28pO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAycmVtIDFyZW0gMnJlbSA2cmVtO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uY3VlcnBvRG9zIC50ZXh0UGVycyBwe1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTM7XHJcbiAgICBcclxufVxyXG4uY3VlcnBvRG9zIC5ibGFue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsYW5jbyk7XHJcbn1cclxuLmN1ZXJwb0RvcyAuZm90b3tcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDE4cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTF2aCBhdXRvIDBweCBhdXRvO1xyXG59XHJcbi5ibGFuY297XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxhbmNvKTtcclxufVxyXG4uZm90byBpbWd7XHJcbiAgICB3aWR0aDogMTJyZW07XHJcbiAgICBoZWlnaHQ6IDEzcmVtO1xyXG4gICAgbWFyZ2luOiBhdXRvIDBweCBhdXRvIDJyZW07XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbn1cclxuLmNvbG9yZXN7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEuOHJlbTtcclxufVxyXG4uY29sb3JlcyAuYmxhbmMxe1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsYW5jbyk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDcwMHB4KXtcclxuXHJcbiAgICAvKiBwcmluY2lwYWwgKi9cclxuICAgIGJvZHl7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY3VlcnBvRG9zIC5ibG9xe1xyXG4gICAgICAgIGhlaWdodDogNDByZW07XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYXp1bCk7XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvRG9zIC5ibG9xIC50ZXh0UGVyc3tcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvRG9zIC5tYWdpbmF0ZXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgIC5jdWVycG9Eb3MgLm1heW9ye1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIH1cclxuICAgIC5jdWVycG9Eb3MgLmNvbG9yZXN7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jdWVycG9Eb3MgLmZvdG97XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIH1cclxuICAgIC5jdWVycG9Eb3MgLmZvdG8gaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmVkaWZpY3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnNvYnJle1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5jdWVycG9Eb3N7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzB2aDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLmN1ZXJwb0RvcyAuZm90byBpbWd7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmN1ZXJwb0RvcyAuYmxhbixcclxuICAgIC5jb2xvcmVze1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvVHJlc3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLmN1ZXJwb1RyZXMgLmJ1c3F1ZWRhe1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIH1cclxuICAgIC5jdWVycG9UcmUgLmJ1c3F1ZWRhIC5kaXN0aW50ZTF7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xyXG4gICAgfVxyXG4gICAgLmN1ZXJwb1RyZXMgLmJ1c3F1ZWRhIC5kaXN0aW50ZSBpbnB1dHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jdWVycG9UcmVzIC5idXNxdWVkYSBwe1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICAgIC5jdWVycG9UcmVzIGlucHV0e1xyXG4gICAgICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgfVxyXG4gICAgLmN1ZXJwb0N1YXRyb3tcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuICAgIC5jdWVycG9DdWF0cm8gLmZvcm11bGFyaW97XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IC41cmVtIGF1dG87XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvQ3VhdHJvIC5idXNjYXJ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiAuNXJlbSBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmN1ZXJwb0N1YXRybyAuYnVzY2FyIGRpdntcclxuICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgIH1cclxuICAgIGZvb3RlcntcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMmZyO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvTE9HTy5wbmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIH1cclxuICAgIGZvb3RlciAuYW5jbGFzMSBoMyxcclxuICAgIGZvb3RlciAuYW5jbGFzMiBoM3tcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgICAubG9nb1BpZXtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmVubGFjZXN7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvQ3VhdHJve1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY3VlcnBvQ3VhdHJvIC5idXNjYXIgaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "/6cC":
/*!*************************************************************************!*\
  !*** ./src/app/components/categories-edit/categories-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoriesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesEditComponent", function() { return CategoriesEditComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer-main/footer-main.component */ "7UVc");








function CategoriesEditComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoriesEditComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is already registered. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CategoriesEditComponent {
    constructor(formBuilder, service, router, _route) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this._route = _route;
        this.status = '';
        this.estado = false;
        this.rol = '';
        this.errorc = false;
        this.cat_id = "";
        this.userForm = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            portada: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            hide: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    ngOnInit() {
        this.userForm.reset();
        this.userForm.patchValue({ portada: '1' });
        this.userForm.patchValue({ hide: '1' });
        this.errorc = false;
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        else {
            this.router.navigate(['/main']);
        }
        this.rol = localStorage.getItem('rol');
        if (parseInt(this.rol) == 1) {
            this.router.navigate(['/mainr']);
        }
        this.cat_id = this._route.snapshot.paramMap.get('cat_id');
        this.service.view(this.cat_id).subscribe((category) => {
            if (category.portada == '0') {
                this.userForm.patchValue({ portada: '0' });
            }
            else {
                this.userForm.patchValue({ portada: '1' });
            }
            if (category.hide == '0') {
                this.userForm.patchValue({ hide: '0' });
            }
            else {
                this.userForm.patchValue({ hide: '1' });
            }
            this.userForm.patchValue({ nombre: category.nombre });
        });
    }
    onSubmit() {
        this.errorc = false;
        this.service.clearFormData();
        this.service.formData = {
            nombre: this.userForm.value.nombre,
            portada: this.userForm.value.portada,
            hide: this.userForm.value.hide,
        };
        this.insertRecord();
    }
    insertRecord() {
        this.service.editCategory(this.service.formData, this.cat_id).subscribe(res => {
            //MOSTRAR UN MENSAJE QUE SE GUARDO CORRECTAMENTE
            this.router.navigate(['/categorieslist']);
            this.userForm.reset();
        }, (err) => {
            console.log(err);
            var MensajeError = err.error.message;
            console.log(MensajeError);
            if (MensajeError == "CATEGORIA YA EXISTE") {
                this.errorc = true;
            }
            else {
                console.log('algo malio sal');
                this.userForm.reset();
            }
        });
    }
}
CategoriesEditComponent.ɵfac = function CategoriesEditComponent_Factory(t) { return new (t || CategoriesEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
CategoriesEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoriesEditComponent, selectors: [["app-categories-edit"]], decls: 45, vars: 4, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], [1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link", "active"], ["routerLink", "/newslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "textbox", "name", "nombre", "formControlName", "nombre", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "float-right", "btn-outline-success", 2, "margin-left", "5px", 3, "disabled"], ["routerLink", "/categorieslist"], [1, "btn", "float-right", "btn-outline-danger"], [1, "alert", "alert-danger"]], template: function CategoriesEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Edit Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CategoriesEditComponent_Template_form_ngSubmit_31_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, CategoriesEditComponent_div_36_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, CategoriesEditComponent_div_37_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Modify");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "app-footer-main");
    } if (rf & 2) {
        let tmp_1_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.userForm.get("nombre")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = ctx.userForm.get("nombre")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.userForm.get("nombre")) == null ? null : tmp_1_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_6__["FooterMainComponent"]], styles: [".sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n    border: .2px solid var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoiY2F0ZWdvcmllcy1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhcntcclxuICAgIG1hcmdpbjogMHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDJyZW0gMHB4O1xyXG59XHJcbi5zaWRlYmFyIC5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1henVsKTtcclxufVxyXG4uc2lkZWJhciAuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS12aW9sZXRhKTtcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS12aW9sZXRhKTtcclxufVxyXG4uc2lkZWJhciAubmF2IGF7XHJcbiAgICBjb2xvcjp2YXIoLS1ibGFuY28pO1xyXG4gICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLWF6dWwpO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYgYTpob3ZlcntcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS1ibGFuY28pO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "/pQw":
/*!********************************************!*\
  !*** ./src/app/services/videos.service.ts ***!
  \********************************************/
/*! exports provided: VideosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosService", function() { return VideosService; });
/* harmony import */ var _models_apiurl___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/apiurl  */ "kkh4");
/* harmony import */ var _models_videos_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/videos.model */ "Pqll");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class VideosService {
    constructor(http) {
        this.http = http;
        this.oRes = '';
        this.formData = new _models_videos_model__WEBPACK_IMPORTED_MODULE_1__["Video"];
        this.direccion = _models_apiurl___WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].apiurl;
        this.rootURL = this.direccion;
    }
    list() {
        return this.http.get(this.rootURL + '/Videos/GetVideos');
    }
    listNR() {
        return this.http.get(this.rootURL + '/Videos/GetVideosNR');
    }
    PostVideos(formData) {
        return this.http.post(this.rootURL + '/Videos/PostVideos', formData);
    }
    clearFormData() {
        this.formData = {
            url: "",
            hide: 1,
            titulo: ""
        };
    }
}
VideosService.ɵfac = function VideosService_Factory(t) { return new (t || VideosService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
VideosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: VideosService, factory: VideosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\JOBS DEVELOPMENT\git\News\app\src\main.ts */"zUnb");


/***/ }),

/***/ "0ZmO":
/*!**********************************************!*\
  !*** ./src/app/services/cargarjv.service.ts ***!
  \**********************************************/
/*! exports provided: CargarjvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargarjvService", function() { return CargarjvService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CargarjvService {
    constructor() { }
    CargaScript(archivos) {
        for (let archivo of archivos) {
            let script = document.createElement("script");
            script.src = "./assets/ScriptsJS/" + archivo;
            //script.src = "./../../assets/ScriptsJS" + archivo ;
            let body = document.getElementsByTagName("body")[0];
            body.appendChild(script);
        }
    }
}
CargarjvService.ɵfac = function CargarjvService_Factory(t) { return new (t || CargarjvService)(); };
CargarjvService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CargarjvService, factory: CargarjvService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "0wRy":
/*!***********************************************************!*\
  !*** ./src/app/components/news-add/news-add.component.ts ***!
  \***********************************************************/
/*! exports provided: NewsAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsAddComponent", function() { return NewsAddComponent; });
/* harmony import */ var _models_apiurl___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../models/apiurl  */ "kkh4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/news.service */ "Ado8");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer-main/footer-main.component */ "7UVc");











const _c0 = ["fileInput"];
function NewsAddComponent_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", cat_r4.id_categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cat_r4.nombre, " ");
} }
function NewsAddComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NewsAddComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class NewsAddComponent {
    constructor(formBuilder, service, servicecat, router) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.servicecat = servicecat;
        this.router = router;
        this.carga_completa = false;
        this.defecto = "";
        this.imageUrl = "https://bulma.io/images/placeholders/480x480.png";
        //fin foto
        this.defecto2 = "";
        this.imageUrln = "https://bulma.io/images/placeholders/480x480.png";
        this.urlapi = _models_apiurl___WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].apiurl;
        this.status = '';
        this.estado = false;
        this.rol = '';
        this.erroru = false;
        this.errorc = false;
        this.userForm = this.formBuilder.group({
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Subtitle: [''],
            report: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fotoport: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fotonot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            videonot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            portada: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hide: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ngOnInit() {
        this.userForm.reset();
        this.userForm.patchValue({ category: 5 });
        this.userForm.patchValue({ portada: '1' });
        this.userForm.patchValue({ hide: '1' });
        this.userForm.patchValue({ fotoport: "https://bulma.io/images/placeholders/480x480.png" });
        this.userForm.patchValue({ fotonot: 'jhf' });
        this.userForm.patchValue({ videonot: 'jhf' });
        this.errorc = false;
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        else {
            this.router.navigate(['/main']);
        }
        this.rol = localStorage.getItem('rol');
        if (parseInt(this.rol) == 1) {
            this.router.navigate(['/mainr']);
        }
        this.servicecat.list().subscribe((cat) => {
            this.categories = cat;
        });
        //this.userForm.get('Title')?.focus();
    }
    onSubmit() {
        this.errorc = false;
        this.service.clearFormData();
        this.datos = this.imageUrl;
        this.datosn = this.imageUrln;
        if (this.datos == "https://bulma.io/images/placeholders/480x480.png") {
            this.datos = "";
        }
        else {
            this.datos = this.datos.substring(this.datos.indexOf(',') + 1);
        }
        if (this.datosn == "https://bulma.io/images/placeholders/480x480.png") {
            this.datosn = "";
        }
        else {
            this.datosn = this.datos.substring(this.datos.indexOf(',') + 1);
        }
        this.service.formData = {
            id_categoria: this.userForm.value.category,
            titulo: this.userForm.value.Title,
            subtitulo: this.userForm.value.Subtitle,
            descripcion: this.userForm.value.report,
            foto_portada: this.datos,
            foto_noticia: this.datosn,
            video_noticia: this.userForm.value.videonot,
            portada: this.userForm.value.portada,
            hide: this.userForm.value.hide,
        };
        // this.categoriaelegida = await this.getCategoria(this.userForm.value.category);
        this.insertRecord();
    }
    insertRecord() {
        this.service.postNew(this.service.formData).subscribe(res => {
            //MOSTRAR UN MENSAJE QUE SE GUARDO CORRECTAMENTE
            this.router.navigate(['/newslist']);
            this.userForm.reset();
        }, (err) => {
            var MensajeError = err.error.message;
            console.log(err);
            console.log(MensajeError);
            console.log('algo malio sal');
            this.userForm.reset();
            //this.router.navigate(['/usersadd']);
        });
    }
    //para foto
    onChange(fileInput) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
            const max_size = 10485760;
            const allowed_types = ['image/png', 'image/jpeg'];
            const max_height = 600;
            const max_width = 600;
            if (fileInput.target.files[0].size > max_size) {
                window.alert('Maximum size allowed is ' + (max_size / 1024) / 1024 + 'Mb');
                this.limpiarFoto();
                return false;
            }
            else {
                if (!lodash__WEBPACK_IMPORTED_MODULE_2__["includes"](allowed_types, fileInput.target.files[0].type)) {
                    window.alert('Only Images are allowed ( JPG | PNG )');
                    this.limpiarFoto();
                    return false;
                }
                else {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const image = new Image();
                        image.src = e.target.result;
                        image.onload = (rs) => {
                            const img_height = rs.currentTarget['height'];
                            const img_width = rs.currentTarget['width'];
                            if (img_height > max_height && img_width > max_width) {
                                window.alert('Maximum dimentions allowed ' + max_height + '*' + max_width + 'px');
                                this.limpiarFoto();
                                return false;
                            }
                            else {
                                const imgBase64Path = e.target.result;
                                this.cardImageBase64 = imgBase64Path;
                                this.imageUrl = e.target.result;
                                reader.readAsDataURL(fileInput.target.files[0]);
                                return;
                            }
                        };
                    };
                    reader.readAsDataURL(fileInput.target.files[0]);
                }
            }
        }
        return;
    }
    //para foto
    onChange2(fileInput2) {
        if (fileInput2.target.files && fileInput2.target.files[0]) {
            // Size Filter Bytes
            const max_size = 10485760;
            const allowed_types = ['image/png', 'image/jpeg'];
            const max_height = 600;
            const max_width = 600;
            if (fileInput2.target.files[0].size > max_size) {
                window.alert('Maximum size allowed is ' + (max_size / 1024) / 1024 + 'Mb');
                this.limpiarFoto();
                return false;
            }
            else {
                if (!lodash__WEBPACK_IMPORTED_MODULE_2__["includes"](allowed_types, fileInput2.target.files[0].type)) {
                    window.alert('Only Images are allowed ( JPG | PNG )');
                    this.limpiarFoto();
                    return false;
                }
                else {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const image = new Image();
                        image.src = e.target.result;
                        image.onload = (rs) => {
                            const img_height = rs.currentTarget['height'];
                            const img_width = rs.currentTarget['width'];
                            if (img_height > max_height && img_width > max_width) {
                                window.alert('Maximum dimentions allowed ' + max_height + '*' + max_width + 'px');
                                this.limpiarFoto();
                                return false;
                            }
                            else {
                                const imgBase64Path = e.target.result;
                                this.card2ImageBase64 = imgBase64Path;
                                this.imageUrln = e.target.result;
                                reader.readAsDataURL(fileInput2.target.files[0]);
                                return;
                            }
                        };
                    };
                    reader.readAsDataURL(fileInput2.target.files[0]);
                }
            }
        }
        return;
    }
    limpiarFoto() {
        //this.userPhoto.nativeElement.value = null;
        this.imageUrl = "https://bulma.io/images/placeholders/480x480.png";
    }
    limpiarFoto2() {
        //this.userPhoto.nativeElement.value = null;
        this.imageUrln = "https://bulma.io/images/placeholders/480x480.png";
    }
    //fin foto
    //foto para enviar pero lo puedo borrar
    actualizar() {
        this.datos = this.imageUrl;
        if (this.datos == "https://bulma.io/images/placeholders/480x480.png" || this.datos == "https://localhost:44389" + this.defecto) {
            this.datos = "";
        }
        else {
            console.log('llegue aca');
            this.datos = this.datos.substring(this.datos.indexOf(',') + 1);
        }
        const enviar = {
            foto: this.datos,
        };
        //ENVIO LOS DATOS DE LA IMAGEN AL SERVICIO
        // this.LG.editarUser(enviar).subscribe(data => {
        //   if(data.estado){
        //     this.subiendo = true;
        //     window.location.reload();
        //   }
        //   else{
        //     this.subiendo = true;
        //     window.alert(data.reporte);
        //     console.log(data.error);
        //   }
        // });
    }
}
NewsAddComponent.ɵfac = function NewsAddComponent_Factory(t) { return new (t || NewsAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
NewsAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NewsAddComponent, selectors: [["app-news-add"]], viewQuery: function NewsAddComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.userPhoto = _t.first);
    } }, decls: 95, vars: 6, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], [1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link", "active"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["formControlName", "category"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group"], ["type", "textbox", "name", "Title", "formControlName", "Title", "autofocus", "", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["name", "Subtitle", "formControlName", "Subtitle", 1, "form-control"], ["name", "report", "formControlName", "report", 1, "form-control"], [1, "field"], [1, "file", "has-name", "is-primary", "is-fullwidth"], [1, "mb-3"], ["type", "file", "id", "formFile", "formControlName", "fotoport", 1, "form-control", 3, "change"], ["fileInput", ""], [1, "containerperfil"], [1, "column"], [3, "src"], ["for", "portada", 1, "col-md-3", "control-label"], [1, "col-md-9"], [1, "radio-inline"], ["type", "radio", "name", "portada", "value", "0", "id", "0", "formControlName", "portada"], ["type", "radio", "name", "portada", "value", "1", "id", "1", "checked", "", "formControlName", "portada"], ["for", "hide", 1, "col-md-3", "control-label"], ["type", "radio", "name", "hide", "value", "0", "id", "0", "formControlName", "hide"], ["type", "radio", "name", "hide", "value", "1", "id", "1", "checked", "", "formControlName", "hide"], ["type", "submit", 1, "btn", "float-right", "btn-outline-success", 2, "margin-left", "5px", 3, "disabled"], ["routerLink", "/newslist"], [1, "btn", "float-right", "btn-outline-danger"], [3, "value"], [1, "alert", "alert-danger"]], template: function NewsAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Add News");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function NewsAddComponent_Template_form_ngSubmit_31_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " Select category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, NewsAddComponent_option_36_Template, 2, 2, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, NewsAddComponent_div_41_Template, 5, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Subtitle (Optional):");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, NewsAddComponent_div_50_Template, 5, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Main Photo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewsAddComponent_Template_input_change_58_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Appear in Home:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Only for registered:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, " No.(public) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "app-footer-main");
    } if (rf & 2) {
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.userForm.get("Title")) == null ? null : tmp_2_0.invalid) && (((tmp_2_0 = ctx.userForm.get("Title")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.userForm.get("Title")) == null ? null : tmp_2_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.userForm.get("report")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.userForm.get("report")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.userForm.get("report")) == null ? null : tmp_3_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_7__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_9__["FooterMainComponent"]], styles: [".sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n    border: .2px solid var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MtYWRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGdDQUFnQztBQUNwQyIsImZpbGUiOiJuZXdzLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXJ7XHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAycmVtIDBweDtcclxufVxyXG4uc2lkZWJhciAubmF2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXp1bCk7XHJcbn1cclxuLnNpZGViYXIgLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tdmlvbGV0YSk7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tdmlvbGV0YSk7XHJcbn1cclxuLnNpZGViYXIgLm5hdiBhe1xyXG4gICAgY29sb3I6dmFyKC0tYmxhbmNvKTtcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS1henVsKTtcclxufVxyXG4uc2lkZWJhciAubmF2IGE6aG92ZXJ7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tYmxhbmNvKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "3lyV":
/*!************************************************************************!*\
  !*** ./src/app/components/datavisual/fotoslist/fotoslist.component.ts ***!
  \************************************************************************/
/*! exports provided: FotoslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotoslistComponent", function() { return FotoslistComponent; });
/* harmony import */ var src_app_models_apiurl___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/apiurl  */ "kkh4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_photos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/photos.service */ "TEzu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../footer-main/footer-main.component */ "7UVc");







function FotoslistComponent_tr_45_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Only Registered");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FotoslistComponent_tr_45_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "All visitors (Public)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FotoslistComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FotoslistComponent_tr_45_p_4_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FotoslistComponent_tr_45_p_5_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const foto_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", foto_r1.titulo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", foto_r1.hide == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", foto_r1.hide == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", foto_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/phodel/", foto_r1.id_foto, "");
} }
class FotoslistComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
        this.status = '';
        this.estado = false;
        this.apiurl = src_app_models_apiurl___WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].parafoto;
    }
    ngOnInit() {
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        this.service.GetFotos().subscribe((res) => {
            this.fotos = res;
            for (let i = 0; i < this.fotos.length; i++) {
                this.fotos[i].url = this.apiurl + "/images/Photos/" + this.fotos[i].id_foto + ".png";
            }
            this.fotos.reverse();
        });
    }
}
FotoslistComponent.ɵfac = function FotoslistComponent_Factory(t) { return new (t || FotoslistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_photos_service__WEBPACK_IMPORTED_MODULE_2__["PhotosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
FotoslistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FotoslistComponent, selectors: [["app-fotoslist"]], decls: 47, vars: 1, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["routerLink", "/panela", 1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link", "active"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], ["routerLink", "/phoadd"], [1, "btn", "btn-outline-primary"], [1, "fas", "fa-user-plus"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col", 1, "d-none", "d-sm-table-cell"], ["scope", "col", 1, "d-none", "d-md-table-cell"], ["scope", "col"], ["scope", "row", 4, "ngFor", "ngForOf"], ["scope", "row"], [1, "d-none", "d-md-table-cell"], [4, "ngIf"], ["alt", "", 3, "src"], [3, "routerLink"], [1, "material-icons"]], template: function FotoslistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Add Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Text Caption");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, FotoslistComponent_tr_45_Template, 12, 5, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "app-footer-main");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fotos);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_6__["FooterMainComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n    border: .2px solid var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\r\nimg[_ngcontent-%COMP%]{height: 110px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvdG9zbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQSxJQUFJLGFBQWEsQ0FBQyIsImZpbGUiOiJmb3Rvc2xpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFye1xyXG4gICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMnJlbSAwcHg7XHJcbn1cclxuLnNpZGViYXIgLm5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF6dWwpO1xyXG59XHJcbi5zaWRlYmFyIC5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXZpb2xldGEpO1xyXG4gICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLXZpb2xldGEpO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYgYXtcclxuICAgIGNvbG9yOnZhcigtLWJsYW5jbyk7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tYXp1bCk7XHJcbn1cclxuLnNpZGViYXIgLm5hdiBhOmhvdmVye1xyXG4gICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLWJsYW5jbyk7XHJcbn1cclxuaW1ne2hlaWdodDogMTEwcHg7fSJdfQ== */"] });


/***/ }),

/***/ "4gn7":
/*!***********************************************************!*\
  !*** ./src/app/components/literacy/literacy.component.ts ***!
  \***********************************************************/
/*! exports provided: LiteracyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiteracyComponent", function() { return LiteracyComponent; });
/* harmony import */ var src_app_models_apiurl___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/apiurl  */ "kkh4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/news.service */ "Ado8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");








function LiteracyComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LiteracyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar-reg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LiteracyComponent_li_13_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noti_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", noti_r3.subtitulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](noti_r3.titulo);
} }
function LiteracyComponent_li_13_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noti_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", noti_r3.subtitulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](noti_r3.titulo);
} }
function LiteracyComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LiteracyComponent_li_13_div_5_Template, 4, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LiteracyComponent_li_13_div_6_Template, 4, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noti_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.todaslasnews.indexOf(noti_r3) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.todaslasnews.indexOf(noti_r3) != 0);
} }
class LiteracyComponent {
    constructor(service, router, _route) {
        this.service = service;
        this.router = router;
        this._route = _route;
        this.apiurl = src_app_models_apiurl___WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].parafoto;
        this.ids = "/rep/";
        this.urlarmada = "";
        this.resultadotemporal = [];
        this.status = '';
        this.estado = false;
    }
    ngOnInit() {
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        if (this.estado == true) {
            this.service.GetNoticiaLiteracyR().subscribe((noticia) => {
                this.news = noticia;
                for (let i = 0; i < this.news.length; i++) {
                    this.news[i].date = this.news[i].date.split("T");
                    if (this.news[i].foto_portada != "") {
                        this.news[i].foto_portada = this.apiurl + "/images/News/" + this.news[i].id_noticia + "/portada.png";
                    }
                    else {
                        this.news[i].foto_portada = "../../../assets/LOGO.png";
                    }
                    // guardo link
                    this.urlarmada = "";
                    this.urlarmada = this.ids + this.news[i].id_noticia;
                    this.news[i].subtitulo = this.urlarmada;
                    this.resultadotemporal.push(this.news[i]);
                }
                this.todaslasnews = this.resultadotemporal;
            });
        }
        else {
            this.service.GetNoticiaLiteracyR().subscribe((noticia) => {
                this.news = noticia;
                for (let i = 0; i < this.news.length; i++) {
                    this.news[i].date = this.news[i].date.split("T");
                    if (this.news[i].foto_portada != "") {
                        this.news[i].foto_portada = this.apiurl + "/images/News/" + this.news[i].id_noticia + "/portada.png";
                    }
                    else {
                        this.news[i].foto_portada = "../../../assets/LOGO.png";
                    }
                    // guardo link
                    // ids = "/rep/";
                    // urlarmada="";
                    this.urlarmada = "";
                    this.urlarmada = this.ids + this.news[i].id_noticia;
                    this.news[i].subtitulo = this.urlarmada;
                    //this.news es el que pongo en la lista que muestro que esta en el for
                    //fin link
                    this.resultadotemporal.push(this.news[i]);
                }
                this.todaslasnews = this.resultadotemporal;
            });
        }
    }
}
LiteracyComponent.ɵfac = function LiteracyComponent_Factory(t) { return new (t || LiteracyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
LiteracyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LiteracyComponent, selectors: [["app-literacy"]], decls: 15, vars: 3, consts: [[4, "ngIf"], [1, "cuadro"], [1, "mitad1"], [1, "mitad2"], ["src", "../../../assets/ICON LITERACY.png", "alt", ""], [1, "cuadro1"], [1, "part4"], [1, "part2"], [1, "pdfs"], ["class", "pdf", 4, "ngFor", "ngForOf"], [1, "pdf"], [1, "prim"], [1, "material-icons"], ["class", "seg", 4, "ngIf"], [1, "seg"], [1, "raro", 3, "routerLink"], [3, "routerLink"]], template: function LiteracyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LiteracyComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LiteracyComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Literacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LiteracyComponent_li_13_Template, 7, 2, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.estado == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.estado == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.todaslasnews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_7__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXRlcmFjeS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "5Yxx":
/*!**************************************************************************!*\
  !*** ./src/app/components/datavisual/videoslist/videoslist.component.ts ***!
  \**************************************************************************/
/*! exports provided: VideoslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoslistComponent", function() { return VideoslistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_videos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/videos.service */ "/pQw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../footer-main/footer-main.component */ "7UVc");






function VideoslistComponent_tr_45_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only Registered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoslistComponent_tr_45_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All visitors (Public)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoslistComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VideoslistComponent_tr_45_p_4_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VideoslistComponent_tr_45_p_5_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r1.titulo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r1.hide == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r1.hide == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/viddel/", category_r1.id_video, "");
} }
class VideoslistComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
        this.service.list().subscribe((category) => {
            // this.categories=JSON.parse(category);
            this.categories = category;
        }, (err) => { console.log(err); });
    }
}
VideoslistComponent.ɵfac = function VideoslistComponent_Factory(t) { return new (t || VideoslistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_videos_service__WEBPACK_IMPORTED_MODULE_1__["VideosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
VideoslistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoslistComponent, selectors: [["app-videoslist"]], decls: 47, vars: 1, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["routerLink", "/panela", 1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link"], ["routerLink", "/vidlist", 1, "nav-link", "active"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], ["routerLink", "/vidadd"], [1, "btn", "btn-outline-primary"], [1, "fas", "fa-user-plus"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col", 1, "d-none", "d-sm-table-cell"], ["scope", "col", 1, "d-none", "d-md-table-cell"], ["scope", "col"], ["scope", "row", 4, "ngFor", "ngForOf"], ["scope", "row"], [1, "d-none", "d-md-table-cell"], [4, "ngIf"], [3, "routerLink"], [1, "material-icons"]], template: function VideoslistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Data Visuals Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Add Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Titulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, VideoslistComponent_tr_45_Template, 10, 4, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-footer-main");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_3__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_5__["FooterMainComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".table-responsive[_ngcontent-%COMP%]{\r\n  max-width: 98%;\r\n  margin: 1px;\r\n}\r\n  th[_ngcontent-%COMP%]{\r\n    background: #20c3ec;\r\n  }\r\n  .m5[_ngcontent-%COMP%]{\r\n    margin-left: 5px;\r\n    float: right;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n  .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n  .sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n  .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n    border: .2px solid var(--azul);\r\n}\r\n  .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvc2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtFQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0VBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsaUNBQWlDO0FBQ3JDO0VBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0VBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoidmlkZW9zbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXJlc3BvbnNpdmV7XHJcbiAgbWF4LXdpZHRoOiA5OCU7XHJcbiAgbWFyZ2luOiAxcHg7XHJcbn1cclxuICB0aHtcclxuICAgIGJhY2tncm91bmQ6ICMyMGMzZWM7XHJcbiAgfVxyXG4gIC5tNXtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIC5zaWRlYmFye1xyXG4gICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMnJlbSAwcHg7XHJcbn1cclxuLnNpZGViYXIgLm5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF6dWwpO1xyXG59XHJcbi5zaWRlYmFyIC5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXZpb2xldGEpO1xyXG4gICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLXZpb2xldGEpO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYgYXtcclxuICAgIGNvbG9yOnZhcigtLWJsYW5jbyk7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tYXp1bCk7XHJcbn1cclxuLnNpZGViYXIgLm5hdiBhOmhvdmVye1xyXG4gICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLWJsYW5jbyk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "6Egh":
/*!*************************************************************!*\
  !*** ./src/app/components/users-add/users-add.component.ts ***!
  \*************************************************************/
/*! exports provided: UsersAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersAddComponent", function() { return UsersAddComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "6Qg2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer-main/footer-main.component */ "7UVc");








function UsersAddComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersAddComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is not available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersAddComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " must not have uppercase. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersAddComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersAddComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersAddComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersAddComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is already registered. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersAddComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " The ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " entered does not have a correct format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersAddComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required and must be at least 6 digits. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UsersAddComponent {
    constructor(formBuilder, service, router) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.status = '';
        this.rol = '';
        this.estado = false;
        this.emailPattern = "^[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2})?$";
        this.passPattern = "^(?=/\w*/\d)(?=/\w*[A-Z])(?=/\w*[a-z])\S{6,16}$";
        this.erroru = false;
        this.errorc = false;
        this.userForm = this.formBuilder.group({
            nickname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[a-z0-9]{1,50}?$")]],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[a-zA-Z0-9@#$]{6,25}?$")]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.emailPattern)]],
            rol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            descripcion: ['']
        });
    }
    ngOnInit() {
        this.userForm.reset();
        this.userForm.patchValue({ rol: '1' });
        this.errorc = false;
        this.erroru = false;
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
    }
    onSubmit() {
        this.errorc = false;
        this.service.clearFormData();
        this.service.formData = {
            nickname: this.userForm.value.nickname,
            nombre: this.userForm.value.nombre,
            apellido: this.userForm.value.apellido,
            password: this.userForm.value.password,
            email: this.userForm.value.email,
            user_foto: "./../../../assets/img/profile.png",
            active: true,
            token: "",
            rol: this.userForm.value.rol,
            user_descripcion: this.userForm.value.descripcion,
        };
        this.insertRecord();
    }
    insertRecord() {
        this.service.postUser(this.service.formData).subscribe(res => {
            //MOSTRAR UN MENSAJE QUE SE GUARDO CORRECTAMENTE
            this.rol = localStorage.getItem('rol');
            this.router.navigate(['/panela']);
            // if (parseInt(this.status)==0){
            //   this.router.navigate(['/panela']);
            // }else{
            //   if (parseInt(this.rol)==1){
            //     this.router.navigate(['/main']);
            //   }
            // }
            this.userForm.reset();
        }, (err) => {
            var MensajeError = err.error.ModelState.toString();
            //console.log(err);
            console.log(MensajeError);
            if (MensajeError == "EL MAIL YA SE ENCUENTRA EN LA BASE DE DATOS") {
                this.errorc = true;
                this.userForm.reset();
            }
            else {
                if (MensajeError == "EL NICKNAME YA SE ENCUENTRA EN LA BASE DE DATOS") {
                    this.erroru = true;
                    this.userForm.reset();
                }
                else {
                    console.log('algo malio sal');
                    this.userForm.reset();
                }
            }
            this.router.navigate(['/usersadd']);
        });
    }
}
UsersAddComponent.ɵfac = function UsersAddComponent_Factory(t) { return new (t || UsersAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UsersAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UsersAddComponent, selectors: [["app-users-add"]], decls: 83, vars: 11, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], [1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link", "active"], ["routerLink", "/categorieslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "textbox", "name", "nickname", "formControlName", "nickname", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "textbox", "name", "nombre", "formControlName", "nombre", 1, "form-control"], ["type", "textbox", "name", "apellido", "formControlName", "apellido", 1, "form-control"], ["type", "textbox", "name", "email", "formControlName", "email", 1, "form-control"], ["type", "password", "name", "password", "formControlName", "password", "autocomplete", "off", 1, "form-control"], ["for", "latitude", 1, "col-md-3", "control-label"], [1, "col-md-9"], [1, "radio-inline"], ["type", "radio", "name", "rol", "value", "0", "id", "0", "formControlName", "rol"], ["type", "radio", "name", "rol", "value", "1", "id", "1", "checked", "", "formControlName", "rol"], ["name", "descripcion", "formControlName", "descripcion", 1, "form-control"], ["type", "submit", 1, "btn", "float-right", "btn-outline-success", 2, "margin-left", "5px", 3, "disabled"], ["routerLink", "/userslist"], [1, "btn", "float-right", "btn-outline-danger"], [1, "alert", "alert-danger"]], template: function UsersAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UsersAddComponent_Template_form_ngSubmit_31_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Nickname:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, UsersAddComponent_div_36_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, UsersAddComponent_div_37_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, UsersAddComponent_div_38_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, UsersAddComponent_div_43_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Last Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, UsersAddComponent_div_48_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, UsersAddComponent_div_53_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, UsersAddComponent_div_54_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, UsersAddComponent_div_55_Template, 6, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, UsersAddComponent_div_60_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "textarea", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "app-footer-main");
    } if (rf & 2) {
        let tmp_1_0 = null;
        let tmp_3_0 = null;
        let tmp_4_0 = null;
        let tmp_5_0 = null;
        let tmp_6_0 = null;
        let tmp_8_0 = null;
        let tmp_9_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.userForm.get("nickname")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = ctx.userForm.get("nickname")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.userForm.get("nickname")) == null ? null : tmp_1_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.erroru);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.userForm.get("nickname")) == null ? null : tmp_3_0.hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.userForm.get("nombre")) == null ? null : tmp_4_0.invalid) && (((tmp_4_0 = ctx.userForm.get("nombre")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.userForm.get("nombre")) == null ? null : tmp_4_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.userForm.get("apellido")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx.userForm.get("apellido")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.userForm.get("apellido")) == null ? null : tmp_5_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.userForm.get("email")) == null ? null : tmp_6_0.invalid) && (((tmp_6_0 = ctx.userForm.get("email")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx.userForm.get("email")) == null ? null : tmp_6_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.userForm.get("email")) == null ? null : tmp_8_0.hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.userForm.get("password")) == null ? null : tmp_9_0.invalid) && (((tmp_9_0 = ctx.userForm.get("password")) == null ? null : tmp_9_0.dirty) || ((tmp_9_0 = ctx.userForm.get("password")) == null ? null : tmp_9_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_6__["FooterMainComponent"]], styles: [".sexagesimal[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n}\r\n.sexagesimal[_ngcontent-%COMP%], .sexagesimalsec[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 6px;\r\n    margin-left: 5px;\r\n}\r\n.box[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    min-width: 80%;\r\n    min-height: 350px;\r\n    margin: 10px;\r\n    padding: 15px;\r\n    border: 1px solid rgba(177, 177, 177, 0.933);\r\n    border-radius: 15px ;\r\n    text-align: justify;\r\n    margin-top: 80 px;\r\n    overflow:initial;\r\n    position:relative;\r\n  }\r\n.cp[_ngcontent-%COMP%]{\r\n      width: 30%;\r\n  }\r\n.container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-left:50px;\r\n    margin-top:40px;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n  }\r\n.sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n    border: .2px solid var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtBQUNBO01BQ0ksVUFBVTtFQUNkO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoidXNlcnMtYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V4YWdlc2ltYWwge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbn1cclxuLnNleGFnZXNpbWFsLCAuc2V4YWdlc2ltYWxzZWMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uYm94e1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiA4MCU7XHJcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE3NywgMTc3LCAxNzcsIDAuOTMzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIG1hcmdpbi10b3A6IDgwIHB4O1xyXG4gICAgb3ZlcmZsb3c6aW5pdGlhbDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIH1cclxuICAuY3B7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OjUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjQwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgLnNpZGViYXJ7XHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAycmVtIDBweDtcclxufVxyXG4uc2lkZWJhciAubmF2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXp1bCk7XHJcbn1cclxuLnNpZGViYXIgLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tdmlvbGV0YSk7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tdmlvbGV0YSk7XHJcbn1cclxuLnNpZGViYXIgLm5hdiBhe1xyXG4gICAgY29sb3I6dmFyKC0tYmxhbmNvKTtcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS1henVsKTtcclxufVxyXG4uc2lkZWJhciAubmF2IGE6aG92ZXJ7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tYmxhbmNvKTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "6Qg2":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _models_apiurl___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/apiurl  */ "kkh4");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model */ "Tj/N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class UsersService {
    constructor(http) {
        this.http = http;
        this.oRes = '';
        //user_id='';
        this.direccion = _models_apiurl___WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].apiurl;
        this.rootURL = this.direccion;
        this.formData = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"];
    }
    DeleteUser(user_id) {
        return this.http.delete(this.rootURL + '/Users/DelUser/' + user_id);
    }
    postUsuario(formData) {
        return this.http.post(this.rootURL + '/Users/register', formData);
    }
    postUser(formData) {
        return this.http.post(this.rootURL + '/Users/adduser', formData);
    }
    editUser(formData, user_id) {
        return this.http.post(this.rootURL + '/Users/edit/' + user_id, formData);
    }
    login(formData) {
        return this.http.post(this.rootURL + '/Acceso/Login', formData);
    }
    acceder(user_id) {
        return this.http.get(this.rootURL + '/Users/GetUsuario/' + user_id);
    }
    activate(user_id) {
        return this.http.get(this.rootURL + '/Users/Act/' + user_id);
    }
    deactivate(user_id) {
        return this.http.get(this.rootURL + '/Users/Dst/' + user_id);
    }
    changepswd(user_id, oldpwd, newpwd) {
        return this.http.get(this.rootURL + '/Users/Changepswd/' + user_id + '/' + oldpwd + '/' + newpwd);
    }
    chau(token) {
        return this.http.get(this.rootURL + '/Acceso/Logout?token=' + token);
    }
    listar() {
        return this.http.get(this.rootURL + '/Users/GetUsuario');
    }
    clearFormData() {
        this.formData = {
            nickname: "",
            nombre: "",
            apellido: "",
            password: "",
            user_foto: "img/profile.png",
            active: true,
            token: "",
            email: "",
            rol: 1,
            user_descripcion: ""
        };
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "75LM":
/*!**********************************************************************!*\
  !*** ./src/app/components/datavisual/fotosadd/fotosadd.component.ts ***!
  \**********************************************************************/
/*! exports provided: FotosaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotosaddComponent", function() { return FotosaddComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_apiurl___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/apiurl  */ "kkh4");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_photos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../services/photos.service */ "TEzu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = ["fileInput"];
function FotosaddComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Text Caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " is required. Maximum 50 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class FotosaddComponent {
    constructor(formBuilder, service, router) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.error = false;
        this.status = '';
        this.rol = '';
        this.defecto = "";
        this.estado = false;
        this.imageUrl = "https://bulma.io/images/placeholders/480x480.png";
        this.urlapi = src_app_models_apiurl___WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].apiurl;
        this.photoForm = this.formBuilder.group({
            hide: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            titulo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    ngOnInit() {
        this.photoForm.reset();
        this.photoForm.patchValue({ hide: '1' });
        this.error = false;
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        else {
            this.router.navigate(['/main']);
        }
        this.rol = localStorage.getItem('rol');
        if (parseInt(this.rol) == 1) {
            this.router.navigate(['/mainr']);
        }
    }
    onSubmit() {
        this.error = false;
        this.service.clearFormData();
        this.datos = this.imageUrl;
        if (this.datos == "https://bulma.io/images/placeholders/480x480.png") {
            this.datos = "";
        }
        else {
            this.datos = this.datos.substring(this.datos.indexOf(',') + 1);
        }
        const enviar = {
            foto: this.datos,
        };
        this.service.formData = {
            url: this.datos,
            hide: this.photoForm.value.hide,
            titulo: this.photoForm.value.titulo
        };
        // this.categoriaelegida = await this.getCategoria(this.userForm.value.category);
        this.insertRecord();
    }
    insertRecord() {
        this.service.PostFotos(this.service.formData).subscribe(res => {
            //MOSTRAR UN MENSAJE QUE SE GUARDO CORRECTAMENTE
            this.router.navigate(['/pholist']);
            this.photoForm.reset();
        }, (err) => {
            var MensajeError = err.error.message;
            console.log(err);
            console.log(MensajeError);
            console.log('algo malio sal');
            this.photoForm.reset();
            //this.router.navigate(['/usersadd']);
        });
    }
    //para foto
    onChange(fileInput4) {
        if (fileInput4.target.files && fileInput4.target.files[0]) {
            // Size Filter Bytes
            const max_size = 10485760;
            const allowed_types = ['image/png', 'image/jpeg'];
            const max_height = 600;
            const max_width = 600;
            if (fileInput4.target.files[0].size > max_size) {
                window.alert('Maximum size allowed is ' + (max_size / 1024) / 1024 + 'Mb');
                this.limpiarFoto();
                return false;
            }
            else {
                if (!lodash__WEBPACK_IMPORTED_MODULE_2__["includes"](allowed_types, fileInput4.target.files[0].type)) {
                    window.alert('Only Images are allowed ( JPG | PNG )');
                    this.limpiarFoto();
                    return false;
                }
                else {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const image = new Image();
                        image.src = e.target.result;
                        image.onload = (rs) => {
                            const img_height = rs.currentTarget['height'];
                            const img_width = rs.currentTarget['width'];
                            if (img_height > max_height && img_width > max_width) {
                                window.alert('Maximum dimentions allowed ' + max_height + '*' + max_width + 'px');
                                this.limpiarFoto();
                                return false;
                            }
                            else {
                                const imgBase64Path = e.target.result;
                                this.cardImageBase64 = imgBase64Path;
                                this.imageUrl = e.target.result;
                                if (fileInput4.target.files[0]) {
                                    reader.readAsDataURL(fileInput4.target.files[0]);
                                }
                                //reader.readAsDataURL(fileInput4.target.files[0]);                                                                   
                                return;
                            }
                        };
                    };
                    if (fileInput4.target.files[0]) {
                        reader.readAsDataURL(fileInput4.target.files[0]);
                    }
                    //reader.readAsDataURL(fileInput4.target.files[0]);
                }
            }
        }
        return;
    }
    limpiarFoto() {
        this.photoForm.patchValue({ url: '' });
        this.imageUrl = "https://bulma.io/images/placeholders/480x480.png";
    }
}
FotosaddComponent.ɵfac = function FotosaddComponent_Factory(t) { return new (t || FotosaddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_photos_service__WEBPACK_IMPORTED_MODULE_4__["PhotosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
FotosaddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FotosaddComponent, selectors: [["app-fotosadd"]], viewQuery: function FotosaddComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.userPhoto = _t.first);
    } }, decls: 68, vars: 4, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], [1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link", "active"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "textbox", "name", "titulo", "formControlName", "titulo", "autofocus", "", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], [1, "field"], [1, "file", "has-name", "is-primary", "is-fullwidth"], [1, "mb-3"], ["type", "file", "id", "formFile", "formControlName", "url", 1, "form-control", 3, "change"], ["fileInput4", ""], [1, "containerperfil"], [1, "column"], [3, "src"], ["for", "hide", 1, "col-md-3", "control-label"], [1, "col-md-9"], [1, "radio-inline"], ["type", "radio", "name", "hide", "value", "0", "id", "0", "formControlName", "hide"], ["type", "radio", "name", "hide", "value", "1", "id", "1", "checked", "", "formControlName", "hide"], ["type", "submit", 1, "btn", "float-right", "btn-outline-success", 2, "margin-left", "5px", 3, "disabled"], ["routerLink", "/pholist"], [1, "btn", "float-right", "btn-outline-danger"], [1, "alert", "alert-danger"]], template: function FotosaddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Add Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function FotosaddComponent_Template_form_ngSubmit_31_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Text Caption:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, FotosaddComponent_div_36_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " Photo for Data Visuals ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function FotosaddComponent_Template_input_change_44_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "View:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, " Only registered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, " All.(public) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "app-footer-main");
    } if (rf & 2) {
        let tmp_1_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.photoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.photoForm.get("titulo")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = ctx.photoForm.get("titulo")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.photoForm.get("titulo")) == null ? null : tmp_1_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.photoForm.invalid);
    } }, styles: [".sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n    border: .2px solid var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvdG9zYWRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGdDQUFnQztBQUNwQyIsImZpbGUiOiJmb3Rvc2FkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXJ7XHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAycmVtIDBweDtcclxufVxyXG4uc2lkZWJhciAubmF2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXp1bCk7XHJcbn1cclxuLnNpZGViYXIgLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tdmlvbGV0YSk7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tdmlvbGV0YSk7XHJcbn1cclxuLnNpZGViYXIgLm5hdiBhe1xyXG4gICAgY29sb3I6dmFyKC0tYmxhbmNvKTtcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS1henVsKTtcclxufVxyXG4uc2lkZWJhciAubmF2IGE6aG92ZXJ7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tYmxhbmNvKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "7UVc":
/*!*****************************************************************!*\
  !*** ./src/app/components/footer-main/footer-main.component.ts ***!
  \*****************************************************************/
/*! exports provided: FooterMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterMainComponent", function() { return FooterMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class FooterMainComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterMainComponent.ɵfac = function FooterMainComponent_Factory(t) { return new (t || FooterMainComponent)(); };
FooterMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterMainComponent, selectors: [["app-footer-main"]], decls: 29, vars: 0, consts: [[1, "logoPie"], ["src", "../../../assets/logo b.png", "alt", ""], [1, "enlaces"], [1, "iconosPie"], ["href", "https://twitter.com/DavidWakelyn?s=08", "target", "_blank"], ["src", "../../../assets/TWITTER.png", "alt", ""], ["href", "https://www.linkedin.com/in/david-scarlett-wakelyn-9227275/", "target", "_blank"], ["src", "../../../assets/LINKEDIN.png", "alt", ""], [1, "anclas1"], ["routerLink", "/policy", "routerLinkActive", "'active'"], ["routerLink", "/literacy", "routerLinkActive", "'active'"], ["routerLink", "/dvisuals", "routerLinkActive", "'active'"], ["routerLink", "/download", "routerLinkActive", "'active'"], [1, "anclas2"], ["routerLink", "/contact", "routerLinkActive", "'active'"]], template: function FooterMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "INFORMATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "POLICY ANALYSIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "LITERACY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "DATA VISUALS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "DOWNLOAD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "FIND US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "CONTACT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci1tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozt3QkFHd0IiLCJmaWxlIjoiZm9vdGVyLW1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5mb290e2JhY2tncm91bmQtY29sb3I6ICMwMjA1Njh9XHJcbi5pbWFnZXNme1xyXG4gICAgbWFyZ2luLWxlZnQ6MHB4OyBoZWlnaHQ6IDEwMHB4O31cclxuLmxpbmtzZntjb2xvcjogd2hpdGU7fSAqLyJdfQ== */"] });


/***/ }),

/***/ "9FWH":
/*!****************************************!*\
  !*** ./src/app/models/estado.model.ts ***!
  \****************************************/
/*! exports provided: estadologuin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estadologuin", function() { return estadologuin; });
class estadologuin {
}


/***/ }),

/***/ "Ado8":
/*!******************************************!*\
  !*** ./src/app/services/news.service.ts ***!
  \******************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _models_apiurl___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/apiurl  */ "kkh4");
/* harmony import */ var _models_new_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/new.model */ "Ah1z");
/* harmony import */ var _models_estado_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/estado.model */ "9FWH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class NewsService {
    constructor(http) {
        this.http = http;
        this.oRes = '';
        //new_id='';
        this.formData = new _models_new_model__WEBPACK_IMPORTED_MODULE_1__["New"];
        // Busq: Busqueda= new Busqueda;
        this.EstLog = new _models_estado_model__WEBPACK_IMPORTED_MODULE_2__["estadologuin"];
        this.direccion = _models_apiurl___WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].apiurl;
        this.rootURL = this.direccion;
    }
    DeleteNew(new_id) {
        return this.http.delete(this.rootURL + '/Noticias/DeleteNoticia/' + new_id);
    }
    postNew(formData) {
        return this.http.post(this.rootURL + '/Noticias/register', formData);
    }
    editNew(formData, new_id) {
        return this.http.post(this.rootURL + '/Noticias/edit/' + new_id, formData);
    }
    acceder(new_id) {
        return this.http.get(this.rootURL + '/Noticias/GetNoticia/' + new_id);
    }
    GetLatest() {
        return this.http.get(this.rootURL + '/Noticias/GetLatest');
    }
    GetPortada() {
        return this.http.get(this.rootURL + '/Noticias/GetPortada');
    }
    GetPortadaR() {
        return this.http.get(this.rootURL + '/Noticias/GetPortada');
    }
    GetLatestR() {
        return this.http.get(this.rootURL + '/Noticias/GetLatestR');
    }
    GetNoticiaPolicy() {
        return this.http.get(this.rootURL + '/Noticias/GetNoticiaPolicy');
    }
    GetNoticiaPolicyR() {
        return this.http.get(this.rootURL + '/Noticias/GetNoticiaPolicyR');
    }
    noticiaSearchNR() {
        return this.http.get(this.rootURL + '/Noticias/noticiaSearchNR');
    }
    GetNoticiaLiteracy() {
        return this.http.get(this.rootURL + '/Noticias/GetNoticiaLiteracy');
    }
    GetNoticiaLiteracyR() {
        return this.http.get(this.rootURL + '/Noticias/GetNoticiaLiteracyR');
    }
    listar() {
        return this.http.get(this.rootURL + '/Noticias/GetNoticia');
    }
    // busq(Busq:Busqueda){
    //   return this.http.post(this.rootURL + '/Noticias/busq', Busq);
    // }
    clearFormData() {
        this.formData = {
            id_categoria: 1,
            titulo: "",
            subtitulo: "",
            descripcion: "",
            foto_portada: "/img/profile.png",
            foto_noticia: "",
            video_noticia: "",
            portada: 1,
            hide: 1,
        };
    }
}
NewsService.ɵfac = function NewsService_Factory(t) { return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
NewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NewsService, factory: NewsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Ah1z":
/*!*************************************!*\
  !*** ./src/app/models/new.model.ts ***!
  \*************************************/
/*! exports provided: New */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "New", function() { return New; });
class New {
}


/***/ }),

/***/ "ArRF":
/*!*******************************************************************!*\
  !*** ./src/app/components/newsaddphoto/newsaddphoto.component.ts ***!
  \*******************************************************************/
/*! exports provided: NewsaddphotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsaddphotoComponent", function() { return NewsaddphotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NewsaddphotoComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewsaddphotoComponent.ɵfac = function NewsaddphotoComponent_Factory(t) { return new (t || NewsaddphotoComponent)(); };
NewsaddphotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsaddphotoComponent, selectors: [["app-newsaddphoto"]], decls: 2, vars: 0, template: function NewsaddphotoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "newsaddphoto works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzYWRkcGhvdG8uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "AytR":
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

/***/ "B0s6":
/*!*****************************************************************!*\
  !*** ./src/app/components/users-login/users-login.component.ts ***!
  \*****************************************************************/
/*! exports provided: UsersLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersLoginComponent", function() { return UsersLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/users.service */ "6Qg2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");







function UsersLoginComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.mensaje);
} }
class UsersLoginComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.error = false;
        this.mensaje = '';
    }
    ngOnInit() {
        this.resetForm();
    }
    resetForm(form) {
        if (form != null)
            form.resetForm();
        this.service.formData = {
            nombre: '',
            apellido: '',
            nickname: '',
            email: '',
            password: '',
            rol: 1,
            active: false,
            token: '',
            user_foto: '',
            user_descripcion: '',
        };
    }
    onSubmit(form) {
        this.service.login(form.value).subscribe((res) => {
            this.error = false;
            if (res.resultado == 1) {
                localStorage.setItem('token', res.datos['token']);
                localStorage.setItem('user_id', res.datos['user_id']);
                localStorage.setItem('rol', res.datos['rol']);
                localStorage.setItem('nickname', res.datos['nicname']);
                localStorage.setItem('imgperfil', res.datos['imgperfil']);
                localStorage.setItem('resultado', res.resultado);
                if (res.datos['rol'] == 1) {
                    this.router.navigate(['/main']);
                }
                else {
                    this.router.navigate(['/panela']);
                }
            }
            else {
                if (res.resultado == 0) {
                    localStorage.setItem('resultado', res.resultado);
                    this.mensaje = res.mensaje;
                    this.error = true;
                }
            }
        });
    }
}
UsersLoginComponent.ɵfac = function UsersLoginComponent_Factory(t) { return new (t || UsersLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UsersLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersLoginComponent, selectors: [["app-users-login"]], decls: 49, vars: 6, consts: [[1, "cuerpoCuatro2"], [1, "formulario2"], ["id", "login"], ["autocomplete", "off", 3, "submit"], ["form", "ngForm"], [1, "container"], ["pattern", "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$", "name", "email", "type", "text", "placeholder", " Entry E-mail Registered", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], ["for", "psw"], ["name", "password", "type", "password", "placeholder", "Entry your Password", "required", "", "pattern", ".{4,12}$", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], [1, "send"], ["type", "submit", 2, "margin-top", "10px", "width", "auto", "padding", "10px", 3, "disabled"], ["routerLink", "/"], ["type", "button", 2, "margin", "0px 5px", "background-color", "#F4F4F4", "color", "#512475"], ["href", "#", "routerLink", "/newreg"], [1, "alert", "alert-danger"]], template: function UsersLoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function UsersLoginComponent_Template_form_submit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " E-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersLoginComponent_Template_input_ngModelChange_16_listener($event) { return ctx.service.formData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " is required. And it can only contain letters, numbers, periods, hyphens, and underscore. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsersLoginComponent_Template_input_ngModelChange_28_listener($event) { return ctx.service.formData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " You must enter your password. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, UsersLoginComponent_div_33_Template, 4, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Go to Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Check in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-footer");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine && !_r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r2.valid || _r2.pristine && !_r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy1sb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "BcWh":
/*!*********************************************************!*\
  !*** ./src/app/components/reporte/reporte.component.ts ***!
  \*********************************************************/
/*! exports provided: ReporteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteComponent", function() { return ReporteComponent; });
/* harmony import */ var _models_apiurl___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../models/apiurl  */ "kkh4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/news.service */ "Ado8");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");









function ReporteComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReporteComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar-reg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ReporteComponent {
    constructor(service, servicecat, router, _route, location) {
        this.service = service;
        this.servicecat = servicecat;
        this.router = router;
        this._route = _route;
        this.location = location;
        this.apiurl = _models_apiurl___WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].parafoto;
        this.id_reporte = "";
        this.status = '';
        this.rol = '';
        this.oculto = false;
        this.estado = false;
    }
    ngOnInit() {
        this.oculto = false;
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        else {
            this.estado = false;
        }
        this.id_reporte = this._route.snapshot.paramMap.get('rep_id'); //id noticia
        this.service.acceder(this.id_reporte).subscribe((res) => {
            this.reporte = res;
            if (this.reporte.foto_portada != "") {
                this.reporte.foto_portada = this.apiurl + "/images/News/" + this.reporte.id_noticia + "/portada.png";
            }
            else {
                this.reporte.foto_portada = "../../../assets/LOGO.png";
            }
            if (this.reporte.foto_noticia != "") {
                this.reporte.foto_noticia = this.apiurl + "/images/News/" + this.reporte.id_noticia + "/noticia.png";
            }
            this.arraytemporal = this.reporte.date.split("T");
            this.reporte.date = this.arraytemporal[0];
            if (this.reporte.hide == 0) {
                this.oculto = true;
            }
        });
        if (this.estado) {
            if (this.oculto) {
                this.router.navigate(['/main']);
            }
        }
    }
    goback() { this.location.back(); }
}
ReporteComponent.ɵfac = function ReporteComponent_Factory(t) { return new (t || ReporteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"])); };
ReporteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReporteComponent, selectors: [["app-reporte"]], decls: 24, vars: 7, consts: [[4, "ngIf"], [1, "container", "reporte1", 2, "align-items", "center"], [1, "img"], ["alt", "", 3, "src"], [1, "btn", "btn-outline-success", 3, "click"]], template: function ReporteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ReporteComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReporteComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReporteComponent_Template_button_click_21_listener() { return ctx.goback(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.estado == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.estado == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.reporte.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.reporte.foto_portada, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.reporte.subtitulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.reporte.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.reporte.foto_noticia, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_8__["NavbarRegComponent"]], styles: [".reporte1[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n.reporte1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    margin: 1rem auto;\r\n    color: var(--azul);\r\n    padding: 1rem .5rem;\r\n}\r\n.reporte1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    font-size: 1.5rem;\r\n}\r\n.reporte1[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.reporte1[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{\r\n    color: var(--violeta);\r\n    font-weight: bold;\r\n}\r\n.reporte1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin: 1rem;\r\n    padding: 1rem;\r\n    bottom: 0px;\r\n    font-size: 1rem;\r\n    font-weight: bolder;\r\n    text-transform: uppercase;\r\n    height: -webkit-max-content;\r\n    height: max-content;\r\n    display: table;\r\n    background: var(--azul);\r\n    color: var(--blanco);\r\n    border-radius: 10px;\r\n}\r\n.reporte1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    filter: brightness(1.5);\r\n}\r\n.reporte1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    color: var(--violeta);\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n.reporte1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{\r\n    color: var(--azul);\r\n    background: var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDJCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCIiwiZmlsZSI6InJlcG9ydGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXBvcnRlMXtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnJlcG9ydGUxIGgxe1xyXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgICBjb2xvcjogdmFyKC0tYXp1bCk7XHJcbiAgICBwYWRkaW5nOiAxcmVtIC41cmVtO1xyXG59XHJcbi5yZXBvcnRlMSBkaXZ7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG4ucmVwb3J0ZTEgLmltZ3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucmVwb3J0ZTEgaHJ7XHJcbiAgICBjb2xvcjogdmFyKC0tdmlvbGV0YSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucmVwb3J0ZTEgYnV0dG9ue1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1henVsKTtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFuY28pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4ucmVwb3J0ZTEgYnV0dG9uOmhvdmVye1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuNSk7XHJcbn1cclxuLnJlcG9ydGUxIGgze1xyXG4gICAgY29sb3I6IHZhcigtLXZpb2xldGEpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnJlcG9ydGUxIGJ1dHRvbjphY3RpdmV7XHJcbiAgICBjb2xvcjogdmFyKC0tYXp1bCk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFuY28pO1xyXG59Il19 */"] });


/***/ }),

/***/ "BrlW":
/*!***********************************************************!*\
  !*** ./src/app/components/news-del/news-del.component.ts ***!
  \***********************************************************/
/*! exports provided: NewsDelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDelComponent", function() { return NewsDelComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/news.service */ "Ado8");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer-main/footer-main.component */ "7UVc");









function NewsDelComponent_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", cat_r3.id_categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cat_r3.nombre, " ");
} }
function NewsDelComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NewsDelComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class NewsDelComponent {
    constructor(formBuilder, service, servicecat, _route, router) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.servicecat = servicecat;
        this._route = _route;
        this.router = router;
        this.status = '';
        this.estado = false;
        this.rol = '';
        this.new_id = "";
        this.erroru = false;
        this.errorc = false;
        this.userForm = this.formBuilder.group({
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            Title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            Subtitle: [''],
            report: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            fotoport: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            fotonot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            videonot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            portada: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            hide: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this.userForm.reset();
        this.errorc = false;
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        else {
            this.router.navigate(['/main']);
        }
        this.rol = localStorage.getItem('rol');
        if (parseInt(this.rol) == 1) {
            this.router.navigate(['/mainr']);
        }
        this.new_id = this._route.snapshot.paramMap.get('new_id');
        this.service.acceder(this.new_id).subscribe((noticia) => {
            if (noticia.portada == '0') {
                this.userForm.patchValue({ portada: '0' });
            }
            else {
                this.userForm.patchValue({ portada: '1' });
            }
            if (noticia.hide == '0') {
                this.userForm.patchValue({ hide: '0' });
            }
            else {
                this.userForm.patchValue({ hide: '1' });
            }
            this.userForm.patchValue({ Title: noticia.titulo });
            this.userForm.patchValue({ Subtitle: noticia.subtitulo });
            this.userForm.patchValue({ report: noticia.descripcion });
            this.userForm.patchValue({ fotoport: noticia.foto_portada });
            this.userForm.patchValue({ fotonot: noticia.foto_noticia });
            this.userForm.patchValue({ videonot: noticia.video_noticia });
            this.userForm.patchValue({ category: noticia.id_categoria });
        });
        this.servicecat.list().subscribe((cat) => {
            this.categories = cat;
        });
        (_a = this.userForm.get('category')) === null || _a === void 0 ? void 0 : _a.disable();
        (_b = this.userForm.get('Title')) === null || _b === void 0 ? void 0 : _b.disable();
        (_c = this.userForm.get('Subtitle')) === null || _c === void 0 ? void 0 : _c.disable();
        (_d = this.userForm.get('report')) === null || _d === void 0 ? void 0 : _d.disable();
        (_e = this.userForm.get('fotoport')) === null || _e === void 0 ? void 0 : _e.disable();
        (_f = this.userForm.get('fotonot')) === null || _f === void 0 ? void 0 : _f.disable();
        (_g = this.userForm.get('videonot')) === null || _g === void 0 ? void 0 : _g.disable();
        (_h = this.userForm.get('portada')) === null || _h === void 0 ? void 0 : _h.disable();
        (_j = this.userForm.get('hide')) === null || _j === void 0 ? void 0 : _j.disable();
    }
    onSubmit() {
        this.errorc = false;
        this.service.clearFormData();
        // this.service.formData = {
        //   id_categoria : this.userForm.value.category,
        //   titulo  : this.userForm.value.Title,
        //   subtitulo : this.userForm.value.Subtitle,
        //   descripcion : this.userForm.value.report,
        //   foto_portada : this.userForm.value.fotoport,
        //   foto_noticia : this.userForm.value.fotonot,
        //   video_noticia : this.userForm.value.videonot,
        //   portada : this.userForm.value.portada,
        //   hide : this.userForm.value.hide,
        // };
        // this.categoriaelegida = await this.getCategoria(this.userForm.value.category);
        this.insertRecord();
    }
    insertRecord() {
        this.service.DeleteNew(this.new_id).subscribe(res => {
            //MOSTRAR UN MENSAJE QUE SE GUARDO CORRECTAMENTE
            this.router.navigate(['/newslist']);
            this.userForm.reset();
        }, (err) => {
            var MensajeError = err.error.ModelState.Error;
            console.log(err);
            console.log(MensajeError);
            console.log('algo malio sal');
            this.userForm.reset();
            //this.router.navigate(['/usersadd']);
        });
    }
}
NewsDelComponent.ɵfac = function NewsDelComponent_Factory(t) { return new (t || NewsDelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
NewsDelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewsDelComponent, selectors: [["app-news-del"]], decls: 80, vars: 5, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], [1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link", "active"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["formControlName", "category"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group"], ["type", "textbox", "name", "Title", "formControlName", "Title", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["name", "Subtitle", "formControlName", "Subtitle", 1, "form-control"], ["name", "report", "formControlName", "report", 1, "form-control"], ["for", "portada", 1, "col-md-3", "control-label"], [1, "col-md-9"], [1, "radio-inline"], ["type", "radio", "name", "portada", "value", "0", "id", "0", "formControlName", "portada"], ["type", "radio", "name", "portada", "value", "1", "id", "1", "checked", "", "formControlName", "portada"], ["for", "hide", 1, "col-md-3", "control-label"], ["type", "radio", "name", "hide", "value", "0", "id", "0", "formControlName", "hide"], ["type", "radio", "name", "hide", "value", "1", "id", "1", "checked", "", "formControlName", "hide"], ["type", "submit", 1, "btn", "float-right", "btn-outline-success", 2, "margin-left", "5px", 3, "disabled"], ["routerLink", "/newslist"], [1, "btn", "float-right", "btn-outline-danger"], [3, "value"], [1, "alert", "alert-danger"]], template: function NewsDelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Modify News");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NewsDelComponent_Template_form_ngSubmit_31_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Select category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, NewsDelComponent_option_36_Template, 2, 2, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, NewsDelComponent_div_41_Template, 5, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Subtitle (Optional):");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, NewsDelComponent_div_50_Template, 5, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Appear in Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Only registered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " All.(public) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "app-footer-main");
    } if (rf & 2) {
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.userForm.get("Title")) == null ? null : tmp_2_0.invalid) && (((tmp_2_0 = ctx.userForm.get("Title")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.userForm.get("Title")) == null ? null : tmp_2_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.userForm.get("report")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.userForm.get("report")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.userForm.get("report")) == null ? null : tmp_3_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_5__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_7__["FooterMainComponent"]], styles: [".sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n    border: .2px solid var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MtZGVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGdDQUFnQztBQUNwQyIsImZpbGUiOiJuZXdzLWRlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXJ7XHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAycmVtIDBweDtcclxufVxyXG4uc2lkZWJhciAubmF2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXp1bCk7XHJcbn1cclxuLnNpZGViYXIgLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tdmlvbGV0YSk7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tdmlvbGV0YSk7XHJcbn1cclxuLnNpZGViYXIgLm5hdiBhe1xyXG4gICAgY29sb3I6dmFyKC0tYmxhbmNvKTtcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS1henVsKTtcclxufVxyXG4uc2lkZWJhciAubmF2IGE6aG92ZXJ7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tYmxhbmNvKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "G2Gn":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_mailer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mailer.service */ "XJ+S");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cargarjv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cargarjv.service */ "0ZmO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ContactComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " THERE IS AN INCONVENIENCE ... TRY LATER. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " YOUR INQUIRY WAS SENT CORRECTLY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " PLEASE WAIT ... YOUR QUERY IS BEING PROCESSED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactComponent {
    constructor(service, router, cargaJS) {
        this.service = service;
        this.router = router;
        this.cargaJS = cargaJS;
        this.errorG = false;
        this.noerror = false;
        this.esperar = false;
        this.general = true;
        this.cartel = false;
        this.status = '';
        this.estado = false;
        cargaJS.CargaScript(['mapa.js']);
    }
    ngOnInit() {
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        this.resetForm();
    }
    resetForm(form) {
        if (form != null)
            form.resetForm();
        //quitar los alerts ya que aparecen al vaciar todo
        this.errorG = false;
        this.noerror = false;
        this.esperar = false;
        this.general = false;
        this.service.formData = {
            nombre: '',
            correo: '',
            consulta: '',
        };
    }
    onSubmit(form) {
        this.errorG = false;
        this.esperar = true;
        this.noerror = false;
        this.insertRecord(form);
    }
    insertRecord(form) {
        this.service.EnviarContacto(this.service.formData).subscribe(res => {
            this.noerror = true;
            this.esperar = false;
            //this.router.navigate(['/principal']);
        }, (err) => {
            var MensajeError = err.error.ModelState.Error;
            ;
            console.log(MensajeError);
            this.errorG = true;
            this.esperar = false;
        });
    }
    corregido() {
        this.errorG = false;
        this.esperar = false;
        this.noerror = false;
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mailer_service__WEBPACK_IMPORTED_MODULE_1__["MailerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cargarjv_service__WEBPACK_IMPORTED_MODULE_3__["CargarjvService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 52, vars: 10, consts: [[1, "cuerpoCuatro"], [1, "formulario"], ["autocomplete", "off", 3, "submit"], ["form", "ngForm"], [1, "form-group"], ["for", "fullname"], ["name", "nombre", "type", "text", "ng-maxlength", "8", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["nombre", "ngModel"], ["pattern", "[a-zA-Z]$", 1, "alert", "alert-danger", 3, "hidden"], ["for", "e-mail"], ["pattern", "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}$", "name", "correo", "type", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["correo", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], [1, "form-group", "message"], ["for", "message"], ["name", "consulta", "cols", "3", "rows", "2", "type", "text", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["consulta", "ngModel"], ["class", "alert alert-danger", "style", "text-align: center;", 4, "ngIf"], ["class", "alert alert-success", "style", "text-align: center;", 4, "ngIf"], ["class", "alert alert-primary", "style", "text-align: center;", 4, "ngIf"], [1, "form-group", "send"], ["type", "submit", 2, "background-color", "#F4F4F4", "color", "#020568", 3, "disabled"], [1, "material-icons"], [1, "buscar"], ["id", "mapid", 2, "width", "100%", "height", "100%", "margin-bottom", "10%"], [1, "alert", "alert-danger", 2, "text-align", "center"], [1, "alert", "alert-success", 2, "text-align", "center"], [1, "alert", "alert-primary", 2, "text-align", "center"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ContactComponent_Template_form_submit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Fullname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_10_listener($event) { return ctx.service.formData.nombre = $event; })("keyup", function ContactComponent_Template_input_keyup_10_listener() { return ctx.corregido(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " is required and only alphabetic values are accepted. It cannot contain numbers or symbols. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "e-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_22_listener($event) { return ctx.service.formData.correo = $event; })("keyup", function ContactComponent_Template_input_keyup_22_listener() { return ctx.corregido(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " is required. And it can only contain letters, numbers, periods, hyphens, and underscore. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "textarea", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_34_listener($event) { return ctx.service.formData.consulta = $event; })("keyup", function ContactComponent_Template_textarea_keyup_34_listener() { return ctx.corregido(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "You must enter a query. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ContactComponent_div_40_Template, 3, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ContactComponent_div_41_Template, 3, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ContactComponent_div_42_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "near_me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.valid || _r1.pristine && !_r1.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.correo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r2.valid || _r2.pristine && !_r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.consulta);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r3.valid || _r3.pristine && !_r3.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noerror && !ctx.esperar && !ctx.errorG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.esperar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "HdsJ":
/*!***********************************************************!*\
  !*** ./src/app/components/download/download.component.ts ***!
  \***********************************************************/
/*! exports provided: DownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadComponent", function() { return DownloadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search.component */ "RZmA");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");






function DownloadComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DownloadComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar-reg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DownloadComponent {
    constructor() {
        this.status = '';
        this.estado = false;
    }
    ngOnInit() {
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
    }
}
DownloadComponent.ɵfac = function DownloadComponent_Factory(t) { return new (t || DownloadComponent)(); };
DownloadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DownloadComponent, selectors: [["app-download"]], decls: 11, vars: 2, consts: [[4, "ngIf"], [1, "cuadro"], [1, "mitad1"], [1, "mitad2"], ["src", "../../../assets/ICON RESOURCE.png", "alt", ""]], template: function DownloadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DownloadComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DownloadComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Resources to Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estado == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estado == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_5__["NavbarRegComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3dubG9hZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "IURz":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _latest_latest_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../latest/latest.component */ "xsLU");
/* harmony import */ var _whoweare_whoweare_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../whoweare/whoweare.component */ "wi7t");
/* harmony import */ var _autor_autor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../autor/autor.component */ "/0gr");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search/search.component */ "RZmA");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contact/contact.component */ "G2Gn");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer-main/footer-main.component */ "7UVc");









class MainComponent {
    constructor(router) {
        this.router = router;
        this.status = '';
    }
    ngOnInit() {
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.router.navigate(['/mainr']);
        }
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 7, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-latest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-whoweare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-autor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer-main");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _latest_latest_component__WEBPACK_IMPORTED_MODULE_3__["LatestComponent"], _whoweare_whoweare_component__WEBPACK_IMPORTED_MODULE_4__["WhoweareComponent"], _autor_autor_component__WEBPACK_IMPORTED_MODULE_5__["AutorComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_8__["FooterMainComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "IwHr":
/*!***************************************************************!*\
  !*** ./src/app/components/users-edit/users-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: UsersEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEditComponent", function() { return UsersEditComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "6Qg2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer-main/footer-main.component */ "7UVc");








function UsersEditComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersEditComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is not available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersEditComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " must not have uppercase. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersEditComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersEditComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersEditComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersEditComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is already registered. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersEditComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " The ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " entered does not have a correct format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UsersEditComponent {
    constructor(formBuilder, service, router, _route) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this._route = _route;
        this.rol = '1';
        this.user_id = "";
        this.emailPattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$";
        // passPattern ="^(?=/\w*/\d)(?=/\w*[A-Z])(?=/\w*[a-z])\S{6,16}$"
        this.erroru = false;
        this.errorc = false;
        this.password = "";
        this.userForm = this.formBuilder.group({
            nickname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[a-z0-9]{1,50}?$")]],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            //password: ['', [ Validators.required, Validators.pattern("^[a-zA-Z0-9@#$]{6,25}?$")]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.emailPattern)]],
            rol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            descripcion: ['']
        });
    }
    ngOnInit() {
        this.user_id = this._route.snapshot.paramMap.get('user_id');
        this.errorc = false;
        this.erroru = false;
        this.service.acceder(this.user_id).subscribe((usuario) => {
            if (usuario.rol == '0') {
                this.userForm.patchValue({ rol: '0' });
            }
            else {
                this.userForm.patchValue({ rol: '1' });
            }
            this.userForm.patchValue({
                nickname: usuario.nickname,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                descripcion: usuario.user_descripcion,
                email: usuario.email,
            });
            this.password = usuario.password;
        });
    }
    onSubmit() {
        this.errorc = false;
        this.service.clearFormData();
        this.service.formData = {
            nickname: this.userForm.value.nickname,
            nombre: this.userForm.value.nombre,
            apellido: this.userForm.value.apellido,
            password: this.password,
            email: this.userForm.value.email,
            user_foto: "img/profile.png",
            active: true,
            token: "",
            rol: this.userForm.value.rol,
            user_descripcion: this.userForm.value.descripcion,
        };
        console.log('ok');
        this.updateRecord();
    }
    updateRecord() {
        this.service.editUser(this.service.formData, this.user_id).subscribe(res => {
            //MOSTRAR UN MENSAJE QUE SE GUARDO CORRECTAMENTE
            this.router.navigate(['/userslist']);
            this.userForm.reset();
        }, (err) => {
            var MensajeError = err.error.message;
            console.log(MensajeError);
            if (MensajeError == "EL MAIL YA SE ENCUENTRA EN LA BASE DE DATOS") {
                this.errorc = true;
                this.userForm.reset();
            }
            else {
                if (MensajeError == "EL NICKNAME YA SE ENCUENTRA EN LA BASE DE DATOS") {
                    this.erroru = true;
                    this.userForm.reset();
                }
                else {
                    console.log('algo malio sal');
                    this.userForm.reset();
                }
            }
            this.router.navigate(['/usersadd']);
        });
    }
}
UsersEditComponent.ɵfac = function UsersEditComponent_Factory(t) { return new (t || UsersEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
UsersEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UsersEditComponent, selectors: [["app-users-edit"]], decls: 78, vars: 10, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], [1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link", "active"], ["routerLink", "/categorieslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "textbox", "name", "nickname", "formControlName", "nickname", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "textbox", "name", "nombre", "formControlName", "nombre", 1, "form-control"], ["type", "textbox", "name", "apellido", "formControlName", "apellido", "required", "", 1, "form-control"], ["type", "textbox", "name", "email", "formControlName", "email", 1, "form-control"], ["for", "latitude", 1, "col-md-3", "control-label"], [1, "col-md-9"], [1, "radio-inline"], ["type", "radio", "name", "rol", "value", "0", "id", "0", "formControlName", "rol"], ["type", "radio", "name", "rol", "value", "1", "id", "1", "checked", "", "formControlName", "rol"], ["name", "descripcion", "formControlName", "descripcion", 1, "form-control"], ["type", "submit", 1, "btn", "float-right", "btn-outline-success", 2, "margin-left", "5px", 3, "disabled"], ["routerLink", "/userslist"], [1, "btn", "float-right", "btn-outline-danger"], [1, "alert", "alert-danger"]], template: function UsersEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Edit User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UsersEditComponent_Template_form_ngSubmit_31_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Nickname:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, UsersEditComponent_div_36_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, UsersEditComponent_div_37_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, UsersEditComponent_div_38_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, UsersEditComponent_div_43_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Last Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, UsersEditComponent_div_48_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, UsersEditComponent_div_53_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, UsersEditComponent_div_54_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, UsersEditComponent_div_55_Template, 6, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Modify");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "app-footer-main");
    } if (rf & 2) {
        let tmp_1_0 = null;
        let tmp_3_0 = null;
        let tmp_4_0 = null;
        let tmp_5_0 = null;
        let tmp_6_0 = null;
        let tmp_8_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.userForm.get("nickname")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = ctx.userForm.get("nickname")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.userForm.get("nickname")) == null ? null : tmp_1_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.erroru);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.userForm.get("nickname")) == null ? null : tmp_3_0.hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.userForm.get("nombre")) == null ? null : tmp_4_0.invalid) && (((tmp_4_0 = ctx.userForm.get("nombre")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.userForm.get("nombre")) == null ? null : tmp_4_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.userForm.get("apellido")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx.userForm.get("apellido")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.userForm.get("apellido")) == null ? null : tmp_5_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.userForm.get("email")) == null ? null : tmp_6_0.invalid) && (((tmp_6_0 = ctx.userForm.get("email")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx.userForm.get("email")) == null ? null : tmp_6_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.userForm.get("email")) == null ? null : tmp_8_0.hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_6__["FooterMainComponent"]], styles: [".sexagesimal[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n}\r\n.sexagesimal[_ngcontent-%COMP%], .sexagesimalsec[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 6px;\r\n    margin-left: 5px;\r\n}\r\n.box[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    min-width: 80%;\r\n    min-height: 350px;\r\n    margin: 10px;\r\n    padding: 15px;\r\n    border: 1px solid rgba(177, 177, 177, 0.933);\r\n    border-radius: 15px ;\r\n    text-align: justify;\r\n    margin-top: 80 px;\r\n    overflow:initial;\r\n    position:relative;\r\n  }\r\n.cp[_ngcontent-%COMP%]{\r\n      width: 30%;\r\n  }\r\n.container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-left:50px;\r\n    margin-top:40px;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n  }\r\n.sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n    border: .2px solid var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7QUFDQTtNQUNJLFVBQVU7RUFDZDtBQUNBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakI7QUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6InVzZXJzLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXhhZ2VzaW1hbCB7XHJcbiAgICB3aWR0aDogNDBweDtcclxufVxyXG4uc2V4YWdlc2ltYWwsIC5zZXhhZ2VzaW1hbHNlYyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5ib3h7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDgwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTc3LCAxNzcsIDE3NywgMC45MzMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCA7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbWFyZ2luLXRvcDogODAgcHg7XHJcbiAgICBvdmVyZmxvdzppbml0aWFsO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5jcHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6NTBweDtcclxuICAgIG1hcmdpbi10b3A6NDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuXHJcbiAgLnNpZGViYXJ7XHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAycmVtIDBweDtcclxufVxyXG4uc2lkZWJhciAubmF2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXp1bCk7XHJcbn1cclxuLnNpZGViYXIgLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tdmlvbGV0YSk7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tdmlvbGV0YSk7XHJcbn1cclxuLnNpZGViYXIgLm5hdiBhe1xyXG4gICAgY29sb3I6dmFyKC0tYmxhbmNvKTtcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS1henVsKTtcclxufVxyXG4uc2lkZWJhciAubmF2IGE6aG92ZXJ7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tYmxhbmNvKTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 29, vars: 0, consts: [[1, "footer"], [1, "logoPie2"], ["src", "../../../assets/logo b.png", "alt", ""], [1, "enlaces2"], [1, "iconosPie1"], ["href", "https://twitter.com/DavidWakelyn?s=08", "target", "_blank"], ["src", "../../../assets/twit.png", "alt", ""], ["href", "https://www.linkedin.com/in/david-scarlett-wakelyn-9227275/", "target", "_blank"], ["src", "../../../assets/link.png", "alt", ""], [1, "anclas1"], ["routerLink", "/policy", "routerLinkActive", "'active'"], ["routerLink", "/literacy", "routerLinkActive", "'active'"], ["routerLink", "/dvisuals", "routerLinkActive", "'active'"], ["routerLink", "/download", "routerLinkActive", "'active'"], [1, "anclas2"], ["routerLink", "/contact", "routerLinkActive", "'active'"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "POLICY ANALYSIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "LITERACY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "DATA VISUALS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "DOWNLOAD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "FIND US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "CONTACT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Lquv":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/users.service */ "6Qg2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer-main/footer-main.component */ "7UVc");





function DashboardComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Volver a Inicio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Salir de la sesion y volver al menu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.token = '';
        this.tmp = "";
        this.dir = 0;
    }
    ngOnInit() {
        //this.token = localStorage.getItem('token')!;
        // this.chaUser(this.token);
    }
    chaUser(token) {
        this.service.chau(token).subscribe((res) => {
            if (res.resultado == 0) {
                localStorage.clear();
                localStorage.setItem('resultado', res.resultado);
                this.router.navigate(['/principal']);
            }
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 40, vars: 0, consts: [["routerLink", "/logout"], [1, "nav-tabs"], ["ngbNavContent", ""], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link"], ["type", "button", 1, "btn", "btn-primary"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Crear-Ciudad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Editar-Ciudad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Crear-Atraccion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Editar-Atraccion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Listado-Usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Listado-Baneados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Ver-Mensajes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Ver-Comentarios-Reportados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Volver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DashboardComponent_ng_template_38_Template, 6, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div");
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_3__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_4__["FooterMainComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["a[_ngcontent-%COMP%]{\r\n    color: #f3a60c !important;\r\n  }\r\n  \r\n  .btn-primary[_ngcontent-%COMP%]{\r\n    background-color: #f3a60c !important;\r\n    border-color: #f3a60c !important ;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLG9DQUFvQztJQUNwQyxpQ0FBaUM7RUFDbkMiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYXtcclxuICAgIGNvbG9yOiAjZjNhNjBjICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tcHJpbWFyeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2E2MGMgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogI2YzYTYwYyAhaW1wb3J0YW50IDtcclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ "NA5x":
/*!*******************************************!*\
  !*** ./src/app/models/principal.model.ts ***!
  \*******************************************/
/*! exports provided: Principal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Principal", function() { return Principal; });
class Principal {
}


/***/ }),

/***/ "Nnvk":
/*!*****************************************************************!*\
  !*** ./src/app/components/reportphoto/reportphoto.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReportphotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportphotoComponent", function() { return ReportphotoComponent; });
/* harmony import */ var src_app_models_apiurl___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/apiurl  */ "kkh4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_photos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/photos.service */ "TEzu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");








function ReportphotoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReportphotoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar-reg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ReportphotoComponent {
    constructor(router, pho_id, service) {
        this.router = router;
        this.pho_id = pho_id;
        this.service = service;
        this.foto = {
            url: '',
            hide: 0,
            titulo: '',
            id_foto: '',
            direccion: '',
        };
        this.apiurl = src_app_models_apiurl___WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].parafoto;
        this.status = '';
        this.estado = false;
        this.rol = '';
        this.photo_id = '';
    }
    ngOnInit() {
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        this.photo_id = this.pho_id.snapshot.paramMap.get('repp_id');
        this.service.GetFoto(this.photo_id).subscribe((res) => {
            this.foto = res;
            this.foto.direccion = this.apiurl + "/images/Photos/" + this.foto.id_foto + ".png";
            if (this.estado) {
                if (this.foto.hide == 0) {
                    this.router.navigate(['/dvisuals']);
                }
            }
        });
    }
    recargar() { setTimeout(function () { window.location.reload(); }, 50); }
    ;
}
ReportphotoComponent.ɵfac = function ReportphotoComponent_Factory(t) { return new (t || ReportphotoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_photos_service__WEBPACK_IMPORTED_MODULE_3__["PhotosService"])); };
ReportphotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReportphotoComponent, selectors: [["app-reportphoto"]], decls: 13, vars: 4, consts: [[4, "ngIf"], [1, "reporte"], ["alt", "", 3, "src"], ["routerLink", "/dvisuals", 3, "click"]], template: function ReportphotoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ReportphotoComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReportphotoComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReportphotoComponent_Template_button_click_8_listener() { return ctx.recargar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.estado == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.estado == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.foto.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.foto.direccion, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_7__["NavbarRegComponent"]], styles: [".reporte[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    margin: auto;\r\n    text-align: center;\r\n}\r\n.reporte[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: center;\r\n    margin: 1rem auto;\r\n    background: var(--violeta);\r\n    color: var(--blanco);\r\n    padding: 1rem 0px;\r\n}\r\n.reporte[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin: 1rem;\r\n    padding: 1rem;\r\n    bottom: 0px;\r\n    font-size: 1rem;\r\n    font-weight: bolder;\r\n    text-transform: uppercase;\r\n    height: -webkit-max-content;\r\n    height: max-content;\r\n    display: table;\r\n    background: var(--azul);\r\n    color: var(--blanco);\r\n    border-radius: 10px;\r\n}\r\n.reporte[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    filter: brightness(1.5);\r\n}\r\n.reporte[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{\r\n    color: var(--azul);\r\n    background: var(--blanco);\r\n}\r\n.reporte[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    margin: 2rem auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydHBob3RvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLDJCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJyZXBvcnRwaG90by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcG9ydGV7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5yZXBvcnRlIGgxe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXZpb2xldGEpO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYW5jbyk7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDBweDtcclxufVxyXG4ucmVwb3J0ZSBidXR0b257XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWF6dWwpO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYW5jbyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5yZXBvcnRlIGJ1dHRvbjpob3ZlcntcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxLjUpO1xyXG59XHJcbi5yZXBvcnRlIGJ1dHRvbjphY3RpdmV7XHJcbiAgICBjb2xvcjogdmFyKC0tYXp1bCk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFuY28pO1xyXG59XHJcbi5yZXBvcnRlIGltZ3tcclxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG59Il19 */"] });


/***/ }),

/***/ "PQYE":
/*!*************************************************************!*\
  !*** ./src/app/components/news-edit/news-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: NewsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsEditComponent", function() { return NewsEditComponent; });
/* harmony import */ var _models_apiurl___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../models/apiurl  */ "kkh4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/news.service */ "Ado8");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../footer-main/footer-main.component */ "7UVc");











const _c0 = ["fileInput"];
function NewsEditComponent_option_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", cat_r4.id_categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cat_r4.nombre, " ");
} }
function NewsEditComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NewsEditComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class NewsEditComponent {
    constructor(formBuilder, service, servicecat, _route, router) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.servicecat = servicecat;
        this._route = _route;
        this.router = router;
        this.imageUrl = "https://bulma.io/images/placeholders/480x480.png";
        this.urlapi = _models_apiurl___WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].apiurl;
        this.status = '';
        this.estado = false;
        this.rol = '';
        this.new_id = "";
        this.erroru = false;
        this.errorc = false;
        this.userForm = this.formBuilder.group({
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Subtitle: [''],
            report: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            fotoport: [''],
            fotonot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            videonot: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            portada: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hide: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ngOnInit() {
        this.userForm.reset();
        this.errorc = false;
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        else {
            this.router.navigate(['/main']);
        }
        this.rol = localStorage.getItem('rol');
        if (parseInt(this.rol) == 1) {
            this.router.navigate(['/mainr']);
        }
        this.new_id = this._route.snapshot.paramMap.get('new_id');
        this.service.acceder(this.new_id).subscribe((noticia) => {
            if (noticia.portada == '0') {
                this.userForm.patchValue({ portada: '0' });
            }
            else {
                this.userForm.patchValue({ portada: '1' });
            }
            if (noticia.hide == '0') {
                this.userForm.patchValue({ hide: '0' });
            }
            else {
                this.userForm.patchValue({ hide: '1' });
            }
            this.userForm.patchValue({ Title: noticia.titulo });
            this.userForm.patchValue({ Subtitle: noticia.subtitulo });
            this.userForm.patchValue({ report: noticia.descripcion });
            this.userForm.patchValue({ fotoport: noticia.foto_portada });
            this.userForm.patchValue({ fotonot: noticia.foto_noticia });
            this.userForm.patchValue({ videonot: noticia.video_noticia });
            this.userForm.patchValue({ category: noticia.id_categoria });
        });
        this.servicecat.list().subscribe((cat) => {
            this.categories = cat;
        });
    }
    onSubmit() {
        this.errorc = false;
        this.service.clearFormData();
        this.datos = this.imageUrl;
        if (this.datos == "https://bulma.io/images/placeholders/480x480.png") {
            this.datos = "";
        }
        else {
            this.datos = this.datos.substring(this.datos.indexOf(',') + 1);
        }
        this.service.formData = {
            id_categoria: this.userForm.value.category,
            titulo: this.userForm.value.Title,
            subtitulo: this.userForm.value.Subtitle,
            descripcion: this.userForm.value.report,
            foto_portada: this.userForm.value.fotoport,
            foto_noticia: this.datos,
            video_noticia: this.userForm.value.videonot,
            portada: this.userForm.value.portada,
            hide: this.userForm.value.hide,
        };
        // this.categoriaelegida = await this.getCategoria(this.userForm.value.category);
        this.insertRecord();
    }
    insertRecord() {
        this.service.editNew(this.service.formData, this.new_id).subscribe(res => {
            //MOSTRAR UN MENSAJE QUE SE GUARDO CORRECTAMENTE
            this.router.navigate(['/newslist']);
            this.userForm.reset();
        }, (err) => {
            var MensajeError = err.error.ModelState.Error;
            console.log(err);
            console.log(MensajeError);
            console.log('algo malio sal');
            this.userForm.reset();
            //this.router.navigate(['/usersadd']);
        });
    }
    onChange(fileInput) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
            const max_size = 10485760;
            const allowed_types = ['image/png', 'image/jpeg'];
            const max_height = 600;
            const max_width = 600;
            if (fileInput.target.files[0].size > max_size) {
                window.alert('Maximum size allowed is ' + (max_size / 1024) / 1024 + 'Mb');
                this.limpiarFoto();
                return false;
            }
            else {
                if (!lodash__WEBPACK_IMPORTED_MODULE_2__["includes"](allowed_types, fileInput.target.files[0].type)) {
                    window.alert('Only Images are allowed ( JPG | PNG )');
                    this.limpiarFoto();
                    return false;
                }
                else {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const image = new Image();
                        image.src = e.target.result;
                        image.onload = (rs) => {
                            const img_height = rs.currentTarget['height'];
                            const img_width = rs.currentTarget['width'];
                            if (img_height > max_height && img_width > max_width) {
                                window.alert('Maximum dimentions allowed ' + max_height + '*' + max_width + 'px');
                                this.limpiarFoto();
                                return false;
                            }
                            else {
                                const imgBase64Path = e.target.result;
                                this.cardImageBase64 = imgBase64Path;
                                this.imageUrl = e.target.result;
                                reader.readAsDataURL(fileInput.target.files[0]);
                                return;
                            }
                        };
                    };
                    reader.readAsDataURL(fileInput.target.files[0]);
                }
            }
        }
        return;
    }
    limpiarFoto() {
        //this.userPhoto.nativeElement.value = null;
        this.imageUrl = "https://bulma.io/images/placeholders/480x480.png";
    }
}
NewsEditComponent.ɵfac = function NewsEditComponent_Factory(t) { return new (t || NewsEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_5__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
NewsEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NewsEditComponent, selectors: [["app-news-edit"]], viewQuery: function NewsEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.userPhoto = _t.first);
    } }, decls: 92, vars: 6, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], [1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link", "active"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["formControlName", "category"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group"], ["type", "textbox", "name", "Title", "formControlName", "Title", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["name", "Subtitle", "formControlName", "Subtitle", 1, "form-control"], ["name", "report", "formControlName", "report", 1, "form-control"], [1, "field"], [1, "file", "has-name", "is-primary", "is-fullwidth"], [1, "mb-3"], ["type", "file", "id", "formFile", "formControlName", "fotonot", 1, "form-control", 3, "change"], ["fileInput", ""], [1, "containerperfil"], [1, "column"], [3, "src"], ["for", "portada", 1, "col-md-3", "control-label"], [1, "col-md-9"], [1, "radio-inline"], ["type", "radio", "name", "portada", "value", "0", "id", "0", "formControlName", "portada"], ["type", "radio", "name", "portada", "value", "1", "id", "1", "checked", "", "formControlName", "portada"], ["for", "hide", 1, "col-md-3", "control-label"], ["type", "radio", "name", "hide", "value", "0", "id", "0", "formControlName", "hide"], ["type", "radio", "name", "hide", "value", "1", "id", "1", "checked", "", "formControlName", "hide"], ["type", "submit", 1, "btn", "float-right", "btn-outline-success", 2, "margin-left", "5px", 3, "disabled"], ["routerLink", "/newslist"], [1, "btn", "float-right", "btn-outline-danger"], [3, "value"], [1, "alert", "alert-danger"]], template: function NewsEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Modify News");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function NewsEditComponent_Template_form_ngSubmit_31_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " Select category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, NewsEditComponent_option_36_Template, 2, 2, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, NewsEditComponent_div_41_Template, 5, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Subtitle (Optional):");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "textarea", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, NewsEditComponent_div_50_Template, 5, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Report Photo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewsEditComponent_Template_input_change_57_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Appear in Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, " Only Registered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, " All.(public) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Modify");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](91, "app-footer-main");
    } if (rf & 2) {
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.userForm.get("Title")) == null ? null : tmp_2_0.invalid) && (((tmp_2_0 = ctx.userForm.get("Title")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.userForm.get("Title")) == null ? null : tmp_2_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.userForm.get("report")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.userForm.get("report")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.userForm.get("report")) == null ? null : tmp_3_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_7__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_9__["FooterMainComponent"]], styles: [".sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n    border: .2px solid var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoibmV3cy1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhcntcclxuICAgIG1hcmdpbjogMHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDJyZW0gMHB4O1xyXG59XHJcbi5zaWRlYmFyIC5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1henVsKTtcclxufVxyXG4uc2lkZWJhciAuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS12aW9sZXRhKTtcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS12aW9sZXRhKTtcclxufVxyXG4uc2lkZWJhciAubmF2IGF7XHJcbiAgICBjb2xvcjp2YXIoLS1ibGFuY28pO1xyXG4gICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLWF6dWwpO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYgYTpob3ZlcntcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS1ibGFuY28pO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "PZYN":
/*!***********************************************************************!*\
  !*** ./src/app/components/categories-add/categories-add.component.ts ***!
  \***********************************************************************/
/*! exports provided: CategoriesAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesAddComponent", function() { return CategoriesAddComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer-main/footer-main.component */ "7UVc");








function CategoriesAddComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoriesAddComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is already registered. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CategoriesAddComponent {
    constructor(formBuilder, service, router) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.status = '';
        this.estado = false;
        this.rol = '';
        this.errorc = false;
        this.userForm = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            portada: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            hide: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    ngOnInit() {
        this.userForm.reset();
        this.userForm.patchValue({ portada: '1' });
        this.userForm.patchValue({ hide: '1' });
        this.errorc = false;
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        else {
            this.router.navigate(['/main']);
        }
        this.rol = localStorage.getItem('rol');
        if (parseInt(this.rol) == 1) {
            this.router.navigate(['/mainr']);
        }
    }
    onSubmit() {
        this.errorc = false;
        this.service.clearFormData();
        this.service.formData = {
            nombre: this.userForm.value.nombre,
            portada: this.userForm.value.portada,
            hide: this.userForm.value.hide,
        };
        this.insertRecord();
    }
    insertRecord() {
        this.service.addCategory(this.service.formData).subscribe(res => {
            //MOSTRAR UN MENSAJE QUE SE GUARDO CORRECTAMENTE
            this.router.navigate(['/categorieslist']);
            this.userForm.reset();
        }, (err) => {
            console.log(err);
            var MensajeError = err.error.message;
            console.log(MensajeError);
            if (MensajeError == "CATEGORIA YA EXISTE") {
                this.errorc = true;
            }
            else {
                console.log('algo malio sal');
                this.userForm.reset();
            }
        });
    }
}
CategoriesAddComponent.ɵfac = function CategoriesAddComponent_Factory(t) { return new (t || CategoriesAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CategoriesAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoriesAddComponent, selectors: [["app-categories-add"]], decls: 45, vars: 4, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], [1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link", "active"], ["routerLink", "/newslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "textbox", "name", "nombre", "formControlName", "nombre", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "float-right", "btn-outline-success", 2, "margin-left", "5px", 3, "disabled"], ["routerLink", "/categorieslist"], [1, "btn", "float-right", "btn-outline-danger"], [1, "alert", "alert-danger"]], template: function CategoriesAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Add Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CategoriesAddComponent_Template_form_ngSubmit_31_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, CategoriesAddComponent_div_36_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, CategoriesAddComponent_div_37_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "app-footer-main");
    } if (rf & 2) {
        let tmp_1_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.userForm.get("nombre")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = ctx.userForm.get("nombre")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.userForm.get("nombre")) == null ? null : tmp_1_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_6__["FooterMainComponent"]], styles: [".sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n    border: .2px solid var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMtYWRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGdDQUFnQztBQUNwQyIsImZpbGUiOiJjYXRlZ29yaWVzLWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXJ7XHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAycmVtIDBweDtcclxufVxyXG4uc2lkZWJhciAubmF2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXp1bCk7XHJcbn1cclxuLnNpZGViYXIgLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tdmlvbGV0YSk7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tdmlvbGV0YSk7XHJcbn1cclxuLnNpZGViYXIgLm5hdiBhe1xyXG4gICAgY29sb3I6dmFyKC0tYmxhbmNvKTtcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS1henVsKTtcclxufVxyXG4uc2lkZWJhciAubmF2IGE6aG92ZXJ7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tYmxhbmNvKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Pqll":
/*!****************************************!*\
  !*** ./src/app/models/videos.model.ts ***!
  \****************************************/
/*! exports provided: Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
class Video {
}


/***/ }),

/***/ "RZmA":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _models_apiurl___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../models/apiurl  */ "kkh4");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/news.service */ "Ado8");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SearchComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", cat_r3.id_categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cat_r3.nombre, " ");
} }
function SearchComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " The year must contain 4 numeric digits. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchComponent_div_42_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noticia_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](noticia_r5.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", noticia_r5.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](noticia_r5.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](noticia_r5.subtitulo);
} }
function SearchComponent_div_42_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noticia_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](noticia_r5.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", noticia_r5.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](noticia_r5.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](noticia_r5.subtitulo);
} }
function SearchComponent_div_42_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SearchComponent_div_42_div_2_div_3_Template, 8, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SearchComponent_div_42_div_2_div_4_Template, 8, 4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noticia_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", noticia_r5.foto_portada, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.news.indexOf(noticia_r5) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.news.indexOf(noticia_r5) != 0);
} }
function SearchComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SearchComponent_div_42_div_2_Template, 5, 3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.news);
} }
class SearchComponent {
    constructor(formBuilder, service, servicecat, router, _route) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.servicecat = servicecat;
        this.router = router;
        this._route = _route;
        this.research = true;
        this.ids = "/rep/";
        this.urlarmada = "";
        this.apiurl = _models_apiurl___WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].parafoto;
        this.resultadotemporal = [];
        this.texkeyword = "";
        this.texnoticia = "";
        this.texnoticiatitle = "";
        this.texnoticiasubtitle = "";
        this.mostrar = true;
        this.status = '';
        this.estado = false;
        this.rol = '';
        this.validardate = "^[0-9]{4}$";
        this.splitted = "";
        this.userForm = this.formBuilder.group({
            category: [''],
            year: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(this.validardate)],
            keyword: ['']
        });
        this.cartel = false;
    }
    ngOnInit() {
        this.cartel = false;
        this.userForm.patchValue({ otro: -1,
            category: -1
        });
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        else {
            this.estado = false;
        }
        this.limpiar();
        this.servicecat.list().subscribe((cat) => {
            this.categories = cat;
        });
        this.ruta = this._route;
        if (this.ruta.component.name == "DownloadComponent") {
            this.mostrar = true;
        }
        else {
            this.mostrar = false;
        }
        ;
    }
    onSubmit() {
        this.cartel = false;
        this.ruta = this._route;
        if (this.ruta.component.name == "DownloadComponent") {
            this.mostrar = true;
        }
        else {
            this.router.navigate(['/download']);
            ;
        }
        ; //redirige pero no busca
        //LIMPIO
        for (let i = this.resultadotemporal.length; i > 0; i--) {
            this.resultadotemporal.pop();
        }
        for (let i = 0; i < this.todaslasnews.length; i++) {
            this.texnoticia = this.todaslasnews[i].descripcion;
            this.texnoticia = this.texnoticia.toUpperCase();
            this.texnoticiatitle = this.todaslasnews[i].titulo;
            this.texnoticiatitle = this.texnoticiatitle.toUpperCase();
            this.texnoticiasubtitle = this.todaslasnews[i].subtitulo;
            this.texnoticiasubtitle = this.texnoticiasubtitle.toUpperCase();
            this.texkeyword = this.userForm.value.keyword;
            this.texkeyword = this.texkeyword.toUpperCase();
            if (this.userForm.value.category != -1) { //1 e          
                if (this.todaslasnews[i].id_categoria == this.userForm.value.category) { //1 ok
                    if (this.userForm.value.year != "") { // 1ok 2e
                        this.splitted = this.todaslasnews[i].date.toString().split("-");
                        if (this.userForm.value.year == this.splitted[0]) { //1ok2ok
                            if (this.userForm.value.keyword != "") { //   3e
                                //inicio
                                if ((this.texnoticia.indexOf(this.texkeyword) != -1)
                                    || (this.texnoticiatitle.indexOf(this.texkeyword) != -1)
                                    || (this.texnoticiasubtitle.indexOf(this.texkeyword) != -1)) { //miro tirulo                              
                                    this.resultadotemporal.push(this.todaslasnews[i]);
                                }
                                //fin
                            }
                            else {
                                this.resultadotemporal.push(this.todaslasnews[i]); // 1 2 ok 3sin
                            }
                        }
                        else { //1ok 2NO
                            this.cartel = true; //CARTEL NO RESULT
                        }
                    }
                    else { //1ok 2sin
                        if (this.userForm.value.keyword != "") { //1ok 2sin 3e 
                            //inicio
                            if ((this.texnoticia.indexOf(this.texkeyword) != -1)
                                || (this.texnoticiatitle.indexOf(this.texkeyword) != -1)
                                || (this.texnoticiasubtitle.indexOf(this.texkeyword) != -1)) { //miro tirulo                              
                                this.resultadotemporal.push(this.todaslasnews[i]);
                            }
                            //fin
                        }
                        else { //1ok 2sin 3sin
                            this.resultadotemporal.push(this.todaslasnews[i]);
                        }
                    }
                }
                else { //1NO
                    this.cartel = true; //CARTEL NO RESULT
                }
                ;
            }
            else { //no puso 1
                if (this.userForm.value.year != "") { // 1sin 2e
                    this.splitted = this.todaslasnews[i].date.toString().split("-");
                    if (this.userForm.value.year == this.splitted[0]) { //1sin2ok
                        if (this.userForm.value.keyword != "") { //   3e
                            //inicio
                            if ((this.texnoticia.indexOf(this.texkeyword) != -1)
                                || (this.texnoticiatitle.indexOf(this.texkeyword) != -1)
                                || (this.texnoticiasubtitle.indexOf(this.texkeyword) != -1)) { //miro tirulo                              
                                this.resultadotemporal.push(this.todaslasnews[i]);
                            }
                            //fin
                        }
                        else {
                            this.resultadotemporal.push(this.todaslasnews[i]); // 1sin 2ok 3sin
                        }
                    }
                    else { //1sin 2NO
                        this.cartel = true; //CARTEL NO RESULT
                    }
                }
                else { //1sin 2sin 3e
                    if (this.userForm.value.keyword != "") { //   3e
                        //inicio
                        if ((this.texnoticia.indexOf(this.texkeyword) != -1)
                            || (this.texnoticiatitle.indexOf(this.texkeyword) != -1)
                            || (this.texnoticiasubtitle.indexOf(this.texkeyword) != -1)) { //miro tirulo                              
                            this.resultadotemporal.push(this.todaslasnews[i]);
                        }
                        //fin
                    }
                    else { //1sin 2sin 3sin
                        this.resultadotemporal.push(this.todaslasnews[i]); //1sin 2sin 3sin
                    }
                }
            }
        } //cierro for     
        this.news = this.resultadotemporal;
    }
    ;
    ordenarbusqueda() {
        this.news.reverse();
        //  if(this.research==true)
        //      {this.news=this.news.sort();
        //       this.research=false; 
        //       console.log(this.news);console.log(this.research)
        //     }
        //     else{
        //       this.research=true;this.pordenar=this.news.slice().reverse(); 
        //       this.news=this.pordenar;
        //       console.log(this.news);console.log(this.research)
        //     };         
    }
    limpiainputs() {
        this.userForm.patchValue({ year: "",
            category: -1,
            keyword: ""
        });
    }
    limpiar() {
        this.limpiainputs();
        this.limpiarresultado();
    }
    limpiarresultado() {
        if (this.estado) {
            this.service.listar().subscribe((id) => {
                this.noticiastodas = id;
                for (let i = 0; i < this.noticiastodas.length; i++) {
                    if (this.noticiastodas[i].foto_portada != "") {
                        this.noticiastodas[i].foto_portada = this.apiurl + "/images/News/" + this.noticiastodas[i].id_noticia + "/portada.png";
                    }
                    else {
                        this.noticiastodas[i].foto_portada = "../../../assets/LOGO.png";
                    }
                    this.arraytemporal = this.noticiastodas[i].date.split("T");
                    this.noticiastodas[i].date = this.arraytemporal[0];
                    this.urlarmada = "";
                    this.urlarmada = this.ids + this.noticiastodas[i].id_noticia;
                    this.noticiastodas[i].descripcion = this.urlarmada;
                }
                this.news = this.noticiastodas;
                this.todaslasnews = this.noticiastodas;
            });
        }
        else {
            this.service.noticiaSearchNR().subscribe((id) => {
                this.noticiastodas = id;
                for (let i = 0; i < this.noticiastodas.length; i++) {
                    if (this.noticiastodas[i].foto_portada != "") {
                        this.noticiastodas[i].foto_portada = this.apiurl + "/images/News/" + this.noticiastodas[i].id_noticia + "/portada.png";
                    }
                    else {
                        this.noticiastodas[i].foto_portada = "../../../assets/LOGO.png";
                    }
                    this.arraytemporal = this.noticiastodas[i].date.split("T");
                    this.noticiastodas[i].date = this.arraytemporal[0];
                    this.urlarmada = "";
                    this.urlarmada = this.ids + this.noticiastodas[i].id_noticia;
                    this.noticiastodas[i].descripcion = this.urlarmada;
                }
                this.news = this.noticiastodas;
                this.todaslasnews = this.noticiastodas;
            });
        }
    }
    iguales() {
        // if(this.userForm.value.otro==this.userForm.value.category){return true}else{return false}
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 43, vars: 5, consts: [[1, "cuerpoTre"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "busqueda"], ["name", "category", "formControlName", "category", 1, "topics"], ["value", "-1", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group"], ["type", "text", "name", "year", "formControlName", "year"], ["class", "alert alert-danger", 4, "ngIf"], [1, "distinte"], ["type", "text", "name", "keyword", "formControlName", "keyword"], [1, "form-group", "botes"], [1, "distinte1"], [1, "este", "ordenar", 3, "click"], [1, "material-icons"], ["type", "submit", 1, "este", 3, "disabled"], [1, "buscando", "material-icons"], [3, "click"], [1, "pedaz"], [1, "ped1"], [1, "ped2"], ["class", "resour", 4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], [1, "resour"], [1, "resourDon"], ["class", "li", 4, "ngFor", "ngForOf"], [1, "li"], [1, "descImg"], ["alt", "", 3, "src"], ["class", "descTex", "style", "background-color: #512475;", 4, "ngIf"], ["class", "descTex", 4, "ngIf"], [1, "descTex", 2, "background-color", "#512475"], [1, "dat"], [3, "routerLink"], [1, "descTex"], [1, "abaj"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Resources to download");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SearchComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, SearchComponent_option_12_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "year");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, SearchComponent_div_18_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "keyword");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_26_listener() { return ctx.ordenarbusqueda(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_36_listener() { return ctx.limpiar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "RESET");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, SearchComponent_div_42_Template, 3, 1, "div", 21);
    } if (rf & 2) {
        let tmp_2_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.userForm.get("year")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.userForm.get("year")) == null ? null : tmp_2_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.userForm.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mostrar);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n.nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n    background-color: var(--blanco);\r\n    width: 20%;\r\n    margin: 0px 10px 0px 20px;\r\n    text-align: center;\r\n}\r\n.nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    height: 90%;\r\n    margin: auto;\r\n}\r\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    width: 60%;\r\n    margin: auto 5px;\r\n    text-transform: uppercase;\r\n    justify-content: space-around;\r\n    display: grid;\r\n    grid-template-columns: repeat(6, 1fr);\r\n}\r\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: var(--blanco);\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none;\r\n    height: auto;\r\n    padding: 0px 5px;\r\n}\r\n.icons[_ngcontent-%COMP%]{\r\n    margin: auto 20px auto 0px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n.icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    margin: 5px;\r\n    color: var(--blanco);\r\n    text-decoration: none;\r\n}\r\n.icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n#hamburguer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    width: 30px;\r\n    height: 3px;\r\n    background-color: var(--blanco);\r\n    margin: 5px;\r\n    transition: all 0.3s ease;\r\n}\r\n.hamburguer[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n#conten[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n@media(max-width: 920px){\r\n    body[_ngcontent-%COMP%]{\r\n        font-size: 16px;\r\n    }\r\n\r\n    \r\n\r\n    .nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .hamburguer[_ngcontent-%COMP%]{\r\n        display: block;\r\n        cursor: pointer;\r\n        margin: auto 10px;\r\n        z-index: 2;\r\n        transition: all 0.7s ease;\r\n    }\r\n    .aparece[_ngcontent-%COMP%]{\r\n        display: block;\r\n        position: absolute;\r\n        right: 0px;\r\n        z-index: 5;\r\n        background-color: var(--azul);\r\n        padding: 20px 5px;\r\n        transition: all .5 ease;\r\n        text-transform: uppercase;\r\n        animation: menu 1s;\r\n        width: 30%;\r\n    }\r\n    .desapa[_ngcontent-%COMP%]{\r\n        animation: desmenu 1s;\r\n    }\r\n    @keyframes desmenu {\r\n        0%{transform: translateX(0px);}\r\n        100%{transform: translateX(15.625rem);}\r\n    }\r\n    @keyframes menu {\r\n        0%{transform: translateX(200px);}\r\n        100%{transform: translateX(0px);}\r\n    }\r\n    .aparece[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        color: var(--blanco);\r\n        display: block;\r\n        margin-top: 10px;\r\n        text-decoration: none;\r\n    }\r\n\r\n    \r\n    .buscar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        height: 70vh;\r\n    }\r\n\r\n\r\n\r\n    .cuerpoTre[_ngcontent-%COMP%]   .busqueda[_ngcontent-%COMP%]{\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n    .cuerpoTre[_ngcontent-%COMP%]   .busqueda[_ngcontent-%COMP%]   .distinte1[_ngcontent-%COMP%]{\r\n        grid-column: 1 / 4;\r\n        text-align: center;\r\n    }\r\n    .resour[_ngcontent-%COMP%]   .resourDon[_ngcontent-%COMP%]{\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQjtBQUN0QjtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBS0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUEsY0FBYzs7SUFFZDtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7UUFDZCxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVix5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFVBQVU7UUFDViw2QkFBNkI7UUFDN0IsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLFVBQVU7SUFDZDtJQUNBO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxHQUFHLDBCQUEwQixDQUFDO1FBQzlCLEtBQUssZ0NBQWdDLENBQUM7SUFDMUM7SUFDQTtRQUNJLEdBQUcsNEJBQTRCLENBQUM7UUFDaEMsS0FBSywwQkFBMEIsQ0FBQztJQUNwQztJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIscUJBQXFCO0lBQ3pCOztJQUVBLGdCQUFnQjtJQUNoQjtRQUNJLFlBQVk7SUFDaEI7Ozs7SUFJQTtRQUNJLGtDQUFrQztJQUN0QztJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksOEJBQThCO0lBQ2xDOztBQUVKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypCYXJyYSBkZSBuYXZlZ2FjaW9uKi9cclxuLm5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF6dWwpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4ubmF2IC5sb2dve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhbmNvKTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4IDBweCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uYXYgLmxvZ28gaW1ne1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5uYXYgLmxpbmtze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luOiBhdXRvIDVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xyXG59XHJcbi5uYXYgLmxpbmtzIGF7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhbmNvKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMHB4IDVweDtcclxufVxyXG4uaWNvbnN7XHJcbiAgICBtYXJnaW46IGF1dG8gMjBweCBhdXRvIDBweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbn1cclxuLmljb25zIGF7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFuY28pO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5pY29ucyBpbWd7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG4jaGFtYnVyZ3VlciBkaXZ7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhbmNvKTtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG4uaGFtYnVyZ3VlcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuI2NvbnRlbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDkyMHB4KXtcclxuICAgIGJvZHl7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFBSSU5DSVBBTCAqL1xyXG5cclxuICAgIC5uYXYgLmxpbmtze1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaGFtYnVyZ3VlcntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIDEwcHg7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC43cyBlYXNlO1xyXG4gICAgfVxyXG4gICAgLmFwYXJlY2V7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1henVsKTtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjUgZWFzZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGFuaW1hdGlvbjogbWVudSAxcztcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG4gICAgLmRlc2FwYXtcclxuICAgICAgICBhbmltYXRpb246IGRlc21lbnUgMXM7XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGRlc21lbnUge1xyXG4gICAgICAgIDAle3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO31cclxuICAgICAgICAxMDAle3RyYW5zZm9ybTogdHJhbnNsYXRlWCgxNS42MjVyZW0pO31cclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgbWVudSB7XHJcbiAgICAgICAgMCV7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTt9XHJcbiAgICAgICAgMTAwJXt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTt9XHJcbiAgICB9XHJcbiAgICAuYXBhcmVjZSBhe1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFuY28pO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIGN1YXJ0YSBjYWphICovXHJcbiAgICAuYnVzY2FyIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAuY3VlcnBvVHJlIC5idXNxdWVkYXtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgfVxyXG4gICAgLmN1ZXJwb1RyZSAuYnVzcXVlZGEgLmRpc3RpbnRlMXtcclxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnJlc291ciAucmVzb3VyRG9ue1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIH1cclxuICAgIFxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "TEzu":
/*!********************************************!*\
  !*** ./src/app/services/photos.service.ts ***!
  \********************************************/
/*! exports provided: PhotosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosService", function() { return PhotosService; });
/* harmony import */ var _models_photos_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/photos.model */ "w5aK");
/* harmony import */ var _models_apiurl___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/apiurl  */ "kkh4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PhotosService {
    constructor(http) {
        this.http = http;
        this.oRes = '';
        this.formData = new _models_photos_model__WEBPACK_IMPORTED_MODULE_0__["Photo"];
        this.direccion = _models_apiurl___WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].apiurl;
        this.rootURL = this.direccion;
    }
    GetFotos() {
        return this.http.get(this.rootURL + '/Fotos/GetFotos');
    }
    GetFotosNR() {
        return this.http.get(this.rootURL + '/Fotos/GetFotosNR');
    }
    GetFoto(id) {
        return this.http.get(this.rootURL + '/Fotos/GetFoto/' + id);
    }
    DeleteFoto(id) {
        return this.http.delete(this.rootURL + '/Fotos/DeleteFoto/' + id);
    }
    PostFotos(formData) {
        return this.http.post(this.rootURL + '/Fotos/PostFotos', formData);
    }
    clearFormData() {
        this.formData = {
            url: "",
            hide: 1,
            titulo: ""
        };
    }
}
PhotosService.ɵfac = function PhotosService_Factory(t) { return new (t || PhotosService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PhotosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PhotosService, factory: PhotosService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Tj/N":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "UGg/":
/*!*********************************************************************!*\
  !*** ./src/app/components/dashboard-reg/dashboard-reg.component.ts ***!
  \*********************************************************************/
/*! exports provided: DashboardRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRegComponent", function() { return DashboardRegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer-main/footer-main.component */ "7UVc");




class DashboardRegComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardRegComponent.ɵfac = function DashboardRegComponent_Factory(t) { return new (t || DashboardRegComponent)(); };
DashboardRegComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardRegComponent, selectors: [["app-dashboard-reg"]], decls: 71, vars: 0, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], [1, "nav-link", "active"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab", 1, "tabpanel"]], template: function DashboardRegComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " br ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Welcome to your administration panel!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Here you can edit your website.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " * Here you can edit the information that appears in the main tab \"home\". Text \"WHO WE ARE\" and personal information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " * Here you can view, add, edit and delete users and their permissions on the page. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " * A simple logged-in user does not have access to this panel, but to the information that is hidden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " * An administrator can access all the functions of this panel. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " * Remember that an Administrator user can delete other Administrator users. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " * Here you can view, add and delete categories that will be displayed when adding reports. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " * You can create a special category to incorporate hidden reports for all users where you can add reports only visible to registered and logged in users. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " * The reports you add in the \"LITERACY\" category will be displayed in that tab. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " * The reports you add in the \"POLICY ANALISYS\" category will be displayed in that tab. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " * If you add hidden reports for all users, only registered users who are logged in will see it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " * The reports that you add with the active option \"appear in home\" will be shown in the following 3 reports of \"latest report\", if it is not active, they will be shown in \"latest report\" but when adding another report, it will no longer appear in the tab home. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " * After adding a report with its main image (the one that is shown on the cover and in searches), you can enter to edit the report to add a secondary image that is displayed when viewing the report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Data Visuals ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " In the Visual Data options, you will be able to view, add and delete images that will be displayed in that tab. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Exit the administration panel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "app-footer-main");
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_1__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_3__["FooterMainComponent"]], styles: [".sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n    border: .2px solid var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\r\n.tabpanel[_ngcontent-%COMP%]{\r\n    margin-right: 5rem;\r\n    margin-bottom: -2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1yZWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6ImRhc2hib2FyZC1yZWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFye1xyXG4gICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMnJlbSAwcHg7XHJcbn1cclxuLnNpZGViYXIgLm5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF6dWwpO1xyXG59XHJcbi5zaWRlYmFyIC5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXZpb2xldGEpO1xyXG4gICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLXZpb2xldGEpO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYgYXtcclxuICAgIGNvbG9yOnZhcigtLWJsYW5jbyk7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tYXp1bCk7XHJcbn1cclxuLnNpZGViYXIgLm5hdiBhOmhvdmVye1xyXG4gICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLWJsYW5jbyk7XHJcbn1cclxuLnRhYnBhbmVse1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTJyZW07XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "XJ+S":
/*!********************************************!*\
  !*** ./src/app/services/mailer.service.ts ***!
  \********************************************/
/*! exports provided: MailerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailerService", function() { return MailerService; });
/* harmony import */ var _models_apiurl___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/apiurl  */ "kkh4");
/* harmony import */ var _models_consulta_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/consulta.model */ "cGwf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class MailerService {
    constructor(http) {
        this.http = http;
        this.direccion = _models_apiurl___WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].apiurl;
        this.rootURL = this.direccion;
        this.formData = new _models_consulta_model__WEBPACK_IMPORTED_MODULE_1__["Consulta"];
    }
    clearFormData() {
        this.formData = {
            nombre: "",
            correo: "",
            consulta: "",
        };
    }
    EnviarContacto(formData) {
        return this.http.post(this.rootURL + '/Mailer/EnviarContacto', formData);
    }
}
MailerService.ɵfac = function MailerService_Factory(t) { return new (t || MailerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
MailerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MailerService, factory: MailerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "YuC9":
/*!*******************************************************!*\
  !*** ./src/app/components/policy/policy.component.ts ***!
  \*******************************************************/
/*! exports provided: PolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyComponent", function() { return PolicyComponent; });
/* harmony import */ var _models_apiurl___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../models/apiurl  */ "kkh4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/news.service */ "Ado8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");








function PolicyComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PolicyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar-reg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PolicyComponent_li_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "read more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noti_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", noti_r3.foto_portada, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](noti_r3.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](noti_r3.subtitulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", noti_r3.descripcion);
} }
function PolicyComponent_li_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "read more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noti_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](noti_r3.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](noti_r3.subtitulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", noti_r3.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", noti_r3.foto_portada, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function PolicyComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PolicyComponent_li_13_div_1_Template, 10, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PolicyComponent_li_13_div_2_Template, 10, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noti_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.todaslasnews.indexOf(noti_r3) % 2 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.todaslasnews.indexOf(noti_r3) % 2 != 0);
} }
class PolicyComponent {
    constructor(service, router, _route) {
        this.service = service;
        this.router = router;
        this._route = _route;
        this.apiurl = _models_apiurl___WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].parafoto;
        this.urlarmada = "";
        this.ids = "/rep/";
        this.resultadotemporal = [];
        this.status = '';
        this.estado = false;
    }
    ngOnInit() {
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        if (this.estado == true) {
            this.service.GetNoticiaPolicyR().subscribe((noticia) => {
                this.news = noticia;
                for (let i = 0; i < this.news.length; i++) {
                    this.news[i].date = this.news[i].date.split("T");
                    if (this.news[i].foto_portada != "") {
                        this.news[i].foto_portada = this.apiurl + "/images/News/" + this.news[i].id_noticia + "/portada.png";
                    }
                    else {
                        this.news[i].foto_portada = "../../../assets/LOGO.png";
                    }
                    // guardo link
                    this.urlarmada = "";
                    this.urlarmada = this.ids + this.news[i].id_noticia;
                    this.news[i].descripcion = this.urlarmada;
                    this.resultadotemporal.push(this.news[i]);
                }
                this.todaslasnews = this.resultadotemporal;
            });
        }
        else {
            this.service.GetNoticiaPolicy().subscribe((noticia) => {
                this.news = noticia;
                for (let i = 0; i < this.news.length; i++) {
                    this.news[i].date = this.news[i].date.split("T");
                    if (this.news[i].foto_portada != "") {
                        this.news[i].foto_portada = this.apiurl + "/images/News/" + this.news[i].id_noticia + "/portada.png";
                    }
                    else {
                        this.news[i].foto_portada = "../../../assets/LOGO.png";
                    }
                    // guardo link
                    this.urlarmada = "";
                    this.urlarmada = this.ids + this.news[i].id_noticia;
                    this.news[i].descripcion = this.urlarmada;
                    this.resultadotemporal.push(this.news[i]);
                }
                this.todaslasnews = this.resultadotemporal;
            });
        }
    }
}
PolicyComponent.ɵfac = function PolicyComponent_Factory(t) { return new (t || PolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
PolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PolicyComponent, selectors: [["app-policy"]], decls: 16, vars: 3, consts: [[4, "ngIf"], [1, "cuadro"], [1, "mitad1"], [1, "mitad2"], ["src", "../../../assets/ICON POLICY.png", "alt", ""], [1, "cuadro1"], [1, "part4"], [1, "part2"], [1, "contInfo"], [4, "ngFor", "ngForOf"], ["class", "InfoLi1", 4, "ngIf"], ["class", "InfoLi2", 4, "ngIf"], [1, "InfoLi1"], [1, "Info1"], ["alt", "", 3, "src"], [1, "Info2"], [3, "routerLink"], [1, "InfoLi2"], [1, "Info4"], [1, "Info3"]], template: function PolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PolicyComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PolicyComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Policys Analicys ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, PolicyComponent_li_13_Template, 3, 2, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.estado == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.estado == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.todaslasnews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_7__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".cuadro[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    height: 80vh;\r\n}\r\n.cuadro[_ngcontent-%COMP%]   .mitad1[_ngcontent-%COMP%], .cuadro[_ngcontent-%COMP%]   .mitad2[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    display: flex;\r\n}\r\n.cuadro[_ngcontent-%COMP%]   .mitad1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .cuadro[_ngcontent-%COMP%]   .mitad2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n    margin: auto;    \r\n}\r\n.cuadro[_ngcontent-%COMP%]   .mitad1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n    font-size: 2.5rem;\r\n    color: var(--azul);\r\n}\r\n.cuadro[_ngcontent-%COMP%]   .mitad2[_ngcontent-%COMP%]{\r\n    background: linear-gradient(to bottom, var(--blanco)50%, var(--azul)50%);\r\n}\r\n.cuadro1[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n.cuadro1[_ngcontent-%COMP%]   .part1[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n    align-items: center;\r\n    padding: 10px 30px;\r\n    color: var(--blanco);\r\n    display: flex;\r\n}\r\n.contInfo[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    list-style: none;\r\n}\r\n.contInfo[_ngcontent-%COMP%]   .InfoLi1[_ngcontent-%COMP%], .contInfo[_ngcontent-%COMP%]   .InfoLi2[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 4fr 5fr;\r\n    margin-bottom: 2em;\r\n}\r\n.Info1[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: right;\r\n    height: 20rem;\r\n}\r\n.Info1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    margin-top: -1em;\r\n    margin-right: -4em;\r\n    object-fit: cover;\r\n}\r\n.Info2[_ngcontent-%COMP%]{\r\n    background-color: var(--violeta);\r\n    color: var(--blanco);\r\n    width: 100%;\r\n    padding: 1.5em 3em;\r\n    margin-bottom: 2em;\r\n    display: grid;\r\n    grid-template-rows: 3fr 5fr 2fr;\r\n    box-sizing: border-box;\r\n    height: 16rem;\r\n}\r\n.Info2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .Info4[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    color: var(--blanco);\r\n    background-color: var(--azul);\r\n    border: .5px solid var(--blanco);\r\n    min-width: 30%;\r\n    max-width: 50%;\r\n    padding: .3em .5em;\r\n    text-transform: uppercase;\r\n}\r\n.Info2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .Info4[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    filter: brightness(1.5);\r\n}\r\n.Info2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .Info4[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{\r\n    background: var(--blanco);\r\n    color: var(--azul);\r\n}\r\n.Info2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    padding-bottom: .5em;\r\n}\r\n.contInfo[_ngcontent-%COMP%]   .InfoLi2[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 55% 45%;\r\n    margin-bottom: 4rem;\r\n}\r\n.Info4[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n    color: var(--blanco);\r\n    width: 100%;\r\n    padding: 1.5em 3em;\r\n    margin-bottom: 2em;\r\n    display: grid;\r\n    z-index: 1;\r\n    height: 16rem;\r\n    grid-template-rows: 3fr 5fr 2fr;\r\n    box-sizing: border-box;\r\n}\r\n.Info4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .Info2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n}\r\n.Info4[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .Info2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    text-transform: uppercase;\r\n    font-size: 1.2rem;\r\n}\r\n.Info3[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    text-align: left;\r\n    height: 50vh;\r\n}\r\n.Info3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    margin-top: -1em;\r\n    margin-left: -4em;\r\n    object-fit: cover;\r\n}\r\n@media(max-width: 920px){\r\n    body[_ngcontent-%COMP%]{\r\n        font-size: 16px;\r\n    }\r\n    .Info4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .Info2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: .8rem;\r\n    }\r\n    .Info3[_ngcontent-%COMP%], .Info1[_ngcontent-%COMP%]{\r\n        height: 18rem;\r\n    }\r\n    .Info1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        margin-top: -1em;\r\n        margin-right: -1em;\r\n        object-fit: cover;\r\n    }\r\n    .Info3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        margin-top: -1em;\r\n        margin-left: -1em;\r\n        object-fit: cover;\r\n    }\r\n\r\n}\r\n@media(max-width: 700px){\r\n\r\n   \r\n\r\n\r\n \r\n    .cuadro[_ngcontent-%COMP%]{\r\n        height: 60vh;\r\n    }\r\n    .cuadro[_ngcontent-%COMP%]   .mitad2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .cuadro1[_ngcontent-%COMP%]   .part2[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .cuadro[_ngcontent-%COMP%]   .mitad2[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .mitad1[_ngcontent-%COMP%], .part1[_ngcontent-%COMP%], .part3[_ngcontent-%COMP%], .part4[_ngcontent-%COMP%]{\r\n        grid-column: 1 / 3;\r\n    }\r\n    .cuadro1[_ngcontent-%COMP%]   .part3[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .part1[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    \r\n\r\n    \r\n    .contInfo[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n        justify-content: center;\r\n    }\r\n    .contInfo[_ngcontent-%COMP%]   .InfoLi1[_ngcontent-%COMP%], .contInfo[_ngcontent-%COMP%]   .InfoLi2[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        margin-top: 1em;\r\n        grid-template-columns: 1fr;\r\n    }\r\n    .Info1[_ngcontent-%COMP%], .Info3[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .Info2[_ngcontent-%COMP%], .Info4[_ngcontent-%COMP%]{\r\n       grid-template-rows: 2fr 5fr 1fr; \r\n    }\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGljeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTs7SUFFSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHdFQUF3RTtBQUM1RTtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0Isb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVO0lBQ1YsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7O0lBRUkseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsaUJBQWlCO0lBQ3JCOztBQUVKO0FBRUE7Ozs7O0FBS0EsZUFBZTtJQUNYO1FBQ0ksWUFBWTtJQUNoQjtJQUNBOztRQUVJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtJQUN0Qjs7O0lBR0EsWUFBWTtJQUNaO1FBQ0ksV0FBVztRQUNYLHNCQUFzQjtRQUN0Qix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLFVBQVU7UUFDVixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZiwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtPQUNHLCtCQUErQjtJQUNsQzs7O0FBR0oiLCJmaWxlIjoicG9saWN5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VhZHJve1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGhlaWdodDogODB2aDtcclxufVxyXG4uY3VhZHJvIC5taXRhZDEsXHJcbi5jdWFkcm8gLm1pdGFkMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmN1YWRybyAubWl0YWQxIGgxLFxyXG4uY3VhZHJvIC5taXRhZDIgaW1ne1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbjogYXV0bzsgICAgXHJcbn1cclxuLmN1YWRybyAubWl0YWQxIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWF6dWwpO1xyXG59XHJcbi5jdWFkcm8gLm1pdGFkMntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWJsYW5jbyk1MCUsIHZhcigtLWF6dWwpNTAlKTtcclxufVxyXG4uY3VhZHJvMXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbn1cclxuLmN1YWRybzEgLnBhcnQxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXp1bCk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWJsYW5jbyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jb250SW5mb3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uY29udEluZm8gLkluZm9MaTEsIC5jb250SW5mbyAuSW5mb0xpMntcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciA1ZnI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XHJcbn1cclxuLkluZm8xe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGhlaWdodDogMjByZW07XHJcbn1cclxuLkluZm8xIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTFlbTtcclxuICAgIG1hcmdpbi1yaWdodDogLTRlbTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5JbmZvMntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZpb2xldGEpO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYW5jbyk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEuNWVtIDNlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciA1ZnIgMmZyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogMTZyZW07XHJcbn1cclxuLkluZm8yIGJ1dHRvbiwgLkluZm80IGJ1dHRvbntcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFuY28pO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXp1bCk7XHJcbiAgICBib3JkZXI6IC41cHggc29saWQgdmFyKC0tYmxhbmNvKTtcclxuICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAuM2VtIC41ZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5JbmZvMiBidXR0b246aG92ZXIsIC5JbmZvNCBidXR0b246aG92ZXJ7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS41KTtcclxufVxyXG4uSW5mbzIgYnV0dG9uOmFjdGl2ZSwgLkluZm80IGJ1dHRvbjphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFuY28pO1xyXG4gICAgY29sb3I6IHZhcigtLWF6dWwpO1xyXG59XHJcbi5JbmZvMiBoMXtcclxuICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xyXG59XHJcbi5jb250SW5mbyAuSW5mb0xpMntcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDU1JSA0NSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG59XHJcbi5JbmZvNHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF6dWwpO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYW5jbyk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEuNWVtIDNlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgaGVpZ2h0OiAxNnJlbTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDVmciAyZnI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5JbmZvNCBwLCAuSW5mbzIgcHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uSW5mbzQgaDMsXHJcbi5JbmZvMiBoM3tcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG4uSW5mbzN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBoZWlnaHQ6IDUwdmg7XHJcbn1cclxuLkluZm8zIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTFlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNGVtO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDkyMHB4KXtcclxuICAgIGJvZHl7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLkluZm80IHAsIC5JbmZvMiBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICB9XHJcbiAgICAuSW5mbzMsIC5JbmZvMXtcclxuICAgICAgICBoZWlnaHQ6IDE4cmVtO1xyXG4gICAgfVxyXG4gICAgLkluZm8xIGltZ3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMWVtO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTFlbTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICAgIC5JbmZvMyBpbWd7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTFlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTFlbTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDcwMHB4KXtcclxuXHJcbiAgIFxyXG5cclxuXHJcbi8qREFUQSBWSVNVQUxTKi8gXHJcbiAgICAuY3VhZHJve1xyXG4gICAgICAgIGhlaWdodDogNjB2aDtcclxuICAgIH1cclxuICAgIC5jdWFkcm8gLm1pdGFkMiBpbWcsXHJcbiAgICAuY3VhZHJvMSAucGFydDJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jdWFkcm8gLm1pdGFkMntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1pdGFkMSwgLnBhcnQxLCAucGFydDMsIC5wYXJ0NHtcclxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIDM7XHJcbiAgICB9XHJcbiAgICAuY3VhZHJvMSAucGFydDMgaDEsIC5wYXJ0MSBoMXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICAvKiBQT0xJQ1lTICovXHJcbiAgICAuY29udEluZm97XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jb250SW5mbyAuSW5mb0xpMSwgLmNvbnRJbmZvIC5JbmZvTGkye1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuICAgIC5JbmZvMSwgLkluZm8ze1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuSW5mbzIsIC5JbmZvNHtcclxuICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDVmciAxZnI7IFxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "Z86e":
/*!***********************************************!*\
  !*** ./src/app/services/principal.service.ts ***!
  \***********************************************/
/*! exports provided: PrincipalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalService", function() { return PrincipalService; });
/* harmony import */ var _models_principal_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/principal.model */ "NA5x");
/* harmony import */ var _models_apiurl___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../models/apiurl  */ "kkh4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PrincipalService {
    constructor(http) {
        this.http = http;
        this.oRes = '';
        this.formData = new _models_principal_model__WEBPACK_IMPORTED_MODULE_0__["Principal"];
        this.direccion = _models_apiurl___WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].apiurl;
        this.rootURL = this.direccion;
    }
    Getmain() {
        return this.http.get(this.rootURL + '/mains/Getmainppal');
    }
    Postmain(formData) {
        return this.http.post(this.rootURL + '/mains/Postmain', formData);
    }
    clearFormData() {
        this.formData = {
            urlwwa: "",
            textwwa: "",
            urlautor: "",
            textautor: "",
        };
    }
}
PrincipalService.ɵfac = function PrincipalService_Factory(t) { return new (t || PrincipalService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PrincipalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PrincipalService, factory: PrincipalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var _components_dashboard_reg_dashboard_reg_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dashboard-reg/dashboard-reg.component */ "UGg/");
/* harmony import */ var _components_policy_policy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/policy/policy.component */ "YuC9");
/* harmony import */ var _components_literacy_literacy_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/literacy/literacy.component */ "4gn7");
/* harmony import */ var _components_datav_datav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/datav/datav.component */ "dKcb");
/* harmony import */ var _components_download_download_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/download/download.component */ "HdsJ");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/contact/contact.component */ "G2Gn");
/* harmony import */ var _components_whoweare_whoweare_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/whoweare/whoweare.component */ "wi7t");
/* harmony import */ var _components_latest_latest_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/latest/latest.component */ "xsLU");
/* harmony import */ var _components_autor_autor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/autor/autor.component */ "/0gr");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/search/search.component */ "RZmA");
/* harmony import */ var _components_pagecontact_pagecontact_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pagecontact/pagecontact.component */ "blmr");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/footer-main/footer-main.component */ "7UVc");
/* harmony import */ var _components_main_reg_main_reg_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/main-reg/main-reg.component */ "vO7G");
/* harmony import */ var _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/registro/registro.component */ "fkcT");
/* harmony import */ var _components_reporte_reporte_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/reporte/reporte.component */ "BcWh");
/* harmony import */ var _components_users_login_users_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/users-login/users-login.component */ "B0s6");
/* harmony import */ var _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/users-list/users-list.component */ "q/hO");
/* harmony import */ var _components_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/users-edit/users-edit.component */ "IwHr");
/* harmony import */ var _components_users_add_users_add_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/users-add/users-add.component */ "6Egh");
/* harmony import */ var _components_users_del_users_del_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/users-del/users-del.component */ "gCF0");
/* harmony import */ var _components_users_logout_users_logout_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/users-logout/users-logout.component */ "fWVM");
/* harmony import */ var _components_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/news-list/news-list.component */ "iZMX");
/* harmony import */ var _components_news_add_news_add_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/news-add/news-add.component */ "0wRy");
/* harmony import */ var _components_news_edit_news_edit_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/news-edit/news-edit.component */ "PQYE");
/* harmony import */ var _components_news_del_news_del_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/news-del/news-del.component */ "BrlW");
/* harmony import */ var _components_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/categories-list/categories-list.component */ "hXPJ");
/* harmony import */ var _components_categories_add_categories_add_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/categories-add/categories-add.component */ "PZYN");
/* harmony import */ var _components_categories_edit_categories_edit_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/categories-edit/categories-edit.component */ "/6cC");
/* harmony import */ var _components_categories_del_categories_del_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/categories-del/categories-del.component */ "g56J");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./services/categories.service */ "ycII");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./services/news.service */ "Ado8");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./services/users.service */ "6Qg2");
/* harmony import */ var _services_cargarjv_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./services/cargarjv.service */ "0ZmO");
/* harmony import */ var _components_principal_edit_edit_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/principal/edit/edit.component */ "pbaP");
/* harmony import */ var _components_datavisual_fotoslist_fotoslist_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/datavisual/fotoslist/fotoslist.component */ "3lyV");
/* harmony import */ var _components_datavisual_videoslist_videoslist_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/datavisual/videoslist/videoslist.component */ "5Yxx");
/* harmony import */ var _components_datavisual_videosadd_videosadd_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/datavisual/videosadd/videosadd.component */ "ugcN");
/* harmony import */ var _components_datavisual_videosedit_videosedit_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/datavisual/videosedit/videosedit.component */ "+rEv");
/* harmony import */ var _components_datavisual_videosdel_videosdel_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/datavisual/videosdel/videosdel.component */ "cJkG");
/* harmony import */ var _components_datavisual_fotosadd_fotosadd_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/datavisual/fotosadd/fotosadd.component */ "75LM");
/* harmony import */ var _components_datavisual_fotosdel_fotosdel_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/datavisual/fotosdel/fotosdel.component */ "yXMt");
/* harmony import */ var _components_datavisual_fotosedit_fotosedit_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./components/datavisual/fotosedit/fotosedit.component */ "ploi");
/* harmony import */ var _components_reportphoto_reportphoto_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/reportphoto/reportphoto.component */ "Nnvk");
/* harmony import */ var _components_newsaddphoto_newsaddphoto_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/newsaddphoto/newsaddphoto.component */ "ArRF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/router */ "tyNb");







// COMPONENTES




















// usuarios






// news




// categories




//Photos
// SERVICIOS



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_55__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_55__["ɵɵdefineInjector"]({ providers: [
        _services_categories_service__WEBPACK_IMPORTED_MODULE_40__["CategoriesService"], _services_news_service__WEBPACK_IMPORTED_MODULE_41__["NewsService"], _services_users_service__WEBPACK_IMPORTED_MODULE_42__["UsersService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _services_cargarjv_service__WEBPACK_IMPORTED_MODULE_43__["CargarjvService"],
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__["HashLocationStrategy"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_55__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
        _components_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_8__["NavbarRegComponent"],
        _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_27__["UsersListComponent"],
        _components_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_32__["NewsListComponent"],
        _components_news_add_news_add_component__WEBPACK_IMPORTED_MODULE_33__["NewsAddComponent"],
        _components_news_edit_news_edit_component__WEBPACK_IMPORTED_MODULE_34__["NewsEditComponent"],
        _components_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_28__["UsersEditComponent"],
        _components_users_add_users_add_component__WEBPACK_IMPORTED_MODULE_29__["UsersAddComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
        _components_users_del_users_del_component__WEBPACK_IMPORTED_MODULE_30__["UsersDelComponent"],
        _components_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_36__["CategoriesListComponent"],
        _components_categories_add_categories_add_component__WEBPACK_IMPORTED_MODULE_37__["CategoriesAddComponent"],
        _components_categories_edit_categories_edit_component__WEBPACK_IMPORTED_MODULE_38__["CategoriesEditComponent"],
        _components_categories_del_categories_del_component__WEBPACK_IMPORTED_MODULE_39__["CategoriesDelComponent"],
        _components_news_del_news_del_component__WEBPACK_IMPORTED_MODULE_35__["NewsDelComponent"],
        _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        _components_dashboard_reg_dashboard_reg_component__WEBPACK_IMPORTED_MODULE_10__["DashboardRegComponent"],
        _components_policy_policy_component__WEBPACK_IMPORTED_MODULE_11__["PolicyComponent"],
        _components_literacy_literacy_component__WEBPACK_IMPORTED_MODULE_12__["LiteracyComponent"],
        _components_datav_datav_component__WEBPACK_IMPORTED_MODULE_13__["DatavComponent"],
        _components_download_download_component__WEBPACK_IMPORTED_MODULE_14__["DownloadComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
        _components_users_login_users_login_component__WEBPACK_IMPORTED_MODULE_26__["UsersLoginComponent"],
        _components_users_logout_users_logout_component__WEBPACK_IMPORTED_MODULE_31__["UsersLogoutComponent"],
        _components_whoweare_whoweare_component__WEBPACK_IMPORTED_MODULE_16__["WhoweareComponent"],
        _components_latest_latest_component__WEBPACK_IMPORTED_MODULE_17__["LatestComponent"],
        _components_autor_autor_component__WEBPACK_IMPORTED_MODULE_18__["AutorComponent"],
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_19__["SearchComponent"],
        _components_pagecontact_pagecontact_component__WEBPACK_IMPORTED_MODULE_20__["PagecontactComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
        _components_footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_22__["FooterMainComponent"],
        _components_main_reg_main_reg_component__WEBPACK_IMPORTED_MODULE_23__["MainRegComponent"],
        _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_24__["RegistroComponent"],
        _components_reporte_reporte_component__WEBPACK_IMPORTED_MODULE_25__["ReporteComponent"],
        _components_principal_edit_edit_component__WEBPACK_IMPORTED_MODULE_44__["EditComponent"],
        _components_datavisual_fotoslist_fotoslist_component__WEBPACK_IMPORTED_MODULE_45__["FotoslistComponent"],
        _components_datavisual_videoslist_videoslist_component__WEBPACK_IMPORTED_MODULE_46__["VideoslistComponent"],
        _components_datavisual_videosadd_videosadd_component__WEBPACK_IMPORTED_MODULE_47__["VideosaddComponent"],
        _components_datavisual_videosedit_videosedit_component__WEBPACK_IMPORTED_MODULE_48__["VideoseditComponent"],
        _components_datavisual_videosdel_videosdel_component__WEBPACK_IMPORTED_MODULE_49__["VideosdelComponent"],
        _components_datavisual_fotosadd_fotosadd_component__WEBPACK_IMPORTED_MODULE_50__["FotosaddComponent"],
        _components_datavisual_fotosdel_fotosdel_component__WEBPACK_IMPORTED_MODULE_51__["FotosdelComponent"],
        _components_datavisual_fotosedit_fotosedit_component__WEBPACK_IMPORTED_MODULE_52__["FotoseditComponent"],
        _components_reportphoto_reportphoto_component__WEBPACK_IMPORTED_MODULE_53__["ReportphotoComponent"],
        _components_newsaddphoto_newsaddphoto_component__WEBPACK_IMPORTED_MODULE_54__["NewsaddphotoComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_55__["ɵɵsetComponentScope"](_components_datav_datav_component__WEBPACK_IMPORTED_MODULE_13__["DatavComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
    _components_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_8__["NavbarRegComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_56__["RouterLinkWithHref"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"]], []);
_angular_core__WEBPACK_IMPORTED_MODULE_55__["ɵɵsetComponentScope"](_components_datavisual_fotosadd_fotosadd_component__WEBPACK_IMPORTED_MODULE_50__["FotosaddComponent"], [_components_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_8__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_56__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _components_footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_22__["FooterMainComponent"]], []);


/***/ }),

/***/ "blmr":
/*!*****************************************************************!*\
  !*** ./src/app/components/pagecontact/pagecontact.component.ts ***!
  \*****************************************************************/
/*! exports provided: PagecontactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagecontactComponent", function() { return PagecontactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contact/contact.component */ "G2Gn");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "LmEr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");






function PagecontactComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PagecontactComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar-reg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PagecontactComponent {
    constructor() {
        this.status = '';
        this.estado = false;
    }
    ngOnInit() {
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
    }
}
PagecontactComponent.ɵfac = function PagecontactComponent_Factory(t) { return new (t || PagecontactComponent)(); };
PagecontactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagecontactComponent, selectors: [["app-pagecontact"]], decls: 7, vars: 2, consts: [[4, "ngIf"]], template: function PagecontactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PagecontactComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PagecontactComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estado == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estado == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_5__["NavbarRegComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "cGwf":
/*!******************************************!*\
  !*** ./src/app/models/consulta.model.ts ***!
  \******************************************/
/*! exports provided: Consulta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consulta", function() { return Consulta; });
class Consulta {
}


/***/ }),

/***/ "cJkG":
/*!************************************************************************!*\
  !*** ./src/app/components/datavisual/videosdel/videosdel.component.ts ***!
  \************************************************************************/
/*! exports provided: VideosdelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosdelComponent", function() { return VideosdelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../footer-main/footer-main.component */ "7UVc");




class VideosdelComponent {
    constructor() { }
    ngOnInit() {
    }
}
VideosdelComponent.ɵfac = function VideosdelComponent_Factory(t) { return new (t || VideosdelComponent)(); };
VideosdelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideosdelComponent, selectors: [["app-videosdel"]], decls: 31, vars: 0, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], [1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link"], ["routerLink", "/vidlist", 1, "nav-link", "active"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], [1, "btn", "btn-outline-danger"]], template: function VideosdelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Data Visuals Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-footer-main");
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_1__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_3__["FooterMainComponent"]], styles: [".sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n    border: .2px solid var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvc2RlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoidmlkZW9zZGVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhcntcclxuICAgIG1hcmdpbjogMHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDJyZW0gMHB4O1xyXG59XHJcbi5zaWRlYmFyIC5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1henVsKTtcclxufVxyXG4uc2lkZWJhciAuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS12aW9sZXRhKTtcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS12aW9sZXRhKTtcclxufVxyXG4uc2lkZWJhciAubmF2IGF7XHJcbiAgICBjb2xvcjp2YXIoLS1ibGFuY28pO1xyXG4gICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLWF6dWwpO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYgYTpob3ZlcntcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS1ibGFuY28pO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "dKcb":
/*!*****************************************************!*\
  !*** ./src/app/components/datav/datav.component.ts ***!
  \*****************************************************/
/*! exports provided: DatavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatavComponent", function() { return DatavComponent; });
/* harmony import */ var src_app_models_apiurl___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/apiurl  */ "kkh4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_photos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/photos.service */ "TEzu");
/* harmony import */ var _services_videos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/videos.service */ "/pQw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_cargarjv_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cargarjv.service */ "0ZmO");






function DatavComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DatavComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar-reg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DatavComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "figcaption");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const foto_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", foto_r3.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", foto_r3.direccion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", foto_r3.titulo, "");
} }
class DatavComponent {
    constructor(service, _service, router, _route, cargaJS) {
        this.service = service;
        this._service = _service;
        this.router = router;
        this._route = _route;
        this.cargaJS = cargaJS;
        this.ids = "/repp/";
        this.urlarmada = "";
        this.apiurl = src_app_models_apiurl___WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].parafoto;
        this.resultadotemporal = [];
        this.status = '';
        this.estado = false;
        cargaJS.CargaScript(['carru.js']);
    }
    ngOnInit() {
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        if (this.estado) {
            // this._service.list().subscribe(
            //   (res:any) =>{
            //     this.videos=res;
            //   }
            //   )
            this.service.GetFotos().subscribe((id) => {
                this.Fotos = id;
                for (let i = 0; i < this.Fotos.length; i++) {
                    this.Fotos[i].url = this.apiurl + "/images/Photos/" + this.Fotos[i].id_foto + ".png";
                    this.Fotos[i].direccion = this.ids + this.Fotos[i].id_foto;
                }
            });
        }
        else {
            // this._service.listNR().subscribe(
            //   (res:any) =>{
            //     this.videos=res;
            //   })
            this.service.GetFotosNR().subscribe((id) => {
                this.Fotos = id;
                for (let i = 0; i < this.Fotos.length; i++) {
                    this.Fotos[i].url = this.apiurl + "/images/Photos/" + this.Fotos[i].id_foto + ".png";
                    this.Fotos[i].direccion = this.ids + this.Fotos[i].id_foto;
                }
            });
        }
    }
}
DatavComponent.ɵfac = function DatavComponent_Factory(t) { return new (t || DatavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_photos_service__WEBPACK_IMPORTED_MODULE_2__["PhotosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_videos_service__WEBPACK_IMPORTED_MODULE_3__["VideosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cargarjv_service__WEBPACK_IMPORTED_MODULE_5__["CargarjvService"])); };
DatavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DatavComponent, selectors: [["app-datav"]], decls: 26, vars: 3, consts: [[4, "ngIf"], [1, "cuadro"], [1, "mitad1"], [1, "mitad2"], ["src", "../../../assets/DATAVISUAL.png", "alt", ""], [1, "cuadro1"], [1, "part1"], [1, "part2"], [1, "carusel"], [1, "carousel__contenedor"], ["aria-label", "Previous slide", 1, "carousel__anterior"], [1, "material-icons"], [1, "carousel__lista"], [4, "ngFor", "ngForOf"], ["aria-label", "Next slide", 1, "carousel__siguiente"], [1, "carousel__element"], ["alt", "", 3, "src"], [3, "routerLink"]], template: function DatavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DatavComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DatavComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Data Visuals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " arrow_back_ios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, DatavComponent_div_20_Template, 7, 3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " arrow_forward_ios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.estado == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.estado == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.Fotos);
    } }, styles: [".cuers[_ngcontent-%COMP%]{\r\n\tz-index: 2;\r\n}\r\n.carusel[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n    margin: 0px auto;\r\n\tpadding: 2rem 0px;\r\n}\r\n.vide[_ngcontent-%COMP%]{\r\n\tbackground: var(--violeta);\r\n}\r\n.carousel__contenedor[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\twidth: 90%;\r\n\tmargin: 0px auto;\r\n}\r\n.carousel__anterior[_ngcontent-%COMP%], .carousel__siguiente[_ngcontent-%COMP%], .carousel__siguientev[_ngcontent-%COMP%], .carousel__anteriorv[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tdisplay: block;\r\n\tborder: none;\r\n\ttop: calc(50% - 35px);\r\n\tcursor: pointer;\r\n\tline-height: 30px;\r\n\ttext-align: center;\r\n\tbackground: transparent;\r\n\tcolor: rgba(0, 0, 0, 0.247);\r\n    font-size: 4rem;\r\n}\r\n.carousel__siguientev[_ngcontent-%COMP%], .carousel__anteriorv[_ngcontent-%COMP%]{\r\n\tcolor: rgba(255, 249, 249, 0.596);\r\n}\r\n.carousel__anterior[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .carousel__siguiente[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .carousel__siguientev[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .carousel__anteriorv[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n\tfont-size: 5rem;\r\n}\r\n.carousel__anterior[_ngcontent-%COMP%]:hover, .carousel__siguiente[_ngcontent-%COMP%]:hover, .carousel__anteriorv[_ngcontent-%COMP%]:hover, .carousel__siguientev[_ngcontent-%COMP%]:hover {\r\n\topacity: 100%;\r\n}\r\n.carousel__anterior[_ngcontent-%COMP%], .carousel__anteriorv[_ngcontent-%COMP%] {\r\n\tleft: -5px;\r\n\tz-index: 2;\r\n}\r\n.carousel__siguiente[_ngcontent-%COMP%], .carousel__siguientev[_ngcontent-%COMP%] {\r\n\tright: -5px;\r\n}\r\n.carousel__lista[_ngcontent-%COMP%], .carousel__listav[_ngcontent-%COMP%] {\r\n\toverflow: hidden;\r\n}\r\n.carousel__element[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n    margin: 0px 1rem;\r\n\theight: 30vh;\r\n}\r\n.carousel__element[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .carousel__element[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\theight: 80%;\r\n\tobject-fit: contain;\r\n}\r\n.carousel__element[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{\r\n\theight: 20%;\r\n\toverflow: hidden;\r\n}\r\n.carousel__element[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\ttext-decoration: none;\r\n\tcolor: var(--azul);\r\n\tfont-weight: 100px;\r\n}\r\n.vide[_ngcontent-%COMP%]   .carousel__element[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\tcolor: var(--blanco);\r\n\tdisplay: -webkit-box;\r\n    -webkit-box-orient: vertical;\r\n    overflow: hidden;\r\n    -webkit-line-clamp: 1;\r\n}\r\n@media screen and (max-width: 800px) {\r\n\tbody[_ngcontent-%COMP%] {\r\n\t\tpadding: 40px 0;\r\n\t}\r\n\r\n\t.contenido-principal[_ngcontent-%COMP%] {\r\n\t\tflex-direction: column;\r\n\t}\r\n\r\n\t.contenido-principal[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n\t\twidth: 100%;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxVQUFVO0FBQ1g7QUFDQTtDQUNDLFdBQVc7SUFDUixnQkFBZ0I7Q0FDbkIsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQywwQkFBMEI7QUFDM0I7QUFDQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsZ0JBQWdCO0FBQ2pCO0FBRUE7Ozs7Q0FJQyxrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLFlBQVk7Q0FDWixxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsdUJBQXVCO0NBQ3ZCLDJCQUEyQjtJQUN4QixlQUFlO0FBQ25CO0FBQ0E7O0NBRUMsaUNBQWlDO0FBQ2xDO0FBQ0E7Ozs7Q0FJQyxlQUFlO0FBQ2hCO0FBRUE7Ozs7Q0FJQyxhQUFhO0FBQ2Q7QUFFQTtDQUNDLFVBQVU7Q0FDVixVQUFVO0FBQ1g7QUFFQTtDQUNDLFdBQVc7QUFDWjtBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxrQkFBa0I7SUFDZixnQkFBZ0I7Q0FDbkIsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxvQkFBb0I7Q0FDcEIsb0JBQW9CO0lBQ2pCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCO0FBR0E7Q0FDQztFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxzQkFBc0I7Q0FDdkI7O0NBRUE7RUFDQyxXQUFXO0NBQ1o7QUFDRCIsImZpbGUiOiJkYXRhdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1ZXJze1xyXG5cdHotaW5kZXg6IDI7XHJcbn1cclxuLmNhcnVzZWx7XHJcblx0d2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG5cdHBhZGRpbmc6IDJyZW0gMHB4O1xyXG59XHJcbi52aWRle1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXZpb2xldGEpO1xyXG59XHJcbi5jYXJvdXNlbF9fY29udGVuZWRvciB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHdpZHRoOiA5MCU7XHJcblx0bWFyZ2luOiAwcHggYXV0bztcclxufVxyXG5cclxuLmNhcm91c2VsX19hbnRlcmlvcixcclxuLmNhcm91c2VsX19zaWd1aWVudGUsXHJcbi5jYXJvdXNlbF9fc2lndWllbnRldixcclxuLmNhcm91c2VsX19hbnRlcmlvcnYge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0dG9wOiBjYWxjKDUwJSAtIDM1cHgpO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRsaW5lLWhlaWdodDogMzBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0Y29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNDcpO1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG59XHJcbi5jYXJvdXNlbF9fc2lndWllbnRldixcclxuLmNhcm91c2VsX19hbnRlcmlvcnZ7XHJcblx0Y29sb3I6IHJnYmEoMjU1LCAyNDksIDI0OSwgMC41OTYpO1xyXG59XHJcbi5jYXJvdXNlbF9fYW50ZXJpb3Igc3BhbixcclxuLmNhcm91c2VsX19zaWd1aWVudGUgc3BhbixcclxuLmNhcm91c2VsX19zaWd1aWVudGV2IHNwYW4sXHJcbi5jYXJvdXNlbF9fYW50ZXJpb3J2ICBzcGFue1xyXG5cdGZvbnQtc2l6ZTogNXJlbTtcclxufVxyXG5cclxuLmNhcm91c2VsX19hbnRlcmlvcjpob3ZlcixcclxuLmNhcm91c2VsX19zaWd1aWVudGU6aG92ZXIsXHJcbi5jYXJvdXNlbF9fYW50ZXJpb3J2OmhvdmVyLFxyXG4uY2Fyb3VzZWxfX3NpZ3VpZW50ZXY6aG92ZXIge1xyXG5cdG9wYWNpdHk6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbF9fYW50ZXJpb3IsLmNhcm91c2VsX19hbnRlcmlvcnYge1xyXG5cdGxlZnQ6IC01cHg7XHJcblx0ei1pbmRleDogMjtcclxufVxyXG5cclxuLmNhcm91c2VsX19zaWd1aWVudGUsLmNhcm91c2VsX19zaWd1aWVudGV2IHtcclxuXHRyaWdodDogLTVweDtcclxufVxyXG5cclxuLmNhcm91c2VsX19saXN0YSwuY2Fyb3VzZWxfX2xpc3RhdiB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNhcm91c2VsX19lbGVtZW50IHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweCAxcmVtO1xyXG5cdGhlaWdodDogMzB2aDtcclxufVxyXG4uY2Fyb3VzZWxfX2VsZW1lbnQgaW1nLFxyXG4uY2Fyb3VzZWxfX2VsZW1lbnQgdmlkZW97XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiA4MCU7XHJcblx0b2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG4uY2Fyb3VzZWxfX2VsZW1lbnQgZmlnY2FwdGlvbntcclxuXHRoZWlnaHQ6IDIwJTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jYXJvdXNlbF9fZWxlbWVudCBhe1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjb2xvcjogdmFyKC0tYXp1bCk7XHJcblx0Zm9udC13ZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi52aWRlIC5jYXJvdXNlbF9fZWxlbWVudCBhe1xyXG5cdGNvbG9yOiB2YXIoLS1ibGFuY28pO1xyXG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG5cdGJvZHkge1xyXG5cdFx0cGFkZGluZzogNDBweCAwO1xyXG5cdH1cclxuXHJcblx0LmNvbnRlbmlkby1wcmluY2lwYWwge1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR9XHJcblxyXG5cdC5jb250ZW5pZG8tcHJpbmNpcGFsID4gKiB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcbn0gIFxyXG4iXX0= */"] });


/***/ }),

/***/ "eUNE":
/*!***************************************************************!*\
  !*** ./src/app/components/navbar-reg/navbar-reg.component.ts ***!
  \***************************************************************/
/*! exports provided: NavbarRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarRegComponent", function() { return NavbarRegComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cargarjv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/cargarjv.service */ "0ZmO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function NavbarRegComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.Username, ": Logout");
} }
const _c0 = function (a0) { return { "active": a0 }; };
function NavbarRegComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarRegComponent_div_17_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.recargar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r1.panel));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.Username);
} }
class NavbarRegComponent {
    // cities:any;
    constructor(router, cargaJS, _route) {
        this.router = router;
        this.cargaJS = cargaJS;
        this._route = _route;
        // @ViewChild('datosDesdeElPadre', { static: false }) 
        // datosDesdeElPadre: DatavComponent;
        this.actual = "";
        this.homer = false;
        this.policy = false;
        this.literacy = false;
        this.dvisuals = false;
        this.download = false;
        this.contact = false;
        this.panel = false;
        this.Username = '';
        this.imgperfil = './../../../assets/img/profile.png';
        this.status = '';
        this.estado = false;
        this.rol = '';
        this.recargardv = false;
        cargaJS.CargaScript(['hamburguesa.js']);
    }
    ngOnInit() {
        // this.ruta=this._route;
        // if(this.ruta.component.name!="DownloadComponent"){;}
        this.Username = localStorage.getItem('nickname');
        this.imgperfil = localStorage.getItem('imgperfil');
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                this.router.navigated = false;
                window.scrollTo(0, 0);
            }
        });
        this.actual = this.router.url;
        switch (this.actual) {
            case "/mainr":
                this.homer = true;
                break;
            case "/policy":
                this.policy = true;
                break;
            case "/literacy":
                this.literacy = true;
                break;
            case "/dvisuals":
                this.dvisuals = true;
                break;
            case "/download":
                this.download = true;
                break;
            case "/contact":
                this.contact = true;
                break;
            case "/panela":
                this.panel = true;
                break;
            case "/ppal":
                this.panel = true;
                break;
            case "/categoryadd":
                this.panel = true;
                break;
            case "/vategorieslist":
                this.panel = true;
                break;
            case "/newslist":
                this.panel = true;
                break;
            case "/usersadd":
                this.panel = true;
                break;
            case "/userslist":
                this.panel = true;
                break;
            case "/newsadd":
                this.panel = true;
                break;
            case "/pholist":
                this.panel = true;
                break;
            case "/phoadd":
                this.panel = true;
                break;
            case "/vidlist":
                this.panel = true;
                break;
            case "/vidadd":
                this.panel = true;
                break;
        }
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        else {
            this.router.navigate(['/main']);
        }
        this.rol = localStorage.getItem('rol');
        this.Username = this.Username.toUpperCase();
    }
    recargar() { setTimeout(function () { window.location.reload(); }, 0.1); }
    ;
}
NavbarRegComponent.ɵfac = function NavbarRegComponent_Factory(t) { return new (t || NavbarRegComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cargarjv_service__WEBPACK_IMPORTED_MODULE_2__["CargarjvService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"])); };
NavbarRegComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarRegComponent, selectors: [["app-navbar-reg"]], decls: 28, vars: 20, consts: [[1, "nav"], [1, "logo"], ["src", "../../../assets/LOGO.png", "alt", "logo"], ["id", "links", 1, "links"], ["routerLink", "/main", "routerLinkActive", "'active'", 3, "ngClass", "click"], ["routerLink", "/policy", "routerLinkActive", "'active'", 3, "ngClass", "click"], ["routerLink", "/literacy", "routerLinkActive", "'active'", 3, "ngClass", "click"], ["routerLink", "/dvisuals", "routerLinkActive", "'active'", 3, "ngClass", "click"], ["routerLink", "/download", "routerLinkActive", "'active'", 3, "ngClass", "click"], ["routerLink", "/contact", "routerLinkActive", "'active'", 3, "ngClass", "click"], ["class", "linklogin", 4, "ngIf"], [1, "icons"], ["href", "https://twitter.com/DavidWakelyn?s=08", "target", "_blank"], ["src", "../../../assets/TWITTER.png", "alt", ""], ["href", "https://www.linkedin.com/in/david-scarlett-wakelyn-9227275/", "target", "_blank"], ["src", "../../../assets/LINKEDIN.png", "alt", ""], ["id", "hamburguer", 1, "hamburguer"], ["id", "line1"], ["id", "line2"], ["id", "line3"], ["id", "conten"], [1, "linklogin"], ["routerLink", "/logout", "routerLinkActive", "'active'", 1, "login"], ["routerLink", "/panela", "routerLinkActive", "'active'", 1, "login", 3, "ngClass", "click"]], template: function NavbarRegComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarRegComponent_Template_a_click_4_listener() { return ctx.recargar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarRegComponent_Template_a_click_6_listener() { return ctx.recargar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "policy analyses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarRegComponent_Template_a_click_8_listener() { return ctx.recargar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "literacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarRegComponent_Template_a_click_10_listener() { return ctx.recargar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "data visuals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarRegComponent_Template_a_click_12_listener() { return ctx.recargar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarRegComponent_Template_a_click_14_listener() { return ctx.recargar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NavbarRegComponent_div_16_Template, 3, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NavbarRegComponent_div_17_Template, 3, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "div", 20);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.homer));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.policy));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx.literacy));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c0, ctx.dvisuals));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c0, ctx.download));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c0, ctx.contact));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rol == "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rol == "0");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n}\r\nhtml[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\nbody[_ngcontent-%COMP%]{\r\n    background: var(--blanco);\r\n}\r\n\r\n.nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n    display: grid;\r\n    grid-template-columns: 20% 60% 8% 12%;\r\n    justify-content: space-between;\r\n}\r\n.nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n    background-color: var(--blanco);\r\n    margin: 0px 10px 0px 20px;\r\n    text-align: center;\r\n}\r\n.nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    height: 90%;\r\n    margin: auto;\r\n}\r\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    width: 80%;\r\n    margin: auto ;\r\n    text-transform: uppercase;\r\n    justify-content: space-around;\r\n    display: flex;\r\n  \r\n}\r\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: var(--blanco);\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none;\r\n    padding: 0px 5px;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n    margin: 0px auto;\r\n    height: -webkit-min-content;\r\n    height: min-content;\r\n    font-size: .8rem;\r\n    font-weight: 50px;\r\n    border: .2px solid var(--azul);\r\n}\r\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{\r\n    background-color: var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\r\n.active[_ngcontent-%COMP%]{\r\n    background-color: var(--violeta);\r\n}\r\n.nav[_ngcontent-%COMP%]   .linklogin[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    \r\n}\r\n.nav[_ngcontent-%COMP%]   .linklogin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: var(--blanco);\r\n    text-decoration: none;\r\n    border: .2px solid var(--azul);\r\n}\r\n.nav[_ngcontent-%COMP%]   .linklogin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{\r\n    background-color: var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n.nav[_ngcontent-%COMP%]   .linklogin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\r\n.icons[_ngcontent-%COMP%]{\r\n    margin: auto 20px auto 0px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n.icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    margin: 5px;\r\n    color: var(--blanco);\r\n    text-decoration: none;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n.icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 2.5rem;\r\n    height: 2.5rem;\r\n}\r\n#hamburguer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    width: 30px;\r\n    height: 3px;\r\n    background-color: var(--blanco);\r\n    margin: 5px;\r\n    transition: all 0.3s ease;\r\n}\r\n.line1[_ngcontent-%COMP%]{\r\n    transform: rotate(0deg) translateY(0px);\r\n    transform: rotate(45deg) translateY(6px);\r\n    transition: all 1s ease-in-out;\r\n}\r\n.line2[_ngcontent-%COMP%]{\r\n    display: none;\r\n    transition: all 1s ease-in-out;\r\n}\r\n.line3[_ngcontent-%COMP%]{\r\n    transform: rotate(0deg) translateY(0px);\r\n    transform: rotate(-45deg) translateY(-5px);\r\n    transition: all 1s ease-in-out;\r\n}\r\n.hamburguer[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n#conten[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n@media(max-width: 920px){\r\n                html[_ngcontent-%COMP%]{\r\n                    font-size: 16px;\r\n                }\r\n            \r\n            \r\n                \r\n\r\n                .nav[_ngcontent-%COMP%]{\r\n                    background-color: var(--azul);\r\n                    display: grid;\r\n                    grid-template-columns: 2fr 1fr 2fr 1fr;\r\n                }\r\n                .nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{\r\n                    display: none;\r\n                }\r\n                .nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n                    width: 100%;\r\n                    height: 100%;\r\n                }\r\n                .nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n                    padding: 5px;\r\n                    margin: 0px;\r\n                    height: 100%;\r\n                    width: 100%;\r\n                    box-sizing: border-box;\r\n                }\r\n                .nav[_ngcontent-%COMP%]   .linklogin[_ngcontent-%COMP%]{\r\n                    margin: auto 5px;\r\n                }\r\n                .hamburguer[_ngcontent-%COMP%]{\r\n                    display: block;\r\n                    cursor: pointer;\r\n                    margin: auto;\r\n                    z-index: 2;\r\n                    transition: all 0.7s ease;\r\n                    box-sizing: border-box;\r\n                }\r\n                .aparece[_ngcontent-%COMP%]{\r\n                    display: block;\r\n                    position: absolute;\r\n                    right: 0px;\r\n                    z-index: 5;\r\n                    background-color: var(--azul);\r\n                    padding: 20px 5px;\r\n                    transition: all .5 ease;\r\n                    text-transform: uppercase;\r\n                    animation: menu 1s;\r\n                    width: 30%;\r\n                }\r\n                .desapa[_ngcontent-%COMP%]{\r\n                    animation: desmenu 1s;\r\n                }\r\n                @keyframes desmenu {\r\n                    0%{transform: translateX(0px);}\r\n                    100%{transform: translateX(15.625rem);}\r\n                }\r\n                @keyframes menu {\r\n                    0%{transform: translateX(200px);}\r\n                    100%{transform: translateX(0px);}\r\n                }\r\n                .aparece[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n                    color: var(--blanco);\r\n                    display: block;\r\n                    margin-top: 10px;\r\n                    text-decoration: none;\r\n                }\r\n                #conten[_ngcontent-%COMP%]{\r\n                    z-index: 11;\r\n                }\r\n            }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci1yZWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsYUFBYTs7QUFFakI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQiwwQkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwyQkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksWUFBWTs7QUFFaEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHdDQUF3QztJQUN4Qyw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLHVDQUF1QztJQUN2QywwQ0FBMEM7SUFDMUMsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBSVk7Z0JBQ0k7b0JBQ0ksZUFBZTtnQkFDbkI7OztnQkFHQSxjQUFjOztnQkFFZDtvQkFDSSw2QkFBNkI7b0JBQzdCLGFBQWE7b0JBQ2Isc0NBQXNDO2dCQUMxQztnQkFDQTtvQkFDSSxhQUFhO2dCQUNqQjtnQkFDQTtvQkFDSSxXQUFXO29CQUNYLFlBQVk7Z0JBQ2hCO2dCQUNBO29CQUNJLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsc0JBQXNCO2dCQUMxQjtnQkFDQTtvQkFDSSxnQkFBZ0I7Z0JBQ3BCO2dCQUNBO29CQUNJLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixZQUFZO29CQUNaLFVBQVU7b0JBQ1YseUJBQXlCO29CQUN6QixzQkFBc0I7Z0JBQzFCO2dCQUNBO29CQUNJLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixVQUFVO29CQUNWLFVBQVU7b0JBQ1YsNkJBQTZCO29CQUM3QixpQkFBaUI7b0JBQ2pCLHVCQUF1QjtvQkFDdkIseUJBQXlCO29CQUN6QixrQkFBa0I7b0JBQ2xCLFVBQVU7Z0JBQ2Q7Z0JBQ0E7b0JBQ0kscUJBQXFCO2dCQUN6QjtnQkFDQTtvQkFDSSxHQUFHLDBCQUEwQixDQUFDO29CQUM5QixLQUFLLGdDQUFnQyxDQUFDO2dCQUMxQztnQkFDQTtvQkFDSSxHQUFHLDRCQUE0QixDQUFDO29CQUNoQyxLQUFLLDBCQUEwQixDQUFDO2dCQUNwQztnQkFDQTtvQkFDSSxvQkFBb0I7b0JBQ3BCLGNBQWM7b0JBQ2QsZ0JBQWdCO29CQUNoQixxQkFBcUI7Z0JBQ3pCO2dCQUNBO29CQUNJLFdBQVc7Z0JBQ2Y7WUFDSiIsImZpbGUiOiJuYXZiYXItcmVnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmh0bWx7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsYW5jbyk7XHJcbn1cclxuXHJcbi8qQmFycmEgZGUgbmF2ZWdhY2lvbiovXHJcbi5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1henVsKTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA2MCUgOCUgMTIlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5uYXYgLmxvZ297XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFuY28pO1xyXG4gICAgbWFyZ2luOiAwcHggMTBweCAwcHggMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubmF2IC5sb2dvIGltZ3tcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4ubmF2IC5saW5rc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0byA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIFxyXG59XHJcbi5uYXYgLmxpbmtzIGF7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhbmNvKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4IDVweDtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG4gICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLWF6dWwpO1xyXG59XHJcblxyXG4ubmF2IC5saW5rcyBhOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZpb2xldGEpO1xyXG4gICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLXZpb2xldGEpO1xyXG59XHJcbi5uYXYgLmxpbmtzIGE6aG92ZXJ7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tYmxhbmNvKTtcclxufVxyXG4uYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmlvbGV0YSk7XHJcbn1cclxuLm5hdiAubGlua2xvZ2lue1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgXHJcbn1cclxuLm5hdiAubGlua2xvZ2luIGF7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhbmNvKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS1henVsKTtcclxufVxyXG4ubmF2IC5saW5rbG9naW4gYTphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12aW9sZXRhKTtcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS12aW9sZXRhKTtcclxufVxyXG4ubmF2IC5saW5rbG9naW4gYTpob3ZlcntcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS1ibGFuY28pO1xyXG59XHJcbi5pY29uc3tcclxuICAgIG1hcmdpbjogYXV0byAyMHB4IGF1dG8gMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxufVxyXG4uaWNvbnMgYXtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWJsYW5jbyk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uaWNvbnMgaW1ne1xyXG4gICAgd2lkdGg6IDIuNXJlbTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG59XHJcbiNoYW1idXJndWVyIGRpdntcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFuY28pO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4ubGluZTF7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWSg2cHgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5saW5lMntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmxpbmUze1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5oYW1idXJndWVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jY29udGVue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA5MjBweCl7XHJcbiAgICAgICAgICAgICAgICBodG1se1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLyogUFJJTkNJUEFMICovXHJcblxyXG4gICAgICAgICAgICAgICAgLm5hdntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1henVsKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAyZnIgMWZyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdiAubGlua3N7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXYgLmxvZ28gaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXYgLmxvZ297XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdiAubGlua2xvZ2lue1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaGFtYnVyZ3VlcntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFwYXJlY2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1henVsKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjUgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbWVudSAxcztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRlc2FwYXtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGRlc21lbnUgMXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGRlc21lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgIDAle3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO31cclxuICAgICAgICAgICAgICAgICAgICAxMDAle3RyYW5zZm9ybTogdHJhbnNsYXRlWCgxNS42MjVyZW0pO31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgbWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCV7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTt9XHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJXt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYXBhcmVjZSBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFuY28pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2NvbnRlbntcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSJdfQ== */"] });


/***/ }),

/***/ "fWVM":
/*!*******************************************************************!*\
  !*** ./src/app/components/users-logout/users-logout.component.ts ***!
  \*******************************************************************/
/*! exports provided: UsersLogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersLogoutComponent", function() { return UsersLogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/users.service */ "6Qg2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer-main/footer-main.component */ "7UVc");





class UsersLogoutComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.token = '';
    }
    ngOnInit() {
        this.token = localStorage.getItem('token');
    }
    desloguearse() { this.chaUser(this.token); }
    chaUser(token) {
        this.service.chau(token).subscribe((res) => {
            if (res.resultado == 0) {
                localStorage.clear();
                localStorage.setItem('resultado', res.resultado);
                this.router.navigate(['/principal']);
            }
        });
    }
}
UsersLogoutComponent.ɵfac = function UsersLogoutComponent_Factory(t) { return new (t || UsersLogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UsersLogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersLogoutComponent, selectors: [["app-users-logout"]], decls: 29, vars: 0, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], [1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link"], ["routerLink", "/logout", 1, "nav-link", "active"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], [1, "btn", 3, "click"]], template: function UsersLogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersLogoutComponent_Template_button_click_26_listener() { return ctx.desloguearse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Logout and Go to the Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-footer-main");
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_3__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_4__["FooterMainComponent"]], styles: [".sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n}\r\n.btn[_ngcontent-%COMP%]{background-color: var(--violeta);\r\ncolor: var(--blanco);}\r\n.btn[_ngcontent-%COMP%]:hover{background-color: rgb(204, 41, 41);\r\n    color: var(--blanco);}\r\n.btn[_ngcontent-%COMP%]:active{\r\n        background-color:rgb(175, 0, 0);\r\n        color: var(--blanco);\r\n    }\r\n.sidebar[_ngcontent-%COMP%]{\r\n        margin: 0px 0px;\r\n        padding: 2rem 0px;\r\n    }\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n        background-color: var(--azul);\r\n    }\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n        background-color:var(--violeta);\r\n        border: .2px solid var(--violeta);\r\n    }\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        color:var(--blanco);\r\n        border: .2px solid var(--azul);\r\n    }\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n        border: .2px solid var(--blanco);\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLWxvZ291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBLEtBQUssZ0NBQWdDO0FBQ3JDLG9CQUFvQixDQUFDO0FBQ3JCLFdBQVcsa0NBQWtDO0lBQ3pDLG9CQUFvQixDQUFDO0FBQ3JCO1FBQ0ksK0JBQStCO1FBQy9CLG9CQUFvQjtJQUN4QjtBQUNBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtBQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDO0FBQ0E7UUFDSSwrQkFBK0I7UUFDL0IsaUNBQWlDO0lBQ3JDO0FBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsOEJBQThCO0lBQ2xDO0FBQ0E7UUFDSSxnQ0FBZ0M7SUFDcEMiLCJmaWxlIjoidXNlcnMtbG9nb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhcntcclxuICAgIG1hcmdpbjogMHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDJyZW0gMHB4O1xyXG59XHJcbi5zaWRlYmFyIC5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1henVsKTtcclxufVxyXG4uc2lkZWJhciAuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS12aW9sZXRhKTtcclxufVxyXG4uc2lkZWJhciAubmF2IGF7XHJcbiAgICBjb2xvcjp2YXIoLS1ibGFuY28pO1xyXG59XHJcbi5idG57YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmlvbGV0YSk7XHJcbmNvbG9yOiB2YXIoLS1ibGFuY28pO31cclxuLmJ0bjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA0LCA0MSwgNDEpO1xyXG4gICAgY29sb3I6IHZhcigtLWJsYW5jbyk7fVxyXG4gICAgLmJ0bjphY3RpdmV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTc1LCAwLCAwKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tYmxhbmNvKTtcclxuICAgIH1cclxuICAgIC5zaWRlYmFye1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAycmVtIDBweDtcclxuICAgIH1cclxuICAgIC5zaWRlYmFyIC5uYXZ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXp1bCk7XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhciAuYWN0aXZle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tdmlvbGV0YSk7XHJcbiAgICAgICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLXZpb2xldGEpO1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXIgLm5hdiBhe1xyXG4gICAgICAgIGNvbG9yOnZhcigtLWJsYW5jbyk7XHJcbiAgICAgICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLWF6dWwpO1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXIgLm5hdiBhOmhvdmVye1xyXG4gICAgICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS1ibGFuY28pO1xyXG4gICAgfVxyXG4gICAgIl19 */"] });


/***/ }),

/***/ "fkcT":
/*!***********************************************************!*\
  !*** ./src/app/components/registro/registro.component.ts ***!
  \***********************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "6Qg2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function RegistroComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is not available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " must not have uppercase. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is already registered. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " The ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " entered does not have a correct format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegistroComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required and must be at least 6 digits. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RegistroComponent {
    constructor(formBuilder, service, router) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.status = '';
        this.rol = '';
        this.estado = false;
        this.emailPattern = "^[a-zA-Z0-9!#$%&'*_+-]([\.]?[a-zA-Z0-9!#$%&'*_+-])+@[a-zA-Z0-9]([^@&%$\/()=?¿!.,:;]|\d)+[a-zA-Z0-9][\.][a-zA-Z]{2,4}([\.][a-zA-Z]{2,3})?$";
        this.passPattern = "^(?=/\w*/\d)(?=/\w*[A-Z])(?=/\w*[a-z])\S{6,16}$";
        this.erroru = false;
        this.errorc = false;
        this.userForm = this.formBuilder.group({
            nickname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[a-z0-9]{1,50}?$")]],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[a-zA-Z0-9@#$]{6,25}?$")]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.emailPattern)]],
            rol: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            descripcion: ['']
        });
    }
    ngOnInit() {
        this.userForm.reset();
        this.userForm.patchValue({ rol: '1' });
        this.errorc = false;
        this.erroru = false;
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
    }
    onSubmit() {
        this.errorc = false;
        this.service.clearFormData();
        this.service.formData = {
            nickname: this.userForm.value.nickname,
            nombre: this.userForm.value.nombre,
            apellido: this.userForm.value.apellido,
            password: this.userForm.value.password,
            email: this.userForm.value.email,
            user_foto: "img/profile.png",
            active: true,
            token: "",
            rol: this.userForm.value.rol,
            user_descripcion: this.userForm.value.descripcion,
        };
        this.insertRecord();
    }
    insertRecord() {
        this.service.postUser(this.service.formData).subscribe(res => {
            this.router.navigate(['/main']);
            this.userForm.reset();
        }, (err) => {
            var MensajeError = err.error.ModelState.toString();
            //console.log(err);
            console.log(MensajeError);
            if (MensajeError == "EL MAIL YA SE ENCUENTRA EN LA BASE DE DATOS") {
                this.errorc = true;
                this.userForm.reset();
            }
            else {
                if (MensajeError == "EL NICKNAME YA SE ENCUENTRA EN LA BASE DE DATOS") {
                    this.erroru = true;
                    this.userForm.reset();
                }
                else {
                    console.log('algo malio sal');
                    this.userForm.reset();
                }
            }
            this.router.navigate(['/newreg']);
        });
    }
}
RegistroComponent.ɵfac = function RegistroComponent_Factory(t) { return new (t || RegistroComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RegistroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegistroComponent, selectors: [["app-registro"]], decls: 52, vars: 11, consts: [[1, "divmenu", 2, "background-color", "#eaeaea"], [1, "col", "px-0", "flex-grow-1"], [1, "container"], ["id", "contenido", 1, "inner-content", 2, "background-color", "rgb(255, 255, 255)", "height", "1300px"], [1, "row"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "textbox", "name", "nickname", "formControlName", "nickname", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "textbox", "name", "nombre", "formControlName", "nombre", 1, "form-control"], ["type", "textbox", "name", "apellido", "formControlName", "apellido", 1, "form-control"], ["type", "textbox", "name", "email", "formControlName", "email", 1, "form-control"], ["type", "password", "name", "password", "formControlName", "password", "autocomplete", "off", 1, "form-control"], ["name", "descripcion", "formControlName", "descripcion", 1, "form-control"], ["type", "submit", 1, "btn", "float-right", "btn-outline-success", 2, "margin-left", "5px", 3, "disabled"], ["routerLink", "/admusers"], [1, "btn", "float-right", "btn-outline-danger"], [1, "alert", "alert-danger"]], template: function RegistroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegistroComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Nickname:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RegistroComponent_div_17_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, RegistroComponent_div_18_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RegistroComponent_div_19_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, RegistroComponent_div_24_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Last Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RegistroComponent_div_29_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, RegistroComponent_div_34_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, RegistroComponent_div_35_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, RegistroComponent_div_36_Template, 6, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, RegistroComponent_div_41_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0 = null;
        let tmp_3_0 = null;
        let tmp_4_0 = null;
        let tmp_5_0 = null;
        let tmp_6_0 = null;
        let tmp_8_0 = null;
        let tmp_9_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.userForm.get("nickname")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = ctx.userForm.get("nickname")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.userForm.get("nickname")) == null ? null : tmp_1_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.erroru);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.userForm.get("nickname")) == null ? null : tmp_3_0.hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.userForm.get("nombre")) == null ? null : tmp_4_0.invalid) && (((tmp_4_0 = ctx.userForm.get("nombre")) == null ? null : tmp_4_0.dirty) || ((tmp_4_0 = ctx.userForm.get("nombre")) == null ? null : tmp_4_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.userForm.get("apellido")) == null ? null : tmp_5_0.invalid) && (((tmp_5_0 = ctx.userForm.get("apellido")) == null ? null : tmp_5_0.dirty) || ((tmp_5_0 = ctx.userForm.get("apellido")) == null ? null : tmp_5_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.userForm.get("email")) == null ? null : tmp_6_0.invalid) && (((tmp_6_0 = ctx.userForm.get("email")) == null ? null : tmp_6_0.dirty) || ((tmp_6_0 = ctx.userForm.get("email")) == null ? null : tmp_6_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.userForm.get("email")) == null ? null : tmp_8_0.hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.userForm.get("password")) == null ? null : tmp_9_0.invalid) && (((tmp_9_0 = ctx.userForm.get("password")) == null ? null : tmp_9_0.dirty) || ((tmp_9_0 = ctx.userForm.get("password")) == null ? null : tmp_9_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Ryby5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "g56J":
/*!***********************************************************************!*\
  !*** ./src/app/components/categories-del/categories-del.component.ts ***!
  \***********************************************************************/
/*! exports provided: CategoriesDelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesDelComponent", function() { return CategoriesDelComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer-main/footer-main.component */ "7UVc");








function CategoriesDelComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoriesDelComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Something Wrong Happened. Try later ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CategoriesDelComponent {
    constructor(formBuilder, service, router, _route) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this._route = _route;
        this.status = '';
        this.estado = false;
        this.rol = '';
        this.errorc = false;
        this.cat_id = "";
        this.userForm = this.formBuilder.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            portada: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            hide: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    ngOnInit() {
        var _a, _b, _c;
        this.userForm.reset();
        this.userForm.patchValue({ portada: '1' });
        this.userForm.patchValue({ hide: '1' });
        this.errorc = false;
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        else {
            this.router.navigate(['/main']);
        }
        this.rol = localStorage.getItem('rol');
        if (parseInt(this.rol) == 1) {
            this.router.navigate(['/mainr']);
        }
        this.cat_id = this._route.snapshot.paramMap.get('cat_id');
        this.service.view(this.cat_id).subscribe((category) => {
            if (category.portada == '0') {
                this.userForm.patchValue({ portada: '0' });
            }
            else {
                this.userForm.patchValue({ portada: '1' });
            }
            if (category.hide == '0') {
                this.userForm.patchValue({ hide: '0' });
            }
            else {
                this.userForm.patchValue({ hide: '1' });
            }
            this.userForm.patchValue({ nombre: category.nombre });
        });
        (_a = this.userForm.get('nombre')) === null || _a === void 0 ? void 0 : _a.disable();
        (_b = this.userForm.get('portada')) === null || _b === void 0 ? void 0 : _b.disable();
        (_c = this.userForm.get('hide')) === null || _c === void 0 ? void 0 : _c.disable();
    }
    onSubmit() {
        this.errorc = false;
        // this.service.clearFormData();
        // this.service.formData = {
        //   nombre : this.userForm.value.nombre,
        //   portada : this.userForm.value.portada,
        //   hide : this.userForm.value.hide,
        // };
        this.insertRecord();
    }
    insertRecord() {
        this.service.delCategory(this.cat_id).subscribe(res => {
            //MOSTRAR UN MENSAJE QUE SE BORRO CORRECTAMENTE
            this.router.navigate(['/categorieslist']);
            this.userForm.reset();
        }, (err) => {
            console.log(err);
            var MensajeError = err.error.message;
            console.log(MensajeError);
            this.errorc = true;
            console.log('algo malio sal');
            this.userForm.reset();
        });
    }
}
CategoriesDelComponent.ɵfac = function CategoriesDelComponent_Factory(t) { return new (t || CategoriesDelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
CategoriesDelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoriesDelComponent, selectors: [["app-categories-del"]], decls: 45, vars: 4, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], [1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link", "active"], ["routerLink", "/newslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "textbox", "name", "nombre", "formControlName", "nombre", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "float-right", "btn-outline-danger", 2, "margin-left", "5px", 3, "disabled"], ["routerLink", "/categorieslist"], [1, "btn", "float-right", "btn-outline-success"], [1, "alert", "alert-danger"]], template: function CategoriesDelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Delete Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CategoriesDelComponent_Template_form_ngSubmit_31_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, CategoriesDelComponent_div_36_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, CategoriesDelComponent_div_38_Template, 4, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "app-footer-main");
    } if (rf & 2) {
        let tmp_1_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.userForm.get("nombre")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = ctx.userForm.get("nombre")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.userForm.get("nombre")) == null ? null : tmp_1_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_6__["FooterMainComponent"]], styles: [".sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n    border: .2px solid var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMtZGVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGdDQUFnQztBQUNwQyIsImZpbGUiOiJjYXRlZ29yaWVzLWRlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXJ7XHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAycmVtIDBweDtcclxufVxyXG4uc2lkZWJhciAubmF2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXp1bCk7XHJcbn1cclxuLnNpZGViYXIgLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tdmlvbGV0YSk7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tdmlvbGV0YSk7XHJcbn1cclxuLnNpZGViYXIgLm5hdiBhe1xyXG4gICAgY29sb3I6dmFyKC0tYmxhbmNvKTtcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS1henVsKTtcclxufVxyXG4uc2lkZWJhciAubmF2IGE6aG92ZXJ7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tYmxhbmNvKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "gCF0":
/*!*************************************************************!*\
  !*** ./src/app/components/users-del/users-del.component.ts ***!
  \*************************************************************/
/*! exports provided: UsersDelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersDelComponent", function() { return UsersDelComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/users.service */ "6Qg2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer-main/footer-main.component */ "7UVc");







class UsersDelComponent {
    constructor(formBuilder, service, router, _route) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this._route = _route;
        this.rol = '1';
        this.user_id = "";
        this.userForm = this.formBuilder.group({
            nickname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            apellido: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/")],
            rol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            descripcion: ['']
        });
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f;
        this.user_id = this._route.snapshot.paramMap.get('user_id');
        this.service.acceder(this.user_id).subscribe((usuario) => {
            if (usuario.rol == '0') {
                this.userForm.patchValue({ rol: '0' });
            }
            else {
                this.userForm.patchValue({ rol: '1' });
            }
            this.userForm.patchValue({
                nickname: usuario.nickname,
                nombre: usuario.nombre,
                apellido: usuario.apellido,
                descripcion: usuario.user_descripcion,
                email: usuario.email,
            });
        });
        (_a = this.userForm.get('nickname')) === null || _a === void 0 ? void 0 : _a.disable();
        (_b = this.userForm.get('nombre')) === null || _b === void 0 ? void 0 : _b.disable();
        (_c = this.userForm.get('apellido')) === null || _c === void 0 ? void 0 : _c.disable();
        (_d = this.userForm.get('email')) === null || _d === void 0 ? void 0 : _d.disable();
        (_e = this.userForm.get('rol')) === null || _e === void 0 ? void 0 : _e.disable();
        (_f = this.userForm.get('descripcion')) === null || _f === void 0 ? void 0 : _f.disable();
    }
    onSubmit() {
        this.service.DeleteUser(this.user_id).subscribe((res) => {
            //MOSTRAR UN MENSAJE QUE SE Borro CORRECTAMENTE
            this.router.navigate(['/userslist']);
            this.userForm.reset();
        }, (err) => {
            var MensajeError = err;
            console.log(MensajeError);
        });
    }
}
UsersDelComponent.ɵfac = function UsersDelComponent_Factory(t) { return new (t || UsersDelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
UsersDelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UsersDelComponent, selectors: [["app-users-del"]], decls: 71, vars: 2, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], [1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link", "active"], ["routerLink", "/categorieslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "textbox", "name", "nickname", "formControlName", "nickname", 1, "form-control"], ["type", "textbox", "name", "nombre", "formControlName", "nombre", 1, "form-control"], ["type", "textbox", "name", "apellido", "formControlName", "apellido", 1, "form-control"], ["type", "textbox", "name", "email", "formControlName", "email", 1, "form-control", 3, "disabled"], ["for", "latitude", 1, "col-md-3", "control-label"], [1, "col-md-9"], [1, "radio-inline"], ["type", "radio", "name", "rol", "value", "0", "id", "0", "formControlName", "rol"], ["type", "radio", "name", "rol", "value", "1", "id", "1", "formControlName", "rol"], ["name", "descripcion", "formControlName", "descripcion", 1, "form-control"], [1, "btn", "float-right", "btn-outline-danger", 2, "margin-left", "5px"], ["routerLink", "/userslist"], [1, "btn", "float-right", "btn-outline-primary"]], template: function UsersDelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Delete User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UsersDelComponent_Template_form_ngSubmit_31_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Nickname:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Last Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, " User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "textarea", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "app-footer-main");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_5__["FooterMainComponent"]], styles: [".sexagesimal[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n}\r\n.sexagesimal[_ngcontent-%COMP%], .sexagesimalsec[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 6px;\r\n    margin-left: 5px;\r\n}\r\n.box[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    min-width: 80%;\r\n    min-height: 350px;\r\n    margin: 10px;\r\n    padding: 15px;\r\n    border: 1px solid rgba(177, 177, 177, 0.933);\r\n    border-radius: 15px ;\r\n    text-align: justify;\r\n    margin-top: 80 px;\r\n    overflow:initial;\r\n    position:relative;\r\n  }\r\n.cp[_ngcontent-%COMP%]{\r\n      width: 30%;\r\n  }\r\n.container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-left:50px;\r\n    margin-top:40px;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n  }\r\n.sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n    border: .2px solid var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLWRlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtBQUNBO01BQ0ksVUFBVTtFQUNkO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjtBQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoidXNlcnMtZGVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V4YWdlc2ltYWwge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbn1cclxuLnNleGFnZXNpbWFsLCAuc2V4YWdlc2ltYWxzZWMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uYm94e1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiA4MCU7XHJcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE3NywgMTc3LCAxNzcsIDAuOTMzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIG1hcmdpbi10b3A6IDgwIHB4O1xyXG4gICAgb3ZlcmZsb3c6aW5pdGlhbDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIH1cclxuICAuY3B7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OjUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjQwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFye1xyXG4gICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMnJlbSAwcHg7XHJcbn1cclxuLnNpZGViYXIgLm5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF6dWwpO1xyXG59XHJcbi5zaWRlYmFyIC5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXZpb2xldGEpO1xyXG4gICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLXZpb2xldGEpO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYgYXtcclxuICAgIGNvbG9yOnZhcigtLWJsYW5jbyk7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tYXp1bCk7XHJcbn1cclxuLnNpZGViYXIgLm5hdiBhOmhvdmVye1xyXG4gICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLWJsYW5jbyk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "hXPJ":
/*!*************************************************************************!*\
  !*** ./src/app/components/categories-list/categories-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoriesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesListComponent", function() { return CategoriesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer-main/footer-main.component */ "7UVc");






function CategoriesListComponent_tr_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r1.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/categoryedit/", category_r1.id_categoria, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/categorydel/", category_r1.id_categoria, "");
} }
class CategoriesListComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
        this.service.list().subscribe((category) => {
            // this.categories=JSON.parse(category);
            this.categories = category;
            this.categories.reverse();
        }, (err) => { console.log(err); });
    }
}
CategoriesListComponent.ɵfac = function CategoriesListComponent_Factory(t) { return new (t || CategoriesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CategoriesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesListComponent, selectors: [["app-categories-list"]], decls: 44, vars: 1, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["routerLink", "/panela", 1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link", "active"], ["routerLink", "/newslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], ["routerLink", "/categoryadd"], [1, "btn", "btn-outline-primary"], [1, "fas", "fa-user-plus"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row", 4, "ngFor", "ngForOf"], ["scope", "row"], [1, "d-none", "d-md-table-cell"], [3, "routerLink"], [1, "material-icons"]], template: function CategoriesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Add Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Name Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CategoriesListComponent_tr_42_Template, 10, 3, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-footer-main");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_3__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_5__["FooterMainComponent"]], styles: [".table-responsive[_ngcontent-%COMP%]{\r\n    max-width: 98%;\r\n    margin: 1px;\r\n  }\r\n    th[_ngcontent-%COMP%]{\r\n      background: #20c3ec;\r\n    }\r\n    .m5[_ngcontent-%COMP%]{\r\n      margin-left: 5px;\r\n      float: right;\r\n    }\r\n    .sidebar[_ngcontent-%COMP%]{\r\n      margin: 0px 0px;\r\n      padding: 2rem 0px;\r\n  }\r\n    .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n      background-color: var(--azul);\r\n  }\r\n    .sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n      background-color:var(--violeta);\r\n      border: .2px solid var(--violeta);\r\n  }\r\n    .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n      color:var(--blanco);\r\n      border: .2px solid var(--azul);\r\n  }\r\n    .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n      border: .2px solid var(--blanco);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFdBQVc7RUFDYjtJQUNFO01BQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsWUFBWTtJQUNkO0lBQ0E7TUFDRSxlQUFlO01BQ2YsaUJBQWlCO0VBQ3JCO0lBQ0E7TUFDSSw2QkFBNkI7RUFDakM7SUFDQTtNQUNJLCtCQUErQjtNQUMvQixpQ0FBaUM7RUFDckM7SUFDQTtNQUNJLG1CQUFtQjtNQUNuQiw4QkFBOEI7RUFDbEM7SUFDQTtNQUNJLGdDQUFnQztFQUNwQyIsImZpbGUiOiJjYXRlZ29yaWVzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1yZXNwb25zaXZle1xyXG4gICAgbWF4LXdpZHRoOiA5OCU7XHJcbiAgICBtYXJnaW46IDFweDtcclxuICB9XHJcbiAgICB0aHtcclxuICAgICAgYmFja2dyb3VuZDogIzIwYzNlYztcclxuICAgIH1cclxuICAgIC5tNXtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnNpZGViYXJ7XHJcbiAgICAgIG1hcmdpbjogMHB4IDBweDtcclxuICAgICAgcGFkZGluZzogMnJlbSAwcHg7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5uYXZ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF6dWwpO1xyXG4gIH1cclxuICAuc2lkZWJhciAuYWN0aXZle1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXZpb2xldGEpO1xyXG4gICAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tdmlvbGV0YSk7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5uYXYgYXtcclxuICAgICAgY29sb3I6dmFyKC0tYmxhbmNvKTtcclxuICAgICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLWF6dWwpO1xyXG4gIH1cclxuICAuc2lkZWJhciAubmF2IGE6aG92ZXJ7XHJcbiAgICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS1ibGFuY28pO1xyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cargarjv_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cargarjv.service */ "0ZmO");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "active": a0 }; };
// import { CiudadesService } from 'src/app/services/ciudades.service';
class NavbarComponent {
    constructor(cargaJS, router, act) {
        this.cargaJS = cargaJS;
        this.router = router;
        this.act = act;
        this.actual = "";
        this.home = false;
        this.policy = false;
        this.literacy = false;
        this.dvisuals = false;
        this.download = false;
        this.contact = false;
        cargaJS.CargaScript(['hamburguesa.js']);
    }
    ngOnInit() {
        this.actual = this.router.url;
        switch (this.actual) {
            case "/main":
                this.home = true;
                break;
            case "/policy":
                this.policy = true;
                break;
            case "/literacy":
                this.literacy = true;
                break;
            case "/dvisuals":
                this.dvisuals = true;
                break;
            case "/download":
                this.download = true;
                break;
            case "/contact":
                this.contact = true;
                break;
        }
    }
    // ir(){this.router.navigateByUrl('/rec', { skipLocationChange: true });
    // this.router.navigate(["/literacy"]);}
    recargar() { setTimeout(function () { window.location.reload(); }, 0.1); }
    ;
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cargarjv_service__WEBPACK_IMPORTED_MODULE_1__["CargarjvService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 26, vars: 18, consts: [[1, "nav"], [1, "logo"], ["src", "../../../assets/LOGO.png", "alt", "logo"], ["id", "links", 1, "links"], ["routerLink", "/main", "routerLinkActive", "'active'", 3, "ngClass", "click"], ["routerLink", "/policy", "routerLinkActive", "'active'", 3, "ngClass", "click"], ["routerLink", "/literacy", "routerLinkActive", "'active'", 3, "ngClass", "click"], ["routerLink", "/dvisuals", "routerLinkActive", "'active'", 3, "ngClass", "click"], ["routerLink", "/download", "routerLinkActive", "'active'", 3, "ngClass", "click"], ["routerLink", "/contact", "routerLinkActive", "'active'", 3, "ngClass", "click"], [1, "icons"], ["href", "https://twitter.com/DavidWakelyn?s=08", "target", "_blank"], ["src", "../../../assets/TWITTER.png", "alt", ""], ["href", "https://www.linkedin.com/in/david-scarlett-wakelyn-9227275/", "target", "_blank"], ["src", "../../../assets/LINKEDIN.png", "alt", ""], ["id", "hamburguer", 1, "hamburguer"], ["id", "line1"], ["id", "line2"], ["id", "line3"], ["id", "conten"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_4_listener() { return ctx.recargar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_6_listener() { return ctx.recargar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "policy analyses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_8_listener() { return ctx.recargar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "literacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_10_listener() { return ctx.recargar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "data visuals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_12_listener() { return ctx.recargar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_14_listener() { return ctx.recargar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 19);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.home));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.policy));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.literacy));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.dvisuals));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.download));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.contact));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n}\r\nhtml[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\nbody[_ngcontent-%COMP%]{\r\n    background: var(--blanco);\r\n}\r\n\r\n.nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n    display: grid;\r\n    grid-template-columns: 20% 60% 20%;\r\n    justify-content: space-between;\r\n}\r\n.nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n    background-color: var(--blanco);\r\n    margin: 0px 10px 0px 20px;\r\n    text-align: center;\r\n}\r\n.nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    height: 90%;\r\n    margin: auto;\r\n}\r\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    width: 80%;\r\n    margin: auto;\r\n    text-transform: uppercase;\r\n    justify-content: space-around;\r\n    display: flex;\r\n}\r\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: var(--blanco);\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none;\r\n    padding: 0px 5px;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n    margin: 0px auto;\r\n    height: -webkit-min-content;\r\n    height: min-content;\r\n    font-size: .8rem;\r\n    font-weight: 50px;\r\n    border: .2px solid var(--azul);\r\n}\r\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{\r\n    background-color: var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\r\n.active[_ngcontent-%COMP%]{\r\n    background-color: var(--violeta);\r\n}\r\n.nav[_ngcontent-%COMP%]   .linklogin[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n}\r\n.nav[_ngcontent-%COMP%]   .linklogin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: var(--blanco);\r\n    text-decoration: none;\r\n}\r\n.icons[_ngcontent-%COMP%]{\r\n    margin: auto 20px auto 0px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n.icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    margin: 5px;\r\n    color: var(--blanco);\r\n    text-decoration: none;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n.icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 2.5rem;\r\n    height: 2.5rem;\r\n}\r\n#hamburguer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    width: 30px;\r\n    height: 3px;\r\n    background-color: var(--blanco);\r\n    margin: 5px;\r\n    transition: all 0.3s ease;\r\n}\r\n.line1[_ngcontent-%COMP%]{\r\n    transform: rotate(0deg) translateY(0px);\r\n    transform: rotate(45deg) translateY(6px);\r\n    transition: all 1s ease-in-out;\r\n}\r\n.line2[_ngcontent-%COMP%]{\r\n    display: none;\r\n    transition: all 1s ease-in-out;\r\n}\r\n.line3[_ngcontent-%COMP%]{\r\n    transform: rotate(0deg) translateY(0px);\r\n    transform: rotate(-45deg) translateY(-5px);\r\n    transition: all 1s ease-in-out;\r\n}\r\n.hamburguer[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n#conten[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n@media(max-width: 920px){\r\n                html[_ngcontent-%COMP%]{\r\n                    font-size: 16px;\r\n                }\r\n            \r\n            \r\n                \r\n\r\n                .nav[_ngcontent-%COMP%]{\r\n                    background-color: var(--azul);\r\n                    display: grid;\r\n                    grid-template-columns: 2fr 2fr 1fr;\r\n                    width: 100%;\r\n                    box-sizing: border-box;\r\n                }\r\n                .nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{\r\n                    display: none;\r\n                }\r\n                .nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n                    width: 100%;\r\n                    height: 100%;\r\n                }\r\n                .nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n                    padding: 5px;\r\n                    margin: 0px;\r\n                    height: 100%;\r\n                    width: 100%;\r\n                    box-sizing: border-box;\r\n                }\r\n                .nav[_ngcontent-%COMP%]   .linklogin[_ngcontent-%COMP%]{\r\n                    margin: auto 5px;\r\n                }\r\n                .hamburguer[_ngcontent-%COMP%]{\r\n                    display: block;\r\n                    cursor: pointer;\r\n                    margin: auto;\r\n                    z-index: 2;\r\n                    transition: all 0.7s ease;\r\n                    box-sizing: border-box;\r\n                }\r\n                .aparece[_ngcontent-%COMP%]{\r\n                    display: block;\r\n                    position: absolute;\r\n                    right: 0px;\r\n                    z-index: 5;\r\n                    background-color: var(--azul);\r\n                    padding: 20px 5px;\r\n                    transition: all .5 ease;\r\n                    text-transform: uppercase;\r\n                    animation: menu 1s;\r\n                    width: 30%;\r\n                }\r\n                .desapa[_ngcontent-%COMP%]{\r\n                    animation: desmenu 1s;\r\n                }\r\n                @keyframes desmenu {\r\n                    0%{transform: translateX(0px);}\r\n                    100%{transform: translateX(15.625rem);}\r\n                }\r\n                @keyframes menu {\r\n                    0%{transform: translateX(200px);}\r\n                    100%{transform: translateX(0px);}\r\n                }\r\n                .aparece[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n                    color: var(--blanco);\r\n                    display: block;\r\n                    margin-top: 10px;\r\n                    text-decoration: none;\r\n                }\r\n                #conten[_ngcontent-%COMP%]{\r\n                    z-index: 11;\r\n                }\r\n            }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsMEJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMkJBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHdDQUF3QztJQUN4Qyw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLHVDQUF1QztJQUN2QywwQ0FBMEM7SUFDMUMsOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBSVk7Z0JBQ0k7b0JBQ0ksZUFBZTtnQkFDbkI7OztnQkFHQSxjQUFjOztnQkFFZDtvQkFDSSw2QkFBNkI7b0JBQzdCLGFBQWE7b0JBQ2Isa0NBQWtDO29CQUNsQyxXQUFXO29CQUNYLHNCQUFzQjtnQkFDMUI7Z0JBQ0E7b0JBQ0ksYUFBYTtnQkFDakI7Z0JBQ0E7b0JBQ0ksV0FBVztvQkFDWCxZQUFZO2dCQUNoQjtnQkFDQTtvQkFDSSxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixXQUFXO29CQUNYLHNCQUFzQjtnQkFDMUI7Z0JBQ0E7b0JBQ0ksZ0JBQWdCO2dCQUNwQjtnQkFDQTtvQkFDSSxjQUFjO29CQUNkLGVBQWU7b0JBQ2YsWUFBWTtvQkFDWixVQUFVO29CQUNWLHlCQUF5QjtvQkFDekIsc0JBQXNCO2dCQUMxQjtnQkFDQTtvQkFDSSxjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsVUFBVTtvQkFDVixVQUFVO29CQUNWLDZCQUE2QjtvQkFDN0IsaUJBQWlCO29CQUNqQix1QkFBdUI7b0JBQ3ZCLHlCQUF5QjtvQkFDekIsa0JBQWtCO29CQUNsQixVQUFVO2dCQUNkO2dCQUNBO29CQUNJLHFCQUFxQjtnQkFDekI7Z0JBQ0E7b0JBQ0ksR0FBRywwQkFBMEIsQ0FBQztvQkFDOUIsS0FBSyxnQ0FBZ0MsQ0FBQztnQkFDMUM7Z0JBQ0E7b0JBQ0ksR0FBRyw0QkFBNEIsQ0FBQztvQkFDaEMsS0FBSywwQkFBMEIsQ0FBQztnQkFDcEM7Z0JBQ0E7b0JBQ0ksb0JBQW9CO29CQUNwQixjQUFjO29CQUNkLGdCQUFnQjtvQkFDaEIscUJBQXFCO2dCQUN6QjtnQkFDQTtvQkFDSSxXQUFXO2dCQUNmO1lBQ0oiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmh0bWx7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsYW5jbyk7XHJcbn1cclxuXHJcbi8qQmFycmEgZGUgbmF2ZWdhY2lvbiovXHJcbi5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1henVsKTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA2MCUgMjAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbi5uYXYgLmxvZ297XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFuY28pO1xyXG4gICAgbWFyZ2luOiAwcHggMTBweCAwcHggMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubmF2IC5sb2dvIGltZ3tcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4ubmF2IC5saW5rc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLm5hdiAubGlua3MgYXtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFuY28pO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tYXp1bCk7XHJcbn1cclxuLm5hdiAubGlua3MgYTphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12aW9sZXRhKTtcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS12aW9sZXRhKTtcclxufVxyXG4ubmF2IC5saW5rcyBhOmhvdmVye1xyXG4gICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLWJsYW5jbyk7XHJcbn1cclxuLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZpb2xldGEpO1xyXG59XHJcbi5uYXYgLmxpbmtsb2dpbntcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4ubmF2IC5saW5rbG9naW4gYXtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFuY28pO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5pY29uc3tcclxuICAgIG1hcmdpbjogYXV0byAyMHB4IGF1dG8gMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxufVxyXG4uaWNvbnMgYXtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWJsYW5jbyk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uaWNvbnMgaW1ne1xyXG4gICAgd2lkdGg6IDIuNXJlbTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG59XHJcbiNoYW1idXJndWVyIGRpdntcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFuY28pO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi5saW5lMXtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGVZKDZweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmxpbmUye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcclxufVxyXG4ubGluZTN7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5oYW1idXJndWVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jY29udGVue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA5MjBweCl7XHJcbiAgICAgICAgICAgICAgICBodG1se1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLyogUFJJTkNJUEFMICovXHJcblxyXG4gICAgICAgICAgICAgICAgLm5hdntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1henVsKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDJmciAxZnI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXYgLmxpbmtze1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmF2IC5sb2dvIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubmF2IC5sb2dve1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXYgLmxpbmtsb2dpbntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmhhbWJ1cmd1ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcGFyZWNle1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXp1bCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC41IGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IG1lbnUgMXM7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kZXNhcGF7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBkZXNtZW51IDFzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBkZXNtZW51IHtcclxuICAgICAgICAgICAgICAgICAgICAwJXt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTt9XHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJXt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTUuNjI1cmVtKTt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIG1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgIDAle3RyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7fVxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCV7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFwYXJlY2UgYXtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmxhbmNvKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICNjb250ZW57XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0iXX0= */"] });


/***/ }),

/***/ "iAog":
/*!******************************************!*\
  !*** ./src/app/models/category.model.ts ***!
  \******************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
}


/***/ }),

/***/ "iZMX":
/*!*************************************************************!*\
  !*** ./src/app/components/news-list/news-list.component.ts ***!
  \*************************************************************/
/*! exports provided: NewsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListComponent", function() { return NewsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/news.service */ "Ado8");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer-main/footer-main.component */ "7UVc");







function NewsListComponent_tr_47_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewsListComponent_tr_47_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewsListComponent_tr_47_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only Registered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewsListComponent_tr_47_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All visitors");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewsListComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NewsListComponent_tr_47_p_6_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewsListComponent_tr_47_p_7_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NewsListComponent_tr_47_p_9_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NewsListComponent_tr_47_p_10_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noticia_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", noticia_r1.titulo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", noticia_r1.subtitulo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", noticia_r1.portada == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", noticia_r1.portada == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", noticia_r1.hide == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", noticia_r1.hide == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/newsedit/", noticia_r1.id_noticia, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/newsdel/", noticia_r1.id_noticia, "");
} }
class NewsListComponent {
    constructor(service, serviceCat, router) {
        this.service = service;
        this.serviceCat = serviceCat;
        this.router = router;
        this.status = '';
        this.estado = false;
    }
    ngOnInit() {
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        this.service.listar().subscribe((noticia) => {
            console.log(noticia);
            this.news = noticia;
            this.news.reverse();
        });
    }
}
NewsListComponent.ɵfac = function NewsListComponent_Factory(t) { return new (t || NewsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
NewsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsListComponent, selectors: [["app-news-list"]], decls: 49, vars: 1, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["routerLink", "/panela", 1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link", "active"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], ["routerLink", "/newsadd"], [1, "btn", "btn-outline-primary"], [1, "fas", "fa-user-plus"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "col", 1, "d-none", "d-sm-table-cell"], ["scope", "col", 1, "d-none", "d-md-table-cell"], ["scope", "row", 4, "ngFor", "ngForOf"], ["scope", "row"], [1, "d-none", "d-sm-table-cell"], [4, "ngIf"], [1, "d-none", "d-md-table-cell"], [3, "routerLink"], [1, "material-icons"]], template: function NewsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Add Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Appear in Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "View:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, NewsListComponent_tr_47_Template, 18, 8, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "app-footer-main");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.news);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_6__["FooterMainComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n    border: .2px solid var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoibmV3cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhcntcclxuICAgIG1hcmdpbjogMHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDJyZW0gMHB4O1xyXG59XHJcbi5zaWRlYmFyIC5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1henVsKTtcclxufVxyXG4uc2lkZWJhciAuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS12aW9sZXRhKTtcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS12aW9sZXRhKTtcclxufVxyXG4uc2lkZWJhciAubmF2IGF7XHJcbiAgICBjb2xvcjp2YXIoLS1ibGFuY28pO1xyXG4gICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLWF6dWwpO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYgYTpob3ZlcntcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS1ibGFuY28pO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "kkh4":
/*!***********************************!*\
  !*** ./src/app/models/apiurl .ts ***!
  \***********************************/
/*! exports provided: GlobalConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConstants", function() { return GlobalConstants; });
class GlobalConstants {
}
GlobalConstants.apiurl = 'http://localhost:44385/api';
GlobalConstants.parafoto = 'http://localhost:44385';


/***/ }),

/***/ "pbaP":
/*!*************************************************************!*\
  !*** ./src/app/components/principal/edit/edit.component.ts ***!
  \*************************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_principal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/principal.service */ "Z86e");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../footer-main/footer-main.component */ "7UVc");







class EditComponent {
    constructor(formBuilder, service, router, _route) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this._route = _route;
        this.userForm = this.formBuilder.group({
            fotowwa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            textwwa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            fotoautor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            textautor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
        });
    }
    ngOnInit() {
        this.service.Getmain().subscribe((res) => {
            this.main = res;
            this.userForm.patchValue({
                fotowwa: this.main[0].urlwwa,
                textwwa: this.main[0].textwwa,
                fotoautor: this.main[0].urlautor,
                textautor: this.main[0].textautor
            });
        }, (err) => {
            this.userForm.patchValue({
                fotowwa: "",
                textwwa: "",
                fotoautor: "",
                textautor: ""
            });
        });
        this.userForm.patchValue({ fotowwa: "a", fotoautor: "a" }); //linea a borrar
    }
    onSubmit() {
        this.service.clearFormData();
        this.service.formData = {
            urlwwa: this.userForm.value.fotowwa,
            textwwa: this.userForm.value.textwwa,
            urlautor: this.userForm.value.fotoautor,
            textautor: this.userForm.value.textautor //la variable
        };
        this.service.Postmain(this.service.formData).subscribe(res => {
            this.router.navigate(['/panela']);
        });
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_principal_service__WEBPACK_IMPORTED_MODULE_2__["PrincipalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["app-edit"]], decls: 53, vars: 2, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["routerLink", "/panela", 1, "nav-link"], [1, "nav-link", "active"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], [1, "otro"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "name", "textwwa", "formControlName", "textwwa", 1, "form-control"], ["type", "text", "name", "textwwa", "formControlName", "textautor", 1, "form-control"], ["type", "submit", 1, "btn", "float-right", "btn-outline-success", 2, "margin-left", "5px", 3, "disabled"], ["routerLink", "/panela"], [1, "btn", "float-right", "btn-outline-danger"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Edit Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditComponent_Template_form_ngSubmit_32_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Who we are:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Partner:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Modify");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "app-footer-main");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_5__["FooterMainComponent"]], styles: [".sexagesimal[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n}\r\n.sexagesimal[_ngcontent-%COMP%], .sexagesimalsec[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 6px;\r\n    margin-left: 5px;\r\n}\r\n.box[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    min-width: 80%;\r\n    min-height: 350px;\r\n    margin: 10px;\r\n    padding: 15px;\r\n    border: 1px solid rgba(177, 177, 177, 0.933);\r\n    border-radius: 15px ;\r\n    text-align: justify;\r\n    margin-top: 80 px;\r\n    overflow:initial;\r\n    position:relative;\r\n  }\r\n.cp[_ngcontent-%COMP%]{\r\n      width: 30%;\r\n  }\r\n.otro[_ngcontent-%COMP%]{\r\n    \r\n    margin-left:0px;\r\n    margin-right:50px;\r\n\r\n    margin-top:0px;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n  }\r\n.sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n    border: .2px solid var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7QUFDQTtNQUNJLFVBQVU7RUFDZDtBQUNBOztJQUVFLGVBQWU7SUFDZixpQkFBaUI7O0lBRWpCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjtBQUdBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoiZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNleGFnZXNpbWFsIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG59XHJcbi5zZXhhZ2VzaW1hbCwgLnNleGFnZXNpbWFsc2VjIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLmJveHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogODAlO1xyXG4gICAgbWluLWhlaWdodDogMzUwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNzcsIDE3NywgMTc3LCAwLjkzMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBtYXJnaW4tdG9wOiA4MCBweDtcclxuICAgIG92ZXJmbG93OmluaXRpYWw7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB9XHJcbiAgLmNwe1xyXG4gICAgICB3aWR0aDogMzAlO1xyXG4gIH1cclxuICAub3Ryb3tcclxuICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjUwcHg7XHJcblxyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcblxyXG5cclxuICAuc2lkZWJhcntcclxuICAgIG1hcmdpbjogMHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDJyZW0gMHB4O1xyXG59XHJcbi5zaWRlYmFyIC5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1henVsKTtcclxufVxyXG4uc2lkZWJhciAuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS12aW9sZXRhKTtcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS12aW9sZXRhKTtcclxufVxyXG4uc2lkZWJhciAubmF2IGF7XHJcbiAgICBjb2xvcjp2YXIoLS1ibGFuY28pO1xyXG4gICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLWF6dWwpO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYgYTpob3ZlcntcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS1ibGFuY28pO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "ploi":
/*!************************************************************************!*\
  !*** ./src/app/components/datavisual/fotosedit/fotosedit.component.ts ***!
  \************************************************************************/
/*! exports provided: FotoseditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotoseditComponent", function() { return FotoseditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FotoseditComponent {
    constructor() { }
    ngOnInit() {
    }
}
FotoseditComponent.ɵfac = function FotoseditComponent_Factory(t) { return new (t || FotoseditComponent)(); };
FotoseditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FotoseditComponent, selectors: [["app-fotosedit"]], decls: 2, vars: 0, template: function FotoseditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "fotosedit works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Rvc2VkaXQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "q/hO":
/*!***************************************************************!*\
  !*** ./src/app/components/users-list/users-list.component.ts ***!
  \***************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/users.service */ "6Qg2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer-main/footer-main.component */ "7UVc");






function UsersListComponent_tr_50_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersListComponent_tr_50_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersListComponent_tr_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UsersListComponent_tr_50_p_6_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UsersListComponent_tr_50_p_7_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "delete_forever");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.nickname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r1.rol == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r1.rol == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.nomapel, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.user_descripcion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/useredit/", user_r1.id_usuario, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/userdel/", user_r1.id_usuario, "");
} }
class UsersListComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.user_id = "";
        this.nickname = "";
        this.mail = '';
        this.rol = '';
        this.ApeNom = '';
        this.descripcion = '';
    }
    ngOnInit() {
        this.service.listar().subscribe((usuario) => {
            this.users = usuario;
            this.users.reverse();
        });
    }
}
UsersListComponent.ɵfac = function UsersListComponent_Factory(t) { return new (t || UsersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UsersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersListComponent, selectors: [["app-users-list"]], decls: 52, vars: 1, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["routerLink", "/panela", 1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link", "active"], ["routerLink", "/categorieslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], ["routerLink", "/usersadd"], [1, "btn", "btn-outline-primary"], [1, "fas", "fa-user-plus"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "col", 1, "d-none", "d-md-table-cell"], ["scope", "col", 1, "d-none", "d-lg-table-cell"], ["scope", "row", 4, "ngFor", "ngForOf"], ["scope", "row"], [1, "d-none", "d-md-table-cell"], [4, "ngIf"], [1, "d-none", "d-lg-table-cell"], [3, "routerLink"], [1, "material-icons"]], template: function UsersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Nickname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, UsersListComponent_tr_50_Template, 19, 8, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "app-footer-main");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_3__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_5__["FooterMainComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".table-responsive[_ngcontent-%COMP%]{\r\n    max-width: 98%;\r\n    margin: 1px;\r\n  }\r\n    th[_ngcontent-%COMP%]{\r\n      background: #20c3ec;\r\n    }\r\n    .m5[_ngcontent-%COMP%]{\r\n      margin-left: 5px;\r\n      float: right;\r\n    }\r\n    .sidebar[_ngcontent-%COMP%]{\r\n      margin: 0px 0px;\r\n      padding: 2rem 0px;\r\n  }\r\n    .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n      background-color: var(--azul);\r\n  }\r\n    .sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n      background-color:var(--violeta);\r\n      border: .2px solid var(--violeta);\r\n  }\r\n    .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n      color:var(--blanco);\r\n      border: .2px solid var(--azul);\r\n  }\r\n    .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n      border: .2px solid var(--blanco);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0VBQ2I7SUFDRTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLFlBQVk7SUFDZDtJQUNBO01BQ0UsZUFBZTtNQUNmLGlCQUFpQjtFQUNyQjtJQUNBO01BQ0ksNkJBQTZCO0VBQ2pDO0lBQ0E7TUFDSSwrQkFBK0I7TUFDL0IsaUNBQWlDO0VBQ3JDO0lBQ0E7TUFDSSxtQkFBbUI7TUFDbkIsOEJBQThCO0VBQ2xDO0lBQ0E7TUFDSSxnQ0FBZ0M7RUFDcEMiLCJmaWxlIjoidXNlcnMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXJlc3BvbnNpdmV7XHJcbiAgICBtYXgtd2lkdGg6IDk4JTtcclxuICAgIG1hcmdpbjogMXB4O1xyXG4gIH1cclxuICAgIHRoe1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjBjM2VjO1xyXG4gICAgfVxyXG4gICAgLm01e1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhcntcclxuICAgICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gICAgICBwYWRkaW5nOiAycmVtIDBweDtcclxuICB9XHJcbiAgLnNpZGViYXIgLm5hdntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXp1bCk7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5hY3RpdmV7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tdmlvbGV0YSk7XHJcbiAgICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS12aW9sZXRhKTtcclxuICB9XHJcbiAgLnNpZGViYXIgLm5hdiBhe1xyXG4gICAgICBjb2xvcjp2YXIoLS1ibGFuY28pO1xyXG4gICAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tYXp1bCk7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5uYXYgYTpob3ZlcntcclxuICAgICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLWJsYW5jbyk7XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ "ugcN":
/*!************************************************************************!*\
  !*** ./src/app/components/datavisual/videosadd/videosadd.component.ts ***!
  \************************************************************************/
/*! exports provided: VideosaddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosaddComponent", function() { return VideosaddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_apiurl___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/apiurl  */ "kkh4");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_videos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../services/videos.service */ "/pQw");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../footer-main/footer-main.component */ "7UVc");













function VideosaddComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Text Caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " is required. Maximum 50 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
//import { CargarjvService } from 'src/app/services/cargarjv.service';
class VideosaddComponent {
    constructor(formBuilder, http, service, router, sanitizer) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.service = service;
        this.router = router;
        this.sanitizer = sanitizer;
        this.error = false;
        this.status = '';
        this.rol = '';
        this.estado = false;
        this.imageUrl = "";
        this.urlapi = src_app_models_apiurl___WEBPACK_IMPORTED_MODULE_2__["GlobalConstants"].apiurl;
        this.archivos = [];
        this.photoForm = this.formBuilder.group({
            hide: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            titulo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.extraerBase64 = ($event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, rejec) => {
                try {
                    const unsafeImg = window.URL.createObjectURL($event);
                    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
                    const reader = new FileReader();
                    reader.readAsDataURL($event);
                    reader.onload = () => {
                        resolve({
                            base: reader.result
                        });
                    };
                    reader.onerror = error => {
                        resolve({
                            base: null
                        });
                    };
                    return;
                }
                catch (e) {
                    return null;
                }
            });
        });
    }
    ngOnInit() {
        this.loading = false;
        this.photoForm.reset();
        this.photoForm.patchValue({ hide: '1' });
        this.error = false;
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        else {
            this.router.navigate(['/main']);
        }
        this.rol = localStorage.getItem('rol');
        if (parseInt(this.rol) == 1) {
            this.router.navigate(['/mainr']);
        }
    }
    onSubmit() {
        this.error = false;
        this.service.clearFormData();
        this.loading = true;
        this.datos = this.imageUrl;
        if (this.datos != "") {
            this.datos = this.datos.substring(this.datos.indexOf(',') + 1);
        }
        console.log(this.datos);
        this.service.formData = {
            url: this.datos,
            hide: this.photoForm.value.hide,
            titulo: this.photoForm.value.titulo
        };
        this.insertRecord();
    }
    insertRecord() {
        console.log(this.service.formData);
        this.service.PostVideos(this.service.formData).subscribe(res => {
            this.loading = false;
            //MOSTRAR UN MENSAJE QUE SE GUARDO CORRECTAMENTE
            this.router.navigate(['/vidlist']);
            this.photoForm.reset();
        }, (err) => {
            this.loading = false;
            var MensajeError = err.error.message;
            console.log(err);
            console.log(MensajeError);
            console.log('algo malio sal');
            this.photoForm.reset();
            //this.router.navigate(['/usersadd']);
        });
    }
    //para foto
    onChange(event) {
        const max_size = 10485760;
        const archivoCapturado = event.target.files[0];
        const allowed_types = ['video/mp4'];
        if (archivoCapturado.size > max_size) {
            window.alert('Maximum size allowed is ' + (max_size / 1024) / 1024 + 'Mb');
            this.limpiarFoto();
            return false;
        }
        else {
            if (!lodash__WEBPACK_IMPORTED_MODULE_3__["includes"](allowed_types, archivoCapturado.type)) {
                window.alert('Only Video are allowed ( MP4 )');
                this.limpiarFoto();
                return false;
            }
            else {
                this.extraerBase64(archivoCapturado).then((imagen) => {
                    this.imageUrl = imagen.base;
                });
            }
            ;
        }
        ;
    }
    limpiarFoto() {
        this.photoForm.patchValue({ url: '' });
        this.imageUrl = "";
    }
}
VideosaddComponent.ɵfac = function VideosaddComponent_Factory(t) { return new (t || VideosaddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_videos_service__WEBPACK_IMPORTED_MODULE_6__["VideosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"])); };
VideosaddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VideosaddComponent, selectors: [["app-videosadd"]], decls: 66, vars: 4, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], [1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link"], ["routerLink", "/vidlist", 1, "nav-link", "active"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "textbox", "name", "titulo", "formControlName", "titulo", "autofocus", "", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], [1, "field"], [1, "file", "has-name", "is-primary", "is-fullwidth"], [1, "mb-3"], ["type", "file", "id", "formFile", "formControlName", "url", 1, "form-control", 3, "change"], ["fileInput4", ""], ["for", "hide", 1, "col-md-3", "control-label"], [1, "col-md-9"], [1, "radio-inline"], ["type", "radio", "name", "hide", "value", "0", "id", "0", "formControlName", "hide"], ["type", "radio", "name", "hide", "value", "1", "id", "1", "checked", "", "formControlName", "hide"], ["type", "submit", 1, "btn", "float-right", "btn-outline-success", 2, "margin-left", "5px", 3, "disabled"], ["routerLink", "/vidlist"], [1, "btn", "float-right", "btn-outline-danger"], [1, "alert", "alert-danger"]], template: function VideosaddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Data Visuals Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Add Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function VideosaddComponent_Template_form_ngSubmit_33_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Text Caption:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, VideosaddComponent_div_38_Template, 5, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, " Video for Data Visuals ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function VideosaddComponent_Template_input_change_46_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "View:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, " Only registered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, " All.(public) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "app-footer-main");
    } if (rf & 2) {
        let tmp_1_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.photoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.photoForm.get("titulo")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = ctx.photoForm.get("titulo")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.photoForm.get("titulo")) == null ? null : tmp_1_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.photoForm.invalid || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Uploading..." : "Upload Video", "");
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_9__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_11__["FooterMainComponent"]], styles: [".sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n    border: .2px solid var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvc2FkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsaUNBQWlDO0FBQ3JDO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoidmlkZW9zYWRkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhcntcclxuICAgIG1hcmdpbjogMHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDJyZW0gMHB4O1xyXG59XHJcbi5zaWRlYmFyIC5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1henVsKTtcclxufVxyXG4uc2lkZWJhciAuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS12aW9sZXRhKTtcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS12aW9sZXRhKTtcclxufVxyXG4uc2lkZWJhciAubmF2IGF7XHJcbiAgICBjb2xvcjp2YXIoLS1ibGFuY28pO1xyXG4gICAgYm9yZGVyOiAuMnB4IHNvbGlkIHZhcigtLWF6dWwpO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYgYTpob3ZlcntcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS1ibGFuY28pO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "vO7G":
/*!***********************************************************!*\
  !*** ./src/app/components/main-reg/main-reg.component.ts ***!
  \***********************************************************/
/*! exports provided: MainRegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRegComponent", function() { return MainRegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _latest_latest_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../latest/latest.component */ "xsLU");
/* harmony import */ var _whoweare_whoweare_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../whoweare/whoweare.component */ "wi7t");
/* harmony import */ var _autor_autor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../autor/autor.component */ "/0gr");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search/search.component */ "RZmA");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../contact/contact.component */ "G2Gn");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer-main/footer-main.component */ "7UVc");









class MainRegComponent {
    constructor(router) {
        this.router = router;
        this.status = '';
        this.estado = false;
        this.rol = '';
    }
    ngOnInit() {
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        else {
            this.router.navigate(['/main']);
        }
        this.rol = localStorage.getItem('rol');
        //if (parseInt(this.rol)==0){}else{};
    }
}
MainRegComponent.ɵfac = function MainRegComponent_Factory(t) { return new (t || MainRegComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MainRegComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainRegComponent, selectors: [["app-main-reg"]], decls: 7, vars: 0, template: function MainRegComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-latest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-whoweare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-autor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer-main");
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_2__["NavbarRegComponent"], _latest_latest_component__WEBPACK_IMPORTED_MODULE_3__["LatestComponent"], _whoweare_whoweare_component__WEBPACK_IMPORTED_MODULE_4__["WhoweareComponent"], _autor_autor_component__WEBPACK_IMPORTED_MODULE_5__["AutorComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_8__["FooterMainComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLXJlZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _components_datavisual_fotosedit_fotosedit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/datavisual/fotosedit/fotosedit.component */ "ploi");
/* harmony import */ var _components_reportphoto_reportphoto_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/reportphoto/reportphoto.component */ "Nnvk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var _components_dashboard_reg_dashboard_reg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard-reg/dashboard-reg.component */ "UGg/");
/* harmony import */ var _components_policy_policy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/policy/policy.component */ "YuC9");
/* harmony import */ var _components_literacy_literacy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/literacy/literacy.component */ "4gn7");
/* harmony import */ var _components_datav_datav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/datav/datav.component */ "dKcb");
/* harmony import */ var _components_download_download_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/download/download.component */ "HdsJ");
/* harmony import */ var _components_pagecontact_pagecontact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pagecontact/pagecontact.component */ "blmr");
/* harmony import */ var _components_main_reg_main_reg_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main-reg/main-reg.component */ "vO7G");
/* harmony import */ var _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/registro/registro.component */ "fkcT");
/* harmony import */ var _components_reporte_reporte_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/reporte/reporte.component */ "BcWh");
/* harmony import */ var _components_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/news-list/news-list.component */ "iZMX");
/* harmony import */ var _components_news_add_news_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/news-add/news-add.component */ "0wRy");
/* harmony import */ var _components_news_edit_news_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/news-edit/news-edit.component */ "PQYE");
/* harmony import */ var _components_news_del_news_del_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/news-del/news-del.component */ "BrlW");
/* harmony import */ var _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/users-list/users-list.component */ "q/hO");
/* harmony import */ var _components_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/users-edit/users-edit.component */ "IwHr");
/* harmony import */ var _components_users_add_users_add_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/users-add/users-add.component */ "6Egh");
/* harmony import */ var _components_users_del_users_del_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/users-del/users-del.component */ "gCF0");
/* harmony import */ var _components_users_login_users_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/users-login/users-login.component */ "B0s6");
/* harmony import */ var _components_users_logout_users_logout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/users-logout/users-logout.component */ "fWVM");
/* harmony import */ var _components_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/categories-list/categories-list.component */ "hXPJ");
/* harmony import */ var _components_categories_add_categories_add_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/categories-add/categories-add.component */ "PZYN");
/* harmony import */ var _components_categories_edit_categories_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/categories-edit/categories-edit.component */ "/6cC");
/* harmony import */ var _components_categories_del_categories_del_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/categories-del/categories-del.component */ "g56J");
/* harmony import */ var _components_datavisual_fotoslist_fotoslist_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/datavisual/fotoslist/fotoslist.component */ "3lyV");
/* harmony import */ var _components_datavisual_videoslist_videoslist_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/datavisual/videoslist/videoslist.component */ "5Yxx");
/* harmony import */ var _components_datavisual_videosedit_videosedit_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/datavisual/videosedit/videosedit.component */ "+rEv");
/* harmony import */ var _components_datavisual_videosdel_videosdel_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/datavisual/videosdel/videosdel.component */ "cJkG");
/* harmony import */ var _components_datavisual_fotosadd_fotosadd_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/datavisual/fotosadd/fotosadd.component */ "75LM");
/* harmony import */ var _components_datavisual_fotosdel_fotosdel_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/datavisual/fotosdel/fotosdel.component */ "yXMt");
/* harmony import */ var _components_datavisual_videosadd_videosadd_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/datavisual/videosadd/videosadd.component */ "ugcN");
/* harmony import */ var _components_principal_edit_edit_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/principal/edit/edit.component */ "pbaP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/core */ "fXoL");



//componentes











//NOTICIAS




//USUARIOS






//CATEGORIAS




//fotos y videos










const routes = [
    { path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: 'newreg', component: _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_12__["RegistroComponent"] },
    { path: 'main', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: 'panelu', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'panela', component: _components_dashboard_reg_dashboard_reg_component__WEBPACK_IMPORTED_MODULE_5__["DashboardRegComponent"] },
    //{path:'panela/:ppal',component:  DashboardRegComponent },
    { path: 'policy', component: _components_policy_policy_component__WEBPACK_IMPORTED_MODULE_6__["PolicyComponent"] },
    { path: 'literacy', component: _components_literacy_literacy_component__WEBPACK_IMPORTED_MODULE_7__["LiteracyComponent"] },
    { path: 'dvisuals', component: _components_datav_datav_component__WEBPACK_IMPORTED_MODULE_8__["DatavComponent"] },
    { path: 'download', component: _components_download_download_component__WEBPACK_IMPORTED_MODULE_9__["DownloadComponent"] },
    { path: 'contact', component: _components_pagecontact_pagecontact_component__WEBPACK_IMPORTED_MODULE_10__["PagecontactComponent"] },
    { path: 'mainr', component: _components_main_reg_main_reg_component__WEBPACK_IMPORTED_MODULE_11__["MainRegComponent"] },
    { path: 'rep', component: _components_reporte_reporte_component__WEBPACK_IMPORTED_MODULE_13__["ReporteComponent"] },
    { path: 'repp', component: _components_reportphoto_reportphoto_component__WEBPACK_IMPORTED_MODULE_1__["ReportphotoComponent"] },
    { path: 'repp/:repp_id', component: _components_reportphoto_reportphoto_component__WEBPACK_IMPORTED_MODULE_1__["ReportphotoComponent"] },
    { path: 'rep/:rep_id', component: _components_reporte_reporte_component__WEBPACK_IMPORTED_MODULE_13__["ReporteComponent"] },
    { path: 'ppal', component: _components_principal_edit_edit_component__WEBPACK_IMPORTED_MODULE_35__["EditComponent"] },
    //Photos y videos
    { path: 'pholist', component: _components_datavisual_fotoslist_fotoslist_component__WEBPACK_IMPORTED_MODULE_28__["FotoslistComponent"] },
    { path: 'phoadd', component: _components_datavisual_fotosadd_fotosadd_component__WEBPACK_IMPORTED_MODULE_32__["FotosaddComponent"] },
    { path: 'phodel/:repp_id', component: _components_datavisual_fotosdel_fotosdel_component__WEBPACK_IMPORTED_MODULE_33__["FotosdelComponent"] },
    { path: 'phodel', component: _components_datavisual_fotosdel_fotosdel_component__WEBPACK_IMPORTED_MODULE_33__["FotosdelComponent"] },
    { path: 'phodel/:repp_id', component: _components_datavisual_fotosdel_fotosdel_component__WEBPACK_IMPORTED_MODULE_33__["FotosdelComponent"] },
    { path: 'rec', component: _components_datavisual_fotosedit_fotosedit_component__WEBPACK_IMPORTED_MODULE_0__["FotoseditComponent"] },
    //Videos
    { path: 'vidlist', component: _components_datavisual_videoslist_videoslist_component__WEBPACK_IMPORTED_MODULE_29__["VideoslistComponent"] },
    { path: 'vidadd', component: _components_datavisual_videosadd_videosadd_component__WEBPACK_IMPORTED_MODULE_34__["VideosaddComponent"] },
    { path: 'videdit/:vid_id', component: _components_datavisual_videosedit_videosedit_component__WEBPACK_IMPORTED_MODULE_30__["VideoseditComponent"] },
    { path: 'viddel/:vid_id', component: _components_datavisual_videosdel_videosdel_component__WEBPACK_IMPORTED_MODULE_31__["VideosdelComponent"] },
    { path: 'videdit', component: _components_datavisual_videosedit_videosedit_component__WEBPACK_IMPORTED_MODULE_30__["VideoseditComponent"] },
    { path: 'viddel', component: _components_datavisual_videosdel_videosdel_component__WEBPACK_IMPORTED_MODULE_31__["VideosdelComponent"] },
    { path: 'viddel/:vid_id', component: _components_datavisual_videosdel_videosdel_component__WEBPACK_IMPORTED_MODULE_31__["VideosdelComponent"] },
    // news
    { path: 'newslist', component: _components_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_14__["NewsListComponent"] },
    { path: 'newsadd', component: _components_news_add_news_add_component__WEBPACK_IMPORTED_MODULE_15__["NewsAddComponent"] },
    { path: 'newsedit/:new_id', component: _components_news_edit_news_edit_component__WEBPACK_IMPORTED_MODULE_16__["NewsEditComponent"] },
    { path: 'newsdel/:new_id', component: _components_news_del_news_del_component__WEBPACK_IMPORTED_MODULE_17__["NewsDelComponent"] },
    { path: 'newsedit', component: _components_news_edit_news_edit_component__WEBPACK_IMPORTED_MODULE_16__["NewsEditComponent"] },
    { path: 'newsdel', component: _components_news_del_news_del_component__WEBPACK_IMPORTED_MODULE_17__["NewsDelComponent"] },
    // users
    { path: 'userslist', component: _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_18__["UsersListComponent"] },
    { path: 'useredit', component: _components_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_19__["UsersEditComponent"] },
    { path: 'useredit/:user_id', component: _components_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_19__["UsersEditComponent"] },
    { path: 'userdel', component: _components_users_del_users_del_component__WEBPACK_IMPORTED_MODULE_21__["UsersDelComponent"] },
    { path: 'userdel/:user_id', component: _components_users_del_users_del_component__WEBPACK_IMPORTED_MODULE_21__["UsersDelComponent"] },
    { path: 'usersadd', component: _components_users_add_users_add_component__WEBPACK_IMPORTED_MODULE_20__["UsersAddComponent"] },
    { path: 'web-panel', component: _components_users_login_users_login_component__WEBPACK_IMPORTED_MODULE_22__["UsersLoginComponent"] },
    { path: 'logout', component: _components_users_logout_users_logout_component__WEBPACK_IMPORTED_MODULE_23__["UsersLogoutComponent"] },
    // categories
    { path: 'categorieslist', component: _components_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_24__["CategoriesListComponent"] },
    { path: 'categoryedit', component: _components_categories_edit_categories_edit_component__WEBPACK_IMPORTED_MODULE_26__["CategoriesEditComponent"] },
    { path: 'categoryedit/:cat_id', component: _components_categories_edit_categories_edit_component__WEBPACK_IMPORTED_MODULE_26__["CategoriesEditComponent"] },
    { path: 'categorydel', component: _components_categories_del_categories_del_component__WEBPACK_IMPORTED_MODULE_27__["CategoriesDelComponent"] },
    { path: 'categorydel/:cat_id', component: _components_categories_del_categories_del_component__WEBPACK_IMPORTED_MODULE_27__["CategoriesDelComponent"] },
    { path: 'categoryadd', component: _components_categories_add_categories_add_component__WEBPACK_IMPORTED_MODULE_25__["CategoriesAddComponent"] },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes
            // ,{useHash: true}
            )], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_36__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "w5aK":
/*!****************************************!*\
  !*** ./src/app/models/photos.model.ts ***!
  \****************************************/
/*! exports provided: Photo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Photo", function() { return Photo; });
class Photo {
}


/***/ }),

/***/ "wi7t":
/*!***********************************************************!*\
  !*** ./src/app/components/whoweare/whoweare.component.ts ***!
  \***********************************************************/
/*! exports provided: WhoweareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhoweareComponent", function() { return WhoweareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cargarjv_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/cargarjv.service */ "0ZmO");
/* harmony import */ var src_app_services_principal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/principal.service */ "Z86e");



class WhoweareComponent {
    constructor(cargaJS, service) {
        this.cargaJS = cargaJS;
        this.service = service;
        this.autor = {
            urlautor: "",
            textautor: "",
            urlwwa: "",
            textwwa: "",
        };
        cargaJS.CargaScript(['slider.js']);
    }
    ngOnInit() {
        this.service.Getmain().subscribe((res) => {
            this.autores = res;
            this.autor.textautor = this.autores[0].textautor;
            this.autor.urlautor = this.autores[0].urlautor;
            this.autor.urlwwa = this.autores[0].urlwwa;
            this.autor.textwwa = this.autores[0].textwwa;
        });
    }
}
WhoweareComponent.ɵfac = function WhoweareComponent_Factory(t) { return new (t || WhoweareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cargarjv_service__WEBPACK_IMPORTED_MODULE_1__["CargarjvService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_principal_service__WEBPACK_IMPORTED_MODULE_2__["PrincipalService"])); };
WhoweareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WhoweareComponent, selectors: [["app-whoweare"]], decls: 17, vars: 1, consts: [[1, "color"], [1, "cuerpoUno"], [1, "contenedor"], [1, "imeg"], ["id", "carouselExampleSlidesOnly", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "../../../assets/HOME1.jpg", "alt", "...", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "../../../assets/HOME2.jpg", "alt", "...", 1, "d-block", "w-100"], ["src", "../../../assets/HOME3.jpg", "alt", "...", 1, "d-block", "w-100"], [1, "tarjeta"], [1, "textTarj"]], template: function WhoweareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Who we are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.autor.textwwa, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aG93ZWFyZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "xsLU":
/*!*******************************************************!*\
  !*** ./src/app/components/latest/latest.component.ts ***!
  \*******************************************************/
/*! exports provided: LatestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestComponent", function() { return LatestComponent; });
/* harmony import */ var _models_apiurl___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../models/apiurl  */ "kkh4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/news.service */ "Ado8");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function LatestComponent_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " NO REPORT YET ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LatestComponent_li_23_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noti_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](noti_r2.subtitulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](noti_r2.date);
} }
function LatestComponent_li_23_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noti_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](noti_r2.subtitulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](noti_r2.date);
} }
function LatestComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LatestComponent_li_23_div_1_Template, 5, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LatestComponent_li_23_div_2_Template, 5, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noti_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.noticiasportadas.indexOf(noti_r2) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.noticiasportadas.indexOf(noti_r2) != 0);
} }
class LatestComponent {
    constructor(service, servicecat, _route, router) {
        this.service = service;
        this.servicecat = servicecat;
        this._route = _route;
        this.router = router;
        //idnoticiaportada="";
        this.status = '';
        this.estado = false;
        this.apiurl = _models_apiurl___WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].parafoto;
        this.rol = '';
        this.id_latest = "";
        this.errorlatest = false;
        this.ids_portada = [];
        this.Noticia = {
            category: '',
            Title: '',
            Subtitle: '',
            report: '',
            fotoport: '',
            fotonot: '',
            videonot: '',
            date: ''
        };
    }
    ngOnInit() {
        this.errorlatest = false;
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        else {
            this.router.navigate(['/main']);
        }
        this.rol = localStorage.getItem('rol');
        if (parseInt(this.rol) == 1) {
            this.router.navigate(['/mainr']);
        }
        if (this.estado == false) {
            this.service.GetLatest().subscribe((id) => {
                this.noticialatest = id;
                this.Noticia.Title = this.noticialatest.titulo;
                this.Noticia.Subtitle = this.noticialatest.subtitulo;
                this.Noticia.report = this.noticialatest.descripcion;
                if (this.noticialatest.foto_portada != "") {
                    this.Noticia.fotoport = this.apiurl + "/images/News/" + this.noticialatest.id_noticia + "/portada.png";
                }
                else {
                    this.Noticia.fotoport = "../../../assets/LOGO.png";
                }
                this.Noticia.fotonot = this.noticialatest.foto_noticia;
                this.Noticia.videonot = this.noticialatest.video_noticia;
                this.id_latest = "/rep/" + this.noticialatest.id_noticia;
                this.servicecat.view(this.noticialatest.id_categoria).subscribe((Categoria) => {
                    this.Noticia.category = Categoria.nombre;
                });
            });
            this.service.GetPortada().subscribe((id) => {
                this.noticiasportadas = id;
                for (let i = 0; i < this.noticiasportadas.length; i++) {
                    this.arraytemporal = this.noticiasportadas[0].date.split("T");
                    this.noticiasportadas[i].date = this.arraytemporal[0];
                }
            });
        }
        else {
            this.service.GetLatestR().subscribe((id) => {
                this.noticialatest = id;
                this.Noticia.Title = this.noticialatest.titulo;
                this.Noticia.Subtitle = this.noticialatest.subtitulo;
                this.Noticia.report = this.noticialatest.descripcion;
                if (this.noticialatest.foto_portada != "") {
                    this.Noticia.fotoport = this.apiurl + "/images/News/" + this.noticialatest.id_noticia + "/portada.png";
                }
                else {
                    this.Noticia.fotoport = "../../../assets/LOGO.png";
                }
                this.Noticia.fotonot = this.noticialatest.foto_noticia;
                this.Noticia.videonot = this.noticialatest.video_noticia;
                this.id_latest = "/rep/" + this.noticialatest.id_noticia;
                this.servicecat.view(this.noticialatest.id_categoria).subscribe((Categoria) => {
                    this.Noticia.category = Categoria.nombre;
                });
            });
            this.service.GetPortadaR().subscribe((id) => {
                this.noticiasportadas = id;
                for (let i = 0; i < this.noticiasportadas.length; i++) {
                    this.arraytemporal = this.noticiasportadas[0].date.split("T");
                    this.noticiasportadas[i].date = this.arraytemporal[0];
                }
            });
            console.log(this.id_latest);
        }
    }
    onSubmit() {
    }
    ;
}
LatestComponent.ɵfac = function LatestComponent_Factory(t) { return new (t || LatestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LatestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LatestComponent, selectors: [["app-latest"]], decls: 24, vars: 7, consts: [[1, "cuerpo"], [1, "texto"], [4, "ngIf"], [3, "routerLink"], [1, "material-icons"], [1, "mapa"], [1, "imagen"], ["alt", "", 3, "src"], [1, "desliza"], ["class", "prim", 4, "ngFor", "ngForOf"], [1, "prim"], ["class", "raro", 4, "ngIf"], [1, "raro"], [1, "parrafo"], [1, "fecha"]], template: function LatestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LatestComponent_h1_3_Template, 2, 0, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Latest Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "play_arrow");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LatestComponent_li_23_Template, 3, 2, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorlatest);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.Noticia.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.Noticia.Subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.Noticia.report);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx.id_latest);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.Noticia.fotoport, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.noticiasportadas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".cuerpo[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    box-sizing: border-box;\r\n    grid-template-columns: 50% 50%;\r\n    grid-template-rows: 1fr;\r\n    min-height: 80vh;\r\n}\r\n.cuerpo[_ngcontent-%COMP%]   .texto[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    text-align: left;\r\n    padding: 10px 5%;\r\n    box-sizing: border-box;\r\n    height: 90%;\r\n    display: grid;\r\n    margin: 0px auto;\r\n    grid-template-rows: repeat(5 1fr);\r\n}\r\n.texto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    display: -webkit-box;\r\n    -webkit-box-orient: vertical;\r\n    overflow: hidden;\r\n    -webkit-line-clamp: 3;\r\n    \r\n}\r\n.texto[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{ color:var(--gris)}\r\n.texto[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: var(--violeta);\r\n}\r\n.texto[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    margin: 10px 0px;\r\n    color: var(--azul);\r\n    display: -webkit-box;\r\n    -webkit-box-orient: vertical;\r\n    overflow: hidden;\r\n    -webkit-line-clamp: 3;\r\n}\r\n.texto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    text-overflow: ellipsis;\r\n}\r\n.desliza[_ngcontent-%COMP%]   .raro[_ngcontent-%COMP%]{\r\n    background-color: #512475;\r\n}\r\n.texto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n    margin: 10px 0px 0px 0px;\r\n    bottom: 0px;\r\n    background-color: var(--azul);\r\n    color: var(--blanco);\r\n    max-width: 250px;\r\n    padding: .5rem;\r\n    padding-left: 1rem;\r\n    text-transform: uppercase;\r\n    height: -webkit-max-content;\r\n    height: max-content;\r\n    display: flex;\r\n}\r\n.texto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n    margin-left: .1rem;\r\n    height: 100%;\r\n    line-height: normal;\r\n}\r\n.texto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    filter: brightness(1.5);\r\n}\r\n.texto[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{\r\n    background: var(--blanco);\r\n    color: var(--azul);\r\n}\r\n.mapa[_ngcontent-%COMP%]   .imagen[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin: auto;\r\n    height: 75%;\r\n    text-align: center;\r\n    width: 100%;\r\n    object-fit: cover;\r\n}\r\n.mapa[_ngcontent-%COMP%]   .parrafo[_ngcontent-%COMP%]{ \r\n    text-align: left;\r\n    box-sizing: border-box;\r\n    width: 70%;\r\n    margin: auto;\r\n    display: -webkit-box;\r\n    -webkit-box-orient: vertical;\r\n    overflow: hidden;\r\n    -webkit-line-clamp: 2;\r\n    font-size: 1rem;\r\n}\r\n.mapa[_ngcontent-%COMP%]   .fecha[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    bottom: 5px;\r\n    right: 20px;\r\n}\r\n.desliza[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    height: 25%;\r\n    list-style: none;\r\n    width: 100%;\r\n    background-color: var(--azul);\r\n}\r\n.mapa[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0px auto;\r\n    object-fit: contain;\r\n}\r\n.prim[_ngcontent-%COMP%]{\r\n    width: 33%;\r\n    background: var(--azul);\r\n    color: var(--blanco);\r\n    font-size: .8rem;\r\n    height: 100%;\r\n    list-style: none;\r\n    box-sizing: border-box;\r\n}\r\n.prim[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    margin: 0px auto;\r\n    padding: 10px 15px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n@media(max-width: 920px){\r\n    body[_ngcontent-%COMP%]{\r\n        font-size: 16px;\r\n    }\r\n    .buscar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        height: 70vh;\r\n    }\r\n    .cuerpo[_ngcontent-%COMP%]{\r\n        grid-template-columns: 1fr;\r\n        margin: 10px 0px;\r\n        width: 100%;\r\n        grid-template-rows: 1fr 1fr;\r\n    }\r\n    .texto[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        display: -webkit-box;\r\n        -webkit-line-clamp: 2;\r\n        line-clamp: 1;\r\n        -webkit-box-orient: vertical;\r\n        \r\n        \r\n        overflow: hidden;\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    .texto[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        display: -webkit-box;\r\n        -webkit-line-clamp: 1;\r\n        -webkit-box-orient: vertical;\r\n        \r\n        \r\n        overflow: hidden;\r\n        width: 100%;\r\n        line-height: 2;\r\n    }\r\n    .texto[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .mapa[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n        margin: 0px auto;\r\n        height: 100%;\r\n    }\r\n    .mapa[_ngcontent-%COMP%]   .desliza[_ngcontent-%COMP%]   .parrafo[_ngcontent-%COMP%]{\r\n        display: -webkit-box;\r\n        -webkit-line-clamp: 1;\r\n        -webkit-box-orient: vertical;\r\n        \r\n        \r\n        overflow: hidden;\r\n        width: 100%;\r\n    }\r\n    .cuerpo[_ngcontent-%COMP%]   .imagen[_ngcontent-%COMP%]{\r\n        height: 60%;\r\n        width: 80%;\r\n    }\r\n    .cuerpo[_ngcontent-%COMP%]   .desliza[_ngcontent-%COMP%]{\r\n        height: 30%;\r\n    }\r\n    .cuerpo[_ngcontent-%COMP%]   .mapa[_ngcontent-%COMP%]{\r\n        margin: 0px auto;\r\n        width: 100%;\r\n    }\r\n    .cuerpo[_ngcontent-%COMP%]   .mapa[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    .cuerpoUno[_ngcontent-%COMP%]{\r\n        grid-template-columns: 1fr;\r\n    }\r\n    .cuerpoUno[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .cuerpoUno[_ngcontent-%COMP%]   .contenedor[_ngcontent-%COMP%]{\r\n        margin: 10px auto;\r\n        height: -webkit-max-content;\r\n        height: max-content;\r\n        width: 90%;\r\n        padding: 10px;\r\n        grid-template-columns: 1fr;\r\n    }\r\n    .cuerpoUno[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 60%;\r\n        height: 13em;\r\n        position: absolute;\r\n        margin: 0px;\r\n    }\r\n    .color[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n\r\n\r\n\r\n    .cuerpoTre[_ngcontent-%COMP%]   .busqueda[_ngcontent-%COMP%]{\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n    .cuerpoTre[_ngcontent-%COMP%]   .busqueda[_ngcontent-%COMP%]   .botes[_ngcontent-%COMP%]{\r\n        grid-column: 1 / 4;\r\n    }\r\n    .cuerpoTre[_ngcontent-%COMP%]   .busqueda[_ngcontent-%COMP%]   .botes[_ngcontent-%COMP%]   .distinte1[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        text-align: center;\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n    .resour[_ngcontent-%COMP%]   .resourDon[_ngcontent-%COMP%]{\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n    \r\n}\r\n@media(max-width: 700px){\r\n\r\n    \r\n    body[_ngcontent-%COMP%]{\r\n        font-size: 10px;\r\n    }\r\n    .nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n        width: 50%;\r\n    }\r\n    .nav[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 30px;\r\n        height: 30px;\r\n    }\r\n    .cuerpo[_ngcontent-%COMP%]{\r\n        grid-template-columns: 1fr;\r\n        margin: 10px 0px;\r\n        width: 100%;\r\n    }\r\n    .mapa[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n        margin: 0px auto;\r\n    }\r\n    .mapa[_ngcontent-%COMP%]   .desliza[_ngcontent-%COMP%]   .parrafo[_ngcontent-%COMP%]{\r\n        display: -webkit-box;\r\n        -webkit-line-clamp: 1;\r\n        -webkit-box-orient: vertical;\r\n        \r\n        \r\n        overflow: hidden;\r\n        width: 100%;\r\n    }\r\n    .cuerpo[_ngcontent-%COMP%]   .imagen[_ngcontent-%COMP%]{\r\n        height: 70%;\r\n    }\r\n    .cuerpo[_ngcontent-%COMP%]   .desliza[_ngcontent-%COMP%]{\r\n        height: 30%;\r\n    }\r\n    .cuerpo[_ngcontent-%COMP%]   .mapa[_ngcontent-%COMP%]{\r\n        margin: 0px auto;\r\n        width: 100%;\r\n    }\r\n    .cuerpo[_ngcontent-%COMP%]   .mapa[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    .cuerpoUno[_ngcontent-%COMP%]{\r\n        grid-template-columns: 1fr;\r\n    }\r\n    .cuerpoUno[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .cuerpoUno[_ngcontent-%COMP%]   .contenedor[_ngcontent-%COMP%]{\r\n        margin: 10px auto;\r\n        height: -webkit-max-content;\r\n        height: max-content;\r\n        width: 90%;\r\n        padding: 10px;\r\n        grid-template-columns: 1fr;\r\n    }\r\n    .cuerpoUno[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 60%;\r\n        height: 13em;\r\n        position: absolute;\r\n        margin: 0px;\r\n    }\r\n    .color[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .cuerpoUno[_ngcontent-%COMP%]   .imeg[_ngcontent-%COMP%]{\r\n        position: absolute;\r\n        width: 90%;\r\n        height: 50vh;\r\n        z-index: 0;\r\n    }\r\n    .cuerpoUno[_ngcontent-%COMP%]   .imeg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n    .cuerpoUno[_ngcontent-%COMP%]   .tarjeta[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n        margin: 5% auto;\r\n        position: relative;\r\n        background: #5124759c;\r\n        font-size: 15px;\r\n    }\r\n    .cuerpoDos[_ngcontent-%COMP%]   .sobre[_ngcontent-%COMP%]{\r\n        display: block;\r\n    }\r\n    .cuerpoDos[_ngcontent-%COMP%]   .mayor[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n        margin: 0px auto;\r\n    }\r\n    .cuerpoDos[_ngcontent-%COMP%]   .mayor[_ngcontent-%COMP%]   .blanco[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .cuerpoDos[_ngcontent-%COMP%]   .foto[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n        margin: 10px auto;\r\n    }\r\n    .cuerpoDos[_ngcontent-%COMP%]   .foto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    .edific[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .sobre[_ngcontent-%COMP%]{\r\n        position: relative;\r\n    }\r\n    .cuerpoDos[_ngcontent-%COMP%]{\r\n        min-height: 30vh;\r\n        width: 100%;\r\n        margin-bottom: 1rem;\r\n    }\r\n    .cuerpoDos[_ngcontent-%COMP%]   .foto[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        border-radius: 10px;\r\n        margin: 0px auto;\r\n    }\r\n    .cuerpoDos[_ngcontent-%COMP%]   .blan[_ngcontent-%COMP%], .colores[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .cuerpoTres[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        margin: 10px 0px;\r\n    }\r\n    .cuerpoTres[_ngcontent-%COMP%]   .busqueda[_ngcontent-%COMP%]{\r\n        display: grid;\r\n        grid-template-columns: 1fr 1fr;\r\n        width: 90%;\r\n        margin: 5px auto;\r\n    }\r\n    .cuerpoTre[_ngcontent-%COMP%]   .busqueda[_ngcontent-%COMP%]   .distinte1[_ngcontent-%COMP%]{\r\n        grid-column: 1 / 3;\r\n    }\r\n    .cuerpoTres[_ngcontent-%COMP%]   .busqueda[_ngcontent-%COMP%]   .distinte[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    .cuerpoTres[_ngcontent-%COMP%]   .busqueda[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        padding-right: 5px;\r\n        padding-left: 5px;\r\n    }\r\n    .cuerpoTres[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n        width: 10em;\r\n    }\r\n    .cuerpoCuatro[_ngcontent-%COMP%]{\r\n        grid-template-columns: 1fr;\r\n    }\r\n    .cuerpoCuatro[_ngcontent-%COMP%]   .formulario[_ngcontent-%COMP%]{\r\n        width: 90%;\r\n        margin: .5rem auto;\r\n    }\r\n    .cuerpoCuatro[_ngcontent-%COMP%]   .buscar[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        width: 90%;\r\n        margin: .5rem auto;\r\n    }\r\n    .cuerpoCuatro[_ngcontent-%COMP%]   .buscar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n        height: 80%;\r\n    }\r\n    footer[_ngcontent-%COMP%]{\r\n        grid-template-columns: 1fr 2fr 2fr;\r\n        background-image: url('LOGO.png');\r\n        background-position: top;\r\n        background-size: contain;\r\n        background-repeat: no-repeat;\r\n    }\r\n    footer[_ngcontent-%COMP%]   .anclas1[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .anclas2[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        font-size: 1rem;\r\n    }\r\n    .logoPie[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .enlaces[_ngcontent-%COMP%]{\r\n        margin-right: 5px;\r\n        width: 100%;\r\n    }\r\n    .cuerpoCuatro[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        margin: 0px;\r\n    }\r\n    \r\n    .cuerpoCuatro[_ngcontent-%COMP%]   .buscar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        height: 100%;\r\n        width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhdGVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIscUJBQXFCOztBQUV6QjtBQUNBLFdBQVcsaUJBQWlCO0FBQzVCO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsMkJBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSwwQkFBMEI7UUFDMUIsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCwyQkFBMkI7SUFDL0I7SUFDQTtRQUNJLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsYUFBYTtRQUNiLDRCQUE0QjtRQUM1Qix5QkFBeUI7UUFDekIsNkJBQTZCO1FBQzdCLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQiw0QkFBNEI7UUFDNUIseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3QixnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQiw0QkFBNEI7UUFDNUIseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3QixnQkFBZ0I7UUFDaEIsV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsVUFBVTtJQUNkO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsMkJBQW1CO1FBQW5CLG1CQUFtQjtRQUNuQixVQUFVO1FBQ1YsYUFBYTtRQUNiLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsV0FBVztJQUNmO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCOzs7O0lBSUE7UUFDSSxrQ0FBa0M7SUFDdEM7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSw4QkFBOEI7SUFDbEM7O0FBRUo7QUFFQTs7SUFFSSxjQUFjO0lBQ2Q7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSwwQkFBMEI7UUFDMUIsZ0JBQWdCO1FBQ2hCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQiw0QkFBNEI7UUFDNUIseUJBQXlCO1FBQ3pCLDZCQUE2QjtRQUM3QixnQkFBZ0I7UUFDaEIsV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQiwyQkFBbUI7UUFBbkIsbUJBQW1CO1FBQ25CLFVBQVU7UUFDVixhQUFhO1FBQ2IsMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsWUFBWTtRQUNaLFVBQVU7SUFDZDtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCO0lBQ0E7O1FBRUksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLFVBQVU7UUFDVixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1Ysa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGtDQUFrQztRQUNsQyxpQ0FBK0M7UUFDL0Msd0JBQXdCO1FBQ3hCLHdCQUF3QjtRQUN4Qiw0QkFBNEI7SUFDaEM7SUFDQTs7UUFFSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIsV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsV0FBVztJQUNmOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6ImxhdGVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1ZXJwb3tcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xyXG59XHJcbi5jdWVycG8gLnRleHRve1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDUlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1IDFmcik7XHJcbn1cclxuLnRleHRvIGgze1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuICAgIFxyXG59XHJcbi50ZXh0byBoNHsgY29sb3I6dmFyKC0tZ3Jpcyl9XHJcbi50ZXh0byBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLXZpb2xldGEpO1xyXG59XHJcbi50ZXh0byBoMXtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tYXp1bCk7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xyXG59XHJcbi50ZXh0byBwe1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4uZGVzbGl6YSAucmFyb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MTI0NzU7XHJcbn1cclxuLnRleHRvIGJ1dHRvbntcclxuICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXp1bCk7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhbmNvKTtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4udGV4dG8gYnV0dG9uIHNwYW57XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLjFyZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcbi50ZXh0byBidXR0b246aG92ZXJ7XHJcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS41KTtcclxufVxyXG4udGV4dG8gYnV0dG9uOmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsYW5jbyk7XHJcbiAgICBjb2xvcjogdmFyKC0tYXp1bCk7XHJcbn1cclxuLm1hcGEgLmltYWdlbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBoZWlnaHQ6IDc1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLm1hcGEgLnBhcnJhZm97IFxyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG4ubWFwYSAuZmVjaGF7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDVweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG59XHJcbi5kZXNsaXphe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMjUlO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXp1bCk7XHJcbn1cclxuLm1hcGEgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG4ucHJpbXtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1henVsKTtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFuY28pO1xyXG4gICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5wcmltIGRpdntcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogOTIwcHgpe1xyXG4gICAgYm9keXtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuYnVzY2FyIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDcwdmg7XHJcbiAgICB9XHJcbiAgICAuY3VlcnBve1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gICAgfVxyXG4gICAgLnRleHRvIGgxe1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICBsaW5lLWNsYW1wOiAxO1xyXG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgLyogd2hpdGUtc3BhY2U6IG5vd3JhcDsgKi9cclxuICAgICAgICAvKiB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgKi9cclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC50ZXh0byBoM3tcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgICAgICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xyXG4gICAgICAgIC8qIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAqL1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICB9XHJcbiAgICAudGV4dG8gcHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm1hcGF7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC5tYXBhIC5kZXNsaXphIC5wYXJyYWZve1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgIC8qIHdoaXRlLXNwYWNlOiBub3dyYXA7ICovXHJcbiAgICAgICAgLyogdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7ICovXHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jdWVycG8gLmltYWdlbntcclxuICAgICAgICBoZWlnaHQ6IDYwJTtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgLmN1ZXJwbyAuZGVzbGl6YXtcclxuICAgICAgICBoZWlnaHQ6IDMwJTtcclxuICAgIH1cclxuICAgIC5jdWVycG8gLm1hcGF7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jdWVycG8gLm1hcGEgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmN1ZXJwb1Vub3tcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuICAgIC5jdWVycG9Vbm8gLmNvbG9ye1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvVW5vIC5jb250ZW5lZG9ye1xyXG4gICAgICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG4gICAgLmN1ZXJwb1VubyBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDEzZW07XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbG9ye1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAuY3VlcnBvVHJlIC5idXNxdWVkYXtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgfVxyXG4gICAgLmN1ZXJwb1RyZSAuYnVzcXVlZGEgLmJvdGVze1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcclxuICAgIH1cclxuICAgIC5jdWVycG9UcmUgLmJ1c3F1ZWRhIC5ib3RlcyAuZGlzdGludGUxe1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnJlc291ciAucmVzb3VyRG9ue1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA3MDBweCl7XHJcblxyXG4gICAgLyogcHJpbmNpcGFsICovXHJcbiAgICBib2R5e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuICAgIC5uYXYgLmxvZ297XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC5uYXYgLmljb25zIGEgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgIH1cclxuICAgIC5jdWVycG97XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5tYXBhe1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIH1cclxuICAgIC5tYXBhIC5kZXNsaXphIC5wYXJyYWZve1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICAgIC8qIHdoaXRlLXNwYWNlOiBub3dyYXA7ICovXHJcbiAgICAgICAgLyogdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7ICovXHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jdWVycG8gLmltYWdlbntcclxuICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgIH1cclxuICAgIC5jdWVycG8gLmRlc2xpemF7XHJcbiAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvIC5tYXBhe1xyXG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvIC5tYXBhIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jdWVycG9Vbm97XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvVW5vIC5jb2xvcntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmN1ZXJwb1VubyAuY29udGVuZWRvcntcclxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuICAgIC5jdWVycG9Vbm8gaW1ne1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxM2VtO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICAgIC5jb2xvcntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmN1ZXJwb1VubyAuaW1lZ3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgIH1cclxuICAgIC5jdWVycG9Vbm8gLmltZWcgaW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvVW5vIC50YXJqZXRhe1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNTEyNDc1OWM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLmN1ZXJwb0RvcyAuc29icmV7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvRG9zIC5tYXlvcntcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvRG9zIC5tYXlvciAuYmxhbmNve1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvRG9zIC5mb3Rve1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvRG9zIC5mb3RvIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5lZGlmaWN7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5zb2JyZXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvRG9ze1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDMwdmg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICAgIC5jdWVycG9Eb3MgLmZvdG8gaW1ne1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIH1cclxuICAgIC5jdWVycG9Eb3MgLmJsYW4sXHJcbiAgICAuY29sb3Jlc3tcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmN1ZXJwb1RyZXN7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcclxuICAgIH1cclxuICAgIC5jdWVycG9UcmVzIC5idXNxdWVkYXtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvVHJlIC5idXNxdWVkYSAuZGlzdGludGUxe1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcclxuICAgIH1cclxuICAgIC5jdWVycG9UcmVzIC5idXNxdWVkYSAuZGlzdGludGUgaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvVHJlcyAuYnVzcXVlZGEgcHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvVHJlcyBpbnB1dHtcclxuICAgICAgICB3aWR0aDogMTBlbTtcclxuICAgIH1cclxuICAgIC5jdWVycG9DdWF0cm97XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvQ3VhdHJvIC5mb3JtdWxhcmlve1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiAuNXJlbSBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmN1ZXJwb0N1YXRybyAuYnVzY2Fye1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbjogLjVyZW0gYXV0bztcclxuICAgIH1cclxuICAgIC5jdWVycG9DdWF0cm8gLmJ1c2NhciBkaXZ7XHJcbiAgICAgICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB9XHJcbiAgICBmb290ZXJ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDJmcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL0xPR08ucG5nKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB9XHJcbiAgICBmb290ZXIgLmFuY2xhczEgaDMsXHJcbiAgICBmb290ZXIgLmFuY2xhczIgaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLmxvZ29QaWV7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5lbmxhY2Vze1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmN1ZXJwb0N1YXRyb3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmN1ZXJwb0N1YXRybyAuYnVzY2FyIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "yXMt":
/*!**********************************************************************!*\
  !*** ./src/app/components/datavisual/fotosdel/fotosdel.component.ts ***!
  \**********************************************************************/
/*! exports provided: FotosdelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotosdelComponent", function() { return FotosdelComponent; });
/* harmony import */ var src_app_models_apiurl___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/apiurl  */ "kkh4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_photos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../services/photos.service */ "TEzu");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../footer-main/footer-main.component */ "7UVc");






class FotosdelComponent {
    constructor(router, pho_id, service) {
        this.router = router;
        this.pho_id = pho_id;
        this.service = service;
        // fotot:any;
        this.foto = {
            url: '',
            hide: '',
            titulo: '',
            id_foto: '',
            direccion: '',
        };
        this.apiurl = src_app_models_apiurl___WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].parafoto;
        this.status = '';
        this.estado = false;
        this.rol = '';
        this.photo_id = '';
    }
    ngOnInit() {
        this.status = localStorage.getItem('resultado');
        if (parseInt(this.status) == 1) {
            this.estado = true;
        }
        else {
            this.router.navigate(['/main']);
        }
        this.rol = localStorage.getItem('rol');
        if (parseInt(this.rol) == 1) {
            this.router.navigate(['/mainr']);
        }
        this.photo_id = this.pho_id.snapshot.paramMap.get('repp_id');
        this.service.GetFoto(this.photo_id).subscribe((res) => {
            this.foto = res;
            this.foto.direccion = this.apiurl + "/images/Photos/" + this.foto.id_foto + ".png";
        });
    }
    borrar() {
        this.service.DeleteFoto(this.photo_id).subscribe(res => { this.router.navigate(['/pholist']); });
    }
}
FotosdelComponent.ɵfac = function FotosdelComponent_Factory(t) { return new (t || FotosdelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_photos_service__WEBPACK_IMPORTED_MODULE_3__["PhotosService"])); };
FotosdelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FotosdelComponent, selectors: [["app-fotosdel"]], decls: 34, vars: 2, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], [1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/pholist", 1, "nav-link", "active"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], [1, "btn", "btn-outline-danger", 3, "click"], ["routerLink", "/pholist", 1, "btn", "btn-outline-primary"], ["alt", "", 3, "src"]], template: function FotosdelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Data Visuals Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FotosdelComponent_Template_button_click_26_listener() { return ctx.borrar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Calncel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "app-footer-main");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Text Caption: ", ctx.foto.titulo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.foto.direccion, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_5__["FooterMainComponent"]], styles: [".sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n    border: .2px solid var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n    border: .2px solid var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    border: .2px solid var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvdG9zZGVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLGdDQUFnQztBQUNwQyIsImZpbGUiOiJmb3Rvc2RlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXJ7XHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAycmVtIDBweDtcclxufVxyXG4uc2lkZWJhciAubmF2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXp1bCk7XHJcbn1cclxuLnNpZGViYXIgLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tdmlvbGV0YSk7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tdmlvbGV0YSk7XHJcbn1cclxuLnNpZGViYXIgLm5hdiBhe1xyXG4gICAgY29sb3I6dmFyKC0tYmxhbmNvKTtcclxuICAgIGJvcmRlcjogLjJweCBzb2xpZCB2YXIoLS1henVsKTtcclxufVxyXG4uc2lkZWJhciAubmF2IGE6aG92ZXJ7XHJcbiAgICBib3JkZXI6IC4ycHggc29saWQgdmFyKC0tYmxhbmNvKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ycII":
/*!************************************************!*\
  !*** ./src/app/services/categories.service.ts ***!
  \************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _models_apiurl___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../models/apiurl  */ "kkh4");
/* harmony import */ var _models_category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/category.model */ "iAog");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CategoriesService {
    constructor(http) {
        this.http = http;
        this.oRes = '';
        this.formData = new _models_category_model__WEBPACK_IMPORTED_MODULE_1__["Category"];
        this.direccion = _models_apiurl___WEBPACK_IMPORTED_MODULE_0__["GlobalConstants"].apiurl;
        this.rootURL = this.direccion;
    }
    delCategory(cat_id) {
        return this.http.delete(this.rootURL + '/Categorias/DeleteCategoria/' + cat_id);
    }
    // postCategory(formData: Category) {
    //   return this.http.post(this.rootURL + '/Categories/register', formData);
    // }
    addCategory(formData) {
        return this.http.post(this.rootURL + '/Categorias/PostCategoria', formData);
    }
    editCategory(formData, cat_id) {
        return this.http.post(this.rootURL + '/Categorias/edit/' + cat_id, formData);
    }
    list() {
        return this.http.get(this.rootURL + '/Categorias/GetCategoria');
    }
    view(cat_id) {
        return this.http.get(this.rootURL + '/Categorias/GetCategoria/' + cat_id);
    }
    clearFormData() {
        this.formData = {
            nombre: "",
            portada: 1,
            hide: 1,
        };
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map