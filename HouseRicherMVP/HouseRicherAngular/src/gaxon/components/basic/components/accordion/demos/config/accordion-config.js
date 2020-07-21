"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var NgbdAccordionConfig = /** @class */ (function () {
    function NgbdAccordionConfig(config) {
        // customize default values of accordions used by this component tree
        config.closeOthers = true;
        config.type = 'info';
    }
    NgbdAccordionConfig = __decorate([
        core_1.Component({
            selector: 'ngbd-accordion-config',
            templateUrl: './accordion-config.html',
            providers: [ng_bootstrap_1.NgbAccordionConfig] // add the NgbAccordionConfig to the component providers
        })
    ], NgbdAccordionConfig);
    return NgbdAccordionConfig;
}());
exports.NgbdAccordionConfig = NgbdAccordionConfig;
