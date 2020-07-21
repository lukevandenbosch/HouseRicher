export * from './typeahead.component';

import {NgModule} from '@angular/core';
import {NgbdComponentsSharedModule} from '../shared';
import {NgbdTypeahead} from './typeahead.component';
import {DEMO_DIRECTIVES} from './demos';

@NgModule({
  imports: [NgbdComponentsSharedModule],
  exports: [NgbdTypeahead],
  declarations: [NgbdTypeahead, ...DEMO_DIRECTIVES]
})
export class NgbdTypeaheadModule {}
