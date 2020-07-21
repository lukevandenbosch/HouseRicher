import {NgbdAccordionToggle} from '@gaxon/components/basic/components/accordion/demos/toggle/accordion-toggle';

export * from './accordion.component';

import {NgModule} from '@angular/core';
import {NgbdComponentsSharedModule} from '../shared';
import {NgbdAccordion} from './accordion.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [NgbdComponentsSharedModule],
    exports: [NgbdAccordion, NgbdAccordionToggle],
  declarations: [NgbdAccordion, ...DEMO_DIRECTIVES]
})
export class NgbdAccordionModule {}
