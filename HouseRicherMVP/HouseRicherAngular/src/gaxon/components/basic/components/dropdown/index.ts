export * from './dropdown.component';

import {NgModule} from '@angular/core';
import {NgbdComponentsSharedModule} from '../shared';
import {NgbdDropdown} from './dropdown.component';
import {DEMO_DIRECTIVES} from './demos';
import {NgxMasonryModule} from 'ngx-masonry';

@NgModule({
  imports: [
    NgxMasonryModule,
    NgbdComponentsSharedModule
  ],
  exports: [NgbdDropdown],
  declarations: [NgbdDropdown, ...DEMO_DIRECTIVES]
})
export class NgbdDropdownModule {
}
