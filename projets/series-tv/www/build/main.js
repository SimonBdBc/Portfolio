webpackJsonp([3],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSeriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_serie_service_serie_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddSeriePage = (function () {
    function AddSeriePage(navCtrl, serieService) {
        this.navCtrl = navCtrl;
        this.serieService = serieService;
        this.title = "";
        this.saisons = ["Aucune"];
        this.saisonSees = ["Aucune"];
        this.nbSaison = "";
        this.lastSee = this.saisons;
        this.inProgress = this.saisonSees;
        this.creaDate = __WEBPACK_IMPORTED_MODULE_4_moment___default()().format("YYYY-MM-DD");
        this.creaDateText = "Date de création :";
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            nbSaison: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            lastSee: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            inProgress: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            status: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            content: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            creaDate: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            creaDateText: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]()
        });
    }
    AddSeriePage.prototype.ionViewDidLoad = function () {
        this.sendValue(this.nbSaison);
        this.sendVal(this.lastSee, this.inProgress);
        this.sendStat();
    };
    AddSeriePage.prototype.sendValue = function (nbSaison) {
        var n = parseInt(this.nbSaison) + 1;
        var i;
        this.saisons = ["Aucune"];
        for (i = 1; i < n; i++) {
            this.saisons.push("Saison " + i);
        }
    };
    AddSeriePage.prototype.sendVal = function (lastSee, inProgress) {
        var n = parseInt(this.nbSaison) + 1;
        var i = this.saisons.indexOf(lastSee) + 1;
        this.saisonSees = ["Aucune"];
        if (i < 1) {
            i = 1;
        }
        if (parseInt(this.nbSaison) === this.saisons.indexOf(this.lastSee)) {
            this.inProgress = ["Aucune"];
        }
        else {
            if (lastSee === this.inProgress) {
                this.inProgress = ["Aucune"];
            }
            else {
                for (i; i < n; i++) {
                    this.saisonSees.push("Saison " + i);
                }
            }
        }
    };
    AddSeriePage.prototype.sendStat = function () {
        if (parseInt(this.nbSaison) === this.saisons.indexOf(this.lastSee)) {
            this.status = "- terminée -";
        }
        else {
            if (this.inProgress == "Aucune") {
                this.status = "- à voir -";
            }
            else {
                if (this.inProgress !== "Aucune") {
                    this.status = "- en cours -";
                }
            }
        }
    };
    AddSeriePage.prototype.saveSerie = function (serie) {
        this.serieService.saveSerie(serie);
        this.navCtrl.pop();
    };
    AddSeriePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-add-serie",template:/*ion-inline-start:"/home/simon/webDev/apps-android/Ionic/seriesTV-v21-apps/src/pages/add-serie/add-serie.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Ajouter une Série</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form class="size center" [formGroup]="formGroup" (ngSubmit)="saveSerie(formGroup.value)">\n    <ion-item>\n      <ion-label>Titre :</ion-label>\n      <ion-input type="text" name="title" formControlName="title" autocapitalize=words placeholder="..." required></ion-input>\n      <div class="alert" *ngIf="!formGroup.controls[\'title\'].valid && formGroup.controls[\'title\'].touched">{{ title }}</div>\n    </ion-item>\n    <ion-item>\n      <ion-label>Nombre de saisons dispos :</ion-label>\n      <ion-input class="right" type="number" name="nbSaison" formControlName="nbSaison" min=1 max=80 placeholder="1" [(ngModel)]="nbSaison" (tap)="sendValue(nbSaison);sendVal(lastSee,inProgress);sendStat()"\n        (keyup)="sendValue(nbSaison);sendVal(lastSee,inProgress);sendStat()" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Dernière saison vue :</ion-label>\n      <ion-select interface="action-sheet" name="lastSee" formControlName="lastSee" [(ngModel)]="lastSee" (ionChange)="sendValue(nbSaison);sendVal(lastSee,inProgress);sendStat()">\n        <ion-option *ngFor="let saison of saisons">{{ saison }}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Saison en cours :</ion-label>\n      <ion-select interface="action-sheet" name="inProgress" formControlName="inProgress" [(ngModel)]="inProgress" (ionChange)="sendValue(nbSaison);sendVal(lastSee,inProgress);sendStat()">\n        <ion-option *ngFor="let saisonSee of saisonSees">{{ saisonSee }}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Status :</ion-label>\n      <ion-input class="right" name="status" formControlName="status" [(ngModel)]="status" readonly>{{ status }}\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Autres infos :</ion-label>\n      <ion-textarea type="text" name="content" formControlName="content" placeholder="- optionnel -"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Date d\'ajout :</ion-label>\n      <ion-datetime displayFormat="DD MMMM YYYY" pickerFormat="DD MMMM YYYY" formControlName="creaDate" name="creaDate" interface="action-sheet"\n        monthNames="janvier, février, mars, avril, mai, juin ,juillet, août, septembre, octobre, novembre, décembre" doneText="Ok"\n        [(ngModel)]="creaDate"></ion-datetime>\n      <ion-select hidden type="text" name="creaDateText" formControlName="creaDateText" [(ngModel)]="creaDateText"></ion-select>\n    </ion-item>\n    <button ion-button color="primary" block type="submit" [disabled]="!formGroup.valid">Ajouter</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/simon/webDev/apps-android/Ionic/seriesTV-v21-apps/src/pages/add-serie/add-serie.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_serie_service_serie_service__["a" /* SerieServiceProvider */]])
    ], AddSeriePage);
    return AddSeriePage;
}());

//# sourceMappingURL=add-serie.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSeriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_serie_service_serie_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditSeriePage = (function () {
    function EditSeriePage(navCtrl, navParams, serieService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serieService = serieService;
        this.serie = this.navParams.get("serie");
        this.title = this.serie.title;
        this.nbSaison = this.serie.nbSaison;
        this.lastSee = this.serie.lastSee;
        this.inProgress = this.serie.inProgress;
        this.status = this.serie.status;
        this.content = this.serie.content;
        this.creaDate = this.serie.creaDate;
        this.creaDateText = this.serie.creaDateText;
        this.lastDate = __WEBPACK_IMPORTED_MODULE_4_moment___default()().format("YYYY-MM-DD");
        this.lastDateText = "Mise à jour :";
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            nbSaison: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            lastSee: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            inProgress: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            status: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            content: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            creaDate: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            creaDateText: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            lastDate: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            lastDateText: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]()
        });
    }
    EditSeriePage.prototype.ionViewDidLoad = function () {
        this.sendValue(this.nbSaison);
        this.sendVal(this.lastSee, this.inProgress);
        this.sendStat();
    };
    EditSeriePage.prototype.sendValue = function (nbSaison) {
        var n = parseInt(this.nbSaison) + 1;
        var i;
        this.saisons = ["Aucune"];
        for (i = 1; i < n; i++) {
            this.saisons.push("Saison " + i);
        }
    };
    EditSeriePage.prototype.sendVal = function (lastSee, inProgress) {
        var n = parseInt(this.nbSaison) + 1;
        var i = this.saisons.indexOf(lastSee) + 1;
        this.saisonSees = ["Aucune"];
        if (i < 1) {
            i = 1;
        }
        if (parseInt(this.nbSaison) === this.saisons.indexOf(this.lastSee)) {
            this.inProgress = ["Aucune"];
        }
        else {
            if (lastSee === this.inProgress) {
                this.inProgress = ["Aucune"];
            }
            else {
                for (i; i < n; i++) {
                    this.saisonSees.push("Saison " + i);
                }
            }
        }
    };
    EditSeriePage.prototype.sendStat = function () {
        if (('Saison ' + this.nbSaison) === (this.lastSee)) {
            this.status = "- terminée -";
        }
        else {
            if (this.inProgress == "Aucune") {
                this.status = "- à voir -";
            }
            else {
                if (this.inProgress !== "Aucune") {
                    this.status = "- en cours -";
                }
            }
        }
    };
    EditSeriePage.prototype.deleteSerie = function (createDate) {
        this.serieService.deleteSerie(createDate);
    };
    EditSeriePage.prototype.saveSerie = function (serie) {
        this.serieService.saveSerie(serie);
        this.serieService.upAlert();
        this.navCtrl.popToRoot();
    };
    EditSeriePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-edit-serie",template:/*ion-inline-start:"/home/simon/webDev/apps-android/Ionic/seriesTV-v21-apps/src/pages/edit-serie/edit-serie.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Modifier une Série</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form class="size center" [formGroup]="formGroup" (ngSubmit)="deleteSerie(serie.createDate);saveSerie(formGroup.value)">\n    <ion-item>\n      <ion-label>Titre :</ion-label>\n      <ion-input type="text" name="title" formControlName="title" [(ngModel)]="title" autocapitalize=words required></ion-input>\n      <div class="alert" *ngIf="!formGroup.controls[\'title\'].valid && formGroup.controls[\'title\'].touched">{{ title }}</div>\n    </ion-item>\n    <ion-item>\n      <ion-label>Nombre de saisons dispos :</ion-label>\n      <ion-input class="right" type="number" name="nbSaison" formControlName="nbSaison" min=1 max=80 [(ngModel)]="nbSaison" (tap)="sendValue(nbSaison);sendVal(lastSee,inProgress);sendStat()"\n        (keyup)="sendValue(nbSaison);sendVal(lastSee,inProgress);sendStat()" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Dernière saison vue :</ion-label>\n      <ion-select interface="action-sheet" name="lastSee" formControlName="lastSee" [(ngModel)]="lastSee" (ionChange)="sendValue(nbSaison);sendVal(lastSee,inProgress);sendStat()">\n        <ion-option *ngFor="let saison of saisons">{{ saison }}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Saison en cours :</ion-label>\n      <ion-select interface="action-sheet" name="inProgress" formControlName="inProgress" [(ngModel)]="inProgress" (ionChange)="sendValue(nbSaison);sendVal(lastSee,inProgress);sendStat()">\n        <ion-option *ngFor="let saisonSee of saisonSees">{{ saisonSee }}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Status :</ion-label>\n      <ion-input class="right" name="status" formControlName="status" [(ngModel)]="status" readonly>{{ status }}\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Autres infos :</ion-label>\n      <ion-textarea type="text" name="content" formControlName="content" placeholder="- optionnel -"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Mise à jour :</ion-label>\n      <ion-datetime displayFormat="DD MMMM YYYY" pickerFormat="DD MMMM YYYY" formControlName="lastDate" name="lastDate" interface="action-sheet"\n        monthNames="janvier, février, mars, avril, mai, juin ,juillet, août, septembre, octobre, novembre, décembre" doneText="Ok"\n        [(ngModel)]="lastDate"></ion-datetime>\n      <ion-select hidden type="text" name="lastDateText" formControlName="lastDateText" [(ngModel)]="lastDateText"></ion-select>\n      <ion-datetime hidden formControlName="creaDate" name="creaDate" [(ngModel)]="creaDate"></ion-datetime>\n      <ion-select hidden type="text" name="creaDateText" formControlName="creaDateText" [(ngModel)]="creaDateText"></ion-select>\n    </ion-item>\n    <button ion-button color="primary" block type="submit" [disabled]="!formGroup.valid">Modifier</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/simon/webDev/apps-android/Ionic/seriesTV-v21-apps/src/pages/edit-serie/edit-serie.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_serie_service_serie_service__["a" /* SerieServiceProvider */]])
    ], EditSeriePage);
    return EditSeriePage;
}());

//# sourceMappingURL=edit-serie.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSeriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_serie_service_serie_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_serie_edit_serie__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewSeriePage = (function () {
    function ViewSeriePage(navCtrl, navParams, serieService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serieService = serieService;
        this.alertCtrl = alertCtrl;
        this.serie = this.navParams.get("serie");
    }
    ViewSeriePage.prototype.deleteSerie = function (createDate) {
        this.serieService.deleteSerie(createDate);
        this.navCtrl.pop();
    };
    ViewSeriePage.prototype.getSerie = function (createDate) {
        var _this = this;
        this.serieService.getSerie(createDate).then(function (n) {
            _this.serie = n;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_serie_edit_serie__["a" /* EditSeriePage */], { serie: _this.serie });
        });
    };
    ViewSeriePage.prototype.deleteSerieConfirm = function (createDate) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Supprimer la série ?",
            buttons: [
                {
                    text: "Annuler",
                    role: "cancel",
                    handler: function () { }
                },
                {
                    text: "Confirmer",
                    handler: function () {
                        _this.serieService.deleteSerie(createDate);
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    ViewSeriePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "page-view-serie",template:/*ion-inline-start:"/home/simon/webDev/apps-android/Ionic/seriesTV-v21-apps/src/pages/view-serie/view-serie.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Détails</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card class="size center">\n    <ion-card-content>\n      <div hidden>{{ serie.createDate }}</div>\n      <ion-card-title>\n        {{ serie.title }}\n      </ion-card-title>\n      <br>\n      <hr>\n      <div>\n        Nombre de saisons disponibles :\n        <div class="right">\n          {{ serie.nbSaison }}\n        </div>\n      </div>\n      <hr>\n      <div>\n        Dernière saison vue :\n        <div class="right">\n          {{ serie.lastSee }}\n        </div>\n      </div>\n      <hr>\n      <div>\n        Saison en cours :\n        <div class="right">\n          {{ serie.inProgress }}\n        </div>\n      </div>\n      <hr>\n      <div>\n        Status :\n        <div class="right">\n          {{ serie.status }}\n        </div>\n      </div>\n      <hr>\n      <div>\n        Autres infos :\n        <div class="right">\n          <span *ngIf="serie.content">{{ serie.content }}</span>\n          <span *ngIf="!serie.content"> - </span>\n        </div>\n        <hr>\n        <div class="serie-date right">\n          {{ serie.lastDateText }} {{ serie.lastDate | date: \'dd-MM-yyyy\'}}\n          <br>\n          {{ serie.creaDateText }} {{ serie.creaDate | date: \'dd-MM-yyyy\'}}\n        </div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <button ion-button color="primary" block (tap)="getSerie(serie.createDate)">\n    Modifier la Série\n  </button>\n  <button ion-button color="danger" block (tap)="deleteSerieConfirm(serie.createDate)">\n    Supprimer la Série\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/home/simon/webDev/apps-android/Ionic/seriesTV-v21-apps/src/pages/view-serie/view-serie.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_serie_service_serie_service__["a" /* SerieServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], ViewSeriePage);
    return ViewSeriePage;
}());

//# sourceMappingURL=view-serie.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-serie/add-serie.module": [
		401,
		2
	],
	"../pages/edit-serie/edit-serie.module": [
		402,
		1
	],
	"../pages/view-serie/view-serie.module": [
		403,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_serie_add_serie__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_serie_service_serie_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view_serie_view_serie__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, serieService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.serieService = serieService;
        this.alertCtrl = alertCtrl;
        this.swipe = false;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        this.series = this.getAllSeries();
    };
    HomePage.prototype.addSerie = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_serie_add_serie__["a" /* AddSeriePage */]);
    };
    HomePage.prototype.getSerie = function (createDate) {
        var _this = this;
        this.serieService.getSerie(createDate).then(function (n) {
            _this.serie = n;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__view_serie_view_serie__["a" /* ViewSeriePage */], { serie: _this.serie });
        });
    };
    HomePage.prototype.getAllSeries = function () {
        return this.serieService.getAllSeries();
    };
    HomePage.prototype.reorderItems = function (indexes) {
        return this.serieService.reorderItems(indexes);
    };
    HomePage.prototype.swipeEvent = function (e) {
        if (this.swipe == false) {
            return (this.swipe = true);
        }
        else {
            return (this.swipe = false);
        }
    };
    HomePage.prototype.infoAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'infos Séries TV apps',
            subTitle: 'Version : 2.1.1',
            message: 'Contacter le développeur : simonberoudblanc.fr',
            buttons: ['Retour']
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"/home/simon/webDev/apps-android/Ionic/seriesTV-v21-apps/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-icon class="info" name="information-circle" (tap)="infoAlert()"></ion-icon>\n    <ion-title>Gestionnaire de Séries TV</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding (swipe)="swipeEvent($event)">\n  <div class="size center">\n    <span *ngIf="!swipe">\n      <ion-list>\n        <button ion-item *ngFor="let serie of series | async" (click)="getSerie(serie.createDate)">\n          <div class="left">\n            <span class="stat-1" *ngIf="serie.status == \'- à voir -\'">|</span>\n            <span class="stat-2" *ngIf="serie.status == \'- en cours -\'">|</span>\n            <span class="stat-3" *ngIf="serie.status == \'- terminée -\'">|</span>\n            {{ serie.title }}</div>\n          <div class="right">\n            {{ serie.status }}\n          </div>\n        </button>\n      </ion-list>\n    </span>\n    <span *ngIf="swipe">\n      <ion-list reorder="true" (ionItemReorder)="reorderItems($event)">\n        <ion-item button *ngFor="let serie of series | async" (click)="getSerie(serie.createDate)">\n          <div class="left">\n            <span class="stat-1" *ngIf="serie.status == \'- à voir -\'">|</span>\n            <span class="stat-2" *ngIf="serie.status == \'- en cours -\'">|</span>\n            <span class="stat-3" *ngIf="serie.status == \'- terminée -\'">|</span>\n            {{ serie.title }}</div>\n        </ion-item>\n      </ion-list>\n    </span>\n  </div>\n</ion-content>\n<ion-footer>\n  <button ion-button color="primary" block (tap)="addSerie()">Ajouter une Série</button>\n  <button ion-button [disabled] class="color" color="transparent" block (swipe)="swipeEvent($event)">\n    <span *ngIf="swipe"> Retour > > > </span>\n    <span *ngIf="!swipe"> < < < Glisser pour trier</span>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/home/simon/webDev/apps-android/Ionic/seriesTV-v21-apps/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_serie_service_serie_service__["a" /* SerieServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(344);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_serie_add_serie__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_view_serie_view_serie__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_edit_serie_edit_serie__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_serie_service_serie_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_7__pages_add_serie_add_serie__["a" /* AddSeriePage */], __WEBPACK_IMPORTED_MODULE_8__pages_view_serie_view_serie__["a" /* ViewSeriePage */], __WEBPACK_IMPORTED_MODULE_9__pages_edit_serie_edit_serie__["a" /* EditSeriePage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    monthNames: [
                        "janvier",
                        "février",
                        "mars",
                        "avril",
                        "mai",
                        "juin",
                        "juillet",
                        "août",
                        "septembre",
                        "octobre",
                        "novembre",
                        "décembre"
                    ]
                }, {
                    links: [
                        { loadChildren: '../pages/add-serie/add-serie.module#AddSeriePageModule', name: 'AddSeriePage', segment: 'add-serie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-serie/edit-serie.module#EditSeriePageModule', name: 'EditSeriePage', segment: 'edit-serie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-serie/view-serie.module#ViewSeriePageModule', name: 'ViewSeriePage', segment: 'view-serie', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["f" /* ReactiveFormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_add_serie_add_serie__["a" /* AddSeriePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_view_serie_view_serie__["a" /* ViewSeriePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_edit_serie_edit_serie__["a" /* EditSeriePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_serie_service_serie_service__["a" /* SerieServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 157,
	"./af.js": 157,
	"./ar": 158,
	"./ar-dz": 159,
	"./ar-dz.js": 159,
	"./ar-kw": 160,
	"./ar-kw.js": 160,
	"./ar-ly": 161,
	"./ar-ly.js": 161,
	"./ar-ma": 162,
	"./ar-ma.js": 162,
	"./ar-sa": 163,
	"./ar-sa.js": 163,
	"./ar-tn": 164,
	"./ar-tn.js": 164,
	"./ar.js": 158,
	"./az": 165,
	"./az.js": 165,
	"./be": 166,
	"./be.js": 166,
	"./bg": 167,
	"./bg.js": 167,
	"./bm": 168,
	"./bm.js": 168,
	"./bn": 169,
	"./bn.js": 169,
	"./bo": 170,
	"./bo.js": 170,
	"./br": 171,
	"./br.js": 171,
	"./bs": 172,
	"./bs.js": 172,
	"./ca": 173,
	"./ca.js": 173,
	"./cs": 174,
	"./cs.js": 174,
	"./cv": 175,
	"./cv.js": 175,
	"./cy": 176,
	"./cy.js": 176,
	"./da": 177,
	"./da.js": 177,
	"./de": 178,
	"./de-at": 179,
	"./de-at.js": 179,
	"./de-ch": 180,
	"./de-ch.js": 180,
	"./de.js": 178,
	"./dv": 181,
	"./dv.js": 181,
	"./el": 182,
	"./el.js": 182,
	"./en-au": 183,
	"./en-au.js": 183,
	"./en-ca": 184,
	"./en-ca.js": 184,
	"./en-gb": 185,
	"./en-gb.js": 185,
	"./en-ie": 186,
	"./en-ie.js": 186,
	"./en-nz": 187,
	"./en-nz.js": 187,
	"./eo": 188,
	"./eo.js": 188,
	"./es": 189,
	"./es-do": 190,
	"./es-do.js": 190,
	"./es-us": 191,
	"./es-us.js": 191,
	"./es.js": 189,
	"./et": 192,
	"./et.js": 192,
	"./eu": 193,
	"./eu.js": 193,
	"./fa": 194,
	"./fa.js": 194,
	"./fi": 195,
	"./fi.js": 195,
	"./fo": 196,
	"./fo.js": 196,
	"./fr": 197,
	"./fr-ca": 198,
	"./fr-ca.js": 198,
	"./fr-ch": 199,
	"./fr-ch.js": 199,
	"./fr.js": 197,
	"./fy": 200,
	"./fy.js": 200,
	"./gd": 201,
	"./gd.js": 201,
	"./gl": 202,
	"./gl.js": 202,
	"./gom-latn": 203,
	"./gom-latn.js": 203,
	"./gu": 204,
	"./gu.js": 204,
	"./he": 205,
	"./he.js": 205,
	"./hi": 206,
	"./hi.js": 206,
	"./hr": 207,
	"./hr.js": 207,
	"./hu": 208,
	"./hu.js": 208,
	"./hy-am": 209,
	"./hy-am.js": 209,
	"./id": 210,
	"./id.js": 210,
	"./is": 211,
	"./is.js": 211,
	"./it": 212,
	"./it.js": 212,
	"./ja": 213,
	"./ja.js": 213,
	"./jv": 214,
	"./jv.js": 214,
	"./ka": 215,
	"./ka.js": 215,
	"./kk": 216,
	"./kk.js": 216,
	"./km": 217,
	"./km.js": 217,
	"./kn": 218,
	"./kn.js": 218,
	"./ko": 219,
	"./ko.js": 219,
	"./ky": 220,
	"./ky.js": 220,
	"./lb": 221,
	"./lb.js": 221,
	"./lo": 222,
	"./lo.js": 222,
	"./lt": 223,
	"./lt.js": 223,
	"./lv": 224,
	"./lv.js": 224,
	"./me": 225,
	"./me.js": 225,
	"./mi": 226,
	"./mi.js": 226,
	"./mk": 227,
	"./mk.js": 227,
	"./ml": 228,
	"./ml.js": 228,
	"./mr": 229,
	"./mr.js": 229,
	"./ms": 230,
	"./ms-my": 231,
	"./ms-my.js": 231,
	"./ms.js": 230,
	"./mt": 232,
	"./mt.js": 232,
	"./my": 233,
	"./my.js": 233,
	"./nb": 234,
	"./nb.js": 234,
	"./ne": 235,
	"./ne.js": 235,
	"./nl": 236,
	"./nl-be": 237,
	"./nl-be.js": 237,
	"./nl.js": 236,
	"./nn": 238,
	"./nn.js": 238,
	"./pa-in": 239,
	"./pa-in.js": 239,
	"./pl": 240,
	"./pl.js": 240,
	"./pt": 241,
	"./pt-br": 242,
	"./pt-br.js": 242,
	"./pt.js": 241,
	"./ro": 243,
	"./ro.js": 243,
	"./ru": 244,
	"./ru.js": 244,
	"./sd": 245,
	"./sd.js": 245,
	"./se": 246,
	"./se.js": 246,
	"./si": 247,
	"./si.js": 247,
	"./sk": 248,
	"./sk.js": 248,
	"./sl": 249,
	"./sl.js": 249,
	"./sq": 250,
	"./sq.js": 250,
	"./sr": 251,
	"./sr-cyrl": 252,
	"./sr-cyrl.js": 252,
	"./sr.js": 251,
	"./ss": 253,
	"./ss.js": 253,
	"./sv": 254,
	"./sv.js": 254,
	"./sw": 255,
	"./sw.js": 255,
	"./ta": 256,
	"./ta.js": 256,
	"./te": 257,
	"./te.js": 257,
	"./tet": 258,
	"./tet.js": 258,
	"./th": 259,
	"./th.js": 259,
	"./tl-ph": 260,
	"./tl-ph.js": 260,
	"./tlh": 261,
	"./tlh.js": 261,
	"./tr": 262,
	"./tr.js": 262,
	"./tzl": 263,
	"./tzl.js": 263,
	"./tzm": 264,
	"./tzm-latn": 265,
	"./tzm-latn.js": 265,
	"./tzm.js": 264,
	"./uk": 266,
	"./uk.js": 266,
	"./ur": 267,
	"./ur.js": 267,
	"./uz": 268,
	"./uz-latn": 269,
	"./uz-latn.js": 269,
	"./uz.js": 268,
	"./vi": 270,
	"./vi.js": 270,
	"./x-pseudo": 271,
	"./x-pseudo.js": 271,
	"./yo": 272,
	"./yo.js": 272,
	"./zh-cn": 273,
	"./zh-cn.js": 273,
	"./zh-hk": 274,
	"./zh-hk.js": 274,
	"./zh-tw": 275,
	"./zh-tw.js": 275
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 374;

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/simon/webDev/apps-android/Ionic/seriesTV-v21-apps/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/simon/webDev/apps-android/Ionic/seriesTV-v21-apps/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerieServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SerieServiceProvider = (function () {
    function SerieServiceProvider(storage, alertCtrl) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.series = [];
    }
    SerieServiceProvider.prototype.saveSerie = function (serie) {
        serie.createDate = Date.now();
        this.series.unshift(serie);
        this.storage.set("series", this.series);
    };
    SerieServiceProvider.prototype.getAllSeries = function () {
        var _this = this;
        return this.storage.get("series").then(function (series) {
            _this.series = series == null ? [] : series;
            return _this.series;
        });
    };
    SerieServiceProvider.prototype.getSerie = function (createDate) {
        var _this = this;
        return this.storage.get("series").then(function (series) {
            _this.serie = series.slice().find(function (r) { return r.createDate === createDate; });
            return _this.serie;
        });
    };
    SerieServiceProvider.prototype.deleteSerie = function (createDate) {
        this.series = this.series.filter(function (serie) {
            return serie.createDate !== createDate;
        });
        this.storage.set("series", this.series);
    };
    SerieServiceProvider.prototype.upAlert = function () {
        var alert = this.alertCtrl.create({
            title: "Mise à jour réussie !",
            buttons: ["Ok"]
        });
        alert.present();
    };
    SerieServiceProvider.prototype.reorderItems = function (indexes) {
        var element = this.series[indexes.from];
        this.series.splice(indexes.from, 1);
        this.series.splice(indexes.to, 0, element);
    };
    SerieServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], SerieServiceProvider);
    return SerieServiceProvider;
}());

//# sourceMappingURL=serie-service.js.map

/***/ })

},[320]);
//# sourceMappingURL=main.js.map