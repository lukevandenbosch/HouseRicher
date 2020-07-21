"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var demos_1 = require("./demos");
var NgbdAccordion = /** @class */ (function () {
    function NgbdAccordion() {
        this.snippets = demos_1.DEMO_SNIPPETS;
    }
    NgbdAccordion = __decorate([
        core_1.Component({
            selector: 'ngbd-accordion',
            template: "\n    <ngbd-component-wrapper component=\"Accordion\">\n      <ngbd-api-docs directive=\"NgbAccordion\"></ngbd-api-docs>\n      <ngbd-api-docs directive=\"NgbPanel\"></ngbd-api-docs>\n      <ngbd-api-docs directive=\"NgbPanelTitle\"></ngbd-api-docs>\n      <ngbd-api-docs directive=\"NgbPanelContent\"></ngbd-api-docs>\n      <ngbd-api-docs-class type=\"NgbPanelChangeEvent\"></ngbd-api-docs-class>\n      <ngbd-api-docs-config type=\"NgbAccordionConfig\"></ngbd-api-docs-config>\n      <ngbd-example-box demoTitle=\"Accordion\" [snippets]=\"snippets\" component=\"accordion\" demo=\"basic\">\n        <ngbd-accordion-basic></ngbd-accordion-basic>\n      </ngbd-example-box>\n      <ngbd-example-box demoTitle=\"One open panel at a time\" [snippets]=\"snippets\" component=\"accordion\" demo=\"static\">\n        <ngbd-accordion-static></ngbd-accordion-static>\n      </ngbd-example-box>\n      <ngbd-example-box demoTitle=\"Toggle panels\" [snippets]=\"snippets\" component=\"accordion\" demo=\"toggle\">\n        <ngbd-accordion-toggle></ngbd-accordion-toggle>\n      </ngbd-example-box>\n      <ngbd-example-box demoTitle=\"Prevent panel toggle\" [snippets]=\"snippets\" component=\"accordion\" demo=\"preventchange\">\n        <ngbd-accordion-preventchange></ngbd-accordion-preventchange>\n      </ngbd-example-box>\n      <ngbd-example-box demoTitle=\"Global configuration of accordions\" [snippets]=\"snippets\" component=\"accordion\" demo=\"config\">\n        <ngbd-accordion-config></ngbd-accordion-config>\n      </ngbd-example-box>\n    </ngbd-component-wrapper>\n  "
        })
    ], NgbdAccordion);
    return NgbdAccordion;
}());
exports.NgbdAccordion = NgbdAccordion;
