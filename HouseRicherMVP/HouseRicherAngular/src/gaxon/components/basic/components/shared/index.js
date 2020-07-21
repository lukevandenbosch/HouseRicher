"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_1 = require("./../shared");
var example_box_1 = require("./example-box");
var api_docs_1 = require("./api-docs");
var fragment_1 = require("./fragment");
var overview_1 = require("./overview");
var NgbdComponentsSharedModule = /** @class */ (function () {
    function NgbdComponentsSharedModule() {
    }
    NgbdComponentsSharedModule = __decorate([
        core_1.NgModule({
            imports: [shared_1.NgbdSharedModule],
            declarations: [
                example_box_1.ExampleBoxComponent, api_docs_1.NgbdApiDocsBadge, api_docs_1.NgbdApiDocs, api_docs_1.NgbdApiDocsClass, api_docs_1.NgbdApiDocsConfig,
                fragment_1.NgbdFragment, overview_1.NgbdOverviewComponent
            ],
            exports: [
                example_box_1.ExampleBoxComponent, api_docs_1.NgbdApiDocsBadge, api_docs_1.NgbdApiDocs, api_docs_1.NgbdApiDocsClass, api_docs_1.NgbdApiDocsConfig,
                fragment_1.NgbdFragment, overview_1.NgbdOverviewComponent
            ]
        })
    ], NgbdComponentsSharedModule);
    return NgbdComponentsSharedModule;
}());
exports.NgbdComponentsSharedModule = NgbdComponentsSharedModule;
