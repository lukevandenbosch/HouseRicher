export * from './modal.component';

import {NgModule} from '@angular/core';
import {NgbdModal} from './modal.component';
import {NgbdComponentsSharedModule} from '../shared';
import {DEMO_DIRECTIVES, NgbdModalContent} from './demos';

@NgModule({
  imports: [NgbdComponentsSharedModule],
  exports: [NgbdModal],
  entryComponents: [NgbdModalContent],
  declarations: [NgbdModal, NgbdModalContent, ...DEMO_DIRECTIVES]
})
export class NgbdModalModule {}
