"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var accordion_basic_1 = require("./basic/accordion-basic");
var accordion_preventchange_1 = require("./preventchange/accordion-preventchange");
var accordion_static_1 = require("./static/accordion-static");
var accordion_toggle_1 = require("./toggle/accordion-toggle");
var accordion_config_1 = require("./config/accordion-config");
exports.DEMO_DIRECTIVES = [accordion_basic_1.NgbdAccordionBasic, accordion_preventchange_1.NgbdAccordionPreventchange, accordion_static_1.NgbdAccordionStatic, accordion_toggle_1.NgbdAccordionToggle, accordion_config_1.NgbdAccordionConfig];
exports.DEMO_SNIPPETS = {
    'basic': {
        'code': require('!!raw-loader!./basic/accordion-basic'),
        'markup': require('!!raw-loader!./basic/accordion-basic.html')
    },
    'preventchange': {
        'code': require('!!raw-loader!./preventchange/accordion-preventchange'),
        'markup': require('!!raw-loader!./preventchange/accordion-preventchange.html')
    },
    'static': {
        'code': require('!!raw-loader!./static/accordion-static'),
        'markup': require('!!raw-loader!./static/accordion-static.html')
    },
    'toggle': {
        'code': require('!!raw-loader!./toggle/accordion-toggle'),
        'markup': require('!!raw-loader!./toggle/accordion-toggle.html')
    },
    'config': {
        'code': require('!!raw-loader!./config/accordion-config'),
        'markup': require('!!raw-loader!./config/accordion-config.html')
    }
};
