import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {DynamicDomService} from '../../services/dynamic-dom.service';
import {
  BsCardModule, BsMediaObjectModule, CardsModule, GxCardModule, GxIconModule, GxToggleModule, CustomCommonModule,
  ViewsModule,
  WidgetsModule, NotificationsModule, GxBadgeModule, GxBreadcrumbsModule
} from '../../components';
import {DirectivesModule} from '../../directives/directives.module';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    GxCardModule,
    GxIconModule,
    ViewsModule,
    BsCardModule,
    BsMediaObjectModule,
    NotificationsModule,
    WidgetsModule,
    GxToggleModule,
    CardsModule,
    GxBadgeModule,
    GxBreadcrumbsModule,
    CustomCommonModule,
    DirectivesModule,
    PipesModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    GxCardModule,
    GxIconModule,
    ViewsModule,
    BsCardModule,
    BsMediaObjectModule,
    WidgetsModule,
    GxToggleModule,
    CardsModule,
    GxBadgeModule,
    GxBreadcrumbsModule,
    CustomCommonModule,
    DirectivesModule,
    TranslateModule,
    PipesModule
  ],
  providers: [
    DynamicDomService
  ]
})
export class SharedModule {
}
