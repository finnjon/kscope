webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  border: 1px solid #999999;\n  margin: 0px auto 20px auto;\n  max-width: 960px;\n}\n\n.logo {\n  display: block;\n  margin: 0 auto;\n}\n\n.language-bar {\n  font-size: 0.7em;\n  border-bottom: 1px solid #999999;\n}\n\n.grey {\n  background-color: #cdcdcd;\n  display: inline-block;\n}\n\n.left-lbar {\n  height: 20px;\n  width: 200px;\n  float: left;\n}\n\n.space-lbar {\n  width: 200px;\n  display: inline-block;\n}\n\n.language {\n  color: #000000;\n  line-height: 20px;\n  float: right;\n  width: 80px;\n  text-align: center;\n}\n\n.triangle {\n  width: 0;\n  height: 0;\n  display: inline-block;\n}\n\n.bottomleft {\n  border-bottom: 20px solid #cdcdcd;\n\tborder-right: 20px solid transparent;\n  float: left;\n}\n\n.bottomright {\n  border-bottom: 20px solid #cdcdcd;\n  border-left: 20px solid transparent;\n  float: right;\n}\n\n.topleft {\n  border-top: 20px solid #cdcdcd;\n  border-right: 20px solid transparent;\n  float: right;\n}\n\nfooter {\n  font-size: 10px;\n  font-family: verdana;\n  color: #999999;\n  padding: 3px 10px 10px 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"pure-g\">\n    <div class=\"language-bar pure-u-1\">\n      <span class=\"grey left-lbar\"></span>\n      <span class=\"triangle bottomleft\"></span>\n      <span class=\"space-lbar\"></span> <!-- long white flexy bit -->\n      <span class=\"triangle bottomright\"></span>\n      <a class=\"language\" (click)=\"changeLang('fi')\">Suomeksi</a>\n      <span class=\"triangle topleft\"></span>\n      <a class=\"grey language\" (click)=\"changeLang('en')\">In English</a>\n      <span class=\"triangle bottomright\"></span>\n    </div>\n    <div class=\"pure-u-1\">\n      <img *ngIf=\"translate.currentLang === 'en'\" src=\"assets/images/body_kalen.gif\" alt=\"logo\" class=\"pure-img logo\">\n      <img *ngIf=\"translate.currentLang === 'fi'\" src=\"assets/images/body_kalfi.gif\" alt=\"logo\" class=\"pure-img logo\">\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n  <hr>\n  <footer>\n    <p>© 2004 Rights granted for academic use without adaptation and use to include this statement. All other rights reserved.</p>\n    <p>Content: Felicity Kjisik and Leena Karlsson.</p>\n    <p>Realization: The Virtual University Unit of University of Art and Design Helsinki & The University of Helsinki Language Centre</p>\n  </footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(translate) {
        this.translate = translate;
        translate.addLangs(['en', 'fi']);
        translate.setDefaultLang('en');
        translate.use('en');
    }
    AppComponent.prototype.changeLang = function (lang) {
        this.translate.use(lang);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_service__ = __webpack_require__("../../../../../src/app/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__needs_needs_component__ = __webpack_require__("../../../../../src/app/needs/needs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cskills_cskills_component__ = __webpack_require__("../../../../../src/app/cskills/cskills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__motivation_motivation_component__ = __webpack_require__("../../../../../src/app/motivation/motivation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__personality_personality_component__ = __webpack_require__("../../../../../src/app/personality/personality.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lbackground_lbackground_component__ = __webpack_require__("../../../../../src/app/lbackground/lbackground.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__needs_ref_needs_ref_component__ = __webpack_require__("../../../../../src/app/needs-ref/needs-ref.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__cskills_ref_cskills_ref_component__ = __webpack_require__("../../../../../src/app/cskills-ref/cskills-ref.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__motivation_ref_motivation_ref_component__ = __webpack_require__("../../../../../src/app/motivation-ref/motivation-ref.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__personality_ref_personality_ref_component__ = __webpack_require__("../../../../../src/app/personality-ref/personality-ref.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__lbackground_ref_lbackground_ref_component__ = __webpack_require__("../../../../../src/app/lbackground-ref/lbackground-ref.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: 'needs', component: __WEBPACK_IMPORTED_MODULE_9__needs_needs_component__["a" /* NeedsComponent */] },
    { path: 'needs/reflect', component: __WEBPACK_IMPORTED_MODULE_16__needs_ref_needs_ref_component__["a" /* NeedsRefComponent */] },
    { path: 'current-skills', component: __WEBPACK_IMPORTED_MODULE_10__cskills_cskills_component__["a" /* CSkillsComponent */] },
    { path: 'current-skills/reflect', component: __WEBPACK_IMPORTED_MODULE_17__cskills_ref_cskills_ref_component__["a" /* CSkillsRefComponent */] },
    { path: 'motivation', component: __WEBPACK_IMPORTED_MODULE_11__motivation_motivation_component__["a" /* MotivationComponent */] },
    { path: 'motivation/reflect', component: __WEBPACK_IMPORTED_MODULE_18__motivation_ref_motivation_ref_component__["a" /* MotivationRefComponent */] },
    { path: 'personality', component: __WEBPACK_IMPORTED_MODULE_12__personality_personality_component__["a" /* PersonalityComponent */] },
    { path: 'personality/reflect', component: __WEBPACK_IMPORTED_MODULE_19__personality_ref_personality_ref_component__["a" /* PersonalityRefComponent */] },
    { path: 'lbackground', component: __WEBPACK_IMPORTED_MODULE_13__lbackground_lbackground_component__["a" /* LBackgroundComponent */] },
    { path: 'lbackground/reflect', component: __WEBPACK_IMPORTED_MODULE_20__lbackground_ref_lbackground_ref_component__["a" /* LBackgroundRefComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["a" /* ProfileComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__needs_needs_component__["a" /* NeedsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__cskills_cskills_component__["a" /* CSkillsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__motivation_motivation_component__["a" /* MotivationComponent */],
            __WEBPACK_IMPORTED_MODULE_12__personality_personality_component__["a" /* PersonalityComponent */],
            __WEBPACK_IMPORTED_MODULE_13__lbackground_lbackground_component__["a" /* LBackgroundComponent */],
            __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_15__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_16__needs_ref_needs_ref_component__["a" /* NeedsRefComponent */],
            __WEBPACK_IMPORTED_MODULE_17__cskills_ref_cskills_ref_component__["a" /* CSkillsRefComponent */],
            __WEBPACK_IMPORTED_MODULE_18__motivation_ref_motivation_ref_component__["a" /* MotivationRefComponent */],
            __WEBPACK_IMPORTED_MODULE_19__personality_ref_personality_ref_component__["a" /* PersonalityRefComponent */],
            __WEBPACK_IMPORTED_MODULE_20__lbackground_ref_lbackground_ref_component__["a" /* LBackgroundRefComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_ng2_translate__["a" /* TranslateModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__profile_service__["a" /* ProfileService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/cskills-ref/cskills-ref.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ref-response {\n  background-color: #3366cc;\n  color: #ffffff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cskills-ref/cskills-ref.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div>\n  <div class=\"ref-bubbles\">\n    <div class=\"pure-g\">\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(1)\" [innerHTML]=\"'cskills-ref.1' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_b1.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(2)\" [innerHTML]=\"'cskills-ref.2' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_b2.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(3)\" [innerHTML]=\"'cskills-ref.3' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_b3.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(4)\" [innerHTML]=\"'cskills-ref.4' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_b1.gif\" alt=\"speech bubble\"></div>\n      </div>\n    </div>\n    <div class=\"pure-g\">\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(5)\" [innerHTML]=\"'cskills-ref.5' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_b2.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(6)\" [innerHTML]=\"'cskills-ref.6' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_b3.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(7)\" [innerHTML]=\"'cskills-ref.7' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_b1.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(8)\" [innerHTML]=\"'cskills-ref.8' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_b2.gif\" alt=\"speech bubble\"></div>\n      </div>\n    </div>\n    <div class=\"pure-g\">\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(9)\" [innerHTML]=\"'cskills-ref.9' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_b3.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(10)\" [innerHTML]=\"'cskills-ref.10' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_b1.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(11)\" [innerHTML]=\"'cskills-ref.11' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_b2.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(12)\" [innerHTML]=\"'cskills-ref.12' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_b3.gif\" alt=\"speech bubble\"></div>\n      </div>\n    </div>\n    <div class=\"pure-g\">\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(13)\" [innerHTML]=\"'cskills-ref.13' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_b1.gif\" alt=\"speech bubble\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"pure-g\">\n    <div class=\"pure-u-1-2 needs-ref-images\">\n      <img src=\"/assets/images/a_pieni_taidot.gif\" alt=\"little picture\">\n      <img src=\"/assets/images/a_ryhma_taidot.gif\" alt=\"little picture\">\n    </div>\n    <div class=\"pure-u-1-2\">\n      <div *ngIf=\"sound != null\">\n        <audio id=\"sounds\" src=\"./assets/sounds2016/kaleidoscope-{{ sound }}.mp3\"></audio>\n        <img src=\"assets/images/play-sound-icon.png\" title=\"High Volume\" width=\"20\" onclick=\"document.getElementById('sounds').play()\">\n      </div>\n      <div class=\"ref-response\" [innerHTML]=\"target\"></div>\n    </div>\n  </div>\n  <div class=\"pure-g comment-box\">\n    <div class=\"pure-u-1-2\">\n      <div class=\"inner-comment-box\">\n        <p class=\"comment-box-header\" [innerHTML]=\"'cskills-ref.your-skills' | translate\"></p>\n        <p [innerHTML]=\"'cskills-ref.your-skills-text' | translate\"></p>\n      </div>\n    </div>\n    <div class=\"pure-u-1-2\">\n      <div class=\"inner-comment-box\">\n        <div [innerHTML]=\"'ref-general.save' | translate\"></div>\n        <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n          <textarea name=\"cskills\" [(ngModel)]=\"profile.cskills\" id=\"cskills\" cols=\"45\" rows=\"4\"></textarea>\n          <div class=\"successful\" *ngIf=\"showSuccess\">{{ \"ref-general.success\" | translate }}</div>\n          <div>\n            <button class=\"pure-button\" type=\"submit\" [innerHTML]=\"'ref-general.save-to' | translate\"></button>\n            <button class=\"pure-button\" type=\"button\" (click)=\"f.resetForm()\" [innerHTML]=\"'ref-general.clear' | translate\"></button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/cskills-ref/cskills-ref.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_service__ = __webpack_require__("../../../../../src/app/profile.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CSkillsRefComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CSkillsRefComponent = (function () {
    function CSkillsRefComponent(translate, profileService) {
        this.translate = translate;
        this.profileService = profileService;
        this.target = "- Click on a comment to see a response";
        this.sound = null;
        this.showSuccess = false;
        this.showDetail = function (num) {
            if (this.translate.currentLang === "en") {
                switch (num) {
                    case 1:
                        this.target = "- Is there something in particular that stops you from speaking?  Are you too self-conscious to speak up? Are you worried about your skills? Could the  problem be that you rarely get to use the language in a real-life context. Reflect upon situations you have found difficult, work on the aspects that you feel are blocking you e.g. pronunciation, vocabulary. Try to be brave and start looking for situations where you have to speak up, it may not be as bad as you thought.";
                        this.sound = "skills-speakup";
                        break;
                    case 2:
                        this.target = "- You can find all kinds of tests on the Internet. Try <a href='http://www.lancaster.ac.uk/researchenterprise/dialang/about.htm'>Dialang</a> and if possible ask for advice on good websites for working on specific skills.";
                        this.sound = "skills-evaluating";
                        break;
                    case 3:
                        this.target = "The only way of reactivating your language skills is to use them. You could start with a low threshold, for instance write a journal, talk to friends who also know the language. Once you have regained some confidence the next stage is to start challenging yourself to develop. Self-reflection and feedback are particularly important.";
                        this.sound = "skills-reactivate";
                        break;
                    case 4:
                        this.target = "Academic knowledge includes the capacity to develop oneself as a learner. It is crucial to reflect on your own needs and goals and to evaluate your own learning. This also applies to the learning of foreign languages. When you can make a realistic assessment of your own level and needs, you can then also set your own learning objectives. This in turn means that it will be easier for a teacher to help you extend and diversify your learning.";
                        this.sound = "skills-teachersjob";
                        break;
                    case 5:
                        this.target = "It is not always essential that writing has to be faultless. Reflective writing may also enhance learning. Think carefully: what kinds of writing have you tried earlier? When you write an informative text, for example, accuracy is more important. Look for models on the Net for writing a CV. Study academic theses and articles from your field to get ideas about academic writing. Make use of unilingual dictionaries and grammars when you're writing. Look up what courses are offered and choose a suitable one especially if you want feedback on your texts. But also write just for yourself sometimes: use the words you want to learn and don't be afraid to experiment with language used by other writers.";
                        this.sound = "skills-writing";
                        break;
                    case 6:
                        this.target = "As you learn more about your own subject, reading the textbooks will get easier. Are you familiar with different cultural academic conventions in texts? Knowledge on how texts are written offers insight into how they can be read more effectively. If your problem is difficulty with words, then you may have to actively work on your vocabulary range. Pay attention to key words that you come across in articles and learn them. Are you using a dictionary sensibly? Can you guess or infer the meanings of words? Do you know about skimming and scanning strategies? Expanding your vocabulary will help both not only with reading flow but also with remembering content. You could benefit from attending an academic reading course.On the internet, <a href='http://kielikeskus.helsinki.fi/vkk/rr' target='_blank'>the Reading Room</a>  offers special tips for reading English texts.";
                        this.sound = "skills-reading";
                        break;
                    case 7:
                        this.target = "What makes you think this? Have people struggled with what you have been trying to say, or could it be more a question of your own uncertainty? If you feel your pronunciation limits your communication then you should perhaps acquire some tools that can help you work on it. You could attend a pronunciation group or use some relevant internet sites that deal with pronunciation.";
                        this.sound = "skills-pron";
                        break;
                    case 8:
                        this.target = "Think about the words that you really need. For reading it's not always necessary to know exact meanings, whereas for writing a careful choice of words and spelling is important. Collect words, in a notebook or as a computer file, from the books you read, from the films you watch, from conversations, from lessons, and so on. Choose words you think you need, review them frequently and use whenever possible.";
                        this.sound = "skills-vocab";
                        break;
                    case 9:
                        this.target = "It might well be that in fact you are correctly using the grammar you have learnt in the past even though it feels as if you've forgotten the rules. Why not try some quick revision on the internet or in the Self Access Centre.  If you still believe you need to work on your grammar you can either attend a grammar group or do some self-study.";
                        this.sound = "skills-grammar";
                        break;
                    case 10:
                        this.target = "It helps to actively use the language in different situations. When reading and listening it's important to focus on finding and remembering the essential points. You could also make use of some <a href='http://www.studygs.net/memory.htm' target='_blank'>memory strategies</a>. When memorizing words you might find it helpful to consider what you need the words for and then to link and organise them in a way that's useful for your own purposes.";
                        this.sound = "skills-memory";
                        break;
                    case 11:
                        this.target = "That's great! Try to find other rewarding ways of learning language.";
                        this.sound = "skills-lyrics";
                        break;
                    case 12:
                        this.target = "Excellent! It is always good to feel confident when communicating, but this doesn't mean that there is no space for improvement. When you're evaluating your own skills it's important to make use of your own experience. You could go on to analyse your skills more precisely, thinking about the situations in which you manage well and those in which you might need to develop.";
                        this.sound = "skills-managewell";
                        break;
                    case 13:
                        this.target = "Even in our own language we sometimes have problems understanding other people's speech. Generally the more we listen to a specific accent, the easier it is to understand.<br><br> Whenever possible, get yourself into situations where you can practice your listening skills. You could also do some systematic listening practice: exploit the internet to practice listening to accents that you have difficulty with. Keep in mind that as much as 40% of the words used in speech are not important for the understanding of the message. Try to pick out chunks of language and notice regularities in the dialects used by different speakers. Experiment with listening by turning off subtitles, or use a transcript if one is provided.";
                        this.sound = "skills-accents";
                        break;
                    default:
                        this.target = "- Click on a comment to see a response";
                        this.sound = null;
                }
            }
            else if (this.translate.currentLang === "fi") {
                this.sound = null;
                switch (num) {
                    case 1:
                        this.target = "- Onko jotain erityistä syytä, joka estää Sinua puhumasta? Tarkkailetko liikaa itseäsi ja suoriutumistasi? Mietitkö liikaa taitojasi?  Voisiko ongelma olla se, ettet juurikaan pääse käyttämään kieltä oikeissa puhetilanteissa? Pohdi tilanteita, jotka tuntuvat hankalilta ja keskity parantamaan niitä tekijöitä, jotka estävät Sinua puhumasta, esim. sanasto tai ääntäminen. Hakeudu reippaasti tilanteisiin, joissa joudut puhumaan. Selviät todennäköisesti paremmin kuin uskalsit odottaakaan.";
                        break;
                    case 2:
                        this.target = "- Löydät monenlaisia testejä netistä. Kokeile aluksi vaikkapa <a href='http://www.lancaster.ac.uk/researchenterprise/dialang/about.htm'>Dialang</a>.";
                        break;
                    case 3:
                        this.target = "Aloita rohkeasti käyttämään kieltä! Mitä jos kirjoittaisit päiväkirjaa, juttelisit ystävien kanssa vieraalla kielellä tai katselisit leffoja  eli aloittaisit stressittämistä kielenkäyttötilanteista? Vauhtiin päästyäsi voit hakeutua haastavampiin tilateisiin.  Muista reflektoida etenemistäsi ja pyydä palautetta edistymisestäsi.";
                        break;
                    case 4:
                        this.target = "Akateemiseen osaamiseen kuuluu kyky kehittää itseään oppijana: omien tarpeiden ja tavoitteiden pohtiminen ja oppimisen arviointi on tässä keskeistä. Tämä koskee myös vieraita kieliä. Kun osaat itse realistisesti arvioida tasosi ja tarpeesi, osaat myös paremmin asettaa oppimistavoitteesi ja opettajan antama tuki voi tällöin  syventää ja monipuolistaa oppimistasi entisestään.";
                        break;
                    case 5:
                        this.target = "Kirjoittamisessa ei aina ole keskeisintä virheetön tuotos. Oppimista edistää myös pohdiskeleva itselleen kirjoittaminen. Tee tarkempi analyysi: millaista kirjoittamista olet aiemmin kokeillut? Jos kirjoitat muille, on tekstisi oikeellisuuskin tärkeämpää. Hae malleja netistä esimerkiksi CV:n kirjoittamiseen. Tutki aiemmin tehtyjä graduja ja oman alasi akateemisia julkaisuja saadaksesi ideoita tieteelliseen kirjoittamiseen. Hyödynnä yksikielistä sanakirjaa ja kielioppia kirjoittaessasi. Katso kielikeskuksen kurssitarjontaa ja valitse sopivaa taitoa harjoittava kurssi etenkin, jos haluat palautetta teksteistäsi. Kirjoita joskus vain itsellesi: käytä niitä sanoja, joita haluat oppia. Ota mallia toisten kirjoittajien tavasta käyttää kieltä.";
                        break;
                    case 6:
                        this.target = "Oletko juuri aloittanut opintosi? Kun opit lisää omasta alastasi, helpottuu tenttikirjojen lukukin. Tunnetko akateemisten tekstien rakenteen ja kirjoituskäytänteet muissakin kuin äidinkielessäsi? Tieto näistä auttaa Sinua löytämään tehokkaat lukustrategiat.<br><br>Jos sanasto tuottaa ongelmia, kannattaa aktiivisesti laajentaa sanavarastoaan. Lukiessa kannattaa keskittyä avainsanoihin ja opetella ne. Sanavaraston parantaminen auttaa sekä lukemisen sujuvuuttaa että sisällän ymmärrtämistä. Käytätkö sanakirjaa järkevästi? Osaatko arvata ja päätellä sanojen merkitystä? Tunnetko silmäilytekniikoita? Akateemisen lukemisen kurssit/ryhmät voivat auttaa. <a href='http://kielikeskus.helsinki.fi/vkk/rr' target='_blank'>Reading Roomista</a>  saat vinkkejä erityisesti englanninkielisten kirjojen lukemiseen.";
                        break;
                    case 7:
                        this.target = "Mihin käsityksesi perustuu? Ymmärtävätkö puhekumppanisi Sinua vai onko kyse enemmän omasta epävarmuudestasi? Pyydä palautetta siitä, mikä ääntämisessäsi erityisesti vaikeuttaa ymmärtämistä. Netistä löydät sivustoja, joista saat apua ja ideoita ääntämyksesi parantamiseen.";
                        break;
                    case 8:
                        this.target = "Mieti millaisia sanoja eniten tarvitset. Yleissanastoa, akateemista sanastoa, adjektiiveja kuvailuun, verbejä tutkimuksen kirjoittamiseen jne. Millaisia tarkoituksia varten tarvitset sanoja? Lukiessasi et aina tarvitse sanan tarkkaa merkitystä, mutta kirjoittaessasi sinun täytyy valita sanat huolella ja oikeinkirjoituskin on tärkeä. Kerää sanoja lukemistasi kirjoista, katsomistasi elokuvista, kuulemistasi keskusteluista,  oppitunneilta jne.  Kertaa sanoja usein ja käytä niitä aina, kun se on mahdollista.";
                        break;
                    case 9:
                        this.target = "Voi toki olla niinkin, että osaat käyttää oppimaasi kieliopillista ainesta hyvin, vaikka Sinusta tuntuisikin, että säännöt ovat unohtuneet. Kokeile pikakertausta netissä tai kielikeskuksen itseopiskelussa Aleksandriassa, jossa on myös hyvä valikoima kielioppi- ja harjoituskirjoja moneen kieleen. Itseopiskelu voi hyvinkin tuottaa toivotun tuloksen. Kielioppikurssista tai -ryhmästä voi myös olla hyötyä.";
                        break;
                    case 10:
                        this.target = "Kielen aktiivinen käyttö eri tilanteissa auttaa. Lukemisessa ja kuuntelussa on tärkeää keskittyä oleellisten asioiden löytämiseen ja muistamiseen: voit kokeilla olisiko Sinulle hyötyä muistitekniikoista. Sanojen muistamisessa on tärkeää miettiä, mihin tarkoitukseen sanaa tarvitset ja yrittää sitoa se johonkin itsellesi tärkeään kokonaisuuteen.";
                        break;
                    case 11:
                        this.target = "Hienoa! Etsi uusia palkitsevia tapoja oppia lisää kieltä.";
                        break;
                    case 12:
                        this.target = "Hyvä! Osaat varmaan hyödyntää saamasi palautteen ja siten motivoida itseäsi edelleen. Omien kokemusten hyödyntäminen on tärkeää, kun arvioi taitojaan.  Voit tehdä myös tarkemman analyysin taidoistasi ja miettiä, millaisissa tilanteissa selviät ja mitä osaamisen alueita voisit vielä kehittää.";
                        break;
                    case 13:
                        this.target = "Omassa äidinkielessäkin meillä on joskus ongelmia erilaisten puhujien ymmärtämisessä. Tärkeintä on hakeutua rohkeasti tilanteisiin, joissa voit harjoittaa kuuntelutaitoasi. Mitä useammin kuuntelet tiettyä aksenttia, sitä helpommaksi sen ymmärtäminen tulee. Voit joskus myös tehdä suunnitelmallisen kuunteluharjoituksen: etsi netistä materiaalia, jossa on mukana erilaisia puhujia ja niitä aksentteja, jotka tuottavat Sinulle ongelmia. Keskity kuuntelemaan ja aseta tavoitteeksi ymmärtäminen yleisellä tasolla: jopa 40 % puhutun kielen sanoista on sellaisia, ettet välttämättä tarvitse niitä viestin ymmärtämiseen. Yritä hahmottaa kokonaisuuksia ja löytää säännönmukaisuuksia saman variantin eri puhujilta. Ota suomenkiliset tekstitykset pois ja/tai hyödynnä käsikirjoitusta, jos sellainen on.";
                        break;
                    default:
                        this.target = "- Klikkaa kommenttia nähdäksesi vastauksen";
                }
            }
        };
    }
    CSkillsRefComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.onLangChange.subscribe(function (event) {
            _this.showDetail(null);
        });
        this.profile = this.profileService.profile;
    };
    CSkillsRefComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.profileService.profile.cskills = formData.cskills;
        this.showSuccess = true;
        setTimeout(function () {
            _this.showSuccess = false;
        }, 2000);
    };
    return CSkillsRefComponent;
}());
CSkillsRefComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-cskills-ref',
        template: __webpack_require__("../../../../../src/app/cskills-ref/cskills-ref.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cskills-ref/cskills-ref.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */]) === "function" && _b || Object])
], CSkillsRefComponent);

var _a, _b;
//# sourceMappingURL=cskills-ref.component.js.map

/***/ }),

/***/ "../../../../../src/app/cskills/cskills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cskills1 {\n  background-color: #3366cc;\n  color: #ffffff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cskills/cskills.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"pure-g\">\n  <div class=\"pure-u-1 pure-u-md-2-5 skill-left\">\n    <img *ngIf=\"translate.currentLang === 'en'\" src=\"assets/images/ajatus_skills.gif\" alt=\"picture of thought bubble containing needs\" class=\"skill-left-image\">\n    <img *ngIf=\"translate.currentLang === 'fi'\" src=\"assets/images/ajatus_taidot.gif\" alt=\"picture of thought bubble containing needs\" class=\"skill-left-image\">\n    <img src=\"assets/images/blue-woman.gif\" alt=\"picture of red woman on phone\" class=\"skill-left-image\">\n  </div>\n  <div class=\"pure-u-1 pure-u-md-3-5 skill-right\">\n    <div>\n      <audio id=\"sounds\" src=\"./assets/sounds2016/kaleidoscope-skills-main.mp3\"></audio>\n      <img src=\"assets/images/play-sound-icon.png\" title=\"High Volume\" width=\"20\" onclick=\"document.getElementById('sounds').play()\">\n    </div>\n    <div class=\"skill-right-text cskills1\" [innerHTML]=\"'cskills1.text' | translate\">\n    </div>\n    <div class=\"click-here\" routerLink=\"reflect\">\n      <div class=\"click-here-text\" [innerHTML]=\"'click-here' | translate\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/cskills/cskills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CSkillsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CSkillsComponent = (function () {
    function CSkillsComponent(translate) {
        this.translate = translate;
    }
    CSkillsComponent.prototype.ngOnInit = function () {
    };
    return CSkillsComponent;
}());
CSkillsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-cskills',
        template: __webpack_require__("../../../../../src/app/cskills/cskills.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cskills/cskills.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */]) === "function" && _a || Object])
], CSkillsComponent);

var _a;
//# sourceMappingURL=cskills.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".intro-text-left {\n  width: 41%;\n  margin: 15px 0 10px 20px;\n  padding: 0 20px 20px 20px;\n  background-color: #CCCCCC;\n  font-size: 0.85em;\n  border-radius: 5px;\n  line-height: 1.5;\n}\n\n.intro-text-right {\n  width: 41%;\n  margin: 15px 20px 10px 0;\n  padding: 0 20px 20px 20px;\n  font-size: 0.8em;\n  line-height: 1.7;\n}\n\n.menu {\n  margin-top: 30px;\n  font-size: 1.4em;\n  font-weight: 600;\n}\n\n.menu ul {\n  list-style: none;\n}\n\n.needs, .cskills, .motivation, .personality, .lbackground {\n  cursor: pointer;\n}\n\n.needs { color: #cc0000 }\n.cskills { color: #3333d6 }\n.motivation { color: #cc00cc }\n.personality { color: #33cc00 }\n.lbackground { color: #fcdc01 }\n\n.woman-laying { margin-top: 30px; }\n\n.llimplies {\n  display: block;\n  margin: 0 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pure-g\">\n  <div class=\"pure-u-1 pure-u-md-1-2 intro-text-left\" [innerHTML]=\"'home.left' | translate\">\n  </div>\n\n  <div class=\"pure-u-1 pure-u-md-1-2 intro-text-right\">\n    <div [innerHTML]=\"'home.right' | translate\"></div>\n    <div class=\"menu\">\n      <ul>\n        <li class=\"needs\" routerLink=\"/needs\">{{ \"needs\" | translate }}</li>\n        <li class=\"cskills\" routerLink=\"/current-skills\">{{ \"cskills\" | translate }}</li>\n        <li class=\"motivation\" routerLink=\"/motivation\">{{ \"motivation\" | translate }}</li>\n        <li class=\"personality\" routerLink=\"/personality\">{{ \"personality\" | translate }}</li>\n        <li class=\"lbackground\" routerLink=\"/lbackground\">{{ \"lhistory\" | translate }}</li>\n      </ul>\n    </div>\n    <img src=\"assets/images/a_etusivu.gif\" alt=\"woman\" class=\"woman-laying\">\n  </div>\n  <img src=\"assets/images/bottext.gif\" alt=\"llimplies\" class=\"pure-img llimplies\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/lbackground-ref/lbackground-ref.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ref-response {\n  background-color: #f4e601;\n  color: #000000;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lbackground-ref/lbackground-ref.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div>\n  <div class=\"ref-bubbles\">\n    <div class=\"pure-g\">\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(1)\" [innerHTML]=\"'lhistory-ref.1' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_y1.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(2)\" [innerHTML]=\"'lhistory-ref.2' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_y2.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(3)\" [innerHTML]=\"'lhistory-ref.3' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_y3.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(4)\" [innerHTML]=\"'lhistory-ref.4' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_y1.gif\" alt=\"speech bubble\"></div>\n      </div>\n    </div>\n    <div class=\"pure-g\">\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(5)\" [innerHTML]=\"'lhistory-ref.5' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_y2.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(6)\" [innerHTML]=\"'lhistory-ref.6' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_y3.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(7)\" [innerHTML]=\"'lhistory-ref.7' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_y1.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(8)\" [innerHTML]=\"'lhistory-ref.8' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_y2.gif\" alt=\"speech bubble\"></div>\n      </div>\n    </div>\n    <div class=\"pure-g\">\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(9)\" [innerHTML]=\"'lhistory-ref.9' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_y3.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(10)\" [innerHTML]=\"'lhistory-ref.10' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_y1.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(11)\" [innerHTML]=\"'lhistory-ref.11' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_y2.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(12)\" [innerHTML]=\"'lhistory-ref.12' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_y3.gif\" alt=\"speech bubble\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"pure-g\">\n    <div class=\"pure-u-1-2 needs-ref-images\">\n      <img src=\"/assets/images/a_pieni_ohistoria.gif\" alt=\"little picture\">\n      <img src=\"/assets/images/a_ryhma_ohistoria.gif\" alt=\"little picture\">\n    </div>\n    <div class=\"pure-u-1-2\">\n      <div *ngIf=\"sound != null\">\n        <audio id=\"sounds\" src=\"./assets/sounds2016/kaleidoscope-{{ sound }}.mp3\"></audio>\n        <img src=\"assets/images/play-sound-icon.png\" title=\"High Volume\" width=\"20\" onclick=\"document.getElementById('sounds').play()\">\n      </div>\n      <div class=\"ref-response\" [innerHTML]=\"target\"></div>\n    </div>\n  </div>\n  <div class=\"pure-g comment-box\">\n    <div class=\"pure-u-1-2\">\n      <div class=\"inner-comment-box\">\n        <p class=\"comment-box-header\" [innerHTML]=\"'lhistory-ref.your-lhistory' | translate\"></p>\n        <p [innerHTML]=\"'lhistory-ref.your-lhistory-text' | translate\"></p>\n      </div>\n    </div>\n    <div class=\"pure-u-1-2\">\n      <div class=\"inner-comment-box\">\n        <div [innerHTML]=\"'ref-general.save' | translate\"></div>\n        <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n          <textarea name=\"lhistory\" [(ngModel)]=\"profile.lhistory\" id=\"lhistory\" cols=\"45\" rows=\"4\"></textarea>\n          <div class=\"successful\" *ngIf=\"showSuccess\">{{ \"ref-general.success\" | translate }}</div>\n          <div>\n            <button class=\"pure-button\" type=\"submit\" [innerHTML]=\"'ref-general.save-to' | translate\"></button>\n            <button class=\"pure-button\" type=\"button\" (click)=\"f.resetForm()\" [innerHTML]=\"'ref-general.clear' | translate\"></button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/lbackground-ref/lbackground-ref.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_service__ = __webpack_require__("../../../../../src/app/profile.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LBackgroundRefComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LBackgroundRefComponent = (function () {
    function LBackgroundRefComponent(translate, profileService) {
        this.translate = translate;
        this.profileService = profileService;
        this.target = "- Click on a comment to see a response";
        this.sound = null;
        this.showSuccess = false;
        this.showDetail = function (num) {
            if (this.translate.currentLang === "en") {
                switch (num) {
                    case 1:
                        this.target = "- Learning a new language opens up many doors, both during your studies and later on in working life. Knowing a language can be a gateway to exciting experiences and a broadening of your personal and professional horizons.  What's more, studying a new language might mean a welcome change from your other studies.<br><br>Look at the requirements of your Faculty as regards your main line of studies as well as the language requirements. You might find that there is some required reading in languages other than English or Swedish. In fact, your Faculty may insist that you study two foreign languages. Look at the Language Centre offering of courses in various languages. You could also drop in to see one of the language tutors in the Self Access Centre in Aleksandria and find out about studying independently.";
                        this.sound = "lb-ionly";
                        break;
                    case 2:
                        this.target = "- Your learning will be deeper and more effective if you make realistic self-evaluation a part of your learning. Remember that you own your learning process! Asking for and giving peer evaluation can also be useful. Try the language testing system Dialang, which gives feedback on your skills and on your self-evaluation. You could do Dialang in various languages in order to get a fuller perspective on your skills and self-evaluation.";
                        this.sound = "lb-ivealways";
                        break;
                    case 3:
                        this.target = "Good! Keep looking for more of these positive learning experiences. They enrich your life and may be a nice balance to your main studies. You can be sure that languages will always be useful both in your own field of studies and later on in life.";
                        this.sound = "lb-enjoyed";
                        break;
                    case 4:
                        this.target = "The solid basis that you received in school will be useful when you set about, for example, improving your speaking skills. Try to get yourself into situations where you need to use the language, whether it's speaking or writing. Try to have fun and use your imagination!";
                        this.sound = "lb-school";
                        break;
                    case 5:
                        this.target = "It's a good idea to see your language learning as a part of your own identity. Kaleidoscope should give you food for thought. When planning your independent learning, remember that you don't only learn in classrooms. Make use of all the lifewide opportunities: you hobbies, your studies, international friends and the virtual world.<br><br>How about writing your personal life history as a language learner, just for yourself? Or keeping a diary or a blog in, for example, English?";
                        this.sound = "lb-iveneverthought";
                        break;
                    case 6:
                        this.target = "It would be a good idea for you to start from scratch. Try to encourage yourself by focusing on good memories. Don't think about competing with others, but set your own objectives and try to actively achieve them. Be aware of your anxiety but don't let it conquer you. Try to visualize a new you who loves learning languages.<br><br>Think of new strategies: for example, instead of staying silent when you don't understand, ask a question. Carry out an internal conversation with yourself in another language. Look for informal low-stress learning situations; invite the foreign language into your daily life. Try studying with a close friend. Talk to your dog or cat. Go and talk to the language tutors in the Self Access Centre.";
                        this.sound = "lb-ihavebad";
                        break;
                    case 7:
                        this.target = "This may be true, but you have surely gained lots of knowledge and skills in the language classrooms of your past. They will be a good basis when you find yourself in real communicative situations.<br><br>Find yourself someone to talk to. Suggest to your best friend that you use another language together. Look for opportunities to talk to tourists and  foreign visitors.  Mental exercises, that is, using your inner voice and talking to yourself can be fun and beneficial to your speaking confidence: for example, give imaginative speeches and talk to yourself in the foreign language on the bus, metro or train.  Be patient and encourage yourself!";
                        this.sound = "lb-ivehadsolittle";
                        break;
                    case 8:
                        this.target = "This means that you already have lots of skills at the ready. Set yourself some new and challenging goals so that you can develop your existing skills. Expand your awareness of the different  functions you use your different languages for: personal, imaginative, academic, professional etc.";
                        this.sound = "lb-alwaysused";
                        break;
                    case 9:
                        this.target = "This is a great way to maintain your language skills. Try to include more languages. Look for online learning opportunities together with your friends.  Develop ways of giving and receiving feedback: For example, ask your friends what kinds of feedback they would like.";
                        this.sound = "lb-iveinternational";
                        break;
                    case 10:
                        this.target = "The influence that teachers have on learning comes out clearly when learners talk and write about their memories and histories. There are descriptions of teachers who care, teachers who are enthusiastic, teachers who can explain difficult things, and teachers who give helpful and motivating feedback. Good memories of teachers are closely connected to good learning experiences. It is probably a question of the creation of a genuine dialogue between teacher and pupil, and both sides are responsible for this.";
                        this.sound = "lb-fantastic";
                        break;
                    case 11:
                        this.target = "As an adult you have many strengths as a language learner: you have experiences to talk about and have learnt many problem-solving skills in life. You have learnt how to help and to ask for help — don't hesitate to do the same when learning languages. You have learnt to look for alternative ways and this may be useful when coping with language problems too. You also know that it's not worth comparing your performance with others. It's better to set realistic goals based on your own strengths and weaknesses and stick to them firmly.";
                        this.sound = "lb-longtime";
                        break;
                    case 12:
                        this.target = "The main thing to remember is that listeners do <b>not</b> listen for your mistakes; they are interested in hearing <b>what</b> you want to say, not <b>how</b> you say it. Take your emotional temperature and promise yourself a reward, say, some chocolate, afterwards. Talk to yourself  on a daily basis: say positive things about yourself and your language skills. These can be internal dialogues using your inner voice or talking out loud. You could also imagine having a conversation partner.";
                        this.sound = "lb-newifear";
                        break;
                    default:
                        this.target = "- Click on a comment to see a response";
                        this.sound = null;
                }
            }
            else if (this.translate.currentLang === "fi") {
                this.sound = null;
                switch (num) {
                    case 1:
                        this.target = "- Uuden kielen opiskelu antaa monia mahdollisuuksia jo opintojen aikana ja erityisesti myöhemmin työelämässä. Kun osaa vierasta kieltä, laajenevat sekä henkilökohtaiset että ammatilliset näköalasi. Toki uuden kielen opiskelu tarjoaa myös virkistävää vaihtelua muille opinnoillesi.<br><br>Tutustu tiedekuntasi yleisiin ja kielivaatimuksiin: tenttikirjoja saattaa tulla eteen vaikkapa saksaksi tai tiedekuntasi saattaa edellyttää kahden vieraan kielen taidon osoittamista. Tutki Kielikeskuksen Flamma-sivuja ja eri kielten kurssitarjontaa. Piipahda Kielikeskuksen tuutorin luona Aleksandriassa ja tutustu muihinkin itseopiskelun joustaviin kielenoppimismahdollisuuksiin.";
                        break;
                    case 2:
                        this.target = "- Oppimisesi tehostuu ja syventyy, kun opettelet ajattelemaan realistista itsearviointia osana oppimistasi. Muista, että oppimisprosessisi on Sinun! Vertaisarvioinnin pyytäminen ja tarjoaminen kaverille antaa myös uusia näkökulmia. Kokeile Dialangia, jossa saat palautetta sekä osaamisestasi että itsearvioinnistasi. Tee Dialang useissa kielissä niin saat perspektiiviä taitoihisi ja itsearviointiisi.";
                        break;
                    case 3:
                        this.target = "Hyvä. Hanki itsellesi lisää näitä positiivisia oppimiskokemuksia. Ne rikastuttavat elämääsi ja antavat vastapainoa oman aineesi opiskeluun, joka on ehkä hyvinkin erilaista. Kielistä on varmasti apua ja hyötyä oman alan opinnoissa ja etenkin myöhemmin työelämässä.";
                        break;
                    case 4:
                        this.target = "Näistä saamasi pohja on tarpeen, kun lähdet parantamaan esimerkiksi puhetaitojasi. Hakeudu tilanteisiin, joissa joudut käyttämään kieltä, kirjoittamaan ja puhumaan sitä.Pidä hauskaa ja ota mielikuvitus ja luovuus mukaan opiskeluusi!";
                        break;
                    case 5:
                        this.target = "Oppimistaan on hyvä miettiä osana omaa persoonaa. Kaleidoskooppi antanee ajattelemisen eväitä. Kun suunnittelet opiskeluasi, muista että oppiminen ei ole sidottu pelkästään luokkatilanteisiin. Hyödynnä kaikki tilanteet ja mahdollisuudet elämässäsi: harrastukset, opinnot, kansainväliset ystäväsi ja virtuaalinen maailma.<br><br>Entä jos kirjoittaisit kielenoppijan omaelämänkerran, ihan vain itseäsi varten? Tai pitäisit päiväkirjaa tai blogia vaikkapa englanniksi?";
                        break;
                    case 6:
                        this.target = "Sinun olisi hyvä nollata tilanne. Yritä saada lisää rohkeutta keskittymällä hyviin muistoihin. Älä kilpaile toisten kanssa, vaan aseta omia tavoitteita ja pyri aktiivisesti saavuttamaan ne. Tunnista pelkosi, mutta älä jää sen vangiksi. Yritä visualisoida uusi minä, joka rakastaa kielten opiskelua.<br><br>Mieti uusia strategioita: esimerkiksi vaikenemisen sijaan kysy, jos et ymmärrä. Hae sellaisia elävän elämän oppimistilanteita, joihin ei liity stressiä. Opiskele tutun ihmisen kanssa. Juttele koirallesi, kissallesi tai itsellesi. Pistäydy kielikeskuksen tuutorilla Aleksandrian itseopiskelustudiolla.";
                        break;
                    case 7:
                        this.target = "Olet kuitenkin kerännyt paljon tietoa ja monia taitoja luokkatilanteista. Ne ovat hyvänä pohjana aidolle kommunikaatiolle.<br><br>Etsi itsellesi keskustelukumppani: puhu vaikka parhaan kaverisi kanssa vierasta kieltä. Hakeudu turistien ja ulkomaisten vieraiden juttusille. Käy sisäistä keskustelua vieraalla kielellä; tällainen harjoittelu on hauskaa ja antaa rohkeutta ja itsevarmuutta oikeita puhetilanteita varten. Voit pitää mielikuvitusluennnon tai puheen vieraalla kielellä bussissa, metrossa tai junassa matkatessasi. Ole kärsivällinen ja muista kehua ja itseäsi!";
                        break;
                    case 8:
                        this.target = "Sinulla on siis jo valmiiksi paljon taitoja ja valmiuksia. Aseta itsellesi uusia, haastavia tavoitteita ja kehitä näin taitojasi edelleen.  Pohdi mihin tarkoituksiin käytät eri kieliä (henkilökohtaisessa elämässä, akateemisissa yhteyksissä, työelämässä jne.). Voisitko laajentaa niiden käyttää uusiin tilanteisiin?";
                        break;
                    case 9:
                        this.target = "Tämä on mainio tapa pitää yllä kielitaitoaan. Käytä useita kieliä kontaktien pitoon. Opiskele verkossa ystäviesi kanssa ja kehity palautteen vastaanottajana ja antajana.";
                        break;
                    case 10:
                        this.target = "Opettajan vaikutus oppimiseen tulee voimakkaasti esille oppijoiden muistoissa ja kertomuksissa. Monen muistoissa nousee esiin opettaja, joka välitti, tai opettaja, joka oli innostunut opettamastaan asiastaan, tai opettaja, joka osasi selittää vaikeat asiat, tai opettaja, joka osasi motivoida, tai opettaja, joka antoi hyödyllistä palautetta. Hyvät muistot opettajasta liittyvät usein myös hyviin oppimiskokemuksiin. Niissä on varmaan kyse aidon dialogin syntymisestä opettajan ja oppilaan välille ja molemmat osapuolet ovat varmaan edesauttaneet sen syntymistä.";
                        break;
                    case 11:
                        this.target = "Aikuisella on monia vahvuuksia kielenoppijana: on kokemuksia, joista puhua ja monia ongelmanratkaisutaitoja työelämästä. Osaat auttaa ja pyytää apua kaverilta töissä: älä epäröi tehdä niin kieltä opiskellessasikaan. Olet oppinut hakemaan vaihtoehtoja ja tästä on hyötyä vieraan kielen oppimisen ongelmissa. Tiedät myös, ettei kannata verrata omaa suoriutumistaan muihin, vaan pitää edetä omista lähtökohdista realististen tavoitteiden suunnassa, sitkeästi.";
                        break;
                    case 12:
                        this.target = "Sinun kannattaa muistaa, että kuulija ei ole kiinnostunut virheistäsi, vaan yrittää kuunnella mitä Sinulla on sanottavana, ei sitä miten sen sanot. Mittaa tunnelämpäsi ja lupaa itsellesi palkkio (suklaa toimii hyvin!). Puhu itsellesi mukavia päivittäin: sano positiivisia asioita itsestäsi ja kielitaidostasi. Nämä voivat olla sisäisiä keskusteluja tai ääneen puhumista. Tai kuvittele itsellesi mukava puhekumppani.";
                        break;
                    default:
                        this.target = "- Klikkaa kommenttia nähdäksesi vastauksen";
                }
            }
        };
    }
    LBackgroundRefComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.onLangChange.subscribe(function (event) {
            _this.showDetail(null);
        });
        this.profile = this.profileService.profile;
    };
    LBackgroundRefComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.profileService.profile.lhistory = formData.lhistory;
        this.showSuccess = true;
        setTimeout(function () {
            _this.showSuccess = false;
        }, 2000);
    };
    return LBackgroundRefComponent;
}());
LBackgroundRefComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-lbackground-ref',
        template: __webpack_require__("../../../../../src/app/lbackground-ref/lbackground-ref.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lbackground-ref/lbackground-ref.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */]) === "function" && _b || Object])
], LBackgroundRefComponent);

var _a, _b;
//# sourceMappingURL=lbackground-ref.component.js.map

/***/ }),

/***/ "../../../../../src/app/lbackground/lbackground.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lbackground1 {\n  background-color: #f4E601;\n  color: #000000;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lbackground/lbackground.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"pure-g\">\n  <div class=\"pure-u-1 pure-u-md-2-5 skill-left\">\n    <img *ngIf=\"translate.currentLang === 'en'\" src=\"assets/images/ajatus_learning.gif\" alt=\"picture of thought bubble containing needs\" class=\"skill-left-image\">\n    <img *ngIf=\"translate.currentLang === 'fi'\" src=\"assets/images/ajatus_historia.gif\" alt=\"picture of thought bubble containing needs\" class=\"skill-left-image\">\n    <img src=\"assets/images/yellow-woman.gif\" alt=\"picture of yellow woman on phone\" class=\"skill-left-image\">\n  </div>\n  <div class=\"pure-u-1 pure-u-md-3-5 skill-right\">\n    <div>\n      <audio id=\"sounds\" src=\"./assets/sounds2016/kaleidoscope-lhistory-main.mp3\"></audio>\n      <img src=\"assets/images/play-sound-icon.png\" title=\"High Volume\" width=\"20\" onclick=\"document.getElementById('sounds').play()\">\n    </div>\n    <div class=\"skill-right-text lbackground1\" [innerHTML]=\"'lhistory1.text' | translate\">\n    </div>\n    <div class=\"click-here\" routerLink=\"reflect\">\n      <div class=\"click-here-text\" [innerHTML]=\"'click-here' | translate\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/lbackground/lbackground.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LBackgroundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LBackgroundComponent = (function () {
    function LBackgroundComponent(translate) {
        this.translate = translate;
    }
    LBackgroundComponent.prototype.ngOnInit = function () {
    };
    return LBackgroundComponent;
}());
LBackgroundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-lbackground',
        template: __webpack_require__("../../../../../src/app/lbackground/lbackground.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lbackground/lbackground.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */]) === "function" && _a || Object])
], LBackgroundComponent);

var _a;
//# sourceMappingURL=lbackground.component.js.map

/***/ }),

/***/ "../../../../../src/app/motivation-ref/motivation-ref.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ref-response {\n  background-color: #cc00cc;\n  color: #ffffff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/motivation-ref/motivation-ref.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div>\n  <div class=\"ref-bubbles\">\n    <div class=\"pure-g\">\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(1)\" [innerHTML]=\"'motiv-ref.1' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_m1.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(2)\" [innerHTML]=\"'motiv-ref.2' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_m2.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(3)\" [innerHTML]=\"'motiv-ref.3' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_m3.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(4)\" [innerHTML]=\"'motiv-ref.4' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_m1.gif\" alt=\"speech bubble\"></div>\n      </div>\n    </div>\n    <div class=\"pure-g\">\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(5)\" [innerHTML]=\"'motiv-ref.5' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_m2.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(6)\" [innerHTML]=\"'motiv-ref.6' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_m3.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(7)\" [innerHTML]=\"'motiv-ref.7' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_m1.gif\" alt=\"speech bubble\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"pure-g\">\n    <div class=\"pure-u-1-2 needs-ref-images\">\n      <img src=\"/assets/images/a_pieni_motivaatio.gif\" alt=\"little picture\">\n      <img src=\"/assets/images/a_ryhma_motivaatio.gif\" alt=\"little picture\">\n    </div>\n    <div class=\"pure-u-1-2\">\n      <div *ngIf=\"sound != null\">\n        <audio id=\"sounds\" src=\"./assets/sounds2016/kaleidoscope-{{ sound }}.mp3\"></audio>\n        <img src=\"assets/images/play-sound-icon.png\" title=\"High Volume\" width=\"20\" onclick=\"document.getElementById('sounds').play()\">\n      </div>\n      <div class=\"ref-response\" [innerHTML]=\"target\"></div>\n    </div>\n  </div>\n  <div class=\"pure-g comment-box\">\n    <div class=\"pure-u-1-2\">\n      <div class=\"inner-comment-box\">\n        <p class=\"comment-box-header\" [innerHTML]=\"'motiv-ref.your-motiv' | translate\"></p>\n        <p [innerHTML]=\"'motiv-ref.your-motiv-text' | translate\"></p>\n      </div>\n    </div>\n    <div class=\"pure-u-1-2\">\n      <div class=\"inner-comment-box\">\n        <div [innerHTML]=\"'ref-general.save' | translate\"></div>\n        <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n          <textarea name=\"motivation\" [(ngModel)]=\"profile.motivation\" id=\"motivation\" cols=\"45\" rows=\"4\"></textarea>\n          <div class=\"successful\" *ngIf=\"showSuccess\">{{ \"ref-general.success\" | translate }}</div>\n          <div>\n            <button class=\"pure-button\" type=\"submit\" [innerHTML]=\"'ref-general.save-to' | translate\"></button>\n            <button class=\"pure-button\" type=\"button\" (click)=\"f.resetForm()\" [innerHTML]=\"'ref-general.clear' | translate\"></button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/motivation-ref/motivation-ref.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_service__ = __webpack_require__("../../../../../src/app/profile.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotivationRefComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MotivationRefComponent = (function () {
    function MotivationRefComponent(translate, profileService) {
        this.translate = translate;
        this.profileService = profileService;
        this.target = "- Click on a comment to see a response";
        this.sound = null;
        this.showSuccess = false;
        this.showDetail = function (num) {
            if (this.translate.currentLang === "en") {
                switch (num) {
                    case 1:
                        this.target = "- Well, at least you're motivated by the need to get your language credits. Perhaps you should think about your attitude. Why do you feel so negative about learning languages? Have you had bad experiences in the past? If you could find a way to change your attitude, you might find learning a language more interesting and therefore more successful. Focusing on your own interests, dreams and passions in life might make you more motivated. Dream, wonder, ponder and be curious about languages and language learning!";
                        this.sound = "mot-onlystudy";
                        break;
                    case 2:
                        this.target = "- This is a good example of what has been called 'integrative motivation', ie, wanting to learn a language so that you can integrate easily into the target language group. It sounds as if you are a communicative and active type of learner, who likes to focus on oral skills.";
                        this.sound = "mot-othercountries";
                        break;
                    case 3:
                        this.target = "This is known as 'instrumental motivation', i.e. wanting to learn a language for utilitarian reasons such as earning money or gaining status. Reflect on the external influences on your motivation and try to see what personally meaningful aspects of language learning you could focus on.";
                        this.sound = "mot-goodjob";
                        break;
                    case 4:
                        this.target = "You are motivated both integratively and instrumentally, because you see that learning languages makes travelling easier, and you also want to mix naturally with the people of the countries you travel in. You need to focus on oral skills and gain awareness of cross-cultural differences. Being open-minded and respectful, showing interest in your conversation partner, asking questions and listening attentively are important skills.";
                        this.sound = "mot-travelandmeet";
                        break;
                    case 5:
                        this.target = "Could it be that your beliefs about yourself as a learner affect your motivation?  Where do these beliefs come from? Could it be that you have depended too much on external judgments of your skills? Or that in a different learning context you might be more successful? Try to look at your beliefs and understand where they come from. A fresh start or a new way of learning might have altogether different results. Take control of your own learning, bring in your own passions and interests in life and make learning fun.";
                        this.sound = "mot-goodlearner";
                        break;
                    case 6:
                        this.target = "It may feel like you don't have enough time but is time really the problem? Could it be lack of motivation, for example, arising out of your personal or emotional situation? If so, think about the reasons. If you really examine the reasons, you might be able to find a way to improve your motivation — and suddenly it's possible to arrange the time you need. Take small steps at the beginning and try to find low-pressure learning situations every now and then.";
                        this.sound = "mot-notime";
                        break;
                    case 7:
                        this.target = "If you can't see any relevance in learning languages, then you are not likely to be an active and effective learner. Obviously, it is hard to foresee the future but there are not many contexts in Finland, or elsewhere, where languages are not important in working life.  Can you think of <i>personal</i> rather than professional reasons to learn languages?<br><br>Opening the door to the world of languages might also make you see their potential relevance for your professional life: the future is unpredictable and a new language or, say, better skills in English  might turn  out to be a valuable effort.";
                        this.sound = "mot-noneed";
                        break;
                    default:
                        this.target = "- Click on a comment to see a response";
                        this.sound = null;
                }
            }
            else if (this.translate.currentLang === "fi") {
                this.sound = null;
                switch (num) {
                    case 1:
                        this.target = "- Sinua motivoi ainakin tarve saada opintopisteet kasaan. Voisit ehkä pohtia syitä asenteeseesi. Miksi suhtaudut niin kielteisesti kielten opiskeluun? Onko Sinulla ollut huonoja kokemuksia? Asenteen muuttaminen saattaisi tehdä kielten opiskelun mielenkiintoisemmaksi ja tuottaa parempia oppimistuloksia. Ehkäpä motivaatiosi paranee, jos otat kielten opiskelun lähtökohdaksi omat kiinnostuksen kohteesi, unelmasi ja intohimosi. Siispä anna unelmille siivet, pohdi, ihmettele ja ole utelias kielten ja niiden oppimisen suhteen!";
                        break;
                    case 2:
                        this.target = "- Tämäntyyppistä motivaatiota on kutsuttu 'integratiiviseksi' eli Sinulla on halu oppia vierasta kieltä voidaksesi 'integroitua' (sopeutua joukkoon) kohdekieliseen väestöön. Olet varmaan puhelias ja aktiivinen oppija ja panostat mielelläsi suulliseen taitoosi.";
                        break;
                    case 3:
                        this.target = "Tässä on kyseessä 'instrumentaalinen motivaatio' eli halu oppia kieltä sen välinearvon vuoksi, esimerkiksi taloudellisista syistä. Kannattaa pohtia motivaatioosi vaikuttavia ulkoisia tekjöitä ja miettiä myös, millaisiin Sinulle itsellesi merkityksellisiin asioihin voisit kielten opiskelussa panostaa.";
                        break;
                    case 4:
                        this.target = "Olet sekä integratiivisesti että instrumentaalisesti motivoitunut, koska pidät kielitaitoa tärkeänä matkustamisen onnistumiseksi ja haluat myös seurustella paikallisten ihmisten kanssa. Panosta suulliseen taitoon ja paranna kulttuurien välisten erojen tuntemustasi ja herkkyyttäsi. Avoimuus ja kunnioitus sekä aito kiinnostus puhekumppaniin ovat tärkeitä. Opettele kysymään ja kuuntelemaan tarkalla korvalla.";
                        break;
                    case 5:
                        this.target = "Et jaksa motivoitua opiskelemaan kieliä, koska uskot olevasi huono oppija. Mihin käsityksesi perustuu? Perustuuko se liikaa muiden arviointeihin? Voisiko olla niin, että sopivassa oppimisympäristössä pärjäisitkin ihan mukavasti? Pohdi käsityksiäsi ja niiden alkuperää. Aloita opiskelu puhtaalta pöydältä, uusin ajatuksin ja asentein. Ota oppiminen omiin käsiisi, hyödynnä omia kiinnostuksen kohteitasi, anna tilaa asioille, joita rakastat ja tee oppimisestasi hauskaa.";
                        break;
                    case 6:
                        this.target = "Sinusta saattaa tuntua siltä, ettei Sinulla ole aikaa opiskelaa kieliä. Mieti kuitenkin asiaa rehellisesti: aikako se Sinun ongelmasi on vai olisiko sittenkin kysymys siitä, että henkilökohtaiset syyt tai tunnetilasi syövät motivaatiotasi? Yritä pohtia, mitkä tekijät todellisuudessa aiheuttavat motivoitumisen ongelmia. Saatat näin onnistua parantamaan motivaatiotasi ja — yllätys, yllätys aikaakin löytyy! Etene alussa pienin askelin ja kokeile matalan stressin opiskelutilanteita.";
                        break;
                    case 7:
                        this.target = "Jos et pidä kieliä itsellesi tarpeellisina, et oletettavasti myöskään opiskele aktiivisesti etkä tehokkaasti. Tulevaisuuden ennustaminen on haastavaa, mutta on vaikea kuvitella sellaisia työtehtäviä Suomessa (tai muualla), joissa kielitaidolla ei olisi  merkitystä. Entä henkilökohtaiset syyt ja tarpeet kielten opiskeluun, voisitko aloittaa niistä?<br><br>Kun avaat oven kielten maailmaan, saatat huomata niiden merkityksen tulevan tyäelämäsi kannaltakin. Tulevaisuus on tuntematon, mutta jonkun uuden vieraan kielen taidon hankkiminen tai vaikkapa englannin parantaminen saattaisivat hyvinkin osoittautua vaivan arvoisiksi.";
                        break;
                    default:
                        this.target = "- Klikkaa kommenttia nähdäksesi vastauksen";
                }
            }
        };
    }
    MotivationRefComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.onLangChange.subscribe(function (event) {
            _this.showDetail(null);
        });
        this.profile = this.profileService.profile;
    };
    MotivationRefComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.profileService.profile.motivation = formData.motivation;
        this.showSuccess = true;
        setTimeout(function () {
            _this.showSuccess = false;
        }, 2000);
    };
    return MotivationRefComponent;
}());
MotivationRefComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-motivation-ref',
        template: __webpack_require__("../../../../../src/app/motivation-ref/motivation-ref.component.html"),
        styles: [__webpack_require__("../../../../../src/app/motivation-ref/motivation-ref.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */]) === "function" && _b || Object])
], MotivationRefComponent);

var _a, _b;
//# sourceMappingURL=motivation-ref.component.js.map

/***/ }),

/***/ "../../../../../src/app/motivation/motivation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".motivation1 {\n  background-color: #CC00CC;\n  color: #ffffff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/motivation/motivation.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"pure-g\">\n  <div class=\"pure-u-1 pure-u-md-2-5 skill-left\">\n    <img *ngIf=\"translate.currentLang === 'en'\" src=\"assets/images/ajatus_motivation.gif\" alt=\"picture of thought bubble containing needs\" class=\"skill-left-image\">\n    <img *ngIf=\"translate.currentLang === 'fi'\" src=\"assets/images/ajatus_motivaatio.gif\" alt=\"picture of thought bubble containing needs\" class=\"skill-left-image\">\n    <img src=\"assets/images/purple-woman.gif\" alt=\"picture of red woman on phone\" class=\"skill-left-image\">\n  </div>\n  <div class=\"pure-u-1 pure-u-md-3-5 skill-right\">\n    <div>\n      <audio id=\"sounds\" src=\"./assets/sounds2016/kaleidoscope-mot-main.mp3\"></audio>\n      <img src=\"assets/images/play-sound-icon.png\" title=\"High Volume\" width=\"20\" onclick=\"document.getElementById('sounds').play()\">\n    </div>\n    <div class=\"skill-right-text motivation1\" [innerHTML]=\"'motivation1.text' | translate\">\n    </div>\n    <div class=\"click-here\" routerLink=\"reflect\">\n      <div class=\"click-here-text\" [innerHTML]=\"'click-here' | translate\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/motivation/motivation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MotivationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MotivationComponent = (function () {
    function MotivationComponent(translate) {
        this.translate = translate;
    }
    MotivationComponent.prototype.ngOnInit = function () {
    };
    return MotivationComponent;
}());
MotivationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-motivation',
        template: __webpack_require__("../../../../../src/app/motivation/motivation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/motivation/motivation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */]) === "function" && _a || Object])
], MotivationComponent);

var _a;
//# sourceMappingURL=motivation.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  width: 95.35%;\n  margin: 0 auto;\n}\n\n.navbar a {\n  text-decoration: none;\n}\n\n.nav-button {\n  font-size: 0.7em;\n  font-family: arial;\n  font-weight: bold;\n  border: 1px solid black;\n  border-radius: 3px;\n  background: linear-gradient(#d4d4d4, #acacac);\n  width: 13.65%;\n  display: inline-block;\n  text-align: center;\n  padding: 4px 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n  <div class=\"nav-button\">\n    <a class=\"intro-color\" routerLink=\"/\">{{ \"intro\" | translate }}</a>\n  </div>\n  <div class=\"nav-button\">\n    <a class=\"needs-color\" routerLink=\"/needs\">{{ \"needs\" | translate }}</a>\n  </div>\n  <div class=\"nav-button\">\n    <a class=\"cskills-color\" routerLink=\"/current-skills\">{{ \"cskills\" | translate }}</a>\n  </div>\n  <div class=\"nav-button\">\n    <a class=\"motivation-color\" routerLink=\"/motivation\">{{ \"motivation\" | translate }}</a>\n  </div>\n  <div class=\"nav-button\">\n    <a class=\"personality-color\" routerLink=\"/personality\">{{ \"personality\" | translate }}</a>\n  </div>\n  <div class=\"nav-button\">\n    <a class=\"lhistory-color\"  routerLink=\"/lbackground\">{{ \"lhistory\" | translate }}</a>\n  </div>\n  <div class=\"nav-button\">\n    <a class=\"profile-color\" routerLink=\"/profile\">{{ \"myprofile\" | translate }}</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/needs-ref/needs-ref.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ref-response {\n  background-color: #CC0000;\n  color: #ffffff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/needs-ref/needs-ref.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div>\n  <div class=\"ref-bubbles\">\n    <div class=\"pure-g\">\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(1)\" [innerHTML]=\"'needs-ref.1' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_r1.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(2)\" [innerHTML]=\"'needs-ref.2' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_r2.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(3)\" [innerHTML]=\"'needs-ref.3' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_r3.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(4)\" [innerHTML]=\"'needs-ref.4' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_r1.gif\" alt=\"speech bubble\"></div>\n      </div>\n    </div>\n    <div class=\"pure-g\">\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(5)\" [innerHTML]=\"'needs-ref.5' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_r2.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(6)\" [innerHTML]=\"'needs-ref.6' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_r3.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(7)\" [innerHTML]=\"'needs-ref.7' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_r1.gif\" alt=\"speech bubble\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"pure-g\">\n    <div class=\"pure-u-1-2 needs-ref-images\">\n      <img src=\"/assets/images/a_pieni_tarpeet.gif\" alt=\"little picture\">\n      <img src=\"/assets/images/a_ryhma_tarpeet.gif\" alt=\"little picture\">\n    </div>\n    <div class=\"pure-u-1-2\">\n      <div *ngIf=\"sound != null\">\n        <audio id=\"sounds\" src=\"./assets/sounds2016/kaleidoscope-{{ sound }}.mp3\"></audio>\n        <img src=\"assets/images/play-sound-icon.png\" title=\"High Volume\" width=\"20\" onclick=\"document.getElementById('sounds').play()\">\n      </div>\n      <div class=\"ref-response\" [innerHTML]=\"target\"></div>\n    </div>\n  </div>\n  <div class=\"pure-g comment-box\">\n    <div class=\"pure-u-1-2\">\n      <div class=\"inner-comment-box\">\n        <p class=\"comment-box-header\" [innerHTML]=\"'needs-ref.your-needs' | translate\"></p>\n        <p [innerHTML]=\"'needs-ref.your-needs-text' | translate\"></p>\n      </div>\n    </div>\n    <div class=\"pure-u-1-2\">\n      <div class=\"inner-comment-box\">\n        <div [innerHTML]=\"'ref-general.save' | translate\"></div>\n        <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n          <textarea name=\"needs\" [(ngModel)]=\"profile.needs\" id=\"needs\" cols=\"45\" rows=\"4\"></textarea>\n          <div class=\"successful\" *ngIf=\"showSuccess\">{{ \"ref-general.success\" | translate }}</div>\n          <div>\n            <button class=\"pure-button\" type=\"submit\" [innerHTML]=\"'ref-general.save-to' | translate\"></button>\n            <button class=\"pure-button\" type=\"button\" (click)=\"f.resetForm()\" [innerHTML]=\"'ref-general.clear' | translate\"></button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/needs-ref/needs-ref.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_service__ = __webpack_require__("../../../../../src/app/profile.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeedsRefComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NeedsRefComponent = (function () {
    function NeedsRefComponent(translate, profileService) {
        this.translate = translate;
        this.profileService = profileService;
        this.target = "- Click on a comment to see a response";
        this.sound = null;
        this.showSuccess = false;
        this.showDetail = function (num) {
            if (this.translate.currentLang === "en") {
                switch (num) {
                    case 1:
                        this.target = "- You have a clear need on which you can base a plan to develop your academic reading skills. Perhaps you could benefit from a reading group which may introduce you to strategies that can make you a more efficient reader. Alternatively,  in the <a href='http://kielikeskus.helsinki.fi/vkk/rr' target='_blank'>Reading Room</a> on the internet, you will find ideas on how to improve your English reading skills (the website is mainly in Finnish).";
                        this.sound = "needs-readalot";
                        break;
                    case 2:
                        this.target = "- If possible, register on a course especially aimed at students going on exchange programmes. Find out all you can about the culture of your target country and consider attending an intercultural communication group. Find out about the academic culture of the institution you're going to, and think about how you will be using the language (attending lectures, writing papers).  Are you aware of your skills level, as a starting point evaluate your skills with the help of the <a href='http://www.coe.int/t/dg4/education/elp/elp-reg/Source/assessement_grid/assessment_grid_english.pdf' target='_blank'>Common European Framework of Reference Self-Assessment Grid</a> and try to get and reflect upon feedback.";
                        this.sound = "needs-exchange";
                        break;
                    case 3:
                        this.target = "Think carefully about what exactly you'd like to work on, and why. Does a lack of self-confidence interfere with communication? If so, what are the reasons behind this?  Do you rarely have the opportunity of talking in the target language?  Or do you feel the need to work specifically on your pronunciation?  Perhaps you could consider joining an oral skills or discussion group. You could also focus on your pronunciation  on the internet, both by listening to good speakers and by actively working on stress and intonation. Most importantly, lower the threshold and talk whenever the opportunity arises, also in situations beyond the classroom.";
                        this.sound = "needs-morefluent";
                        break;
                    case 4:
                        this.target = "Feeling at home in a different cultural context to some degree goes beyond the level of  one's language skills: you may feel that your social skills are not as efficient as they are back home. Attending an intercultural communication group would be beneficial. You would acquire tools that can help you to adapt to and understand your target culture, which in turn will enrichen your experience and enhance any form of interaction.";
                        this.sound = "needs-intlsetting";
                        break;
                    case 5:
                        this.target = "The vocabulary you have is made up of different items: some words you simply recognise when you're reading or listening, while others you can actively use when speaking or writing yourself. You are the one who knows best how well you need to know any particular word.  You can widen your active vocabulary range both by gaining confidence with your passive word base, and by noticing, and being selective with,  new words that you come across  You should try to use new words when offered the possibility. If you lack real-life opportunities, memory strategies can help you learn the words.";
                        this.sound = "needs-morewords";
                        break;
                    case 6:
                        this.target = "Academic writing has norms that you need to follow. Keep cultural differences in mind i.e. Finnish academic writing may follow different criteria to Anglo-American academic writing. You could ideally attend an academic writing group, but you may also learn much from paying attention to the structure, style and vocabulary of articles written in your field.";
                        this.sound = "needs-thesis";
                        break;
                    case 7:
                        this.target = "You might be able to reduce your anxiety by preparing in advance for speaking situations. Reading, listening and writing all help to prepare you for speech. Get used to hearing yourself speak by reading out loud and talking to yourself, inwardly or outwardly. Try speaking in one-to-one situations before you speak up in public. Gradually you will become more courageous and able to enjoy taking part in all sorts of discussions.";
                        this.sound = "needs-courage";
                        break;
                    default:
                        this.target = "- Click on a comment to see a response";
                        this.sound = null;
                }
            }
            else if (this.translate.currentLang === "fi") {
                this.sound = null;
                switch (num) {
                    case 1:
                        this.target = "- Sinulla on selkeä tarve, jonka pohjalta voit tehdä tavoitteellisen suunnitelman akateemisen lukemisen vahvistamiseen. Mieti olisiko kurssi tarpeen vai pystyisitkö itse nostamaan taitosi tarvittavalle tasolle. Tutustu <a href='http://kielikeskus.helsinki.fi/vkk/rr' target='_blank'>Reading Roomiin</a> verkossa saat ideoita lukutaitojesi parantamiseen erityisesti englannin osalta tai käy <a href='http://h27.it.helsinki.fi/spraknat/' target='_blank'>Språknåt-sivuilla</a>, jos haluat apua ruotsinkielisten kirjojen lukemiseen.";
                        break;
                    case 2:
                        this.target = "- Kielitaitotarpeiden kartoittaminen on hyvä aloittaa ajoissa. Hae tietoa kohdemaan kulttuurista ja erityisesti opiskelukulttuurista siinä oppilaitoksessa, johon olet menossa. Keskity vaihto-ohjelmasi vaatimusten mukaisen kielitaidon kohentamiseen (luentojen kuuntelu. esseiden kirjoittaminen jne.). Mitä kieltä/kieliä tarvitset? Millaisia osataitoja tarvitset? Minkätasoista taitoa tarvitset eri osataidoissa? Arvioi ja pohdi taitojasi Yleiseurooppalaisen viitekehyksen taitotasokuvauksien avulla: <a href='https://rm.coe.int/CoERMPublicCommonSearchServices/DisplayDCTMContent?documentId=090000168045bb56'>Common European Framework of Reference Self-Assessment Grid</a>.  Jos mahdollista, hakeudu erityisesti vaihtoon lähteville suunnatulle kurssille. Kulttuurien väliseen kommunikointiin keskittyvä ryhmä voisi myös olla avuksi.";
                        break;
                    case 3:
                        this.target = "Sujuvuus on usean tekijän summa. Mieti, millaisia asioita eniten haluaisit parantaa ja miksi. Vaikeuttaako itseluottamuksen puute puhumistasi? Olisiko ennen kaikkea tarpeen ryhtyä tietoisesti hakeutumaan puhetilanteisiin ja hankkia lisää sujuvuutta sitä kautta? Ovatko kuuntelutaitosi keskustelutilanteissa riittävät?  Harkitse keskustelukurssia tai -ryhmää. Hae keskustelukumppani vaikkapa kielikeskuksen itseopiskelun ilmoitustaululta.Tarvitsetko harjoitusta erityisesti ääntämisessä? Netissä voit kuunnella eri puhujia ja työstää ääntämistäsi (esim. sanapainoa ja intonaatiota). Avaa rohkeasti suusi aina kun voit sen tehdä, myös arjessa eikä pelkästään luokassa.";
                        break;
                    case 4:
                        this.target = "Uusi ja erilainen työ- ja kulttuuriympäristö asettaa vaatimuksia sosiaalisille taidoille yleensäkin, ei pelkästään kielitaidolle. Kulttuurien väliseen kommunikointiin keskittyvä ryhmä voisi antaa työkaluja uuden kulttuurin ymmärtämiseen ja siihen sopeutumiseen.";
                        break;
                    case 5:
                        this.target = "Sanavarastoosi kuuluu erilaista ainesta: osan sanoista tunnistat lukiessasi ja/tai kuullessasi, osaa sanoista myös käytät puhuessasi ja/tai kirjoittaessasi. Sinä itse tiedät, millainen osaaminen on tarpeen minkäkin sanan kohdalla. Voit laajentaa aktiivista sanavarastoasi passiivista osaamistasi hyödyntäen sekä kiinnittämällä huomiota ja valikoimalla eteesi tulevista uusista sanoista itsellesi tarpeelliset. Yritä käyttää näitä uusia sanoja aina, kun siihen on mahdollisuus, joko puhuessasi tai kirjoittaessasi. Myös muististrategiat auttavat oppimaan uutta sanastoa.";
                        break;
                    case 6:
                        this.target = "Akateemisen kirjoittamisen käytänteet vaihtelevat kulttuurista toiseen ja englanninkielisessä gradussa on hyvä oppia noudattamaan anglo-amerikkalaisen akateemisen kirjoittamisen normistoa. Kaikki, mitä luet graduasi varten auttaa Sinua myös kirjoittajana eli tarkkaile englanninkielisten akateemisten tekstien rakennetta, tyyliä ja sanastoa. Akateemisen kirjoittamisen ryhmästä olisi varmasti hyötyä.";
                        break;
                    case 7:
                        this.target = "Jännitystä saattaa lieventää, jos valmistaudut etukäteen puhetilanteita varten. Lukeminen, kuunteleminen ja kirjoittaminen auttavat virittäytymään puhetilanteeseen. Lue ääneen ja käy sisöistä keskustelua. Näin totut puhumaan ja myös kuuntelemaan omaa puhettasi. Puhu aluksi vaikkapa hyvän ystäväsi kanssa. Vähitellen saat lisää rohkeutta ja voit osallistua monenlaisiin keskusteluihin.";
                        break;
                    default:
                        this.target = "- Klikkaa kommenttia nähdäksesi vastauksen";
                }
            }
        };
    }
    NeedsRefComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.onLangChange.subscribe(function (event) {
            _this.showDetail(null);
        });
        this.profile = this.profileService.profile;
    };
    NeedsRefComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.profileService.profile.needs = formData.needs;
        this.showSuccess = true;
        setTimeout(function () {
            _this.showSuccess = false;
        }, 2000);
    };
    return NeedsRefComponent;
}());
NeedsRefComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-needs-ref',
        template: __webpack_require__("../../../../../src/app/needs-ref/needs-ref.component.html"),
        styles: [__webpack_require__("../../../../../src/app/needs-ref/needs-ref.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */]) === "function" && _b || Object])
], NeedsRefComponent);

var _a, _b;
//# sourceMappingURL=needs-ref.component.js.map

/***/ }),

/***/ "../../../../../src/app/needs/needs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".needs1 {\n  background-color: #CC0000;\n  color: #ffffff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/needs/needs.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"pure-g\">\n  <div class=\"pure-u-1 pure-u-md-2-5 skill-left\">\n    <img *ngIf=\"translate.currentLang === 'en'\" src=\"assets/images/ajatus_needs.gif\" alt=\"picture of thought bubble containing needs\" class=\"skill-left-image\">\n    <img *ngIf=\"translate.currentLang === 'fi'\" src=\"assets/images/ajatus_tarpeet.gif\" alt=\"picture of thought bubble containing needs\" class=\"skill-left-image\">\n    <img src=\"assets/images/red_woman.gif\" alt=\"picture of red woman on phone\" class=\"skill-left-image\">\n  </div>\n  <div class=\"pure-u-1 pure-u-md-3-5 skill-right\">\n    <div>\n      <audio id=\"sounds\" src=\"./assets/sounds2016/kaleidoscope-needs-main.mp3\"></audio>\n      <img src=\"assets/images/play-sound-icon.png\" title=\"High Volume\" width=\"20\" onclick=\"document.getElementById('sounds').play()\">\n    </div>\n    <div class=\"skill-right-text needs1\" [innerHTML]=\"'needs1.text' | translate\">\n    </div>\n    <div class=\"click-here\" routerLink=\"reflect\">\n      <div class=\"click-here-text\" [innerHTML]=\"'click-here' | translate\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/needs/needs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeedsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NeedsComponent = (function () {
    function NeedsComponent(translate) {
        this.translate = translate;
    }
    NeedsComponent.prototype.ngOnInit = function () {
    };
    return NeedsComponent;
}());
NeedsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-needs',
        template: __webpack_require__("../../../../../src/app/needs/needs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/needs/needs.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */]) === "function" && _a || Object])
], NeedsComponent);

var _a;
//# sourceMappingURL=needs.component.js.map

/***/ }),

/***/ "../../../../../src/app/personality-ref/personality-ref.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ref-response {\n  background-color: #339900;\n  color: #ffffff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/personality-ref/personality-ref.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div>\n  <div class=\"ref-bubbles\">\n    <div class=\"pure-g\">\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(1)\" [innerHTML]=\"'personality-ref.1' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_g1.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(2)\" [innerHTML]=\"'personality-ref.2' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_g2.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(3)\" [innerHTML]=\"'personality-ref.3' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_g3.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(4)\" [innerHTML]=\"'personality-ref.4' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_g1.gif\" alt=\"speech bubble\"></div>\n      </div>\n    </div>\n    <div class=\"pure-g\">\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(5)\" [innerHTML]=\"'personality-ref.5' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_g2.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(6)\" [innerHTML]=\"'personality-ref.6' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_g3.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(7)\" [innerHTML]=\"'personality-ref.7' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_g1.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(8)\" [innerHTML]=\"'personality-ref.8' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_g2.gif\" alt=\"speech bubble\"></div>\n      </div>\n    </div>\n    <div class=\"pure-g\">\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(9)\" [innerHTML]=\"'personality-ref.9' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_g3.gif\" alt=\"speech bubble\"></div>\n      </div>\n      <div class=\"pure-u-1-4\">\n        <a><span (click)=\"showDetail(10)\" [innerHTML]=\"'personality-ref.10' | translate\"></span></a>\n        <div><img src=\"/assets/images/kupla_g1.gif\" alt=\"speech bubble\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"pure-g\">\n    <div class=\"pure-u-1-2 needs-ref-images\">\n      <img src=\"/assets/images/a_pieni_persoonallisuus.gif\" alt=\"little picture\">\n      <img src=\"/assets/images/a_ryhma_persoonallisuus.gif\" alt=\"little picture\">\n    </div>\n    <div class=\"pure-u-1-2\">\n      <div *ngIf=\"sound != null\">\n        <audio id=\"sounds\" src=\"./assets/sounds2016/kaleidoscope-{{ sound }}.mp3\"></audio>\n        <img src=\"assets/images/play-sound-icon.png\" title=\"High Volume\" width=\"20\" onclick=\"document.getElementById('sounds').play()\">\n      </div>\n      <div class=\"ref-response\" [innerHTML]=\"target\"></div>\n    </div>\n  </div>\n  <div class=\"pure-g comment-box\">\n    <div class=\"pure-u-1-2\">\n      <div class=\"inner-comment-box\">\n        <p class=\"comment-box-header\" [innerHTML]=\"'personality-ref.your-personality' | translate\"></p>\n        <p [innerHTML]=\"'personality-ref.your-personality-text' | translate\"></p>\n      </div>\n    </div>\n    <div class=\"pure-u-1-2\">\n      <div class=\"inner-comment-box\">\n        <div [innerHTML]=\"'ref-general.save' | translate\"></div>\n        <form (ngSubmit)=\"onSubmit(f.value)\" #f=\"ngForm\">\n          <textarea name=\"personality\" [(ngModel)]=\"profile.personality\" id=\"personality\" cols=\"45\" rows=\"4\"></textarea>\n          <div class=\"successful\" *ngIf=\"showSuccess\">{{ \"ref-general.success\" | translate }}</div>\n          <div>\n            <button class=\"pure-button\" type=\"submit\" [innerHTML]=\"'ref-general.save-to' | translate\"></button>\n            <button class=\"pure-button\" type=\"button\" (click)=\"f.resetForm()\" [innerHTML]=\"'ref-general.clear' | translate\"></button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/personality-ref/personality-ref.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_service__ = __webpack_require__("../../../../../src/app/profile.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalityRefComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonalityRefComponent = (function () {
    function PersonalityRefComponent(translate, profileService) {
        this.translate = translate;
        this.profileService = profileService;
        this.target = "- Click on a comment to see a response";
        this.sound = null;
        this.showSuccess = false;
        this.showDetail = function (num) {
            if (this.translate.currentLang === "en") {
                switch (num) {
                    case 1:
                        this.target = "- You seem to be a theorist whose approach to learning is analytical. Your focus on accuracy is probably a result of your past experiences. You need to find situations and courses where the emphasis is on action and communicating, so that you gradually lose your fear of making errors and become more confident.";
                        this.sound = "pers-mistakes";
                        break;
                    case 2:
                        this.target = "- It sounds as if you are a theorist and reflector who likes to focus on the grammar and words and think carefully before you speak. Unfortunately there is not always time when you are talking. You probably prefer writing because then you have more time to think. Try to find communicative situations where you can relax and become more spontaneous and confident, such as meeting other non-native speakers in a social context.";
                        this.sound = "pers-clearhead";
                        break;
                    case 3:
                        this.target = "People vary a lot in their capacity to achieve a good pronunciation of a new language. Embarrassment and anxiety about this can often make things even worse. This can lead to avoidance of situations where you have to speak, and so you rarely get the opportunity to practice. You need to look for situations or courses where you feel safe and less threatened. As you start to feel more comfortable, you will start to communicate in a more natural way more and your pronunciation will gradually improve.<br><br>An accent is part of a person's identity and should be respected. It simply reveals your cultural background and so is not something to be ashamed of.";
                        this.sound = "pers-laughatme";
                        break;
                    case 4:
                        this.target = "You have a visual and verbal style of learning. You can help your memory by using images, drawing diagrams, writing words down and focusing on them. English spelling is particularly challenging for native speakers so don't worry if you find it difficult. It's a good idea to find and use memory strategies that suit your learning style. Try googling 'memory strategies for language learning', and you will find lots of useful tips.";
                        this.sound = "pers-rememberwords";
                        break;
                    case 5:
                        this.target = "You are a reflector who likes to notice and think about things for yourself before acting. You probably learn best by analysing the language, and you set yourself very high standards. This is good, but don't worry too much about being completely perfect or you'll never open your mouth. Relax a little and focus on communication. Look for contexts where people are more interested in <b>what</b> you say than <b>how</b> you say it, such as language clubs and hobby activities.";
                        this.sound = "pers-observe";
                        break;
                    case 6:
                        this.target = "Your style of learning is that of a theorist, who likes to understand the rules before having the confidence to speak. You probably feel more comfortable if the approach to learning is grammatical and you probably write the language very accurately. However, it is not always easy, nor necessary, to achieve the same accuracy in speech so you may be reluctant to speak. Remember, most people are listening to what you say, not noticing if you make mistakes.";
                        this.sound = "pers-grammar";
                        break;
                    case 7:
                        this.target = "You are an active learner who believes in learning through doing. You probably enjoy learning by experimenting, playing games, acting and so on. You are happy in classes that are lively and communicative. Remember that it's also important to reflect on the context and use appropriate language. Some contexts may demand a more formal and careful approach.";
                        this.sound = "pers-jumpin";
                        break;
                    case 8:
                        this.target = "You are an auditory and pragmatic type of learner who prefers to learn inductively, ie, you listen to examples and build up the rules for yourself, rather than learning the rules first. You learn best by getting lots of exposure to the real language whether in the classroom or elsewhere.";
                        this.sound = "pers-listen";
                        break;
                    case 9:
                        this.target = "It is often difficult for naturally introverted people to develop their oral skills. They are often good at reading and writing, but lack of practice in speaking completes the cycle and makes them even more shy and anxious. Try to develop your oral skills indirectly, for example, with the help of the social media. Writing emails, texts, blogs and joining chat groups could increase your confidence. Look out for small, safe groups in encouraging contexts where you will feel more comfortable practicing your oral skills.";
                        this.sound = "pers-shy";
                        break;
                    case 10:
                        this.target = "Traditional school classrooms and external evaluation (examinations, for example) often make people highly self-critical and anxious. You need to boost your self-esteem and concentrate on your own best skills. Find opportunities to use your language in more natural and authentic contexts, such as language clubs and cafes.";
                        this.sound = "pers-compare";
                        break;
                    default:
                        this.target = "- Click on a comment to see a response";
                        this.sound = null;
                }
            }
            else if (this.translate.currentLang === "fi") {
                this.sound = null;
                switch (num) {
                    case 1:
                        this.target = "- Olet luultavasti teoreettinen oppija ja lähestyt oppimistasi hyvin analyyttisesti. Pyrkimyksesi virheettämyyteen saattaa myös johtua aiemmista kokemuksistasi. Hakeudu sellaisiin oppimistilanteisiin ja sellaisille kursseille, joilla korostetaan kielenkäyttää ja kommunikointia. Näin pääset vähitellen eroon virheiden pelosta ja saat itseluottamusta.";
                        break;
                    case 2:
                        this.target = "- Sinussa on mahdollisesti teoreetikkoa ja reflektoijaa, jolle kielioppi on tärkeä, ja joka harkitsee tarkkaan ennen suunsa avaamista. Luonnollisissa puhetilanteissa harkinta-aikaa ei aina ikävä kyllä ole. Kirjoittamisen kanssa on toisin, koska siinä on enemmän aikaa ajatella. Etsiydy tilanteisiin, joissa pystyt rentoutumaan ja puhumaan spontaanisti ja luottavaisesti. Tällaisia ovat esim. sosiaaliset kontaktit toisten ei-natiivien kanssa.";
                        break;
                    case 3:
                        this.target = "Hyvän ääntämyksen saavuttamisessa esiintyy suuria yksilöllisiä eroja. Jos jännität ja pelkäät puhumista ääntämisesi vuoksi, alat ehkä vältellä tilanteita, joissa joudut puhumaan. Yritä hakeutua sellaisiin tilanteisiin (tai kursseille), joilla tunnet olosi turvalliseksi ja kykenet rentoutumaan. Kun uskallat avata suusi ja puhua, saat tarvitsemaasi harjoitusta ja ääntämisesi paranee vähitellen. Muista, ettet ole yksin tämän pelkosi kanssa.<br><br>ääntämisen tapa (aksentti), joka meillä kullakin on, on osa persoonaamme ja sitä tulisi kunnioittaa. Siitä voi päätellä jotain taustastamme, mutta häpeän aihe se ei todellakaan ole. ";
                        break;
                    case 4:
                        this.target = "Oppimistyylisi on visuaalinen ja verbaalinen. Käytä mielikuvia, piirrä kaavioita ja kirjoita sanoja ylös. Englannin oikeinkirjoitus on haastavaa äidinkielisillekin, joten älä turhaan murehdi, jos se tuntuu vaikealta. Käytä tyyliisi sopivia muististrategioita. Netistä löydät hyödyllisiä vihjeitä, kun googlaat 'muististrategiat'.";
                        break;
                    case 5:
                        this.target = "Reflektiiviseen tyyliisi kuuluu panna merkille ja pohtia asioita perusteellisesti ennen kuin puhut. Opit analysoimalla kieltä tarkkaan ja asetat ehkä korkeitakin tavoitteita itsellesi. Hyvä niin, mutta muista, ettei taitojesi tarvitse olla täydelliset. Älä jää tuppisuuksi, vaan ota välillä rennommin ja keskity kommunikointiin. Etsiydy tilanteisiin (kieliklubit ja harrastukset), joissa ollaan kiinnostuneempia siitä, <b>mitä</b> Sinulla on sanottavana kuin siitä, <b>miten</b> puhut.";
                        break;
                    case 6:
                        this.target = "Olet oppimistyyliltäsi teoreetikko ja haluat ymmärtää säännöt ennen kuin uskallat puhua. Sinusta on helpompaa lähestyä oppimista kieliopista käsin ja kirjoitat varmaan varsin virheettömästi. Puhuessasi et välttämättä ihan helposti pääse samaan tarkkuuteen ja virheettömyyteen eikä se ole aina tarpeenkaan. Älä silti vältä puhumista, vaan hakeudu tilanteisiin, joissa voit keskittyä spontaaniin kommunikointiin. Kuulijasi eivät luultavasti välttämättä edes huomaa virheitäsi, koska viestisi sisältö on heille tärkein.";
                        break;
                    case 7:
                        this.target = "Olet aktiivinen kielenoppija ja uskot tekemällä oppimiseen. Sinusta on luultavasti mukavaa opiskellessasi kokeilla uutta, pelata ja leikkiä, näytellä jne. Pidät kursseista, joilla kommunikointi, ei kielioppi, on keskeisintä. Joskus Sinun saattaa olla hyvä tehdä sellaista kielityötä, jossa keskityt tuotokseen ja sen virheettömyyteen, koska on sellaisiakin kielenkäyttötilanteita, joissa muodollisempi lähestymistapa on paikallaan.";
                        break;
                    case 8:
                        this.target = "Olet auditiivinen oppija ja suhtaudut kielenoppimiseen pragmaattisesti. Sinulle sopii induktiivinen tapa opiskella eli etenet kuulemistasi käytännön esimerkeistä sääntöihin sen sijaan että opettelisit säännöt ensin. Sinun pitää päästä tekemisiin aidon kielen kanssa olitpa sitten kielikurssilla tai itseopiskelutilanteessa.";
                        break;
                    case 9:
                        this.target = "Monelle introvertille henkilölle suullisen taidon kehittäminen on vaikeaa. Lukeminen ja kirjoittaminen sujuu, mutta harjoituksen puute puhumisessa saa yhä haluttomammaksi ja pelokkaammaksi puhumaan. Kannattaa kehittää suullista taitoa epäsuorasti, vaikkapa tietokoneen avulla. Kirjoittamalla s-posteja ja blogeja, tviittaamalla ja chattailemalla saa lisää itseluottamusta. Myöhemmin uskallusta ehkä jo riittääkin pieneen keskusteluryhmään liittymiseen. Tärkeintä on varmaan, että olo tuntuu turvalliselta.";
                        break;
                    case 10:
                        this.target = "Monet perinteiset luokkahuonetilanteet ja ulkoinen arviointi (esimerkiksi kokeet ja tentit) ovat usein omiaan lisäämään oppijoiden itsekritiikkiä ja pelkoja. Itsearviointitaitojen kehittäminen on hyvin tärkeää, jos vertailu vaikeuttaa opiskeluasi. Yritä keskittyä omiin vahvoihin alueisiisi ja hakeudu autenttisiin kielenkäyttötilanteisiin, kieliklubeihin ja -kahviloihin.";
                        break;
                    default:
                        this.target = "- Klikkaa kommenttia nähdäksesi vastauksen";
                }
            }
        };
    }
    PersonalityRefComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.onLangChange.subscribe(function (event) {
            _this.showDetail(null);
        });
        this.profile = this.profileService.profile;
    };
    PersonalityRefComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.profileService.profile.personality = formData.personality;
        this.showSuccess = true;
        setTimeout(function () {
            _this.showSuccess = false;
        }, 2000);
    };
    return PersonalityRefComponent;
}());
PersonalityRefComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-personality-ref',
        template: __webpack_require__("../../../../../src/app/personality-ref/personality-ref.component.html"),
        styles: [__webpack_require__("../../../../../src/app/personality-ref/personality-ref.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__profile_service__["a" /* ProfileService */]) === "function" && _b || Object])
], PersonalityRefComponent);

var _a, _b;
//# sourceMappingURL=personality-ref.component.js.map

/***/ }),

/***/ "../../../../../src/app/personality/personality.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".personality1 {\n  background-color: #339900;\n  color: #ffffff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/personality/personality.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"pure-g\">\n  <div class=\"pure-u-1 pure-u-md-2-5 skill-left\">\n    <img *ngIf=\"translate.currentLang === 'en'\" src=\"assets/images/ajatus_personality.gif\" alt=\"picture of thought bubble containing needs\" class=\"skill-left-image\">\n    <img *ngIf=\"translate.currentLang === 'fi'\" src=\"assets/images/ajatus_persoonallisuus.gif\" alt=\"picture of thought bubble containing needs\" class=\"skill-left-image\">\n    <img src=\"assets/images/green-woman.gif\" alt=\"picture of red woman on phone\" class=\"skill-left-image\">\n  </div>\n  <div class=\"pure-u-1 pure-u-md-3-5 skill-right\">\n    <div>\n      <audio id=\"sounds\" src=\"./assets/sounds2016/kaleidoscope-pers-main.mp3\"></audio>\n      <img src=\"assets/images/play-sound-icon.png\" title=\"High Volume\" width=\"20\" onclick=\"document.getElementById('sounds').play()\">\n    </div>\n    <div class=\"skill-right-text personality1\" [innerHTML]=\"'personality1.text' | translate\">\n    </div>\n    <div class=\"click-here\" routerLink=\"reflect\">\n      <div class=\"click-here-text\" [innerHTML]=\"'click-here' | translate\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/personality/personality.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonalityComponent = (function () {
    function PersonalityComponent(translate) {
        this.translate = translate;
    }
    PersonalityComponent.prototype.ngOnInit = function () {
    };
    return PersonalityComponent;
}());
PersonalityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-personality',
        template: __webpack_require__("../../../../../src/app/personality/personality.component.html"),
        styles: [__webpack_require__("../../../../../src/app/personality/personality.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */]) === "function" && _a || Object])
], PersonalityComponent);

var _a;
//# sourceMappingURL=personality.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
var ProfileService = (function () {
    function ProfileService() {
        this.profile = {
            needs: '',
            cskills: '',
            motivation: '',
            personality: '',
            lhistory: ''
        };
    }
    ProfileService.prototype.getProfile = function () {
        return this.profile;
    };
    return ProfileService;
}());

//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea {\n  margin-bottom: 20px;\n}\n\n.profile-intro {\n  font-size: 0.88em;\n  padding: 20px 20px 0 20px;\n}\n\n.profile-block {\n  padding: 1px 20px 0 20px;\n  margin: 20px;\n  background-color: #f0f0f0;\n  border-radius: 5px;\n  min-height: 120px;\n}\n\n.profile-block p {\n  font-size: 0.8em;\n  font-weight: normal;\n}\n\n.profile-feedback {\n  font-size: 0.8em;\n}\n\n.profile-form {\n  font-size: 0.8em;\n  margin-left:20px;\n}\n\n.button-success {\n  color: white;\n  border-radius: 4px;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  background: rgb(28, 184, 65); \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"profile-intro\" [innerHTML]=\"'profile.text' | translate\"></div>\n<div class=\"profile-block\">\n  <h5 class=\"needs-color\">{{ \"needs\" | translate }}</h5>\n  <p>{{ profile.needs }}</p>\n</div>\n<div class=\"profile-block\">\n  <h5 class=\"cskills-color\">{{ \"cskills\" | translate }}</h5>\n  <p>{{ profile.cskills }}</p>\n</div>\n<div class=\"profile-block\">\n  <h5 class=\"motivation-color\">{{ \"motivation\" | translate }}</h5>\n  <p>{{ profile.motivation }}</p>\n</div>\n<div class=\"profile-block\">\n  <h5 class=\"personality-color\">{{ \"personality\" | translate }}</h5>\n  <p>{{ profile.personality }}</p>\n</div>\n<div class=\"profile-block\">\n  <h5 class=\"lhistory-color\">{{ \"lhistory\" | translate }}</h5>\n  <p>{{ profile.lhistory }}</p>\n</div>\n<div class=\"profile-block\">\n  <h5 class=\"profile-color\">{{ \"feedback\" | translate }}</h5>\n  <p class=\"profile-feedback\">{{ \"profile.feedback\" | translate }}</p>\n  <textarea name=\"feedback\" id=\"feedback\" cols=\"60\" rows=\"4\" [(ngModel)]=\"feedback\"></textarea>\n</div>\n<hr>\n<div class=\"profile-form\">\n  <h3>{{ \"profile.alms-only\" | translate }}:</h3>\n  <h4>{{ \"profile.pdf-instructions\" | translate }}</h4>\n  <button *ngIf=\"!submitted\" type=\"button\" (click)=\"generatePdf()\" class=\"pure-button\">{{ \"profile.pdf\" | translate }}</button>\n  <!-- <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" class=\"pure-form pure-form-aligned\">\n    <fieldset>\n      <div class=\"pure-control-group\">\n        <label for=\"name\">{{ \"profile.name\" | translate }}:</label>\n        <input\n          type=\"text\"\n          id=\"name\"\n          ngModel\n          name=\"studentName\">\n      </div>\n      <div class=\"pure-control-group\">\n        <label for=\"faculty\">{{ \"profile.faculty\" | translate }}:</label>\n        <input\n          type=\"text\"\n          id=\"faculty\"\n          ngModel\n          name=\"faculty\">\n      </div>\n      <div class=\"pure-control-group\">\n        <label for=\"teacher\"></label>\n        <select\n          id=\"teacher\"\n          name=\"teacher\"\n          ngModel>\n          <option value=\"\">{{ \"profile.select\" | translate }}</option>\n          <option value=\"grainne.hiney@helsinki.fi\">grainne.hiney@helsinki.fi</option>\n          <option value=\"natalie.palmen@helsinki.fi\">natalie.palmen@helsinki.fi</option>\n          <option value=\"satu.vonboehm@helsinki.fi\">satu.vonboehm@helsinki.fi</option>\n          <option value=\"sandro.amendolara@helsinki.fi\">sandro.amendolara@helsinki.fi</option>\n          <option value=\"kirby.vincent@helsinki.fi\">kirby.vincent@helsinki.fi</option>\n          <option value=\"robert.moncrief@helsinki.fi\">robert.moncrief@helsinki.fi</option>\n          <option value=\"fergal.bradley@helsinki.fi\">fergal.bradley@helsinki.fi</option>\n          <option value=\"michele.simeon@helsinki.fi\">michele.simeon@helsinki.fi</option>\n          <option value=\"jonathon.martin@helsinki.fi\">jonathon.martin@helsinki.fi</option>\n        </select>\n      </div>\n      <div class=\"pure-controls\">\n        <label for=\"option-one\" class=\"pure-checkbox\">\n          <input\n            id=\"option-one\"\n            type=\"checkbox\"\n            value=\"\"\n            name=\"noTeacher\"\n            ngModel>\n            {{ \"profile.no-teach\" | translate }}\n        </label>\n      </div>\n      <div class=\"pure-controls\">\n        <label for=\"t-email\">{{ \"profile.teach-email\" | translate }}: </label>\n        <input\n          type=\"email\"\n          id=\"t-email\"\n          ngModel\n          name=\"teacherEmail\">\n      </div>\n      <div class=\"pure-controls\">\n        <label for=\"t-email\">{{ \"profile.address\" | translate }}</label>\n        <input\n          type=\"email\"\n          ngModel\n          name=\"studentEmail\">\n      </div>\n      <div class=\"pure-controls\">\n        <button *ngIf=\"!submitted\" type=\"submit\" class=\"pure-button\">{{ \"profile.send\" | translate }}</button>\n        <button *ngIf=\"submitted\" type=\"button\" class=\"pure-button button-success\">{{ \"profile.sent\" | translate }}</button>\n        <button *ngIf=\"!submitted\" type=\"button\" (click)=\"f.resetForm()\" class=\"pure-button\">{{ \"profile.clear\" | translate }}</button>\n        <button *ngIf=\"!submitted\" type=\"button\" (click)=\"generatePdf()\" class=\"pure-button\">{{ \"profile.pdf\" | translate }}</button>\n      </div>\n    </fieldset>\n  </form> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__("../../../../../src/app/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake__ = __webpack_require__("../../../../pdfmake/build/pdfmake.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts__ = __webpack_require__("../../../../pdfmake/build/vfs_fonts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





__WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;
var ProfileComponent = (function () {
    function ProfileComponent(profileService, http) {
        this.profileService = profileService;
        this.http = http;
        this.submitted = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.profile = this.profileService.profile;
    };
    ProfileComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var submission = form.value;
        submission.profile = this.profileService.profile;
        submission.feedback = this.feedback || "";
        console.log(submission);
        this.http.post('https://kaleidoscope.helsinki.fi/node', submission)
            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log("message failed"); }, function () { return _this.submitted = true; });
    };
    ProfileComponent.prototype.generatePdf = function () {
        var profile = this.profileService.profile;
        var feedback = this.feedback || "";
        var documentDefinition = {
            content: [
                { text: 'Kaleidoscope Profile', style: 'title' },
                { text: 'Needs', style: 'subtitle' },
                { text: profile.needs, style: 'bodyText' },
                { text: 'Skills', style: 'subtitle' },
                { text: profile.cskills, style: 'bodyText' },
                { text: 'Motivation', style: 'subtitle' },
                { text: profile.motivation, style: 'bodyText' },
                { text: 'Personality', style: 'subtitle' },
                { text: profile.personality, style: 'bodyText' },
                { text: 'Learning History', style: 'subtitle' },
                { text: profile.lhistory, style: 'bodyText' },
                { text: 'Feedback', style: 'subtitle' },
                { text: feedback, style: 'bodyText' }
            ],
            styles: {
                title: {
                    fontSize: 24,
                    bold: true,
                    alignment: 'center',
                    margin: [0, 0, 0, 20]
                },
                subtitle: {
                    fontSize: 18,
                    bold: true,
                    alignment: 'left',
                    margin: [0, 20, 0, 10]
                },
                bodyText: {
                    fontSize: 12,
                    alignment: 'justify',
                    margin: [0, 0, 0, 10]
                }
            }
        };
        __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake___default.a.createPdf(documentDefinition).download('PDFName.pdf');
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__profile_service__["a" /* ProfileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map