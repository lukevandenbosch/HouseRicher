import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ExampleBoxComponent} from './example-box';
import {SharedModule} from '@gaxon/modules';

@NgModule({
  imports: [
    NgbModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    ExampleBoxComponent
  ],
  exports: [
    NgbModule,
    SharedModule,
    ExampleBoxComponent
  ]
})
export class NgbdComponentsSharedModule {}
