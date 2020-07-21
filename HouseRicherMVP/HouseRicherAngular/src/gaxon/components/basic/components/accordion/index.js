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
__export(require("./accordion.component"));
var core_1 = require("@angular/core");
var shared_1 = require("../../shared");
var shared_2 = require("../shared");
var accordion_component_1 = require("./accordion.component");
var demos_1 = require("./demos");
var NgbdAccordionModule = /** @class */ (function () {
    function NgbdAccordionModule() {
    }
    NgbdAccordionModule = __decorate([
        core_1.NgModule({
            imports: [shared_1.NgbdSharedModule, shared_2.NgbdComponentsSharedModule],
            exports: [accordion_component_1.NgbdAccordion],
            declarations: [accordion_component_1.NgbdAccordion].concat(demos_1.DEMO_DIRECTIVES)
        })
    ], NgbdAccordionModule);
    return NgbdAccordionModule;
}());
exports.NgbdAccordionModule = NgbdAccordionModule;
