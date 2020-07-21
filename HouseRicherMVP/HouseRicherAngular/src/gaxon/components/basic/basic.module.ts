import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@gaxon/modules';
import {NgxMasonryModule} from 'ngx-masonry';

import {
  NgbdAccordion, NgbdDemoModule, NgbdAlert, NgbdButtons, NgbdCarousel, NgbdCollapse, NgbdDatepicker, NgbdDropdown,
  NgbdModal, NgbdPagination, NgbdPopover, NgbdProgressbar, NgbdRating, NgbdTabs, NgbdTimepicker, NgbdTooltip,
  NgbdTypeahead
} from '@gaxon/components/basic/components';

import {BsBadgeComponent} from './bs-badge/bs-badge.component';
import {BsBreadcrumbComponent} from './bs-breadcrumb/bs-breadcrumb.component';
import {BsButtonGroupComponent} from './bs-button-group/bs-button-group.component';
import {BsCardComponent} from './bs-card/bs-card.component';
import {BsCardGroupComponent} from './bs-card-group/bs-card-group.component';
import {BsJumbotronComponent} from './bs-jumbotron/bs-jumbotron.component';
import {BsListGroupComponent} from './bs-list-group/bs-list-group.component';
import {BsNavbarComponent} from './bs-navbar/bs-navbar.component';
import {BsInputGroupComponent} from './bs-input-group/bs-input-group.component';
import {BsTypographyComponent} from './bs-typography/bs-typography.component';

const componentsRoutes: Routes = [
  {
    path: 'accordion',
    component: NgbdAccordion
  },
  {
    path: 'alert',
    component: NgbdAlert
  },
  {
    path: 'buttons',
    component: NgbdButtons
  },
  {
    path: 'carousel',
    component: NgbdCarousel
  },
  {
    path: 'collapse',
    component: NgbdCollapse
  },
  {
    path: 'datepicker',
    component: NgbdDatepicker
  },
  {
    path: 'dropdown',
    component: NgbdDropdown
  },
  {
    path: 'modal',
    component: NgbdModal
  },
  {
    path: 'pagination',
    component: NgbdPagination
  },
  {
    path: 'popover',
    component: NgbdPopover
  },
  {
    path: 'progressbar',
    component: NgbdProgressbar
  },
  {
    path: 'rating',
    component: NgbdRating
  },
  {
    path: 'tabs',
    component: NgbdTabs
  },
  {
    path: 'timepicker',
    component: NgbdTimepicker
  },
  {
    path: 'tooltip',
    component: NgbdTooltip
  },
  {
    path: 'typeahead',
    component: NgbdTypeahead
  },
  {
    path: 'badge',
    component: BsBadgeComponent
  },
  {
    path: 'breadcrumb',
    component: BsBreadcrumbComponent
  },
  {
    path: 'button-group',
    component: BsButtonGroupComponent
  },
  {
    path: 'card',
    component: BsCardComponent
  },
  {
    path: 'card-group',
    component: BsCardGroupComponent
  },
  {
    path: 'input-group',
    component: BsInputGroupComponent
  },
  {
    path: 'jumbotron',
    component: BsJumbotronComponent
  },
  {
    path: 'list-group',
    component: BsListGroupComponent
  },
  {
    path: 'navbar',
    component: BsNavbarComponent
  },
  {
    path: 'typography',
    component: BsTypographyComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxMasonryModule,
    NgbdDemoModule,
    RouterModule.forChild(componentsRoutes)
  ],
  declarations: [
    BsBadgeComponent,
    BsBreadcrumbComponent,
    BsButtonGroupComponent,
    BsCardComponent,
    BsCardGroupComponent,
    BsJumbotronComponent,
    BsListGroupComponent,
    BsNavbarComponent,
    BsInputGroupComponent,
    BsTypographyComponent
  ]
})
export class BasicModule {
}
