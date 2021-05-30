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
            console.log(res);
            this.autores = res;
            this.autor.textautor = this.autores[0].textautor;
            this.autor.urlautor = this.autores[0].urlautor;
            this.autor.urlwwa = this.autores[0].urlwwa;
            this.autor.textwwa = this.autores[0].textwwa;
        });
    }
}
AutorComponent.ɵfac = function AutorComponent_Factory(t) { return new (t || AutorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_principal_service__WEBPACK_IMPORTED_MODULE_1__["PrincipalService"])); };
AutorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutorComponent, selectors: [["app-autor"]], decls: 13, vars: 1, consts: [[1, "cuerpoDos"], [1, "mayor"], [1, "blan"], [1, "textPers"], [1, "foto"], ["src", "../../../assets/David.jpeg", "loading", "lazy", "alt", ""], [1, "colores"], [1, "blanc1"], [1, "azul"]], template: function AutorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "David Scarlett Wakelyn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.autor.textautor);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRvci5jb21wb25lbnQuY3NzIn0= */"] });


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







function CategoriesEditComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoriesEditComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
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
CategoriesEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoriesEditComponent, selectors: [["app-categories-edit"]], decls: 47, vars: 4, consts: [[1, "divmenu", 2, "background-color", "#eaeaea"], [1, "col", "px-0", "flex-grow-1"], [1, "container"], ["id", "contenido", 1, "inner-content", 2, "background-color", "rgb(255, 255, 255)", "height", "1300px"], [1, "row"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "textbox", "name", "nombre", "formControlName", "nombre", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "portada", 1, "col-md-3", "control-label"], [1, "col-md-9"], [1, "radio-inline"], ["type", "radio", "name", "portada", "value", "0", "id", "0", "formControlName", "portada"], ["type", "radio", "name", "portada", "value", "1", "id", "1", "checked", "", "formControlName", "portada"], ["for", "hide", 1, "col-md-3", "control-label"], ["type", "radio", "name", "hide", "value", "0", "id", "0", "formControlName", "hide"], ["type", "radio", "name", "hide", "value", "1", "id", "1", "checked", "", "formControlName", "hide"], ["type", "submit", 1, "btn", "float-right", "btn-outline-success", 2, "margin-left", "5px", 3, "disabled"], ["routerLink", "/categorieslist"], [1, "btn", "float-right", "btn-outline-danger"], [1, "alert", "alert-danger"]], template: function CategoriesEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Edit Topic");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CategoriesEditComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CategoriesEditComponent_div_17_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CategoriesEditComponent_div_18_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Appear on the bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " YES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "View for all users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " NO.(only registered) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " YES.(public) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Modify");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Cancel");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.userForm.get("nombre")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = ctx.userForm.get("nombre")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.userForm.get("nombre")) == null ? null : tmp_1_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__["NavbarRegComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"] });


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

module.exports = __webpack_require__(/*! D:\JOBS DEVELOPMENT\News\News\app\src\main.ts */"zUnb");


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










const _c0 = ["fileInput"];
function NewsAddComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", cat_r5.id_categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", cat_r5.nombre, " ");
} }
function NewsAddComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function NewsAddComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
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
        if (this.datos == "https://bulma.io/images/placeholders/480x480.png") {
            this.datos = "";
        }
        else {
            console.log('llegue aca');
            this.datos = this.datos.substring(this.datos.indexOf(',') + 1);
        }
        const enviar = {
            foto: this.datos,
        };
        this.service.formData = {
            id_categoria: this.userForm.value.category,
            titulo: this.userForm.value.Title,
            subtitulo: this.userForm.value.Subtitle,
            descripcion: this.userForm.value.report,
            foto_portada: this.datos,
            foto_noticia: this.userForm.value.fotonot,
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
    } }, decls: 92, vars: 7, consts: [[1, "divmenu", 2, "background-color", "#eaeaea"], [1, "col", "px-0", "flex-grow-1"], [1, "container"], ["id", "contenido", 1, "inner-content", 2, "background-color", "rgb(255, 255, 255)", "height", "1300px"], [1, "row"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["formControlName", "category"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group"], ["type", "textbox", "name", "Title", "formControlName", "Title", "autofocus", "", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "textbox", "name", "Subtitle", "formControlName", "Subtitle", 1, "form-control"], ["name", "report", "formControlName", "report", 1, "form-control"], [1, "field"], [1, "file", "has-name", "is-primary", "is-fullwidth"], [1, "file-label"], ["type", "file", "name", "file", "formControlName", "fotoport", 1, "file-input", 3, "change"], ["fileInput", ""], [1, "containerperfil"], [1, "column"], [3, "src"], ["type", "file", "name", "file", "formControlName", "fotonot", 1, "file-input", 3, "change"], ["fileInput2", ""], ["for", "portada", 1, "col-md-3", "control-label"], [1, "col-md-9"], [1, "radio-inline"], ["type", "radio", "name", "portada", "value", "0", "id", "0", "formControlName", "portada"], ["type", "radio", "name", "portada", "value", "1", "id", "1", "checked", "", "formControlName", "portada"], ["for", "hide", 1, "col-md-3", "control-label"], ["type", "radio", "name", "hide", "value", "0", "id", "0", "formControlName", "hide"], ["type", "radio", "name", "hide", "value", "1", "id", "1", "checked", "", "formControlName", "hide"], ["type", "submit", 1, "btn", "float-right", "btn-outline-success", 2, "margin-left", "5px", 3, "disabled"], ["routerLink", "/newslist"], [1, "btn", "float-right", "btn-outline-danger"], [3, "value"], [1, "alert", "alert-danger"]], template: function NewsAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Add News");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function NewsAddComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Select category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, NewsAddComponent_option_17_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, NewsAddComponent_div_22_Template, 5, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Subtitle (Optional):");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, NewsAddComponent_div_31_Template, 5, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Main Photo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewsAddComponent_Template_input_change_39_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Report Photo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function NewsAddComponent_Template_input_change_51_listener($event) { return ctx.onChange2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "para subir foto 2 de noticia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "aca para subir un video");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "En portada");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, " No Aparece ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, " Aparece ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "Solo para usuarios registrados");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, " No.(public) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Cancel");
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
    } if (rf & 2) {
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.userForm.get("Title")) == null ? null : tmp_2_0.invalid) && (((tmp_2_0 = ctx.userForm.get("Title")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.userForm.get("Title")) == null ? null : tmp_2_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.userForm.get("report")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.userForm.get("report")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.userForm.get("report")) == null ? null : tmp_3_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.imageUrln, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_7__["NavbarRegComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLWFkZC5jb21wb25lbnQuY3NzIn0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FotoslistComponent {
    constructor() { }
    ngOnInit() {
    }
}
FotoslistComponent.ɵfac = function FotoslistComponent_Factory(t) { return new (t || FotoslistComponent)(); };
FotoslistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FotoslistComponent, selectors: [["app-fotoslist"]], decls: 2, vars: 0, template: function FotoslistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "fotoslist works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Rvc2xpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


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
function LiteracyComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noti_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", noti_r3.subtitulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](noti_r3.titulo);
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
LiteracyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LiteracyComponent, selectors: [["app-literacy"]], decls: 15, vars: 3, consts: [[4, "ngIf"], [1, "cuadro"], [1, "mitad1"], [1, "mitad2"], ["src", "../../../assets/ICON LITERACY.png", "alt", ""], [1, "cuadro1"], [1, "part4"], [1, "part2"], [1, "pdfs"], ["class", "pdf", 4, "ngFor", "ngForOf"], [1, "pdf"], [1, "prim"], [1, "seg"], [3, "routerLink"]], template: function LiteracyComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LiteracyComponent_li_13_Template, 8, 2, "li", 9);
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function VideoslistComponent_tr_18_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "YES.(public)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoslistComponent_tr_18_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NO.(only registered)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function VideoslistComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VideoslistComponent_tr_18_p_4_Template, 2, 0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VideoslistComponent_tr_18_p_5_Template, 2, 0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Del");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r1.url, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r1.hide == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", category_r1.hide == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/videdit/", category_r1.id_video, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
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
VideoslistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoslistComponent, selectors: [["app-videoslist"]], decls: 19, vars: 1, consts: [[1, "row"], ["routerLink", "/vidadd"], [1, "btn", "btn-outline-primary"], [1, "fas", "fa-user-plus"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row", 4, "ngFor", "ngForOf"], ["scope", "row"], [1, "d-none", "d-md-table-cell"], [4, "ngIf"], [3, "routerLink"]], template: function VideoslistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Add Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Url Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View for all users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, VideoslistComponent_tr_18_Template, 12, 5, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".table-responsive[_ngcontent-%COMP%]{\r\n  max-width: 98%;\r\n  margin: 1px;\r\n}\r\n  th[_ngcontent-%COMP%]{\r\n    background: #20c3ec;\r\n  }\r\n  .m5[_ngcontent-%COMP%]{\r\n    margin-left: 5px;\r\n    float: right;\r\n  }\r\n  .sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n  .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n  .sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n}\r\n  .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvc2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtFQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0VBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7RUFDQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJ2aWRlb3NsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtcmVzcG9uc2l2ZXtcclxuICBtYXgtd2lkdGg6IDk4JTtcclxuICBtYXJnaW46IDFweDtcclxufVxyXG4gIHRoe1xyXG4gICAgYmFja2dyb3VuZDogIzIwYzNlYztcclxuICB9XHJcbiAgLm01e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgLnNpZGViYXJ7XHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAycmVtIDBweDtcclxufVxyXG4uc2lkZWJhciAubmF2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXp1bCk7XHJcbn1cclxuLnNpZGViYXIgLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tdmlvbGV0YSk7XHJcbn1cclxuLnNpZGViYXIgLm5hdiBhe1xyXG4gICAgY29sb3I6dmFyKC0tYmxhbmNvKTtcclxufSJdfQ== */"] });


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
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function UsersAddComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersAddComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is not available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersAddComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " must not have uppercase. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersAddComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersAddComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersAddComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersAddComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is already registered. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersAddComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " The ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " entered does not have a correct format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersAddComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
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
UsersAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UsersAddComponent, selectors: [["app-users-add"]], decls: 63, vars: 11, consts: [[1, "divmenu", 2, "background-color", "#eaeaea"], [1, "col", "px-0", "flex-grow-1"], [1, "container"], ["id", "contenido", 1, "inner-content", 2, "background-color", "rgb(255, 255, 255)", "height", "1300px"], [1, "row"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "textbox", "name", "nickname", "formControlName", "nickname", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "textbox", "name", "nombre", "formControlName", "nombre", 1, "form-control"], ["type", "textbox", "name", "apellido", "formControlName", "apellido", 1, "form-control"], ["type", "textbox", "name", "email", "formControlName", "email", 1, "form-control"], ["type", "password", "name", "password", "formControlName", "password", "autocomplete", "off", 1, "form-control"], ["for", "latitude", 1, "col-md-3", "control-label"], [1, "col-md-9"], [1, "radio-inline"], ["type", "radio", "name", "rol", "value", "0", "id", "0", "formControlName", "rol"], ["type", "radio", "name", "rol", "value", "1", "id", "1", "checked", "", "formControlName", "rol"], ["name", "descripcion", "formControlName", "descripcion", 1, "form-control"], ["type", "submit", 1, "btn", "float-right", "btn-outline-success", 2, "margin-left", "5px", 3, "disabled"], ["routerLink", "/userslist"], [1, "btn", "float-right", "btn-outline-danger"], [1, "alert", "alert-danger"]], template: function UsersAddComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UsersAddComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Nickname:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UsersAddComponent_div_17_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, UsersAddComponent_div_18_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, UsersAddComponent_div_19_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, UsersAddComponent_div_24_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Last Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, UsersAddComponent_div_29_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, UsersAddComponent_div_34_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, UsersAddComponent_div_35_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, UsersAddComponent_div_36_Template, 6, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, UsersAddComponent_div_41_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Cancel");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".sexagesimal[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n}\r\n.sexagesimal[_ngcontent-%COMP%], .sexagesimalsec[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 6px;\r\n    margin-left: 5px;\r\n}\r\n.box[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    min-width: 80%;\r\n    min-height: 350px;\r\n    margin: 10px;\r\n    padding: 15px;\r\n    border: 1px solid rgba(177, 177, 177, 0.933);\r\n    border-radius: 15px ;\r\n    text-align: justify;\r\n    margin-top: 80 px;\r\n    overflow:initial;\r\n    position:relative;\r\n  }\r\n.cp[_ngcontent-%COMP%]{\r\n      width: 30%;\r\n  }\r\n.container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-left:50px;\r\n    margin-top:40px;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n  }\r\n.sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLWFkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtBQUNBO01BQ0ksVUFBVTtFQUNkO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJ1c2Vycy1hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXhhZ2VzaW1hbCB7XHJcbiAgICB3aWR0aDogNDBweDtcclxufVxyXG4uc2V4YWdlc2ltYWwsIC5zZXhhZ2VzaW1hbHNlYyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5ib3h7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDgwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTc3LCAxNzcsIDE3NywgMC45MzMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCA7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbWFyZ2luLXRvcDogODAgcHg7XHJcbiAgICBvdmVyZmxvdzppbml0aWFsO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5jcHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6NTBweDtcclxuICAgIG1hcmdpbi10b3A6NDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICAuc2lkZWJhcntcclxuICAgIG1hcmdpbjogMHB4IDBweDtcclxuICAgIHBhZGRpbmc6IDJyZW0gMHB4O1xyXG59XHJcbi5zaWRlYmFyIC5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1henVsKTtcclxufVxyXG4uc2lkZWJhciAuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS12aW9sZXRhKTtcclxufVxyXG4uc2lkZWJhciAubmF2IGF7XHJcbiAgICBjb2xvcjp2YXIoLS1ibGFuY28pO1xyXG59Il19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FotosaddComponent {
    constructor() { }
    ngOnInit() {
    }
}
FotosaddComponent.ɵfac = function FotosaddComponent_Factory(t) { return new (t || FotosaddComponent)(); };
FotosaddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FotosaddComponent, selectors: [["app-fotosadd"]], decls: 2, vars: 0, template: function FotosaddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "fotosadd works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Rvc2FkZC5jb21wb25lbnQuY3NzIn0= */"] });


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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".foot[_ngcontent-%COMP%]{background-color: #020568}\r\n.imagesf[_ngcontent-%COMP%]{\r\n    margin-left:0px; height: 100px;}\r\n.linksf[_ngcontent-%COMP%]{color: white;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci1tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSx5QkFBeUI7QUFDL0I7SUFDSSxlQUFlLEVBQUUsYUFBYSxDQUFDO0FBQ25DLFFBQVEsWUFBWSxDQUFDIiwiZmlsZSI6ImZvb3Rlci1tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdHtiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwNTY4fVxyXG4uaW1hZ2VzZntcclxuICAgIG1hcmdpbi1sZWZ0OjBweDsgaGVpZ2h0OiAxMDBweDt9XHJcbi5saW5rc2Z7Y29sb3I6IHdoaXRlO30iXX0= */"] });


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
                console.log(res);
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
                    console.log(res);
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
    constructor(service, servicecat, router, _route) {
        this.service = service;
        this.servicecat = servicecat;
        this.router = router;
        this._route = _route;
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
                console.log(this.reporte.foto_portada);
                this.reporte.foto_portada = this.apiurl + "/images/News/" + this.reporte.id_noticia + "/portada.png";
            }
            else {
                this.reporte.foto_portada = "../../../assets/LOGO.png";
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
}
ReporteComponent.ɵfac = function ReporteComponent_Factory(t) { return new (t || ReporteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
ReporteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReporteComponent, selectors: [["app-reporte"]], decls: 13, vars: 6, consts: [[4, "ngIf"], [1, "container", 2, "align-items", "center"], ["alt", "", 2, "width", "100%", "height", "500px", 3, "src"], ["routerLink", "/", 1, "btn", "btn-outline-success"]], template: function ReporteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ReporteComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReporteComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Ir a inicio...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.estado == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.estado == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Title: ", ctx.reporte.titulo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Subtitle: ", ctx.reporte.subtitulo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Report: ", ctx.reporte.descripcion, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.reporte.foto_portada, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_8__["NavbarRegComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRlLmNvbXBvbmVudC5jc3MifQ== */"] });


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








function NewsDelComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", cat_r3.id_categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cat_r3.nombre, " ");
} }
function NewsDelComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NewsDelComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
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
NewsDelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewsDelComponent, selectors: [["app-news-del"]], decls: 70, vars: 5, consts: [[1, "divmenu", 2, "background-color", "#eaeaea"], [1, "col", "px-0", "flex-grow-1"], [1, "container"], ["id", "contenido", 1, "inner-content", 2, "background-color", "rgb(255, 255, 255)", "height", "1300px"], [1, "row"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["formControlName", "category"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group"], ["type", "textbox", "name", "Title", "formControlName", "Title", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "textbox", "name", "Subtitle", "formControlName", "Subtitle", 1, "form-control"], ["name", "report", "formControlName", "report", 1, "form-control"], ["for", "portada", 1, "col-md-3", "control-label"], [1, "col-md-9"], [1, "radio-inline"], ["type", "radio", "name", "portada", "value", "0", "id", "0", "formControlName", "portada"], ["type", "radio", "name", "portada", "value", "1", "id", "1", "checked", "", "formControlName", "portada"], ["for", "hide", 1, "col-md-3", "control-label"], ["type", "radio", "name", "hide", "value", "0", "id", "0", "formControlName", "hide"], ["type", "radio", "name", "hide", "value", "1", "id", "1", "checked", "", "formControlName", "hide"], ["type", "submit", 1, "btn", "float-right", "btn-outline-success", 2, "margin-left", "5px", 3, "disabled"], ["routerLink", "/newslist"], [1, "btn", "float-right", "btn-outline-danger"], [3, "value"], [1, "alert", "alert-danger"]], template: function NewsDelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Modify News");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NewsDelComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Select category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NewsDelComponent_option_17_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, NewsDelComponent_div_22_Template, 5, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Subtitle (Optional):");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, NewsDelComponent_div_31_Template, 5, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "aca para subir archivo de foto 1 para portada");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "para subir foto 2 de noticia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "aca para subir un video");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "En portada");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " No Aparece ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Aparece ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Solo para usuarios registrados");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " No.(public) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 25);
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
    } if (rf & 2) {
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.userForm.get("Title")) == null ? null : tmp_2_0.invalid) && (((tmp_2_0 = ctx.userForm.get("Title")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.userForm.get("Title")) == null ? null : tmp_2_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.userForm.get("report")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.userForm.get("report")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.userForm.get("report")) == null ? null : tmp_3_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_5__["NavbarRegComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLWRlbC5jb21wb25lbnQuY3NzIn0= */"] });


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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " THERE IS AN INCONVENIENCE ... TRY LATER. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " YOUR INQUIRY WAS SENT CORRECTLY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
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
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 50, vars: 10, consts: [[1, "cuerpoCuatro"], [1, "formulario"], ["autocomplete", "off", 3, "submit"], ["form", "ngForm"], [1, "form-group"], ["for", "fullname"], ["name", "nombre", "type", "text", "ng-maxlength", "8", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["nombre", "ngModel"], ["pattern", "[a-zA-Z]$", 1, "alert", "alert-danger", 3, "hidden"], ["for", "e-mail"], ["pattern", "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}$", "name", "correo", "type", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["correo", "ngModel"], [1, "alert", "alert-danger", 3, "hidden"], [1, "form-group", "message"], ["for", "message"], ["name", "consulta", "cols", "3", "rows", "2", "type", "text", "ngModel", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["consulta", "ngModel"], ["class", "alert alert-danger", "style", "text-align: center;", 4, "ngIf"], ["class", "alert alert-success", "style", "text-align: center;", 4, "ngIf"], ["class", "alert alert-primary", "style", "text-align: center;", 4, "ngIf"], [1, "form-group", "send"], ["type", "submit", 2, "background-color", "#F4F4F4", "color", "#020568", 3, "disabled"], [1, "buscar"], ["id", "mapid", 2, "width", "100%", "height", "60vh", "margin-bottom", "10%"], [1, "alert", "alert-danger", 2, "text-align", "center"], [1, "alert", "alert-success", 2, "text-align", "center"], [1, "alert", "alert-primary", 2, "text-align", "center"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 23);
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
DownloadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DownloadComponent, selectors: [["app-download"]], decls: 12, vars: 2, consts: [[4, "ngIf"], [1, "cuadro"], [1, "mitad1"], [1, "mitad2"], ["src", "../../../assets/ICON RESOURCE.png", "alt", ""]], template: function DownloadComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ">\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-footer");
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
        console.log(this.status);
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function UsersEditComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersEditComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is not available. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersEditComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " must not have uppercase. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersEditComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersEditComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Last Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersEditComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersEditComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is already registered. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UsersEditComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
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
UsersEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UsersEditComponent, selectors: [["app-users-edit"]], decls: 56, vars: 10, consts: [[1, "col", "px-0", "flex-grow-1"], [1, "container", "py-3"], ["id", "contenido", 1, "inner-content", 2, "background-color", "rgb(255, 255, 255)", "height", "1300px"], [1, "container"], [1, "row"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "textbox", "name", "nickname", "formControlName", "nickname", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "textbox", "name", "nombre", "formControlName", "nombre", 1, "form-control"], ["type", "textbox", "name", "apellido", "formControlName", "apellido", "required", "", 1, "form-control"], ["type", "textbox", "name", "email", "formControlName", "email", 1, "form-control"], ["for", "latitude", 1, "col-md-3", "control-label"], [1, "col-md-9"], [1, "radio-inline"], ["type", "radio", "name", "rol", "value", "0", "id", "0", "formControlName", "rol"], ["type", "radio", "name", "rol", "value", "1", "id", "1", "checked", "", "formControlName", "rol"], ["name", "descripcion", "formControlName", "descripcion", 1, "form-control"], ["type", "submit", 1, "btn", "float-right", "btn-outline-success", 2, "margin-left", "5px", 3, "disabled"], ["routerLink", "/userslist"], [1, "btn", "float-right", "btn-outline-danger"], [1, "alert", "alert-danger"]], template: function UsersEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Edit User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UsersEditComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Nickname:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, UsersEditComponent_div_15_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UsersEditComponent_div_16_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, UsersEditComponent_div_17_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, UsersEditComponent_div_22_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Last Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, UsersEditComponent_div_27_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, UsersEditComponent_div_32_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, UsersEditComponent_div_33_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, UsersEditComponent_div_34_Template, 6, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Modify");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Cancel");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".sexagesimal[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n}\r\n.sexagesimal[_ngcontent-%COMP%], .sexagesimalsec[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 6px;\r\n    margin-left: 5px;\r\n}\r\n.box[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    min-width: 80%;\r\n    min-height: 350px;\r\n    margin: 10px;\r\n    padding: 15px;\r\n    border: 1px solid rgba(177, 177, 177, 0.933);\r\n    border-radius: 15px ;\r\n    text-align: justify;\r\n    margin-top: 80 px;\r\n    overflow:initial;\r\n    position:relative;\r\n  }\r\n.cp[_ngcontent-%COMP%]{\r\n      width: 30%;\r\n  }\r\n.container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-left:50px;\r\n    margin-top:40px;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7QUFDQTtNQUNJLFVBQVU7RUFDZDtBQUNBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGVBQWU7RUFDakIiLCJmaWxlIjoidXNlcnMtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNleGFnZXNpbWFsIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG59XHJcbi5zZXhhZ2VzaW1hbCwgLnNleGFnZXNpbWFsc2VjIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLmJveHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogODAlO1xyXG4gICAgbWluLWhlaWdodDogMzUwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNzcsIDE3NywgMTc3LCAwLjkzMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBtYXJnaW4tdG9wOiA4MCBweDtcclxuICAgIG92ZXJmbG93OmluaXRpYWw7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB9XHJcbiAgLmNwe1xyXG4gICAgICB3aWR0aDogMzAlO1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDo1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDo0MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfSJdfQ== */"] });


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

/***/ "PQYE":
/*!*************************************************************!*\
  !*** ./src/app/components/news-edit/news-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: NewsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsEditComponent", function() { return NewsEditComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/news.service */ "Ado8");
/* harmony import */ var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categories.service */ "ycII");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../navbar-reg/navbar-reg.component */ "eUNE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function NewsEditComponent_option_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", cat_r3.id_categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cat_r3.nombre, " ");
} }
function NewsEditComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NewsEditComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class NewsEditComponent {
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
        this.service.formData = {
            id_categoria: this.userForm.value.category,
            titulo: this.userForm.value.Title,
            subtitulo: this.userForm.value.Subtitle,
            descripcion: this.userForm.value.report,
            foto_portada: this.userForm.value.fotoport,
            foto_noticia: this.userForm.value.fotonot,
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
}
NewsEditComponent.ɵfac = function NewsEditComponent_Factory(t) { return new (t || NewsEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
NewsEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewsEditComponent, selectors: [["app-news-edit"]], decls: 70, vars: 5, consts: [[1, "divmenu", 2, "background-color", "#eaeaea"], [1, "col", "px-0", "flex-grow-1"], [1, "container"], ["id", "contenido", 1, "inner-content", 2, "background-color", "rgb(255, 255, 255)", "height", "1300px"], [1, "row"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], ["formControlName", "category"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group"], ["type", "textbox", "name", "Title", "formControlName", "Title", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "textbox", "name", "Subtitle", "formControlName", "Subtitle", 1, "form-control"], ["name", "report", "formControlName", "report", 1, "form-control"], ["for", "portada", 1, "col-md-3", "control-label"], [1, "col-md-9"], [1, "radio-inline"], ["type", "radio", "name", "portada", "value", "0", "id", "0", "formControlName", "portada"], ["type", "radio", "name", "portada", "value", "1", "id", "1", "checked", "", "formControlName", "portada"], ["for", "hide", 1, "col-md-3", "control-label"], ["type", "radio", "name", "hide", "value", "0", "id", "0", "formControlName", "hide"], ["type", "radio", "name", "hide", "value", "1", "id", "1", "checked", "", "formControlName", "hide"], ["type", "submit", 1, "btn", "float-right", "btn-outline-success", 2, "margin-left", "5px", 3, "disabled"], ["routerLink", "/newslist"], [1, "btn", "float-right", "btn-outline-danger"], [3, "value"], [1, "alert", "alert-danger"]], template: function NewsEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Modify News");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function NewsEditComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Select category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NewsEditComponent_option_17_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, NewsEditComponent_div_22_Template, 5, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Subtitle (Optional):");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, NewsEditComponent_div_31_Template, 5, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "aca para subir archivo de foto 1 para portada");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "para subir foto 2 de noticia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "aca para subir un video");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "En portada");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " No Aparece ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Aparece ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Solo para usuarios registrados");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " No.(public) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Modify");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 25);
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
    } if (rf & 2) {
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.userForm.get("Title")) == null ? null : tmp_2_0.invalid) && (((tmp_2_0 = ctx.userForm.get("Title")) == null ? null : tmp_2_0.dirty) || ((tmp_2_0 = ctx.userForm.get("Title")) == null ? null : tmp_2_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.userForm.get("report")) == null ? null : tmp_3_0.invalid) && (((tmp_3_0 = ctx.userForm.get("report")) == null ? null : tmp_3_0.dirty) || ((tmp_3_0 = ctx.userForm.get("report")) == null ? null : tmp_3_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_5__["NavbarRegComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"] });


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







function CategoriesAddComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoriesAddComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
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
CategoriesAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoriesAddComponent, selectors: [["app-categories-add"]], decls: 25, vars: 4, consts: [[1, "divmenu", 2, "background-color", "#eaeaea"], [1, "col", "px-0", "flex-grow-1"], [1, "container"], ["id", "contenido", 1, "inner-content", 2, "background-color", "rgb(255, 255, 255)", "height", "1300px"], [1, "row"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "textbox", "name", "nombre", "formControlName", "nombre", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "float-right", "btn-outline-success", 2, "margin-left", "5px", 3, "disabled"], ["routerLink", "/categorieslist"], [1, "btn", "float-right", "btn-outline-danger"], [1, "alert", "alert-danger"]], template: function CategoriesAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Add Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CategoriesAddComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CategoriesAddComponent_div_17_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CategoriesAddComponent_div_18_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Cancel");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.userForm.get("nombre")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = ctx.userForm.get("nombre")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.userForm.get("nombre")) == null ? null : tmp_1_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__["NavbarRegComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLWFkZC5jb21wb25lbnQuY3NzIn0= */"] });


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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", cat_r5.id_categoria);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", cat_r5.nombre, " ");
} }
function SearchComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " The year must contain 4 numeric digits. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchComponent_button_26_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.ordenarbusqueda(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchComponent_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchComponent_button_32_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.limpiar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "RESET");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchComponent_div_37_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noticia_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", noticia_r11.foto_portada, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](noticia_r11.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("routerLink", noticia_r11.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](noticia_r11.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](noticia_r11.subtitulo);
} }
function SearchComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SearchComponent_div_37_div_2_Template, 11, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.news);
} }
class SearchComponent {
    constructor(formBuilder, service, servicecat, router, _route) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.servicecat = servicecat;
        this.router = router;
        this._route = _route;
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
    }
    ngOnInit() {
        this.userForm.patchValue({
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
                            //MOSTRAR CARTEL QUE NO HAY QUE CUMPLAN TODAS LAS CONDICIONES
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
                    //MOSTRAR CARTEL QUE NO HAY QUE CUMPLAN TODAS LAS CONDICIONES
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
                        //MOSTRAR CARTEL QUE NO HAY QUE CUMPLAN TODAS LAS CONDICIONES
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
        if (this.news) {
            this.news = this.news.reverse();
        }
        console.log(this.news);
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
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 38, vars: 7, consts: [[1, "cuerpoTre"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "busqueda"], ["name", "category", "formControlName", "category", 1, "topics"], ["value", "-1", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group"], ["type", "text", "name", "year", "formControlName", "year"], ["class", "alert alert-danger", 4, "ngIf"], [1, "distinte"], ["type", "text", "name", "keyword", "formControlName", "keyword"], [1, "form-group", "botes"], [1, "distinte1"], ["class", "este ordenar", 3, "click", 4, "ngIf"], ["type", "submit", 1, "este", 3, "disabled"], [1, "buscando", "material-icons"], [3, "click", 4, "ngIf"], [1, "pedaz"], [1, "ped1"], [1, "ped2"], ["class", "resour", 4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], [1, "este", "ordenar", 3, "click"], [1, "material-icons"], [3, "click"], [1, "resour"], [1, "resourDon"], ["class", "li", 4, "ngFor", "ngForOf"], [1, "li"], [1, "descImg"], ["alt", "", 3, "src"], [1, "descTex"], [1, "dat"], [3, "routerLink"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, SearchComponent_button_26_Template, 5, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, SearchComponent_button_32_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, SearchComponent_div_37_Template, 3, 1, "div", 20);
    } if (rf & 2) {
        let tmp_2_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.userForm.get("year")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.userForm.get("year")) == null ? null : tmp_2_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mostrar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.userForm.untouched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mostrar);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
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
DashboardRegComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardRegComponent, selectors: [["app-dashboard-reg"]], decls: 23, vars: 0, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], [1, "nav-link", "active"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"]], template: function DashboardRegComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " aca va un texlorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores at ex consequuntur cumque illum iste culpa? Consequatur quo assumenda unde, explicabo, aut pariatur maxime ducimus laborum magnam culpa, distinctio dolorem! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sunt et quisquam libero ratione dolore amet blanditiis modi iusto. Consequuntur est ipsum cum quos reiciendis ut cumque, voluptate nihil quidem!Lorem Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate fuga doloribus voluptas architecto minus debitis? Voluptates corporis accusamus dolor esse. Fugiat eligendi cupiditate cum eaque voluptatibus et eveniet sint officiis. to lindo que le habla al administrador ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-footer-main");
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_1__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_3__["FooterMainComponent"]], styles: [".sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1yZWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiZGFzaGJvYXJkLXJlZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXJ7XHJcbiAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAycmVtIDBweDtcclxufVxyXG4uc2lkZWJhciAubmF2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXp1bCk7XHJcbn1cclxuLnNpZGViYXIgLmFjdGl2ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tdmlvbGV0YSk7XHJcbn1cclxuLnNpZGViYXIgLm5hdiBhe1xyXG4gICAgY29sb3I6dmFyKC0tYmxhbmNvKTtcclxufVxyXG4iXX0= */"] });


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_7__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2xpY3kuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/router */ "tyNb");







// COMPONENTES




















// usuarios






// news




// categories




//Photos
// SERVICIOS
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_53__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_53__["ɵɵdefineInjector"]({ providers: [
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_53__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
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
        _components_datavisual_fotosedit_fotosedit_component__WEBPACK_IMPORTED_MODULE_52__["FotoseditComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_53__["ɵɵsetComponentScope"](_components_datav_datav_component__WEBPACK_IMPORTED_MODULE_13__["DatavComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
    _components_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_8__["NavbarRegComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_54__["RouterLinkWithHref"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"]], []);


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

class VideosdelComponent {
    constructor() { }
    ngOnInit() {
    }
}
VideosdelComponent.ɵfac = function VideosdelComponent_Factory(t) { return new (t || VideosdelComponent)(); };
VideosdelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideosdelComponent, selectors: [["app-videosdel"]], decls: 2, vars: 0, template: function VideosdelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "videosdel works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlb3NkZWwuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/news.service */ "Ado8");
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
function DatavComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "figcaption");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noticia_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", noticia_r4.foto_portada, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", noticia_r4.subtitulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](noticia_r4.titulo);
} }
function DatavComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "figcaption");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const noticia_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", noticia_r5.foto_portada, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](noticia_r5.titulo);
} }
class DatavComponent {
    constructor(service, _service, router, _route, cargaJS) {
        this.service = service;
        this._service = _service;
        this.router = router;
        this._route = _route;
        this.cargaJS = cargaJS;
        this.ids = "/rep/";
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
            this._service.list().subscribe((res) => {
                this.videos = res;
            });
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
                    this.noticiastodas[i].subtitulo = this.urlarmada;
                }
                this.news = this.noticiastodas;
                this.todaslasnews = this.noticiastodas;
            });
        }
        else {
            this._service.listNR().subscribe((res) => {
                this.videos = res;
            });
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
                    this.noticiastodas[i].subtitulo = this.urlarmada;
                }
                this.news = this.noticiastodas;
                this.todaslasnews = this.noticiastodas;
            });
        }
    }
    avanzarimages() {
    }
    retrocederimages() { }
}
DatavComponent.ɵfac = function DatavComponent_Factory(t) { return new (t || DatavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_videos_service__WEBPACK_IMPORTED_MODULE_3__["VideosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cargarjv_service__WEBPACK_IMPORTED_MODULE_5__["CargarjvService"])); };
DatavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DatavComponent, selectors: [["app-datav"]], decls: 37, vars: 4, consts: [[4, "ngIf"], [1, "cuadro"], [1, "mitad1"], [1, "mitad2"], ["src", "../../../assets/DATAVISUAL.png", "alt", ""], [1, "cuadro1"], [1, "part1"], [1, "part2"], [1, "carusel"], [1, "carousel__contenedor"], ["aria-label", "Previous slide", 1, "carousel__anterior"], [1, "carousel__lista"], [4, "ngFor", "ngForOf"], ["aria-label", "Next slide", 1, "carousel__siguiente"], [1, "part3"], [1, "carusel", "vide"], ["aria-label", "Previous slide", 1, "carousel__anteriorv"], [1, "carousel__listav"], ["aria-label", "Next slide", 1, "carousel__siguientev"], [1, "carousel__element"], ["alt", "", 3, "src"], [3, "routerLink"]], template: function DatavComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Imagenes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, DatavComponent_div_19_Template, 6, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "<");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, DatavComponent_div_33_Template, 5, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.estado == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.estado == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.news);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.news);
    } }, styles: [".carusel[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n    margin: 0px auto;\r\n\tpadding: 2rem 0px;\r\n}\r\n.vide[_ngcontent-%COMP%]{\r\n\tbackground: var(--violeta);\r\n}\r\n.carousel__contenedor[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\twidth: 90%;\r\n\tmargin: 0px auto;\r\n}\r\n.carousel__anterior[_ngcontent-%COMP%], .carousel__siguiente[_ngcontent-%COMP%], .carousel__siguientev[_ngcontent-%COMP%], .carousel__anteriorv[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tdisplay: block;\r\n\twidth: 3rem;\r\n\theight: 3rem;\r\n\tborder: none;\r\n\ttop: calc(50% - 35px);\r\n\tcursor: pointer;\r\n\tline-height: 30px;\r\n\ttext-align: center;\r\n\tbackground: transparent;\r\n\tcolor: #000;\r\n    font-size: 2rem;\r\n}\r\n.carousel__anterior[_ngcontent-%COMP%]:hover, .carousel__siguiente[_ngcontent-%COMP%]:hover, .carousel__anteriorv[_ngcontent-%COMP%]:hover, .carousel__siguientev[_ngcontent-%COMP%]:hover {\r\n\topacity: 100%;\r\n}\r\n.carousel__anterior[_ngcontent-%COMP%], .carousel__anteriorv[_ngcontent-%COMP%] {\r\n\tleft: -5px;\r\n}\r\n.carousel__siguiente[_ngcontent-%COMP%], .carousel__siguientev[_ngcontent-%COMP%] {\r\n\tright: -5px;\r\n}\r\n.carousel__lista[_ngcontent-%COMP%], .carousel__listav[_ngcontent-%COMP%] {\r\n\toverflow: hidden;\r\n}\r\n.carousel__element[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n    margin: 0px 1rem;\r\n\theight: 30vh;\r\n}\r\n.carousel__element[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .carousel__element[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\theight: 80%;\r\n\tobject-fit: contain;\r\n}\r\n.carousel__element[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{\r\n\theight: 20%;\r\n\toverflow: hidden;\r\n}\r\n.carousel__element[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\ttext-decoration: none;\r\n\tcolor: var(--azul);\r\n}\r\n.vide[_ngcontent-%COMP%]   .carousel__element[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n\tcolor: var(--blanco);\r\n}\r\n@media screen and (max-width: 800px) {\r\n\tbody[_ngcontent-%COMP%] {\r\n\t\tpadding: 40px 0;\r\n\t}\r\n\r\n\t.contenido-principal[_ngcontent-%COMP%] {\r\n\t\tflex-direction: column;\r\n\t}\r\n\r\n\t.contenido-principal[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n\t\twidth: 100%;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsV0FBVztJQUNSLGdCQUFnQjtDQUNuQixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLDBCQUEwQjtBQUMzQjtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixnQkFBZ0I7QUFDakI7QUFFQTs7OztDQUlDLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsV0FBVztDQUNYLFlBQVk7Q0FDWixZQUFZO0NBQ1oscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLHVCQUF1QjtDQUN2QixXQUFXO0lBQ1IsZUFBZTtBQUNuQjtBQUVBOzs7O0NBSUMsYUFBYTtBQUNkO0FBRUE7Q0FDQyxVQUFVO0FBQ1g7QUFFQTtDQUNDLFdBQVc7QUFDWjtBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxrQkFBa0I7SUFDZixnQkFBZ0I7Q0FDbkIsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLFdBQVc7Q0FDWCxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLG9CQUFvQjtBQUNyQjtBQUdBO0NBQ0M7RUFDQyxlQUFlO0NBQ2hCOztDQUVBO0VBQ0Msc0JBQXNCO0NBQ3ZCOztDQUVBO0VBQ0MsV0FBVztDQUNaO0FBQ0QiLCJmaWxlIjoiZGF0YXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2FydXNlbHtcclxuXHR3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcblx0cGFkZGluZzogMnJlbSAwcHg7XHJcbn1cclxuLnZpZGV7XHJcblx0YmFja2dyb3VuZDogdmFyKC0tdmlvbGV0YSk7XHJcbn1cclxuLmNhcm91c2VsX19jb250ZW5lZG9yIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDkwJTtcclxuXHRtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcblxyXG4uY2Fyb3VzZWxfX2FudGVyaW9yLFxyXG4uY2Fyb3VzZWxfX3NpZ3VpZW50ZSxcclxuLmNhcm91c2VsX19zaWd1aWVudGV2LFxyXG4uY2Fyb3VzZWxfX2FudGVyaW9ydiB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAzcmVtO1xyXG5cdGhlaWdodDogM3JlbTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0dG9wOiBjYWxjKDUwJSAtIDM1cHgpO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRsaW5lLWhlaWdodDogMzBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0Y29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5jYXJvdXNlbF9fYW50ZXJpb3I6aG92ZXIsXHJcbi5jYXJvdXNlbF9fc2lndWllbnRlOmhvdmVyLFxyXG4uY2Fyb3VzZWxfX2FudGVyaW9ydjpob3ZlcixcclxuLmNhcm91c2VsX19zaWd1aWVudGV2OmhvdmVyIHtcclxuXHRvcGFjaXR5OiAxMDAlO1xyXG59XHJcblxyXG4uY2Fyb3VzZWxfX2FudGVyaW9yLC5jYXJvdXNlbF9fYW50ZXJpb3J2IHtcclxuXHRsZWZ0OiAtNXB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWxfX3NpZ3VpZW50ZSwuY2Fyb3VzZWxfX3NpZ3VpZW50ZXYge1xyXG5cdHJpZ2h0OiAtNXB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWxfX2xpc3RhLC5jYXJvdXNlbF9fbGlzdGF2IHtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2Fyb3VzZWxfX2VsZW1lbnQge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMHB4IDFyZW07XHJcblx0aGVpZ2h0OiAzMHZoO1xyXG59XHJcbi5jYXJvdXNlbF9fZWxlbWVudCBpbWcsXHJcbi5jYXJvdXNlbF9fZWxlbWVudCB2aWRlb3tcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDgwJTtcclxuXHRvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcbi5jYXJvdXNlbF9fZWxlbWVudCBmaWdjYXB0aW9ue1xyXG5cdGhlaWdodDogMjAlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmNhcm91c2VsX19lbGVtZW50IGF7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiB2YXIoLS1henVsKTtcclxufVxyXG4udmlkZSAuY2Fyb3VzZWxfX2VsZW1lbnQgYXtcclxuXHRjb2xvcjogdmFyKC0tYmxhbmNvKTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcblx0Ym9keSB7XHJcblx0XHRwYWRkaW5nOiA0MHB4IDA7XHJcblx0fVxyXG5cclxuXHQuY29udGVuaWRvLXByaW5jaXBhbCB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdH1cclxuXHJcblx0LmNvbnRlbmlkby1wcmluY2lwYWwgPiAqIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdH1cclxufSAgXHJcbiJdfQ== */"] });


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
function NavbarRegComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.Username);
} }
class NavbarRegComponent {
    // cities:any;
    constructor(router, cargaJS, _route) {
        this.router = router;
        this.cargaJS = cargaJS;
        this._route = _route;
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
    recargar() {
    }
    ;
}
NavbarRegComponent.ɵfac = function NavbarRegComponent_Factory(t) { return new (t || NavbarRegComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cargarjv_service__WEBPACK_IMPORTED_MODULE_2__["CargarjvService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"])); };
NavbarRegComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarRegComponent, selectors: [["app-navbar-reg"]], decls: 28, vars: 2, consts: [[1, "nav"], [1, "logo"], ["src", "../../../assets/LOGO.png", "alt", "logo"], ["id", "links", 1, "links"], ["routerLink", "/main", "routerLinkActive", "'active'"], ["routerLink", "/policy", "routerLinkActive", "'active'"], ["routerLink", "/literacy", "routerLinkActive", "'active'"], ["routerLink", "/dvisuals", "routerLinkActive", "'active'", 3, "click"], ["routerLink", "/download", "routerLinkActive", "'active'"], ["routerLink", "/contact", "routerLinkActive", "'active'"], ["class", "linklogin", 4, "ngIf"], [1, "icons"], ["href", "https://twitter.com/DavidWakelyn?s=08", "target", "_blank"], ["src", "../../../assets/TWITTER.png", "alt", ""], ["href", "https://www.linkedin.com/in/david-scarlett-wakelyn-9227275/", "target", "_blank"], ["src", "../../../assets/LINKEDIN.png", "alt", ""], ["id", "hamburguer", 1, "hamburguer"], ["id", "line1"], ["id", "line2"], ["id", "line3"], ["id", "conten"], [1, "linklogin"], ["routerLink", "/logout", "routerLinkActive", "'active'", 1, "login"], ["routerLink", "/panela", "routerLinkActive", "'active'", 1, "login"]], template: function NavbarRegComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "policy analyses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "literacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarRegComponent_Template_a_click_10_listener() { return ctx.recargar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "data visuals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NavbarRegComponent_div_16_Template, 3, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NavbarRegComponent_div_17_Template, 3, 1, "div", 10);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rol == "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.rol == "0");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n}\r\nhtml[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\nbody[_ngcontent-%COMP%]{\r\n    background: var(--blanco);\r\n}\r\n\r\n.nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n    display: grid;\r\n    grid-template-columns: 20% 50% 15% 15%;\r\n    justify-content: space-between;\r\n}\r\n.nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n    background-color: var(--blanco);\r\n    margin: 0px 10px 0px 20px;\r\n    text-align: center;\r\n}\r\n.nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    height: 90%;\r\n    margin: auto;\r\n}\r\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    width: 100%;\r\n    margin: auto .2rem;\r\n    text-transform: uppercase;\r\n    justify-content: space-around;\r\n    display: grid;\r\n    grid-template-columns: repeat(6, 1fr);\r\n}\r\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: var(--blanco);\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none;\r\n    height: auto;\r\n    padding: 0px 5px;\r\n}\r\n.nav[_ngcontent-%COMP%]   .linklogin[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n}\r\n.nav[_ngcontent-%COMP%]   .linklogin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: var(--blanco);\r\n    text-decoration: none;\r\n}\r\n.icons[_ngcontent-%COMP%]{\r\n    margin: auto 20px auto 0px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n.icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    margin: 5px;\r\n    color: var(--blanco);\r\n    text-decoration: none;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n.icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 2.5rem;\r\n    height: 2.5rem;\r\n}\r\n#hamburguer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    width: 30px;\r\n    height: 3px;\r\n    background-color: var(--blanco);\r\n    margin: 5px;\r\n    transition: all 0.3s ease;\r\n}\r\n.hamburguer[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n#conten[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n@media(max-width: 920px){\r\n                html[_ngcontent-%COMP%]{\r\n                    font-size: 16px;\r\n                }\r\n            \r\n            \r\n                \r\n\r\n                .nav[_ngcontent-%COMP%]{\r\n                    background-color: var(--azul);\r\n                    display: grid;\r\n                    grid-template-columns: 2fr 1fr 2fr 1fr;\r\n                }\r\n                .nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{\r\n                    display: none;\r\n                }\r\n                .nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n                    width: 100%;\r\n                    height: 100%;\r\n                }\r\n                .nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n                    padding: 5px;\r\n                    margin: 0px;\r\n                    height: 100%;\r\n                    width: 100%;\r\n                }\r\n                .nav[_ngcontent-%COMP%]   .linklogin[_ngcontent-%COMP%]{\r\n                    margin: auto 5px;\r\n                }\r\n                .hamburguer[_ngcontent-%COMP%]{\r\n                    display: block;\r\n                    cursor: pointer;\r\n                    margin: auto;\r\n                    z-index: 2;\r\n                    transition: all 0.7s ease;\r\n                }\r\n                .aparece[_ngcontent-%COMP%]{\r\n                    display: block;\r\n                    position: absolute;\r\n                    right: 0px;\r\n                    z-index: 5;\r\n                    background-color: var(--azul);\r\n                    padding: 20px 5px;\r\n                    transition: all .5 ease;\r\n                    text-transform: uppercase;\r\n                    animation: menu 1s;\r\n                    width: 30%;\r\n                }\r\n                .desapa[_ngcontent-%COMP%]{\r\n                    animation: desmenu 1s;\r\n                }\r\n                @keyframes desmenu {\r\n                    0%{transform: translateX(0px);}\r\n                    100%{transform: translateX(15.625rem);}\r\n                }\r\n                @keyframes menu {\r\n                    0%{transform: translateX(200px);}\r\n                    100%{transform: translateX(0px);}\r\n                }\r\n                .aparece[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n                    color: var(--blanco);\r\n                    display: block;\r\n                    margin-top: 10px;\r\n                    text-decoration: none;\r\n                }\r\n            }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci1yZWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSSw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHNDQUFzQztJQUN0Qyw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHFDQUFxQztBQUN6QztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBSVk7Z0JBQ0k7b0JBQ0ksZUFBZTtnQkFDbkI7OztnQkFHQSxjQUFjOztnQkFFZDtvQkFDSSw2QkFBNkI7b0JBQzdCLGFBQWE7b0JBQ2Isc0NBQXNDO2dCQUMxQztnQkFDQTtvQkFDSSxhQUFhO2dCQUNqQjtnQkFDQTtvQkFDSSxXQUFXO29CQUNYLFlBQVk7Z0JBQ2hCO2dCQUNBO29CQUNJLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxZQUFZO29CQUNaLFdBQVc7Z0JBQ2Y7Z0JBQ0E7b0JBQ0ksZ0JBQWdCO2dCQUNwQjtnQkFDQTtvQkFDSSxjQUFjO29CQUNkLGVBQWU7b0JBQ2YsWUFBWTtvQkFDWixVQUFVO29CQUNWLHlCQUF5QjtnQkFDN0I7Z0JBQ0E7b0JBQ0ksY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLFVBQVU7b0JBQ1YsVUFBVTtvQkFDViw2QkFBNkI7b0JBQzdCLGlCQUFpQjtvQkFDakIsdUJBQXVCO29CQUN2Qix5QkFBeUI7b0JBQ3pCLGtCQUFrQjtvQkFDbEIsVUFBVTtnQkFDZDtnQkFDQTtvQkFDSSxxQkFBcUI7Z0JBQ3pCO2dCQUNBO29CQUNJLEdBQUcsMEJBQTBCLENBQUM7b0JBQzlCLEtBQUssZ0NBQWdDLENBQUM7Z0JBQzFDO2dCQUNBO29CQUNJLEdBQUcsNEJBQTRCLENBQUM7b0JBQ2hDLEtBQUssMEJBQTBCLENBQUM7Z0JBQ3BDO2dCQUNBO29CQUNJLG9CQUFvQjtvQkFDcEIsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLHFCQUFxQjtnQkFDekI7WUFDSiIsImZpbGUiOiJuYXZiYXItcmVnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmh0bWx7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsYW5jbyk7XHJcbn1cclxuXHJcbi8qQmFycmEgZGUgbmF2ZWdhY2lvbiovXHJcbi5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1henVsKTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA1MCUgMTUlIDE1JTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4ubmF2IC5sb2dve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhbmNvKTtcclxuICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5hdiAubG9nbyBpbWd7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLm5hdiAubGlua3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvIC4ycmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XHJcbn1cclxuLm5hdiAubGlua3MgYXtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFuY28pO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xyXG59XHJcbi5uYXYgLmxpbmtsb2dpbntcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4ubmF2IC5saW5rbG9naW4gYXtcclxuICAgIGNvbG9yOiB2YXIoLS1ibGFuY28pO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5pY29uc3tcclxuICAgIG1hcmdpbjogYXV0byAyMHB4IGF1dG8gMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxufVxyXG4uaWNvbnMgYXtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWJsYW5jbyk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uaWNvbnMgaW1ne1xyXG4gICAgd2lkdGg6IDIuNXJlbTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG59XHJcbiNoYW1idXJndWVyIGRpdntcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFuY28pO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcbi5oYW1idXJndWVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jY29udGVue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA5MjBweCl7XHJcbiAgICAgICAgICAgICAgICBodG1se1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLyogUFJJTkNJUEFMICovXHJcblxyXG4gICAgICAgICAgICAgICAgLm5hdntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1henVsKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAyZnIgMWZyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdiAubGlua3N7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXYgLmxvZ28gaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXYgLmxvZ297XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXYgLmxpbmtsb2dpbntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG8gNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmhhbWJ1cmd1ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYXBhcmVjZXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF6dWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuNSBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBtZW51IDFzO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGVzYXBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZGVzbWVudSAxcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgZGVzbWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCV7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7fVxyXG4gICAgICAgICAgICAgICAgICAgIDEwMCV7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1LjYyNXJlbSk7fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBtZW51IHtcclxuICAgICAgICAgICAgICAgICAgICAwJXt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjAwcHgpO31cclxuICAgICAgICAgICAgICAgICAgICAxMDAle3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hcGFyZWNlIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsYW5jbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0iXX0= */"] });


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
UsersLogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersLogoutComponent, selectors: [["app-users-logout"]], decls: 24, vars: 0, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["routerLink", "/panela", 1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link"], [2, "color", "white"], [1, "nav-link", "active"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], [1, "btn", 3, "click"]], template: function UsersLogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersLogoutComponent_Template_button_click_21_listener() { return ctx.desloguearse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Logout and Go to the Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-footer-main");
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_3__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_4__["FooterMainComponent"]], styles: [".sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n}\r\n.btn[_ngcontent-%COMP%]{background-color: var(--violeta);\r\ncolor: var(--blanco);}\r\n.btn[_ngcontent-%COMP%]:hover{background-color: rgb(204, 41, 41);\r\n    color: var(--blanco);}\r\n.btn[_ngcontent-%COMP%]:active{\r\n        background-color:rgb(175, 0, 0);\r\n        color: var(--blanco);\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLWxvZ291dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBLEtBQUssZ0NBQWdDO0FBQ3JDLG9CQUFvQixDQUFDO0FBQ3JCLFdBQVcsa0NBQWtDO0lBQ3pDLG9CQUFvQixDQUFDO0FBQ3JCO1FBQ0ksK0JBQStCO1FBQy9CLG9CQUFvQjtJQUN4QiIsImZpbGUiOiJ1c2Vycy1sb2dvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFye1xyXG4gICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMnJlbSAwcHg7XHJcbn1cclxuLnNpZGViYXIgLm5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF6dWwpO1xyXG59XHJcbi5zaWRlYmFyIC5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXZpb2xldGEpO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYgYXtcclxuICAgIGNvbG9yOnZhcigtLWJsYW5jbyk7XHJcbn1cclxuLmJ0bntiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12aW9sZXRhKTtcclxuY29sb3I6IHZhcigtLWJsYW5jbyk7fVxyXG4uYnRuOmhvdmVye2JhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDQxLCA0MSk7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhbmNvKTt9XHJcbiAgICAuYnRuOmFjdGl2ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxNzUsIDAsIDApO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1ibGFuY28pO1xyXG4gICAgfSJdfQ== */"] });


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







function CategoriesDelComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CategoriesDelComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ALGO SALIO MAL. ");
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
CategoriesDelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoriesDelComponent, selectors: [["app-categories-del"]], decls: 50, vars: 5, consts: [[1, "divmenu", 2, "background-color", "#eaeaea"], [1, "col", "px-0", "flex-grow-1"], [1, "container"], ["id", "contenido", 1, "inner-content", 2, "background-color", "rgb(255, 255, 255)", "height", "1300px"], [1, "row"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "textbox", "name", "nombre", "formControlName", "nombre", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "portada", 1, "col-md-3", "control-label"], [1, "col-md-9"], [1, "radio-inline"], ["type", "radio", "name", "portada", "value", "0", "id", "0", "formControlName", "portada"], ["type", "radio", "name", "portada", "value", "1", "id", "1", "checked", "", "formControlName", "portada"], ["for", "hide", 1, "col-md-3", "control-label"], ["type", "radio", "name", "hide", "value", "0", "id", "0", "formControlName", "hide"], ["type", "radio", "name", "hide", "value", "1", "id", "1", "checked", "", "formControlName", "hide"], ["type", "submit", 1, "btn", "float-right", "btn-outline-success", 2, "margin-left", "5px", 3, "disabled"], [3, "routerLink"], [1, "btn", "float-right", "btn-outline-primary"], ["routerLink", "/categorieslist"], [1, "btn", "float-right", "btn-outline-danger"], [1, "alert", "alert-danger"]], template: function CategoriesDelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Delete Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CategoriesDelComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CategoriesDelComponent_div_17_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Appear on the bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " YES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "View for all users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " NO.(only registered) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " YES.(public) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, CategoriesDelComponent_div_41_Template, 4, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Modify");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Cancel");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.userForm.get("nombre")) == null ? null : tmp_1_0.invalid) && (((tmp_1_0 = ctx.userForm.get("nombre")) == null ? null : tmp_1_0.dirty) || ((tmp_1_0 = ctx.userForm.get("nombre")) == null ? null : tmp_1_0.touched)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/categoryedit/", ctx.cat_id, "");
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__["NavbarRegComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLWRlbC5jb21wb25lbnQuY3NzIn0= */"] });


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
UsersDelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UsersDelComponent, selectors: [["app-users-del"]], decls: 52, vars: 3, consts: [[1, "col", "px-0", "flex-grow-1"], [1, "container", "py-3"], ["id", "contenido", 1, "inner-content", 2, "background-color", "rgb(255, 255, 255)", "height", "1300px"], [1, "container"], [1, "row"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "textbox", "name", "nickname", "formControlName", "nickname", 1, "form-control"], ["type", "textbox", "name", "nombre", "formControlName", "nombre", 1, "form-control"], ["type", "textbox", "name", "apellido", "formControlName", "apellido", 1, "form-control"], ["type", "textbox", "name", "email", "formControlName", "email", 1, "form-control", 3, "disabled"], ["for", "latitude", 1, "col-md-3", "control-label"], [1, "col-md-9"], [1, "radio-inline"], ["type", "radio", "name", "rol", "value", "0", "id", "0", "formControlName", "rol"], ["type", "radio", "name", "rol", "value", "1", "id", "1", "formControlName", "rol"], ["name", "descripcion", "formControlName", "descripcion", 1, "form-control"], [1, "btn", "float-right", "btn-outline-danger", 2, "margin-left", "5px"], [3, "routerLink"], [1, "btn", "float-right", "btn-outline-primary"], ["routerLink", "/userslist"], [1, "btn", "float-right", "btn-outline-secundary"]], template: function UsersDelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Delete User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UsersDelComponent_Template_form_ngSubmit_10_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Nickname:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Last Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Admin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " User ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Modify");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/useredit/", ctx.user_id, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".sexagesimal[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n}\r\n.sexagesimal[_ngcontent-%COMP%], .sexagesimalsec[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 6px;\r\n    margin-left: 5px;\r\n}\r\n.box[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    min-width: 80%;\r\n    min-height: 350px;\r\n    margin: 10px;\r\n    padding: 15px;\r\n    border: 1px solid rgba(177, 177, 177, 0.933);\r\n    border-radius: 15px ;\r\n    text-align: justify;\r\n    margin-top: 80 px;\r\n    overflow:initial;\r\n    position:relative;\r\n  }\r\n.cp[_ngcontent-%COMP%]{\r\n      width: 30%;\r\n  }\r\n.container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    margin-left:50px;\r\n    margin-top:40px;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLWRlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjtBQUNBO01BQ0ksVUFBVTtFQUNkO0FBQ0E7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQiIsImZpbGUiOiJ1c2Vycy1kZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXhhZ2VzaW1hbCB7XHJcbiAgICB3aWR0aDogNDBweDtcclxufVxyXG4uc2V4YWdlc2ltYWwsIC5zZXhhZ2VzaW1hbHNlYyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5ib3h7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDgwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTc3LCAxNzcsIDE3NywgMC45MzMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCA7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgbWFyZ2luLXRvcDogODAgcHg7XHJcbiAgICBvdmVyZmxvdzppbml0aWFsO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5jcHtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICB9XHJcbiAgLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6NTBweDtcclxuICAgIG1hcmdpbi10b3A6NDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH0iXX0= */"] });


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






function CategoriesListComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Del");
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
        }, (err) => { console.log(err); });
    }
}
CategoriesListComponent.ɵfac = function CategoriesListComponent_Factory(t) { return new (t || CategoriesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_1__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CategoriesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesListComponent, selectors: [["app-categories-list"]], decls: 39, vars: 1, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["routerLink", "/panela", 1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link", "active"], [2, "color", "white"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], ["routerLink", "/categoryadd"], [1, "btn", "btn-outline-primary"], [1, "fas", "fa-user-plus"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "row", 4, "ngFor", "ngForOf"], ["scope", "row"], [1, "d-none", "d-md-table-cell"], [3, "routerLink"]], template: function CategoriesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Add Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Name Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CategoriesListComponent_tr_37_Template, 9, 3, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-footer-main");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_3__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_5__["FooterMainComponent"]], styles: [".table-responsive[_ngcontent-%COMP%]{\r\n    max-width: 98%;\r\n    margin: 1px;\r\n  }\r\n    th[_ngcontent-%COMP%]{\r\n      background: #20c3ec;\r\n    }\r\n    .m5[_ngcontent-%COMP%]{\r\n      margin-left: 5px;\r\n      float: right;\r\n    }\r\n    .sidebar[_ngcontent-%COMP%]{\r\n      margin: 0px 0px;\r\n      padding: 2rem 0px;\r\n  }\r\n    .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n      background-color: var(--azul);\r\n  }\r\n    .sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n      background-color:var(--violeta);\r\n  }\r\n    .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n      color:var(--blanco);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3JpZXMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFdBQVc7RUFDYjtJQUNFO01BQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxnQkFBZ0I7TUFDaEIsWUFBWTtJQUNkO0lBQ0E7TUFDRSxlQUFlO01BQ2YsaUJBQWlCO0VBQ3JCO0lBQ0E7TUFDSSw2QkFBNkI7RUFDakM7SUFDQTtNQUNJLCtCQUErQjtFQUNuQztJQUNBO01BQ0ksbUJBQW1CO0VBQ3ZCIiwiZmlsZSI6ImNhdGVnb3JpZXMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLXJlc3BvbnNpdmV7XHJcbiAgICBtYXgtd2lkdGg6IDk4JTtcclxuICAgIG1hcmdpbjogMXB4O1xyXG4gIH1cclxuICAgIHRoe1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjBjM2VjO1xyXG4gICAgfVxyXG4gICAgLm01e1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuc2lkZWJhcntcclxuICAgICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gICAgICBwYWRkaW5nOiAycmVtIDBweDtcclxuICB9XHJcbiAgLnNpZGViYXIgLm5hdntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXp1bCk7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5hY3RpdmV7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tdmlvbGV0YSk7XHJcbiAgfVxyXG4gIC5zaWRlYmFyIC5uYXYgYXtcclxuICAgICAgY29sb3I6dmFyKC0tYmxhbmNvKTtcclxuICB9Il19 */"] });


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



// import { CiudadesService } from 'src/app/services/ciudades.service';
class NavbarComponent {
    // cities:any;
    // constructor(public service: CiudadesService, private router: Router) { }
    constructor(cargaJS) {
        this.cargaJS = cargaJS;
        cargaJS.CargaScript(['hamburguesa.js']);
    }
    ngOnInit() {
        // this.service.listarmenu().subscribe(
        //   (city: any) => {
        //     this.cities=city;
        //   }
        // );
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cargarjv_service__WEBPACK_IMPORTED_MODULE_1__["CargarjvService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 26, vars: 0, consts: [[1, "nav"], [1, "logo"], ["src", "../../../assets/LOGO.png", "alt", "logo"], ["id", "links", 1, "links"], ["routerLink", "/main", "routerLinkActive", "'active'"], ["routerLink", "/policy", "routerLinkActive", "'active'"], ["routerLink", "/literacy", "routerLinkActive", "'active'"], ["routerLink", "/dvisuals", "routerLinkActive", "'active'"], ["routerLink", "/download", "routerLinkActive", "'active'"], ["routerLink", "/contact", "routerLinkActive", "'active'"], [1, "icons"], ["href", "https://twitter.com/DavidWakelyn?s=08", "target", "_blank"], ["src", "../../../assets/TWITTER.png", "alt", ""], ["href", "https://www.linkedin.com/in/david-scarlett-wakelyn-9227275/", "target", "_blank"], ["src", "../../../assets/LINKEDIN.png", "alt", ""], ["id", "hamburguer", 1, "hamburguer"], ["id", "line1"], ["id", "line2"], ["id", "line3"], ["id", "conten"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "policy analyses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "literacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "data visuals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    box-sizing: border-box;\r\n}\r\nhtml[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\nbody[_ngcontent-%COMP%]{\r\n    background: var(--blanco);\r\n}\r\n\r\n.nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n    display: grid;\r\n    grid-template-columns: 20% 60% 20%;\r\n    justify-content: space-between;\r\n}\r\n.nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n    background-color: var(--blanco);\r\n    margin: 0px 10px 0px 20px;\r\n    text-align: center;\r\n}\r\n.nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    height: 90%;\r\n    margin: auto;\r\n}\r\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{\r\n    background-color: transparent;\r\n    width: 100%;\r\n    margin: auto .2rem;\r\n    text-transform: uppercase;\r\n    justify-content: space-around;\r\n    display: grid;\r\n    grid-template-columns: repeat(6, 1fr);\r\n}\r\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: var(--blanco);\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none;\r\n    padding: 0px 5px;\r\n    width: -webkit-min-content;\r\n    width: min-content;\r\n    margin: 0px auto;\r\n    height: -webkit-min-content;\r\n    height: min-content;\r\n}\r\n.nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active{\r\n    background-color: var(--violeta);\r\n}\r\n.nav[_ngcontent-%COMP%]   .linklogin[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n}\r\n.nav[_ngcontent-%COMP%]   .linklogin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: var(--blanco);\r\n    text-decoration: none;\r\n}\r\n.icons[_ngcontent-%COMP%]{\r\n    margin: auto 20px auto 0px;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n.icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    margin: 5px;\r\n    color: var(--blanco);\r\n    text-decoration: none;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n.icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 2.5rem;\r\n    height: 2.5rem;\r\n}\r\n#hamburguer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    width: 30px;\r\n    height: 3px;\r\n    background-color: var(--blanco);\r\n    margin: 5px;\r\n    transition: all 0.3s ease;\r\n}\r\n.hamburguer[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n#conten[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n@media(max-width: 920px){\r\n                html[_ngcontent-%COMP%]{\r\n                    font-size: 16px;\r\n                }\r\n            \r\n            \r\n                \r\n\r\n                .nav[_ngcontent-%COMP%]{\r\n                    background-color: var(--azul);\r\n                    display: grid;\r\n                    grid-template-columns: 2fr 2fr 1fr;\r\n                    width: 100%;\r\n                    box-sizing: border-box;\r\n                }\r\n                .nav[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{\r\n                    display: none;\r\n                }\r\n                .nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n                    width: 100%;\r\n                    height: 100%;\r\n                }\r\n                .nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n                    padding: 5px;\r\n                    margin: 0px;\r\n                    height: 100%;\r\n                    width: 100%;\r\n                    box-sizing: border-box;\r\n                }\r\n                .nav[_ngcontent-%COMP%]   .linklogin[_ngcontent-%COMP%]{\r\n                    margin: auto 5px;\r\n                }\r\n                .hamburguer[_ngcontent-%COMP%]{\r\n                    display: block;\r\n                    cursor: pointer;\r\n                    margin: auto;\r\n                    z-index: 2;\r\n                    transition: all 0.7s ease;\r\n                    box-sizing: border-box;\r\n                }\r\n                .aparece[_ngcontent-%COMP%]{\r\n                    display: block;\r\n                    position: absolute;\r\n                    right: 0px;\r\n                    z-index: 5;\r\n                    background-color: var(--azul);\r\n                    padding: 20px 5px;\r\n                    transition: all .5 ease;\r\n                    text-transform: uppercase;\r\n                    animation: menu 1s;\r\n                    width: 30%;\r\n                }\r\n                .desapa[_ngcontent-%COMP%]{\r\n                    animation: desmenu 1s;\r\n                }\r\n                @keyframes desmenu {\r\n                    0%{transform: translateX(0px);}\r\n                    100%{transform: translateX(15.625rem);}\r\n                }\r\n                @keyframes menu {\r\n                    0%{transform: translateX(200px);}\r\n                    100%{transform: translateX(0px);}\r\n                }\r\n                .aparece[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n                    color: var(--blanco);\r\n                    display: block;\r\n                    margin-top: 10px;\r\n                    text-decoration: none;\r\n                }\r\n                #conten[_ngcontent-%COMP%]{\r\n                    z-index: 11;\r\n                }\r\n            }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsMEJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMkJBQW1CO0lBQW5CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFJWTtnQkFDSTtvQkFDSSxlQUFlO2dCQUNuQjs7O2dCQUdBLGNBQWM7O2dCQUVkO29CQUNJLDZCQUE2QjtvQkFDN0IsYUFBYTtvQkFDYixrQ0FBa0M7b0JBQ2xDLFdBQVc7b0JBQ1gsc0JBQXNCO2dCQUMxQjtnQkFDQTtvQkFDSSxhQUFhO2dCQUNqQjtnQkFDQTtvQkFDSSxXQUFXO29CQUNYLFlBQVk7Z0JBQ2hCO2dCQUNBO29CQUNJLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsc0JBQXNCO2dCQUMxQjtnQkFDQTtvQkFDSSxnQkFBZ0I7Z0JBQ3BCO2dCQUNBO29CQUNJLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixZQUFZO29CQUNaLFVBQVU7b0JBQ1YseUJBQXlCO29CQUN6QixzQkFBc0I7Z0JBQzFCO2dCQUNBO29CQUNJLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixVQUFVO29CQUNWLFVBQVU7b0JBQ1YsNkJBQTZCO29CQUM3QixpQkFBaUI7b0JBQ2pCLHVCQUF1QjtvQkFDdkIseUJBQXlCO29CQUN6QixrQkFBa0I7b0JBQ2xCLFVBQVU7Z0JBQ2Q7Z0JBQ0E7b0JBQ0kscUJBQXFCO2dCQUN6QjtnQkFDQTtvQkFDSSxHQUFHLDBCQUEwQixDQUFDO29CQUM5QixLQUFLLGdDQUFnQyxDQUFDO2dCQUMxQztnQkFDQTtvQkFDSSxHQUFHLDRCQUE0QixDQUFDO29CQUNoQyxLQUFLLDBCQUEwQixDQUFDO2dCQUNwQztnQkFDQTtvQkFDSSxvQkFBb0I7b0JBQ3BCLGNBQWM7b0JBQ2QsZ0JBQWdCO29CQUNoQixxQkFBcUI7Z0JBQ3pCO2dCQUNBO29CQUNJLFdBQVc7Z0JBQ2Y7WUFDSiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuaHRtbHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxhbmNvKTtcclxufVxyXG5cclxuLypCYXJyYSBkZSBuYXZlZ2FjaW9uKi9cclxuLm5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF6dWwpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDYwJSAyMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLm5hdiAubG9nb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYW5jbyk7XHJcbiAgICBtYXJnaW46IDBweCAxMHB4IDBweCAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uYXYgLmxvZ28gaW1ne1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5uYXYgLmxpbmtze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0byAuMnJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xyXG59XHJcbi5uYXYgLmxpbmtzIGF7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhbmNvKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMHB4IDVweDtcclxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBoZWlnaHQ6IG1pbi1jb250ZW50O1xyXG59XHJcbi5uYXYgLmxpbmtzIGE6YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdmlvbGV0YSk7XHJcbn1cclxuLm5hdiAubGlua2xvZ2lue1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbi5uYXYgLmxpbmtsb2dpbiBhe1xyXG4gICAgY29sb3I6IHZhcigtLWJsYW5jbyk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmljb25ze1xyXG4gICAgbWFyZ2luOiBhdXRvIDIwcHggYXV0byAwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG59XHJcbi5pY29ucyBhe1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tYmxhbmNvKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5pY29ucyBpbWd7XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbn1cclxuI2hhbWJ1cmd1ZXIgZGl2e1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYW5jbyk7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuLmhhbWJ1cmd1ZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiNjb250ZW57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDkyMHB4KXtcclxuICAgICAgICAgICAgICAgIGh0bWx7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvKiBQUklOQ0lQQUwgKi9cclxuXHJcbiAgICAgICAgICAgICAgICAubmF2e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF6dWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMmZyIDFmcjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdiAubGlua3N7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXYgLmxvZ28gaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5uYXYgLmxvZ297XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm5hdiAubGlua2xvZ2lue1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuaGFtYnVyZ3VlcntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuN3MgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFwYXJlY2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1henVsKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjUgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbWVudSAxcztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRlc2FwYXtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGRlc21lbnUgMXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGRlc21lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgIDAle3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO31cclxuICAgICAgICAgICAgICAgICAgICAxMDAle3RyYW5zZm9ybTogdHJhbnNsYXRlWCgxNS42MjVyZW0pO31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgbWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgMCV7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMHB4KTt9XHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJXt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTt9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYXBhcmVjZSBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibGFuY28pO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgI2NvbnRlbntcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSJdfQ== */"] });


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







function NewsListComponent_tr_43_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "YES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewsListComponent_tr_43_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewsListComponent_tr_43_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NO. (Only Registered)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewsListComponent_tr_43_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "YES. (All visitors)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewsListComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NewsListComponent_tr_43_p_6_Template, 2, 0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NewsListComponent_tr_43_p_7_Template, 2, 0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NewsListComponent_tr_43_p_9_Template, 2, 0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NewsListComponent_tr_43_p_10_Template, 2, 0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "D");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
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
        });
    }
}
NewsListComponent.ɵfac = function NewsListComponent_Factory(t) { return new (t || NewsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_2__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
NewsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsListComponent, selectors: [["app-news-list"]], decls: 45, vars: 1, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["routerLink", "/panela", 1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link", "active"], ["routerLink", "/categorieslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], ["routerLink", "/newsadd"], [1, "btn", "btn-outline-primary"], [1, "fas", "fa-user-plus"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "col", 1, "d-none", "d-sm-table-cell"], ["scope", "col", 1, "d-none", "d-md-table-cell"], ["scope", "row", 4, "ngFor", "ngForOf"], ["scope", "row"], [1, "d-none", "d-sm-table-cell"], [4, "ngIf"], [1, "d-none", "d-md-table-cell"], [3, "routerLink"], [1, "fas", "fa-edit"], [1, "fas", "fa-eraser"]], template: function NewsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Add Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Appear on the bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "View for alla users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, NewsListComponent_tr_43_Template, 19, 8, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "app-footer-main");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.news);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_6__["FooterMainComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJuZXdzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFye1xyXG4gICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMnJlbSAwcHg7XHJcbn1cclxuLnNpZGViYXIgLm5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF6dWwpO1xyXG59XHJcbi5zaWRlYmFyIC5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXZpb2xldGEpO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYgYXtcclxuICAgIGNvbG9yOnZhcigtLWJsYW5jbyk7XHJcbn0iXX0= */"] });


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
GlobalConstants.apiurl = 'https://localhost:44385/api';
GlobalConstants.parafoto = 'https://localhost:44385';


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
EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["app-edit"]], decls: 48, vars: 2, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["routerLink", "/panela", 1, "nav-link"], [1, "nav-link", "active"], ["routerLink", "/userslist", 1, "nav-link"], ["routerLink", "/newslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], [1, "otro"], [1, "box"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "name", "textwwa", "formControlName", "textwwa", 1, "form-control"], ["type", "text", "name", "textwwa", "formControlName", "textautor", 1, "form-control"], ["type", "submit", 1, "btn", "float-right", "btn-outline-success", 2, "margin-left", "5px", 3, "disabled"], ["routerLink", "/panela"], [1, "btn", "float-right", "btn-outline-danger"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Edit Main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditComponent_Template_form_ngSubmit_27_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Who we are:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Partner:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Modify");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Cancel");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "app-footer-main");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_4__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_5__["FooterMainComponent"]], styles: [".sexagesimal[_ngcontent-%COMP%] {\r\n    width: 40px;\r\n}\r\n.sexagesimal[_ngcontent-%COMP%], .sexagesimalsec[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 6px;\r\n    margin-left: 5px;\r\n}\r\n.box[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    min-width: 80%;\r\n    min-height: 350px;\r\n    margin: 10px;\r\n    padding: 15px;\r\n    border: 1px solid rgba(177, 177, 177, 0.933);\r\n    border-radius: 15px ;\r\n    text-align: justify;\r\n    margin-top: 80 px;\r\n    overflow:initial;\r\n    position:relative;\r\n  }\r\n.cp[_ngcontent-%COMP%]{\r\n      width: 30%;\r\n  }\r\n.otro[_ngcontent-%COMP%]{\r\n    \r\n    margin-left:0px;\r\n    margin-right:50px;\r\n\r\n    margin-top:0px;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n  }\r\n.sidebar[_ngcontent-%COMP%]{\r\n    margin: 0px 0px;\r\n    padding: 2rem 0px;\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n    background-color: var(--azul);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    background-color:var(--violeta);\r\n}\r\n.sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:var(--blanco);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsNENBQTRDO0lBQzVDLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7QUFDQTtNQUNJLFVBQVU7RUFDZDtBQUNBOztJQUVFLGVBQWU7SUFDZixpQkFBaUI7O0lBRWpCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjtBQUdBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2V4YWdlc2ltYWwge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbn1cclxuLnNleGFnZXNpbWFsLCAuc2V4YWdlc2ltYWxzZWMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uYm94e1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiA4MCU7XHJcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE3NywgMTc3LCAxNzcsIDAuOTMzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIG1hcmdpbi10b3A6IDgwIHB4O1xyXG4gICAgb3ZlcmZsb3c6aW5pdGlhbDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIH1cclxuICAuY3B7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG4gIC5vdHJve1xyXG4gICAgXHJcbiAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NTBweDtcclxuXHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuXHJcblxyXG4gIC5zaWRlYmFye1xyXG4gICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMnJlbSAwcHg7XHJcbn1cclxuLnNpZGViYXIgLm5hdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWF6dWwpO1xyXG59XHJcbi5zaWRlYmFyIC5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXZpb2xldGEpO1xyXG59XHJcbi5zaWRlYmFyIC5uYXYgYXtcclxuICAgIGNvbG9yOnZhcigtLWJsYW5jbyk7XHJcbn1cclxuIl19 */"] });


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






function UsersListComponent_tr_45_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersListComponent_tr_45_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersListComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UsersListComponent_tr_45_p_6_Template, 2, 0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UsersListComponent_tr_45_p_7_Template, 2, 0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "D");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
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
        });
    }
}
UsersListComponent.ɵfac = function UsersListComponent_Factory(t) { return new (t || UsersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UsersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersListComponent, selectors: [["app-users-list"]], decls: 47, vars: 1, consts: [[1, "sidebar"], [1, "row"], [1, "col-3"], ["id", "v-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["routerLink", "/panela", 1, "nav-link"], ["routerLink", "/ppal", 1, "nav-link"], ["routerLink", "/userslist", 1, "nav-link", "active"], ["routerLink", "/newslist", 1, "nav-link"], ["routerLink", "/categorieslist", 1, "nav-link"], [2, "color", "white"], ["routerLink", "/logout", 1, "nav-link"], [1, "col-9"], ["role", "tabpanel", "aria-labelledby", "v-pills-home-tab"], ["routerLink", "/usersadd"], [1, "btn", "btn-outline-primary"], [1, "fas", "fa-user-plus"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "col", 1, "d-none", "d-md-table-cell"], ["scope", "col", 1, "d-none", "d-lg-table-cell"], ["scope", "row", 4, "ngFor", "ngForOf"], ["scope", "row"], [1, "d-none", "d-md-table-cell"], [4, "ngIf"], [1, "d-none", "d-lg-table-cell"], [3, "routerLink"], [1, "fas", "fa-edit"], [1, "fas", "fa-eraser"]], template: function UsersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-reg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "table", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Nickname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, UsersListComponent_tr_45_Template, 20, 8, "tr", 21);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_navbar_reg_navbar_reg_component__WEBPACK_IMPORTED_MODULE_3__["NavbarRegComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _footer_main_footer_main_component__WEBPACK_IMPORTED_MODULE_5__["FooterMainComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".table-responsive[_ngcontent-%COMP%]{\r\n    max-width: 98%;\r\n    margin: 1px;\r\n  }\r\n    th[_ngcontent-%COMP%]{\r\n      background: #20c3ec;\r\n    }\r\n    .m5[_ngcontent-%COMP%]{\r\n      margin-left: 5px;\r\n      float: right;\r\n    }\r\n    .sidebar[_ngcontent-%COMP%]{\r\n      margin: 0px 0px;\r\n      padding: 2rem 0px;\r\n  }\r\n    .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{\r\n      background-color: var(--azul);\r\n  }\r\n    .sidebar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n      background-color:var(--violeta);\r\n  }\r\n    .sidebar[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n      color:var(--blanco);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0VBQ2I7SUFDRTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLFlBQVk7SUFDZDtJQUNBO01BQ0UsZUFBZTtNQUNmLGlCQUFpQjtFQUNyQjtJQUNBO01BQ0ksNkJBQTZCO0VBQ2pDO0lBQ0E7TUFDSSwrQkFBK0I7RUFDbkM7SUFDQTtNQUNJLG1CQUFtQjtFQUN2QiIsImZpbGUiOiJ1c2Vycy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtcmVzcG9uc2l2ZXtcclxuICAgIG1heC13aWR0aDogOTglO1xyXG4gICAgbWFyZ2luOiAxcHg7XHJcbiAgfVxyXG4gICAgdGh7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyMGMzZWM7XHJcbiAgICB9XHJcbiAgICAubTV7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuICAgIC5zaWRlYmFye1xyXG4gICAgICBtYXJnaW46IDBweCAwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW0gMHB4O1xyXG4gIH1cclxuICAuc2lkZWJhciAubmF2e1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1henVsKTtcclxuICB9XHJcbiAgLnNpZGViYXIgLmFjdGl2ZXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS12aW9sZXRhKTtcclxuICB9XHJcbiAgLnNpZGViYXIgLm5hdiBhe1xyXG4gICAgICBjb2xvcjp2YXIoLS1ibGFuY28pO1xyXG4gIH1cclxuICAgICAgIl19 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class VideosaddComponent {
    constructor() { }
    ngOnInit() {
    }
}
VideosaddComponent.ɵfac = function VideosaddComponent_Factory(t) { return new (t || VideosaddComponent)(); };
VideosaddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideosaddComponent, selectors: [["app-videosadd"]], decls: 2, vars: 0, template: function VideosaddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "videosadd works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlb3NhZGQuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "Lquv");
/* harmony import */ var _components_dashboard_reg_dashboard_reg_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard-reg/dashboard-reg.component */ "UGg/");
/* harmony import */ var _components_policy_policy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/policy/policy.component */ "YuC9");
/* harmony import */ var _components_literacy_literacy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/literacy/literacy.component */ "4gn7");
/* harmony import */ var _components_datav_datav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/datav/datav.component */ "dKcb");
/* harmony import */ var _components_download_download_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/download/download.component */ "HdsJ");
/* harmony import */ var _components_pagecontact_pagecontact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pagecontact/pagecontact.component */ "blmr");
/* harmony import */ var _components_main_reg_main_reg_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main-reg/main-reg.component */ "vO7G");
/* harmony import */ var _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/registro/registro.component */ "fkcT");
/* harmony import */ var _components_reporte_reporte_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/reporte/reporte.component */ "BcWh");
/* harmony import */ var _components_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/news-list/news-list.component */ "iZMX");
/* harmony import */ var _components_news_add_news_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/news-add/news-add.component */ "0wRy");
/* harmony import */ var _components_news_edit_news_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/news-edit/news-edit.component */ "PQYE");
/* harmony import */ var _components_news_del_news_del_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/news-del/news-del.component */ "BrlW");
/* harmony import */ var _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/users-list/users-list.component */ "q/hO");
/* harmony import */ var _components_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/users-edit/users-edit.component */ "IwHr");
/* harmony import */ var _components_users_add_users_add_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/users-add/users-add.component */ "6Egh");
/* harmony import */ var _components_users_del_users_del_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/users-del/users-del.component */ "gCF0");
/* harmony import */ var _components_users_login_users_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/users-login/users-login.component */ "B0s6");
/* harmony import */ var _components_users_logout_users_logout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/users-logout/users-logout.component */ "fWVM");
/* harmony import */ var _components_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/categories-list/categories-list.component */ "hXPJ");
/* harmony import */ var _components_categories_add_categories_add_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/categories-add/categories-add.component */ "PZYN");
/* harmony import */ var _components_categories_edit_categories_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/categories-edit/categories-edit.component */ "/6cC");
/* harmony import */ var _components_categories_del_categories_del_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/categories-del/categories-del.component */ "g56J");
/* harmony import */ var _components_datavisual_fotoslist_fotoslist_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/datavisual/fotoslist/fotoslist.component */ "3lyV");
/* harmony import */ var _components_datavisual_videoslist_videoslist_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/datavisual/videoslist/videoslist.component */ "5Yxx");
/* harmony import */ var _components_datavisual_videosedit_videosedit_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/datavisual/videosedit/videosedit.component */ "+rEv");
/* harmony import */ var _components_datavisual_videosdel_videosdel_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/datavisual/videosdel/videosdel.component */ "cJkG");
/* harmony import */ var _components_datavisual_fotosadd_fotosadd_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/datavisual/fotosadd/fotosadd.component */ "75LM");
/* harmony import */ var _components_datavisual_fotosdel_fotosdel_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/datavisual/fotosdel/fotosdel.component */ "yXMt");
/* harmony import */ var _components_datavisual_videosadd_videosadd_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/datavisual/videosadd/videosadd.component */ "ugcN");
/* harmony import */ var _components_principal_edit_edit_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/principal/edit/edit.component */ "pbaP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/core */ "fXoL");

//componentes











//NOTICIAS




//USUARIOS






//CATEGORIAS




//fotos y videos










const routes = [
    { path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"] },
    { path: 'newreg', component: _components_registro_registro_component__WEBPACK_IMPORTED_MODULE_10__["RegistroComponent"] },
    { path: 'main', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"] },
    { path: 'panelu', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'panela', component: _components_dashboard_reg_dashboard_reg_component__WEBPACK_IMPORTED_MODULE_3__["DashboardRegComponent"] },
    //{path:'panela/:ppal',component:  DashboardRegComponent },
    { path: 'policy', component: _components_policy_policy_component__WEBPACK_IMPORTED_MODULE_4__["PolicyComponent"] },
    { path: 'literacy', component: _components_literacy_literacy_component__WEBPACK_IMPORTED_MODULE_5__["LiteracyComponent"] },
    { path: 'dvisuals', component: _components_datav_datav_component__WEBPACK_IMPORTED_MODULE_6__["DatavComponent"] },
    { path: 'download', component: _components_download_download_component__WEBPACK_IMPORTED_MODULE_7__["DownloadComponent"] },
    { path: 'contact', component: _components_pagecontact_pagecontact_component__WEBPACK_IMPORTED_MODULE_8__["PagecontactComponent"] },
    { path: 'mainr', component: _components_main_reg_main_reg_component__WEBPACK_IMPORTED_MODULE_9__["MainRegComponent"] },
    { path: 'rep', component: _components_reporte_reporte_component__WEBPACK_IMPORTED_MODULE_11__["ReporteComponent"] },
    { path: 'rep/:rep_id', component: _components_reporte_reporte_component__WEBPACK_IMPORTED_MODULE_11__["ReporteComponent"] },
    { path: 'ppal', component: _components_principal_edit_edit_component__WEBPACK_IMPORTED_MODULE_33__["EditComponent"] },
    //Photos y videos
    { path: 'pholist', component: _components_datavisual_fotoslist_fotoslist_component__WEBPACK_IMPORTED_MODULE_26__["FotoslistComponent"] },
    { path: 'phoadd', component: _components_datavisual_fotosadd_fotosadd_component__WEBPACK_IMPORTED_MODULE_30__["FotosaddComponent"] },
    { path: 'phodel/:new_id', component: _components_datavisual_fotosdel_fotosdel_component__WEBPACK_IMPORTED_MODULE_31__["FotosdelComponent"] },
    { path: 'phodel', component: _components_datavisual_fotosdel_fotosdel_component__WEBPACK_IMPORTED_MODULE_31__["FotosdelComponent"] },
    //Videos
    { path: 'vidlist', component: _components_datavisual_videoslist_videoslist_component__WEBPACK_IMPORTED_MODULE_27__["VideoslistComponent"] },
    { path: 'vidadd', component: _components_datavisual_videosadd_videosadd_component__WEBPACK_IMPORTED_MODULE_32__["VideosaddComponent"] },
    { path: 'videdit/:new_id', component: _components_datavisual_videosedit_videosedit_component__WEBPACK_IMPORTED_MODULE_28__["VideoseditComponent"] },
    { path: 'viddel/:new_id', component: _components_datavisual_videosdel_videosdel_component__WEBPACK_IMPORTED_MODULE_29__["VideosdelComponent"] },
    { path: 'videdit', component: _components_datavisual_videosedit_videosedit_component__WEBPACK_IMPORTED_MODULE_28__["VideoseditComponent"] },
    { path: 'viddel', component: _components_datavisual_videosdel_videosdel_component__WEBPACK_IMPORTED_MODULE_29__["VideosdelComponent"] },
    // news
    { path: 'newslist', component: _components_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_12__["NewsListComponent"] },
    { path: 'newsadd', component: _components_news_add_news_add_component__WEBPACK_IMPORTED_MODULE_13__["NewsAddComponent"] },
    { path: 'newsedit/:new_id', component: _components_news_edit_news_edit_component__WEBPACK_IMPORTED_MODULE_14__["NewsEditComponent"] },
    { path: 'newsdel/:new_id', component: _components_news_del_news_del_component__WEBPACK_IMPORTED_MODULE_15__["NewsDelComponent"] },
    { path: 'newsedit', component: _components_news_edit_news_edit_component__WEBPACK_IMPORTED_MODULE_14__["NewsEditComponent"] },
    { path: 'newsdel', component: _components_news_del_news_del_component__WEBPACK_IMPORTED_MODULE_15__["NewsDelComponent"] },
    // users
    { path: 'userslist', component: _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_16__["UsersListComponent"] },
    { path: 'useredit', component: _components_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_17__["UsersEditComponent"] },
    { path: 'useredit/:user_id', component: _components_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_17__["UsersEditComponent"] },
    { path: 'userdel', component: _components_users_del_users_del_component__WEBPACK_IMPORTED_MODULE_19__["UsersDelComponent"] },
    { path: 'userdel/:user_id', component: _components_users_del_users_del_component__WEBPACK_IMPORTED_MODULE_19__["UsersDelComponent"] },
    { path: 'usersadd', component: _components_users_add_users_add_component__WEBPACK_IMPORTED_MODULE_18__["UsersAddComponent"] },
    { path: 'web-panel', component: _components_users_login_users_login_component__WEBPACK_IMPORTED_MODULE_20__["UsersLoginComponent"] },
    { path: 'logout', component: _components_users_logout_users_logout_component__WEBPACK_IMPORTED_MODULE_21__["UsersLogoutComponent"] },
    // categories
    { path: 'categorieslist', component: _components_categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_22__["CategoriesListComponent"] },
    { path: 'categoryedit', component: _components_categories_edit_categories_edit_component__WEBPACK_IMPORTED_MODULE_24__["CategoriesEditComponent"] },
    { path: 'categoryedit/:cat_id', component: _components_categories_edit_categories_edit_component__WEBPACK_IMPORTED_MODULE_24__["CategoriesEditComponent"] },
    { path: 'categorydel', component: _components_categories_del_categories_del_component__WEBPACK_IMPORTED_MODULE_25__["CategoriesDelComponent"] },
    { path: 'categorydel/:cat_id', component: _components_categories_del_categories_del_component__WEBPACK_IMPORTED_MODULE_25__["CategoriesDelComponent"] },
    { path: 'categoryadd', component: _components_categories_add_categories_add_component__WEBPACK_IMPORTED_MODULE_23__["CategoriesAddComponent"] },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes
            // ,{useHash: true}
            )], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_34__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


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
/* harmony import */ var src_app_services_principal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/principal.service */ "Z86e");


class WhoweareComponent {
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
            console.log(res);
            this.autores = res;
            this.autor.textautor = this.autores[0].textautor;
            this.autor.urlautor = this.autores[0].urlautor;
            this.autor.urlwwa = this.autores[0].urlwwa;
            this.autor.textwwa = this.autores[0].textwwa;
        });
    }
}
WhoweareComponent.ɵfac = function WhoweareComponent_Factory(t) { return new (t || WhoweareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_principal_service__WEBPACK_IMPORTED_MODULE_1__["PrincipalService"])); };
WhoweareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WhoweareComponent, selectors: [["app-whoweare"]], decls: 10, vars: 1, consts: [[1, "color"], [1, "cuerpoUno"], [1, "contenedor"], [1, "imeg"], ["src", "../../../assets/HOME 1.jpg", "loading", "lazy", "alt", ""], [1, "tarjeta"], [1, "textTarj"]], template: function WhoweareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Who we are ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
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
function LatestComponent_li_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 13);
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
function LatestComponent_li_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 13);
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
function LatestComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LatestComponent_li_20_div_1_Template, 5, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LatestComponent_li_20_div_2_Template, 5, 2, "div", 2);
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
                    console.log(this.Noticia.fotoport);
                }
                else {
                    this.Noticia.fotoport = "../../../assets/LOGO.png";
                }
                this.Noticia.fotonot = this.noticialatest.foto_noticia;
                this.Noticia.videonot = this.noticialatest.video_noticia;
                this.id_latest = "/rep/" + this.noticialatest.id_noticia;
                console.log(this.id_latest);
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
                console.log(this.id_latest);
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
LatestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LatestComponent, selectors: [["app-latest"]], decls: 21, vars: 7, consts: [[1, "cuerpo"], [1, "texto"], [4, "ngIf"], [3, "routerLink"], [1, "mapa"], [1, "imagen"], ["alt", "", 3, "src"], [1, "desliza"], ["class", "prim", 4, "ngFor", "ngForOf"], [1, "prim"], ["class", "raro", 4, "ngIf"], [1, "raro"], [1, "parrafo"], [1, "fecha"]], template: function LatestComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LatestComponent_li_20_Template, 3, 2, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorlatest);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.Noticia.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.Noticia.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.Noticia.Subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", ctx.id_latest);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.Noticia.fotoport, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.noticiasportadas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXRlc3QuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FotosdelComponent {
    constructor() { }
    ngOnInit() {
    }
}
FotosdelComponent.ɵfac = function FotosdelComponent_Factory(t) { return new (t || FotosdelComponent)(); };
FotosdelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FotosdelComponent, selectors: [["app-fotosdel"]], decls: 2, vars: 0, template: function FotosdelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "fotosdel works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Rvc2RlbC5jb21wb25lbnQuY3NzIn0= */"] });


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