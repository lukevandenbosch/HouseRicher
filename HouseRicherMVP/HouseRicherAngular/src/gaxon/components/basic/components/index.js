"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./accordion"));
__export(require("./alert"));
__export(require("./buttons"));
__export(require("./carousel"));
__export(require("./collapse"));
__export(require("./datepicker"));
__export(require("./dropdown"));
__export(require("./modal"));
__export(require("./pagination"));
__export(require("./popover"));
__export(require("./progressbar"));
__export(require("./rating"));
__export(require("./tabset"));
__export(require("./timepicker"));
__export(require("./tooltip"));
__export(require("./typeahead"));
var core_1 = require("@angular/core");
var shared_1 = require("../shared");
var accordion_1 = require("./accordion");
var alert_1 = require("./alert");
var buttons_1 = require("./buttons");
var carousel_1 = require("./carousel");
var collapse_1 = require("./collapse");
var datepicker_1 = require("./datepicker");
var dropdown_1 = require("./dropdown");
var modal_1 = require("./modal");
var pagination_1 = require("./pagination");
var popover_1 = require("./popover");
var progressbar_1 = require("./progressbar");
var rating_1 = require("./rating");
var tabset_1 = require("./tabset");
var timepicker_1 = require("./timepicker");
var tooltip_1 = require("./tooltip");
var typeahead_1 = require("./typeahead");
var NgbdDemoModule = /** @class */ (function () {
    function NgbdDemoModule() {
    }
    NgbdDemoModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_1.NgbdSharedModule,
                accordion_1.NgbdAccordionModule,
                alert_1.NgbdAlertModule,
                buttons_1.NgbdButtonsModule,
                carousel_1.NgbdCarouselModule,
                collapse_1.NgbdCollapseModule,
                datepicker_1.NgbdDatepickerModule,
                dropdown_1.NgbdDropdownModule,
                modal_1.NgbdModalModule,
                pagination_1.NgbdPaginationModule,
                popover_1.NgbdPopoverModule,
                progressbar_1.NgbdProgressbarModule,
                rating_1.NgbdRatingModule,
                tabset_1.NgbdTabsModule,
                timepicker_1.NgbdTimepickerModule,
                tooltip_1.NgbdTooltipModule,
                typeahead_1.NgbdTypeaheadModule
            ],
            exports: [
                accordion_1.NgbdAccordionModule,
                alert_1.NgbdAlertModule,
                buttons_1.NgbdButtonsModule,
                carousel_1.NgbdCarouselModule,
                collapse_1.NgbdCollapseModule,
                datepicker_1.NgbdDatepickerModule,
                dropdown_1.NgbdDropdownModule,
                modal_1.NgbdModalModule,
                pagination_1.NgbdPaginationModule,
                popover_1.NgbdPopoverModule,
                progressbar_1.NgbdProgressbarModule,
                rating_1.NgbdRatingModule,
                tabset_1.NgbdTabsModule,
                timepicker_1.NgbdTimepickerModule,
                tooltip_1.NgbdTooltipModule,
                typeahead_1.NgbdTypeaheadModule
            ]
        })
    ], NgbdDemoModule);
    return NgbdDemoModule;
}());
exports.NgbdDemoModule = NgbdDemoModule;
