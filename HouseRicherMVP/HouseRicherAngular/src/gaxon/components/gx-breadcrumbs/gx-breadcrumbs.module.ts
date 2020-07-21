import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { GxBreadcrumbsComponent } from './gx-breadcrumbs.component';

@NgModule({
  declarations: [GxBreadcrumbsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[GxBreadcrumbsComponent]
})
export class GxBreadcrumbsModule { }
