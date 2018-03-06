webpackJsonp([4],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSeriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
        this.img = this.serie.img;
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
            img: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
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
        if ("Saison " + this.nbSaison === this.lastSee) {
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
        this.serieService.upAlert(serie.title);
        this.navCtrl.popToRoot();
    };
    EditSeriePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-edit-serie",template:/*ion-inline-start:"/home/simon/webDev/apps-android/Ionic/seriesTV-v020-apps/src/pages/edit-serie/edit-serie.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Modifier la Série</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form class="size center" [formGroup]="formGroup" (ngSubmit)="deleteSerie(serie.createDate);saveSerie(formGroup.value)">\n    <ion-item>\n      <ion-label>Titre :</ion-label>\n      <ion-input type="text" name="title" formControlName="title" [(ngModel)]="title" autocapitalize=words readonly></ion-input>\n      <div class="alert" *ngIf="!formGroup.controls[\'title\'].valid && formGroup.controls[\'title\'].touched">{{ title }}</div>\n    </ion-item>\n    <ion-item>\n      <ion-label>Nombre de saisons dispos :</ion-label>\n      <ion-input class="right" type="number" name="nbSaison" formControlName="nbSaison" min=1 max=80 [(ngModel)]="nbSaison" (tap)="sendValue(nbSaison);sendVal(lastSee,inProgress);sendStat()"\n        (keyup)="sendValue(nbSaison);sendVal(lastSee,inProgress);sendStat()" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Dernière saison vue :</ion-label>\n      <ion-select interface="action-sheet" name="lastSee" formControlName="lastSee" [(ngModel)]="lastSee" (ionChange)="sendValue(nbSaison);sendVal(lastSee,inProgress);sendStat()">\n        <ion-option *ngFor="let saison of saisons">{{ saison }}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Saison en cours :</ion-label>\n      <ion-select interface="action-sheet" name="inProgress" formControlName="inProgress" [(ngModel)]="inProgress" (ionChange)="sendValue(nbSaison);sendVal(lastSee,inProgress);sendStat()">\n        <ion-option *ngFor="let saisonSee of saisonSees">{{ saisonSee }}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Status :</ion-label>\n      <ion-input class="right" name="status" formControlName="status" [(ngModel)]="status" readonly>{{ status }}\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Bloc-notes :</ion-label>\n      <ion-textarea type="text" name="content" formControlName="content" placeholder="- facultatif -"></ion-textarea>\n    </ion-item>\n      <ion-input hidden name="img" formControlName="img" [(ngModel)]="img"></ion-input>\n      <ion-datetime hidden formControlName="lastDate" name="lastDate" [(ngModel)]="lastDate"></ion-datetime>\n      <ion-select hidden type="text" name="lastDateText" formControlName="lastDateText" [(ngModel)]="lastDateText"></ion-select>\n      <ion-datetime hidden formControlName="creaDate" name="creaDate" [(ngModel)]="creaDate"></ion-datetime>\n      <ion-select hidden type="text" name="creaDateText" formControlName="creaDateText" [(ngModel)]="creaDateText"></ion-select>\n    <button ion-button color="primary" block type="submit" [disabled]="!formGroup.valid">Modifier</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/simon/webDev/apps-android/Ionic/seriesTV-v020-apps/src/pages/edit-serie/edit-serie.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_serie_service_serie_service__["a" /* SerieServiceProvider */]])
    ], EditSeriePage);
    return EditSeriePage;
}());

//# sourceMappingURL=edit-serie.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchSeriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_serie_add_serie__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_searchapi_model__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchSeriePage = (function () {
    function SearchSeriePage(navCtrl, navParams, apiServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiServiceProvider = apiServiceProvider;
        this.apiSearchSeries = new __WEBPACK_IMPORTED_MODULE_3__models_searchapi_model__["a" /* SearchApi */]();
    }
    SearchSeriePage.prototype.onInput = function (searchInput) {
        var _this = this;
        this.apiServiceProvider
            .getSerieApi(searchInput)
            .then(function (apiSearchSeriesFetched) {
            _this.apiSearchSeries = apiSearchSeriesFetched;
        });
    };
    SearchSeriePage.prototype.addSerieApi = function (imdbID) {
        var _this = this;
        this.apiServiceProvider.addSerieApi(imdbID).then(function (num) {
            _this.apiSearchSerie = num;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_serie_add_serie__["a" /* AddSeriePage */], { apiSearchSerie: _this.apiSearchSerie });
        });
    };
    SearchSeriePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-search-serie",template:/*ion-inline-start:"/home/simon/webDev/apps-android/Ionic/seriesTV-v020-apps/src/pages/search-serie/search-serie.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-searchbar animated autocomplete="On" autocorrect="On" placeholder="Chercher une Série" [(ngModel)]="searchInput" debounce="1000" (ionInput)="onInput(searchInput)">\n    </ion-searchbar>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <span *ngFor="let apiSearchSerie of apiSearchSeries.Search">\n    <ion-card button class="size center" *ngIf="apiSearchSerie.Poster != \'N/A\'" (click)="addSerieApi(apiSearchSerie.imdbID)">\n      <img [src]="apiSearchSerie.Poster">\n      <ion-card-content>\n        {{ apiSearchSerie.Title }}\n      </ion-card-content>\n    </ion-card>\n  </span>\n</ion-content>\n'/*ion-inline-end:"/home/simon/webDev/apps-android/Ionic/seriesTV-v020-apps/src/pages/search-serie/search-serie.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_service_api_service__["a" /* ApiServiceProvider */]])
    ], SearchSeriePage);
    return SearchSeriePage;
}());

//# sourceMappingURL=search-serie.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSeriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
    function AddSeriePage(navCtrl, navParams, serieService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serieService = serieService;
        this.apiSearchSerie = this.navParams.get("apiSearchSerie");
        this.saisons = ["Aucune"];
        this.saisonSees = ["Aucune"];
        this.title = this.apiSearchSerie.Title;
        this.nbSaison = this.apiSearchSerie.totalSeasons;
        this.img = this.apiSearchSerie.Poster;
        this.lastSee = this.saisons;
        this.inProgress = this.saisonSees;
        this.creaDate = __WEBPACK_IMPORTED_MODULE_4_moment___default()().format("YYYY-MM-DD");
        this.creaDateText = "Date de création :";
        this.formGroup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            title: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            nbSaison: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
            img: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](),
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
        this.navCtrl.popToRoot();
    };
    AddSeriePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-add-serie",template:/*ion-inline-start:"/home/simon/webDev/apps-android/Ionic/seriesTV-v020-apps/src/pages/add-serie/add-serie.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Ajouter une Série</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form class="size center" [formGroup]="formGroup" (ngSubmit)="saveSerie(formGroup.value)">\n    <ion-item>\n      <ion-label>Titre :</ion-label>\n      <ion-input type="text" name="title" formControlName="title" autocapitalize=words [(ngModel)]="title" readonly></ion-input>\n      <div class="alert" *ngIf="!formGroup.controls[\'title\'].valid && formGroup.controls[\'title\'].touched">{{ title }}</div>\n    </ion-item>\n    <ion-item>\n      <ion-label>Nombre de saisons dispos :</ion-label>\n      <ion-input class="right" type="number" name="nbSaison" formControlName="nbSaison" [(ngModel)]="nbSaison" (tap)="sendValue(nbSaison);sendVal(lastSee,inProgress);sendStat()" (keyup)="sendValue(nbSaison);sendVal(lastSee,inProgress);sendStat()" readonly></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Dernière saison vue :</ion-label>\n      <ion-select interface="action-sheet" name="lastSee" formControlName="lastSee" [(ngModel)]="lastSee" (ionChange)="sendValue(nbSaison);sendVal(lastSee,inProgress);sendStat()">\n        <ion-option *ngFor="let saison of saisons">{{ saison }}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Saison en cours :</ion-label>\n      <ion-select interface="action-sheet" name="inProgress" formControlName="inProgress" [(ngModel)]="inProgress" (ionChange)="sendValue(nbSaison);sendVal(lastSee,inProgress);sendStat()">\n        <ion-option *ngFor="let saisonSee of saisonSees">{{ saisonSee }}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Status :</ion-label>\n      <ion-input class="right" name="status" formControlName="status" [(ngModel)]="status" readonly>{{ status }}\n      </ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Bloc-notes :</ion-label>\n      <ion-textarea type="text" name="content" formControlName="content" placeholder="- facultatif -"></ion-textarea>\n    </ion-item>\n      <ion-input hidden name="img" formControlName="img" [(ngModel)]="img"></ion-input>\n      <ion-datetime hidden formControlName="creaDate" name="creaDate" [(ngModel)]="creaDate"></ion-datetime>\n      <ion-select hidden type="text" name="creaDateText" formControlName="creaDateText" [(ngModel)]="creaDateText"></ion-select>\n    <button ion-button color="primary" block type="submit" [disabled]="!formGroup.valid">Ajouter</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/simon/webDev/apps-android/Ionic/seriesTV-v020-apps/src/pages/add-serie/add-serie.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_serie_service_serie_service__["a" /* SerieServiceProvider */]])
    ], AddSeriePage);
    return AddSeriePage;
}());

//# sourceMappingURL=add-serie.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSeriePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_serie_service_serie_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_serie_edit_serie__ = __webpack_require__(102);
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
    ViewSeriePage.prototype.deleteSerieConfirm = function (createDate, title) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Supprimer la série " + title + " ?",
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
            selector: "page-view-serie",template:/*ion-inline-start:"/home/simon/webDev/apps-android/Ionic/seriesTV-v020-apps/src/pages/view-serie/view-serie.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ serie.title }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-card class="size center">\n    <ion-card-content>\n      <div hidden>\n        {{ serie.createDate }}\n      </div>\n      <span *ngIf="serie.img">\n        <img [src]="serie.img">\n        <br>\n      </span>\n      <div class="right">\n        {{ serie.nbSaison }} saisons disponibles\n      </div>\n      <hr>\n      <div>\n        Dernière saison vue :\n        <div class="right">\n          {{ serie.lastSee }}\n        </div>\n      </div>\n      <hr>\n      <div>\n        Saison en cours :\n        <div class="right">\n          {{ serie.inProgress }}\n        </div>\n      </div>\n      <hr>\n      <div>\n        Status :\n        <div class="right">\n          {{ serie.status }}\n        </div>\n      </div>\n      <hr>\n      <div>\n        Autres infos :\n        <div class="right">\n          <span *ngIf="serie.content">{{ serie.content }}</span>\n          <span *ngIf="!serie.content"> - </span>\n        </div>\n        <hr>\n        <div class="serie-date right">\n          {{ serie.lastDateText }} {{ serie.lastDate | date: \'dd-MM-yyyy\'}}\n          <br> {{ serie.creaDateText }} {{ serie.creaDate | date: \'dd-MM-yyyy\'}}\n        </div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <button ion-button color="primary" block (tap)="getSerie(serie.createDate)">\n    Modifier la Série\n  </button>\n  <button ion-button color="danger" block (tap)="deleteSerieConfirm(serie.createDate,serie.title)">\n    Supprimer la Série\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/home/simon/webDev/apps-android/Ionic/seriesTV-v020-apps/src/pages/view-serie/view-serie.html"*/
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

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-serie/add-serie.module": [
		410,
		3
	],
	"../pages/edit-serie/edit-serie.module": [
		407,
		2
	],
	"../pages/search-serie/search-serie.module": [
		408,
		1
	],
	"../pages/view-serie/view-serie.module": [
		409,
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
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiServiceProvider = (function () {
    function ApiServiceProvider(http) {
        this.http = http;
        this.baseUrl = "http://www.omdbapi.com/";
        this.apiKey = "a693a781";
    }
    ApiServiceProvider.prototype.getSerieApi = function (searchInput) {
        this.titleSearch = searchInput;
        var url = this.baseUrl + "?apiKey=" + this.apiKey + "&type=series&s=" + this.titleSearch + "&page=1-100";
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.log("Une erreur est survenue " + error); });
    };
    ApiServiceProvider.prototype.addSerieApi = function (imdbID) {
        this.imdbIDSearch = imdbID;
        var url = this.baseUrl + "?apiKey=" + this.apiKey + "&type=series&i=" + this.imdbIDSearch;
        return this.http
            .get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) { return console.log("Une erreur est survenue " + error); });
    };
    ApiServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ApiServiceProvider);
    return ApiServiceProvider;
}());

//# sourceMappingURL=api-service.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_serie_service_serie_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_serie_view_serie__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_serie_search_serie__ = __webpack_require__(103);
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
    HomePage.prototype.searchSerie = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_serie_search_serie__["a" /* SearchSeriePage */]);
    };
    HomePage.prototype.getSerie = function (createDate) {
        var _this = this;
        this.serieService.getSerie(createDate).then(function (num) {
            _this.serie = num;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__view_serie_view_serie__["a" /* ViewSeriePage */], { serie: _this.serie });
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
            subTitle: 'Version : 0.2.0',
            message: 'Contacter le développeur : simonberoudblanc.fr',
            buttons: ['Retour']
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"/home/simon/webDev/apps-android/Ionic/seriesTV-v020-apps/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-icon class="info" name="information-circle" (tap)="infoAlert()"></ion-icon>\n    <ion-title>Gestionnaire de Séries TV</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding (swipe)="swipeEvent($event)">\n  <div class="size center">\n    <span *ngIf="!swipe">\n      <ion-list>\n        <button ion-item *ngFor="let serie of series | async" (click)="getSerie(serie.createDate)">\n          <div class="left">\n            <span class="stat-1" *ngIf="serie.status == \'- à voir -\'">|</span>\n            <span class="stat-2" *ngIf="serie.status == \'- en cours -\'">|</span>\n            <span class="stat-3" *ngIf="serie.status == \'- terminée -\'">|</span>\n            {{ serie.title }}</div>\n          <div class="right">\n            {{ serie.status }}\n          </div>\n        </button>\n      </ion-list>\n    </span>\n    <span *ngIf="swipe">\n      <ion-list reorder="true" (ionItemReorder)="reorderItems($event)">\n        <ion-item button *ngFor="let serie of series | async" (click)="getSerie(serie.createDate)">\n          <div class="left">\n            <span class="stat-1" *ngIf="serie.status == \'- à voir -\'">|</span>\n            <span class="stat-2" *ngIf="serie.status == \'- en cours -\'">|</span>\n            <span class="stat-3" *ngIf="serie.status == \'- terminée -\'">|</span>\n            {{ serie.title }}</div>\n        </ion-item>\n      </ion-list>\n    </span>\n  </div>\n</ion-content>\n<ion-footer>\n  <button ion-button color="primary" block (tap)="searchSerie()">Ajouter une Série</button>\n  <button ion-button [disabled] class="color" color="transparent" block (swipe)="swipeEvent($event)">\n    <span *ngIf="swipe"> Retour > > > </span>\n    <span *ngIf="!swipe"> < < < Glisser pour trier</span>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/home/simon/webDev/apps-android/Ionic/seriesTV-v020-apps/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_serie_service_serie_service__["a" /* SerieServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(348);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_add_serie_add_serie__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_view_serie_view_serie__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_edit_serie_edit_serie__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_search_serie_search_serie__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_serie_service_serie_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_api_service_api_service__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(279);
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
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_7__pages_add_serie_add_serie__["a" /* AddSeriePage */], __WEBPACK_IMPORTED_MODULE_8__pages_view_serie_view_serie__["a" /* ViewSeriePage */], __WEBPACK_IMPORTED_MODULE_9__pages_edit_serie_edit_serie__["a" /* EditSeriePage */], __WEBPACK_IMPORTED_MODULE_10__pages_search_serie_search_serie__["a" /* SearchSeriePage */]],
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
                        { loadChildren: '../pages/edit-serie/edit-serie.module#EditSeriePageModule', name: 'EditSeriePage', segment: 'edit-serie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-serie/search-serie.module#SearchSeriePageModule', name: 'SearchSeriePage', segment: 'search-serie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-serie/view-serie.module#ViewSeriePageModule', name: 'ViewSeriePage', segment: 'view-serie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-serie/add-serie.module#AddSeriePageModule', name: 'AddSeriePage', segment: 'add-serie', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["f" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_add_serie_add_serie__["a" /* AddSeriePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_view_serie_view_serie__["a" /* ViewSeriePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_edit_serie_edit_serie__["a" /* EditSeriePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_search_serie_search_serie__["a" /* SearchSeriePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_serie_service_serie_service__["a" /* SerieServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_api_service_api_service__["a" /* ApiServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 159,
	"./af.js": 159,
	"./ar": 160,
	"./ar-dz": 161,
	"./ar-dz.js": 161,
	"./ar-kw": 162,
	"./ar-kw.js": 162,
	"./ar-ly": 163,
	"./ar-ly.js": 163,
	"./ar-ma": 164,
	"./ar-ma.js": 164,
	"./ar-sa": 165,
	"./ar-sa.js": 165,
	"./ar-tn": 166,
	"./ar-tn.js": 166,
	"./ar.js": 160,
	"./az": 167,
	"./az.js": 167,
	"./be": 168,
	"./be.js": 168,
	"./bg": 169,
	"./bg.js": 169,
	"./bm": 170,
	"./bm.js": 170,
	"./bn": 171,
	"./bn.js": 171,
	"./bo": 172,
	"./bo.js": 172,
	"./br": 173,
	"./br.js": 173,
	"./bs": 174,
	"./bs.js": 174,
	"./ca": 175,
	"./ca.js": 175,
	"./cs": 176,
	"./cs.js": 176,
	"./cv": 177,
	"./cv.js": 177,
	"./cy": 178,
	"./cy.js": 178,
	"./da": 179,
	"./da.js": 179,
	"./de": 180,
	"./de-at": 181,
	"./de-at.js": 181,
	"./de-ch": 182,
	"./de-ch.js": 182,
	"./de.js": 180,
	"./dv": 183,
	"./dv.js": 183,
	"./el": 184,
	"./el.js": 184,
	"./en-au": 185,
	"./en-au.js": 185,
	"./en-ca": 186,
	"./en-ca.js": 186,
	"./en-gb": 187,
	"./en-gb.js": 187,
	"./en-ie": 188,
	"./en-ie.js": 188,
	"./en-nz": 189,
	"./en-nz.js": 189,
	"./eo": 190,
	"./eo.js": 190,
	"./es": 191,
	"./es-do": 192,
	"./es-do.js": 192,
	"./es-us": 193,
	"./es-us.js": 193,
	"./es.js": 191,
	"./et": 194,
	"./et.js": 194,
	"./eu": 195,
	"./eu.js": 195,
	"./fa": 196,
	"./fa.js": 196,
	"./fi": 197,
	"./fi.js": 197,
	"./fo": 198,
	"./fo.js": 198,
	"./fr": 199,
	"./fr-ca": 200,
	"./fr-ca.js": 200,
	"./fr-ch": 201,
	"./fr-ch.js": 201,
	"./fr.js": 199,
	"./fy": 202,
	"./fy.js": 202,
	"./gd": 203,
	"./gd.js": 203,
	"./gl": 204,
	"./gl.js": 204,
	"./gom-latn": 205,
	"./gom-latn.js": 205,
	"./gu": 206,
	"./gu.js": 206,
	"./he": 207,
	"./he.js": 207,
	"./hi": 208,
	"./hi.js": 208,
	"./hr": 209,
	"./hr.js": 209,
	"./hu": 210,
	"./hu.js": 210,
	"./hy-am": 211,
	"./hy-am.js": 211,
	"./id": 212,
	"./id.js": 212,
	"./is": 213,
	"./is.js": 213,
	"./it": 214,
	"./it.js": 214,
	"./ja": 215,
	"./ja.js": 215,
	"./jv": 216,
	"./jv.js": 216,
	"./ka": 217,
	"./ka.js": 217,
	"./kk": 218,
	"./kk.js": 218,
	"./km": 219,
	"./km.js": 219,
	"./kn": 220,
	"./kn.js": 220,
	"./ko": 221,
	"./ko.js": 221,
	"./ky": 222,
	"./ky.js": 222,
	"./lb": 223,
	"./lb.js": 223,
	"./lo": 224,
	"./lo.js": 224,
	"./lt": 225,
	"./lt.js": 225,
	"./lv": 226,
	"./lv.js": 226,
	"./me": 227,
	"./me.js": 227,
	"./mi": 228,
	"./mi.js": 228,
	"./mk": 229,
	"./mk.js": 229,
	"./ml": 230,
	"./ml.js": 230,
	"./mr": 231,
	"./mr.js": 231,
	"./ms": 232,
	"./ms-my": 233,
	"./ms-my.js": 233,
	"./ms.js": 232,
	"./mt": 234,
	"./mt.js": 234,
	"./my": 235,
	"./my.js": 235,
	"./nb": 236,
	"./nb.js": 236,
	"./ne": 237,
	"./ne.js": 237,
	"./nl": 238,
	"./nl-be": 239,
	"./nl-be.js": 239,
	"./nl.js": 238,
	"./nn": 240,
	"./nn.js": 240,
	"./pa-in": 241,
	"./pa-in.js": 241,
	"./pl": 242,
	"./pl.js": 242,
	"./pt": 243,
	"./pt-br": 244,
	"./pt-br.js": 244,
	"./pt.js": 243,
	"./ro": 245,
	"./ro.js": 245,
	"./ru": 246,
	"./ru.js": 246,
	"./sd": 247,
	"./sd.js": 247,
	"./se": 248,
	"./se.js": 248,
	"./si": 249,
	"./si.js": 249,
	"./sk": 250,
	"./sk.js": 250,
	"./sl": 251,
	"./sl.js": 251,
	"./sq": 252,
	"./sq.js": 252,
	"./sr": 253,
	"./sr-cyrl": 254,
	"./sr-cyrl.js": 254,
	"./sr.js": 253,
	"./ss": 255,
	"./ss.js": 255,
	"./sv": 256,
	"./sv.js": 256,
	"./sw": 257,
	"./sw.js": 257,
	"./ta": 258,
	"./ta.js": 258,
	"./te": 259,
	"./te.js": 259,
	"./tet": 260,
	"./tet.js": 260,
	"./th": 261,
	"./th.js": 261,
	"./tl-ph": 262,
	"./tl-ph.js": 262,
	"./tlh": 263,
	"./tlh.js": 263,
	"./tr": 264,
	"./tr.js": 264,
	"./tzl": 265,
	"./tzl.js": 265,
	"./tzm": 266,
	"./tzm-latn": 267,
	"./tzm-latn.js": 267,
	"./tzm.js": 266,
	"./uk": 268,
	"./uk.js": 268,
	"./ur": 269,
	"./ur.js": 269,
	"./uz": 270,
	"./uz-latn": 271,
	"./uz-latn.js": 271,
	"./uz.js": 270,
	"./vi": 272,
	"./vi.js": 272,
	"./x-pseudo": 273,
	"./x-pseudo.js": 273,
	"./yo": 274,
	"./yo.js": 274,
	"./zh-cn": 275,
	"./zh-cn.js": 275,
	"./zh-hk": 276,
	"./zh-hk.js": 276,
	"./zh-tw": 277,
	"./zh-tw.js": 277
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
webpackContext.id = 377;

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchApi; });
var SearchApi = (function () {
    function SearchApi() {
    }
    return SearchApi;
}());

//# sourceMappingURL=searchapi.model.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(323);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/simon/webDev/apps-android/Ionic/seriesTV-v020-apps/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/simon/webDev/apps-android/Ionic/seriesTV-v020-apps/src/app/app.html"*/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
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
    SerieServiceProvider.prototype.upAlert = function (title) {
        var alert = this.alertCtrl.create({
            title: title + " à été mise à jour !",
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

},[324]);
//# sourceMappingURL=main.js.map