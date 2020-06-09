function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/add-new/add-new.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/add-new/add-new.component.ts ***!
    \**********************************************/

  /*! exports provided: AddNewComponent */

  /***/
  function srcAppAddNewAddNewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddNewComponent", function () {
      return AddNewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddNewComponent_option_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var playlist_r2 = ctx.$implicit;
        var i_r3 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", playlist_r2._id + "$" + i_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](playlist_r2.name);
      }
    }

    function AddNewComponent_option_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var song_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", song_r4._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r4.name);
      }
    }

    var AddNewComponent = /*#__PURE__*/function () {
      function AddNewComponent(main, toastr) {
        _classCallCheck(this, AddNewComponent);

        this.main = main;
        this.toastr = toastr;
        this.songs = [];
        this.addNewPlaylistForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          playlistName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.addSongToPlaylistForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          songID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          playlistID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          bandID: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.addNewSongForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          songName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
          textToSend: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
      }

      _createClass(AddNewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onEditClick",
        value: function onEditClick(val) {
          var _this = this;

          this.songs = this.main.songs.filter(function (item) {
            return !_this.main.band.playlist[val.split('$')[1]].songs.includes(item._id);
          });
        }
      }, {
        key: "addNewPlaylist",
        value: function addNewPlaylist() {
          if (this.addNewPlaylistForm.valid) {
            this.addNewPlaylistForm.setControl('bandID', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.main.band._id));
            this.main.addNewPlaylist(this.addNewPlaylistForm.value);
          }
        }
      }, {
        key: "addNewSongToPlaylist",
        value: function addNewSongToPlaylist() {
          var _this2 = this;

          this.addSongToPlaylistForm.controls.playlistID.setValue(this.addSongToPlaylistForm.get('playlistID').value.split('$')[0]);
          this.addSongToPlaylistForm.controls.bandID.setValue(this.main.band._id);

          if (this.addSongToPlaylistForm.valid) {
            this.main.addNewSongToPlaylist(this.addSongToPlaylistForm.value).subscribe(function (res) {
              _this2.toastr.success('Dodano nową piosenkę do playlisty.', 'Udało się!');

              _this2.main.refreshValues().subscribe(function (res) {
                _this2.main.refresh();
              });
            });
          }
        }
      }, {
        key: "addNewSong",
        value: function addNewSong() {
          if (this.addNewSongForm.valid) {
            this.addNewSongForm.setControl('bandID', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.main.band._id));
            this.main.addNewSong(this.addNewSongForm.value);
          }
        }
      }]);

      return AddNewComponent;
    }();

    AddNewComponent.ɵfac = function AddNewComponent_Factory(t) {
      return new (t || AddNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    AddNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddNewComponent,
      selectors: [["app-add-new"]],
      decls: 39,
      vars: 5,
      consts: [[1, "cover", "m-0", "row", "justify-content-center"], [1, "welcomeForm", "row", "justify-content-center", "col-md-10", "col-11"], [1, "text-center", "col-12", "p-0", "m-0", "mb-4"], [1, "col-md-6", "col-11"], [3, "formGroup"], [1, "form-group"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Nazwa playlisty", "formControlName", "playlistName", 1, "form-control"], [1, "btn", "btn-warning", "col-12", 3, "click"], ["for", "exampleFormControlSelect2"], ["id", "exampleFormControlSelect2", "formControlName", "playlistID", 1, "form-control", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "exampleFormControlSelect1"], ["id", "exampleFormControlSelect1", "formControlName", "songID", 1, "form-control"], ["type", "email", "aria-describedby", "emailHelp", "placeholder", "Nazwa piosenki", "formControlName", "songName", 1, "form-control"], ["rows", "5", "formControlName", "textToSend", "placeholder", "Tre\u015B\u0107 piosenki", 1, "form-control"], [3, "value"]],
      template: function AddNewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dodaj now\u0105 playlist\u0119");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNewComponent_Template_button_click_8_listener() {
            return ctx.addNewPlaylist();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dodaj!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dodaj piosenk\u0119 do playlisty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Nazwa playlisty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddNewComponent_Template_select_change_19_listener($event) {
            return ctx.onEditClick($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AddNewComponent_option_20_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Nazwa piosenki do dodania do playlisty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddNewComponent_option_25_Template, 2, 2, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNewComponent_Template_button_click_26_listener() {
            return ctx.addNewSongToPlaylist();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Dodaj!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Dodaj now\u0105 piosenk\u0119");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "textarea", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNewComponent_Template_button_click_37_listener() {
            return ctx.addNewSong();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Dodaj!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addNewPlaylistForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addSongToPlaylistForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.main.band.playlist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.songs);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addNewSongForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: [".welcomeForm[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  background: white;\n  padding: 10px;\n  border-radius: 25px;\n}\n\n.cover[_ngcontent-%COMP%] {\n  padding-bottom: 45px;\n  background: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLW5ldy9FOlxcemVzcMOzxYJcXHpiaW9yLXBpb3NlbmVrL3NyY1xcYXBwXFxhZGQtbmV3XFxhZGQtbmV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZGQtbmV3L2FkZC1uZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9hZGQtbmV3L2FkZC1uZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZUZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcbi5jb3ZlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDQ1cHg7XHJcbiAgYmFja2dyb3VuZDogZ3JleTtcclxufVxyXG4iLCIud2VsY29tZUZvcm0ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cblxuLmNvdmVyIHtcbiAgcGFkZGluZy1ib3R0b206IDQ1cHg7XG4gIGJhY2tncm91bmQ6IGdyZXk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add-new',
          templateUrl: './add-new.component.html',
          styleUrls: ['./add-new.component.scss']
        }]
      }], function () {
        return [{
          type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/all-songs/all-songs.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/all-songs/all-songs.component.ts ***!
    \**************************************************/

  /*! exports provided: AllSongsComponent */

  /***/
  function srcAppAllSongsAllSongsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllSongsComponent", function () {
      return AllSongsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AllSongsComponent_h3_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllSongsComponent_h3_2_Template_h3_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var song_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.setCurrentSong(song_r1._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var song_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r1.name);
      }
    }

    var AllSongsComponent = /*#__PURE__*/function () {
      function AllSongsComponent(main, router) {
        _classCallCheck(this, AllSongsComponent);

        this.main = main;
        this.router = router;
      }

      _createClass(AllSongsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.main.currentPlaylist = undefined;
        }
      }, {
        key: "setCurrentSong",
        value: function setCurrentSong(id) {
          this.main.currentSong = this.main.songs.filter(function (v) {
            return v._id === id;
          })[0];
          this.main.currentSong.textToSend.replace(/↵/g, '<br/>');
          this.router.navigateByUrl('band/current-song');
        }
      }]);

      return AllSongsComponent;
    }();

    AllSongsComponent.ɵfac = function AllSongsComponent_Factory(t) {
      return new (t || AllSongsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AllSongsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllSongsComponent,
      selectors: [["app-all-songs"]],
      decls: 3,
      vars: 1,
      consts: [[1, "text-center", "bb", "mt-2"], ["class", "choose", 3, "click", 4, "ngFor", "ngForOf"], [1, "choose", 3, "click"]],
      template: function AllSongsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wszystkie piosenki");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AllSongsComponent_h3_2_Template, 2, 1, "h3", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.main.songs);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbC1zb25ncy9hbGwtc29uZ3MuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllSongsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-all-songs',
          templateUrl: './all-songs.component.html',
          styleUrls: ['./all-songs.component.scss']
        }]
      }], function () {
        return [{
          type: _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _all_songs_all_songs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./all-songs/all-songs.component */
    "./src/app/all-songs/all-songs.component.ts");
    /* harmony import */


    var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./playlist/playlist.component */
    "./src/app/playlist/playlist.component.ts");
    /* harmony import */


    var _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-new/add-new.component */
    "./src/app/add-new/add-new.component.ts");
    /* harmony import */


    var _band_band_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./band/band.component */
    "./src/app/band/band.component.ts");
    /* harmony import */


    var _main_band_main_band_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./main-band/main-band.component */
    "./src/app/main-band/main-band.component.ts");
    /* harmony import */


    var _single_song_single_song_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./single-song/single-song.component */
    "./src/app/single-song/single-song.component.ts");

    var routes = [{
      path: '',
      component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
    }, {
      path: 'band',
      component: _band_band_component__WEBPACK_IMPORTED_MODULE_6__["BandComponent"],
      children: [{
        path: 'all-songs',
        component: _all_songs_all_songs_component__WEBPACK_IMPORTED_MODULE_3__["AllSongsComponent"]
      }, {
        path: '',
        component: _main_band_main_band_component__WEBPACK_IMPORTED_MODULE_7__["MainBandComponent"]
      }, {
        path: 'playlist',
        component: _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistComponent"]
      }, {
        path: 'add-new',
        component: _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_5__["AddNewComponent"]
      }, {
        path: 'current-playlist',
        component: _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_4__["PlaylistComponent"]
      }, {
        path: 'current-song',
        component: _single_song_single_song_component__WEBPACK_IMPORTED_MODULE_8__["SingleSongComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(main, router) {
        _classCallCheck(this, AppComponent);

        this.main = main;
        this.router = router;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.main.band) {
            this.router.navigateByUrl('all-songs');
          } else {
            this.router.navigateByUrl('');
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      consts: [[1, "w-100", "h-100"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet", 0);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./welcome/welcome.component */
    "./src/app/welcome/welcome.component.ts");
    /* harmony import */


    var _all_songs_all_songs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./all-songs/all-songs.component */
    "./src/app/all-songs/all-songs.component.ts");
    /* harmony import */


    var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./playlist/playlist.component */
    "./src/app/playlist/playlist.component.ts");
    /* harmony import */


    var _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./add-new/add-new.component */
    "./src/app/add-new/add-new.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _band_band_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./band/band.component */
    "./src/app/band/band.component.ts");
    /* harmony import */


    var _main_band_main_band_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./main-band/main-band.component */
    "./src/app/main-band/main-band.component.ts");
    /* harmony import */


    var _single_song_single_song_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./single-song/single-song.component */
    "./src/app/single-song/single-song.component.ts");
    /* harmony import */


    var _interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./interceptor/http-error.interceptor */
    "./src/app/interceptor/http-error.interceptor.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_main_service__WEBPACK_IMPORTED_MODULE_10__["MainService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
        useClass: _interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_15__["HttpErrorInterceptor"],
        multi: true,
        deps: [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot({
        timeOut: 3000,
        positionClass: 'toast-top-right',
        preventDuplicates: true
      }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"], _all_songs_all_songs_component__WEBPACK_IMPORTED_MODULE_6__["AllSongsComponent"], _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_7__["PlaylistComponent"], _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_8__["AddNewComponent"], _band_band_component__WEBPACK_IMPORTED_MODULE_12__["BandComponent"], _main_band_main_band_component__WEBPACK_IMPORTED_MODULE_13__["MainBandComponent"], _single_song_single_song_component__WEBPACK_IMPORTED_MODULE_14__["SingleSongComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"], _all_songs_all_songs_component__WEBPACK_IMPORTED_MODULE_6__["AllSongsComponent"], _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_7__["PlaylistComponent"], _add_new_add_new_component__WEBPACK_IMPORTED_MODULE_8__["AddNewComponent"], _band_band_component__WEBPACK_IMPORTED_MODULE_12__["BandComponent"], _main_band_main_band_component__WEBPACK_IMPORTED_MODULE_13__["MainBandComponent"], _single_song_single_song_component__WEBPACK_IMPORTED_MODULE_14__["SingleSongComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true
          }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production
          })],
          providers: [_services_main_service__WEBPACK_IMPORTED_MODULE_10__["MainService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
            useClass: _interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_15__["HttpErrorInterceptor"],
            multi: true,
            deps: [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/band/band.component.ts":
  /*!****************************************!*\
    !*** ./src/app/band/band.component.ts ***!
    \****************************************/

  /*! exports provided: BandComponent */

  /***/
  function srcAppBandBandComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BandComponent", function () {
      return BandComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["active"];
    };

    var _c1 = function _c1() {
      return {
        exact: true
      };
    };

    var BandComponent = /*#__PURE__*/function () {
      function BandComponent(main) {
        _classCallCheck(this, BandComponent);

        this.main = main;
      }

      _createClass(BandComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BandComponent;
    }();

    BandComponent.ɵfac = function BandComponent_Factory(t) {
      return new (t || BandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]));
    };

    BandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BandComponent,
      selectors: [["app-band"]],
      decls: 17,
      vars: 8,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["routerLink", "/band", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "ml-md-auto"], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLink", "/band", 1, "nav-link", 3, "routerLinkActive", "routerLinkActiveOptions"], ["routerLink", "/band/add-new", 1, "nav-link", 3, "routerLinkActive"], ["routerLink", "/band/all-songs", 1, "nav-link", 3, "routerLinkActive"]],
      template: function BandComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Zbi\xF3r-piosenek");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Strona g\u0142\xF3wna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dodaj");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Wszystkie piosenki");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhbmQvYmFuZC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BandComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-band',
          templateUrl: './band.component.html',
          styleUrls: ['./band.component.scss']
        }]
      }], function () {
        return [{
          type: _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/interceptor/http-error.interceptor.ts":
  /*!*******************************************************!*\
    !*** ./src/app/interceptor/http-error.interceptor.ts ***!
    \*******************************************************/

  /*! exports provided: InterceptorSkipHeader, HttpErrorInterceptor */

  /***/
  function srcAppInterceptorHttpErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InterceptorSkipHeader", function () {
      return InterceptorSkipHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function () {
      return HttpErrorInterceptor;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var InterceptorSkipHeader = 'X-Skip-Interceptor';

    var HttpErrorInterceptor = /*#__PURE__*/function () {
      function HttpErrorInterceptor(toastr) {
        _classCallCheck(this, HttpErrorInterceptor);

        this.toastr = toastr;
      }

      _createClass(HttpErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this3 = this;

          if (request.headers.has(InterceptorSkipHeader)) {
            var headers = request.headers["delete"](InterceptorSkipHeader);
            return next.handle(request.clone({
              headers: headers
            }));
          }

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            var errorTitle = '';
            var errorMessage = '';

            if (error.error) {
              errorTitle = 'Wystąpił błąd!';
              errorMessage = error.error.error;

              _this3.toastr.error(errorMessage, errorTitle);
            } else {
              errorTitle = "Kod b\u0142\u0119du: ".concat(error.status);
              errorMessage = "Wiadomo\u015B\u0107: ".concat(error.message);

              _this3.toastr.error(errorMessage, errorTitle);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
          }));
        }
      }]);

      return HttpErrorInterceptor;
    }();
    /***/

  },

  /***/
  "./src/app/main-band/main-band.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/main-band/main-band.component.ts ***!
    \**************************************************/

  /*! exports provided: MainBandComponent */

  /***/
  function srcAppMainBandMainBandComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainBandComponent", function () {
      return MainBandComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MainBandComponent_h3_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBandComponent_h3_4_Template_h3_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var playlist_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.setCurrentPlaylist(playlist_r1._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var playlist_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](playlist_r1.name);
      }
    }

    var MainBandComponent = /*#__PURE__*/function () {
      function MainBandComponent(main, router) {
        _classCallCheck(this, MainBandComponent);

        this.main = main;
        this.router = router;
      }

      _createClass(MainBandComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setCurrentPlaylist",
        value: function setCurrentPlaylist(id) {
          this.main.currentPlaylist = this.main.band.playlist.filter(function (v) {
            return v._id === id;
          })[0];
          this.router.navigateByUrl('band/current-playlist');
        }
      }]);

      return MainBandComponent;
    }();

    MainBandComponent.ɵfac = function MainBandComponent_Factory(t) {
      return new (t || MainBandComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    MainBandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MainBandComponent,
      selectors: [["app-main-band"]],
      decls: 5,
      vars: 2,
      consts: [[1, "text-center", "mt-2", "mb-3", "bb"], [1, "text-center"], ["class", "choose", 3, "click", 4, "ngFor", "ngForOf"], [1, "choose", 3, "click"]],
      template: function MainBandComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Twoje playlisty");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainBandComponent_h3_4_Template, 2, 1, "h3", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.main.band.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.main.band.playlist);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".bandName[_ngcontent-%COMP%] {\n  border-bottom: 2px solid black;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1iYW5kL0U6XFx6ZXNww7PFglxcemJpb3ItcGlvc2VuZWsvc3JjXFxhcHBcXG1haW4tYmFuZFxcbWFpbi1iYW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluLWJhbmQvbWFpbi1iYW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxvQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1iYW5kL21haW4tYmFuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5kTmFtZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcbiIsIi5iYW5kTmFtZSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainBandComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-main-band',
          templateUrl: './main-band.component.html',
          styleUrls: ['./main-band.component.scss']
        }]
      }], function () {
        return [{
          type: _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/playlist/playlist.component.ts":
  /*!************************************************!*\
    !*** ./src/app/playlist/playlist.component.ts ***!
    \************************************************/

  /*! exports provided: PlaylistComponent */

  /***/
  function srcAppPlaylistPlaylistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function () {
      return PlaylistComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PlaylistComponent_h3_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistComponent_h3_2_Template_h3_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var song_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.setCurrentSong(song_r1._id, i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var song_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r1.name);
      }
    }

    var PlaylistComponent = /*#__PURE__*/function () {
      function PlaylistComponent(main, router) {
        _classCallCheck(this, PlaylistComponent);

        this.main = main;
        this.router = router;
        this.songs = [];
      }

      _createClass(PlaylistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.main.currentPlaylist.songs.map(function (v) {
            var song = _this4.main.songs.filter(function (item) {
              return item._id === v;
            })[0];

            console.log(song);

            _this4.songs.push(song);
          }); // this.songs = this.main.songs.filter((item) => {
          //   return this.main.currentPlaylist.songs.includes(item._id);
          // });
        }
      }, {
        key: "setCurrentSong",
        value: function setCurrentSong(id, i) {
          this.main.currentSong = this.main.songs.filter(function (v) {
            return v._id === id;
          })[0];
          this.main.currentSong.iterator = i;
          this.main.currentSong.textToSend.replace(/↵/g, '<br/>');
          this.router.navigateByUrl('band/current-song');
        }
      }]);

      return PlaylistComponent;
    }();

    PlaylistComponent.ɵfac = function PlaylistComponent_Factory(t) {
      return new (t || PlaylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    PlaylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlaylistComponent,
      selectors: [["app-playlist"]],
      decls: 3,
      vars: 2,
      consts: [[1, "text-center"], ["class", "choose", 3, "click", 4, "ngFor", "ngForOf"], [1, "choose", 3, "click"]],
      template: function PlaylistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlaylistComponent_h3_2_Template, 2, 1, "h3", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.main.currentPlaylist.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.songs);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXlsaXN0L3BsYXlsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-playlist',
          templateUrl: './playlist.component.html',
          styleUrls: ['./playlist.component.scss']
        }]
      }], function () {
        return [{
          type: _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/main.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/main.service.ts ***!
    \******************************************/

  /*! exports provided: MainService */

  /***/
  function srcAppServicesMainServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainService", function () {
      return MainService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var MainService = /*#__PURE__*/function () {
      function MainService(http, router, toastr, location) {
        _classCallCheck(this, MainService);

        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.location = location;
        this.api = 'https://zbior-piosenek-api.herokuapp.com/api/';
      }

      _createClass(MainService, [{
        key: "login",
        value: function login(bandName) {
          var _this5 = this;

          this.http.get("".concat(this.api, "band/allBand?bandName=").concat(bandName)).subscribe(function (res) {
            _this5.bandName = bandName;
            _this5.band = res.band;
            _this5.songs = res.songs;
            console.log(res);

            _this5.router.navigateByUrl('band');
          });
        }
      }, {
        key: "refreshValues",
        value: function refreshValues() {
          var _this6 = this;

          return this.http.get("".concat(this.api, "band/allBand?bandName=").concat(this.bandName)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            _this6.band = res.band;
            _this6.songs = res.songs;
          }));
        }
      }, {
        key: "setCurrentSong",
        value: function setCurrentSong(songID) {
          this.currentSong = this.songs.filter(function (v) {
            return v._id === songID;
          });
        }
      }, {
        key: "addNewPlaylist",
        value: function addNewPlaylist(playlist) {
          var _this7 = this;

          this.http.post(this.api + 'band/add/playlist', playlist).subscribe(function (res) {
            _this7.toastr.success('Dodano nową playlistę.', 'Udało się!');

            _this7.refreshValues().subscribe(function (res) {});
          });
        }
      }, {
        key: "addNewSongToPlaylist",
        value: function addNewSongToPlaylist(songToPlaylist) {
          return this.http.post(this.api + 'band/add/songToPlaylist', songToPlaylist);
        }
      }, {
        key: "addNewSong",
        value: function addNewSong(song) {
          var _this8 = this;

          this.http.post(this.api + 'band/add/song', song).subscribe(function (res) {
            _this8.toastr.success('Dodano nową piosenkę.', 'Udało się!');

            _this8.refreshValues().subscribe(function (res) {});
          });
        }
      }, {
        key: "refresh",
        value: function refresh() {
          var _this9 = this;

          this.router.navigateByUrl('/', {
            skipLocationChange: true
          }).then(function () {
            _this9.router.navigate([_this9.location.path()]);
          });
        }
      }]);

      return MainService;
    }();

    MainService.ɵfac = function MainService_Factory(t) {
      return new (t || MainService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]));
    };

    MainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MainService,
      factory: MainService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/single-song/single-song.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/single-song/single-song.component.ts ***!
    \******************************************************/

  /*! exports provided: SingleSongComponent */

  /***/
  function srcAppSingleSongSingleSongComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SingleSongComponent", function () {
      return SingleSongComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SingleSongComponent_button_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleSongComponent_button_0_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.backToPlaylist();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wr\xF3\u0107 do playlisty");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SingleSongComponent_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleSongComponent_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.nextSong();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nast\u0119pna piosenka");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SingleSongComponent = /*#__PURE__*/function () {
      function SingleSongComponent(main, router, toastr) {
        _classCallCheck(this, SingleSongComponent);

        this.main = main;
        this.router = router;
        this.toastr = toastr;
      }

      _createClass(SingleSongComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "backToPlaylist",
        value: function backToPlaylist() {
          this.router.navigateByUrl('band/current-playlist');
        }
      }, {
        key: "nextSong",
        value: function nextSong() {
          var iterator = this.main.currentSong.iterator + 1;
          var id = this.main.currentPlaylist.songs[iterator];
          console.log(id);
          console.log(this.main.currentSong._id);
          console.log(this.main.currentSong.iterator);

          if (id) {
            this.main.currentSong = this.main.songs.filter(function (v) {
              return v._id === id;
            })[0];
            this.main.currentSong.iterator = iterator;
          } else {
            this.toastr.error('Koniec playlisty!');
          }
        }
      }]);

      return SingleSongComponent;
    }();

    SingleSongComponent.ɵfac = function SingleSongComponent_Factory(t) {
      return new (t || SingleSongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    SingleSongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SingleSongComponent,
      selectors: [["app-single-song"]],
      decls: 6,
      vars: 4,
      consts: [["class", "btn btn-warning", 3, "click", 4, "ngIf"], [1, "text-center", "mt-3"], ["id", "text", 1, "text-left", "p-2", 2, "white-space", "pre-wrap"], [1, "btn", "btn-warning", 3, "click"]],
      template: function SingleSongComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SingleSongComponent_button_0_Template, 2, 0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SingleSongComponent_button_5_Template, 2, 0, "button", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.main.currentPlaylist);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.main.currentSong.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.main.currentSong.textToSend);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.main.currentPlaylist);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".btn-warning[_ngcontent-%COMP%] {\n  border-radius: 0;\n  font-size: 35px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLXNvbmcvRTpcXHplc3DDs8WCXFx6Ymlvci1waW9zZW5lay9zcmNcXGFwcFxcc2luZ2xlLXNvbmdcXHNpbmdsZS1zb25nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaW5nbGUtc29uZy9zaW5nbGUtc29uZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS1zb25nL3NpbmdsZS1zb25nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi13YXJuaW5nIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCIuYnRuLXdhcm5pbmcge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LXNpemU6IDM1cHg7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleSongComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-single-song',
          templateUrl: './single-song.component.html',
          styleUrls: ['./single-song.component.scss']
        }]
      }], function () {
        return [{
          type: _services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/welcome/welcome.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/welcome/welcome.component.ts ***!
    \**********************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/main.service */
    "./src/app/services/main.service.ts");

    var WelcomeComponent = /*#__PURE__*/function () {
      function WelcomeComponent(main) {
        _classCallCheck(this, WelcomeComponent);

        this.main = main;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          bandName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm.controls.bandName.patchValue('test');
          this.login();
        }
      }, {
        key: "login",
        value: function login() {
          if (this.loginForm.valid) {
            this.main.login(this.loginForm.controls.bandName.value);
          }
        }
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) {
      return new (t || WelcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]));
    };

    WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WelcomeComponent,
      selectors: [["app-welcome"]],
      decls: 11,
      vars: 1,
      consts: [[1, "cover", "h-100", "w-100", "row", "justify-content-center", "m-0"], [1, "col-md-10", "col-11", "main"], [1, "welcomeForm", "row", "justify-content-center"], [1, "text-center", "col-12", "m-0", "p-0", "mb-4"], [1, "col-md-6", "col-11"], [3, "formGroup"], [1, "form-group"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Nazwa zespo\u0142u", "formControlName", "bandName", 1, "form-control"], ["type", "submit", 1, "btn", "btn-warning", "col-12", 3, "click"]],
      template: function WelcomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Zaloguj si\u0119 do swojego zespo\u0142u");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomeComponent_Template_button_click_9_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Zaloguj si\u0119!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: [".welcomeForm[_ngcontent-%COMP%] {\n  background: white;\n  padding: 30px;\n  border-radius: 25px;\n}\n\n.cover[_ngcontent-%COMP%] {\n  padding-top: 100px;\n  background: grey;\n}\n\n.main[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS9FOlxcemVzcMOzxYJcXHpiaW9yLXBpb3NlbmVrL3NyY1xcYXBwXFx3ZWxjb21lXFx3ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDRCxnQkFBQTtBQ0VEOztBREFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWVGb3JtIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuLmNvdmVyIHtcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiBiYWNrZ3JvdW5kOiBncmV5O1xyXG59XHJcbi5tYWluIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuIiwiLndlbGNvbWVGb3JtIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5jb3ZlciB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbiAgYmFja2dyb3VuZDogZ3JleTtcbn1cblxuLm1haW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-welcome',
          templateUrl: './welcome.component.html',
          styleUrls: ['./welcome.component.scss']
        }]
      }], function () {
        return [{
          type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\zespół\zbior-piosenek\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map