import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ChartsModule} from 'ng2-charts';
import {AmChartsModule} from '@amcharts/amcharts3-angular';
import {ChartistModule} from 'ng-chartist';

import {GxIconModule} from '../gx-icon/gx-icon.module';
import {GxCardModule} from '../gx-card/gx-card.module';
import {WidgetsModule} from '../widgets/widgets.module';
import {BsCardModule} from '../bs-card/bs-card.module';
import {DirectivesModule} from '../../directives/directives.module';
import {PipesModule} from '../../pipes/pipes.module';

import {GxCounterCardComponent} from './gx-counter-card/gx-counter-card.component';
import {GxChartComponent} from './gx-chart/gx-chart.component';
import {GxTrendingCardComponent} from './gx-trending-card/gx-trending-card.component';
import {GxProgressCardComponent} from './gx-progress-card/gx-progress-card.component';
import {GxProjectCardComponent} from './gx-project-card/gx-project-card.component';
import {GxEmployeeCardComponent} from './gx-employee-card/gx-employee-card.component';
import {GxNewsletterCardComponent} from './gx-newsletter-card/gx-newsletter-card.component';
import {GxInfoCardComponent} from './gx-info-card/gx-info-card.component';
import {GxIboxComponent} from './gx-ibox/gx-ibox.component';
import {GxMediaCardComponent} from './gx-media-card/gx-media-card.component';
import {GxIntroCardComponent} from './gx-intro-card/gx-intro-card.component';
import {GxTripCardComponent} from './gx-trip-card/gx-trip-card.component';
import {GxBasicCardComponent} from './gx-basic-card/gx-basic-card.component';
import {GxCreptoNewsComponent} from './gx-crepto-news/gx-crepto-news.component';
import {GxChartOverlayComponent} from './gx-chart-overlay/gx-chart-overlay.component';
import {GxClientCardComponent} from './gx-client-card/gx-client-card.component';
import {GxActivitiesComponent} from './gx-activities/gx-activities.component';
import {GxStatusCardComponent} from './gx-status-card/gx-status-card.component';
import {GxReportCardComponent} from './gx-report-card/gx-report-card.component';
import {GxOperatorCardComponent} from './gx-operator-card/gx-operator-card.component';
import {GxAnalyticCardComponent} from './gx-analytic-card/gx-analytic-card.component';
import {GxSocialCardComponent} from './gx-social-card/gx-social-card.component';
import {GxValueCalculatorComponent} from './gx-value-calculator/gx-value-calculator.component';
import {GxEchartsLiquidfillComponent} from './gx-echarts-liquidfill/gx-echarts-liquidfill.component';
import {GxChartistChartComponent} from './gx-chartist-chart/gx-chartist-chart.component';
import {GxTasksReportComponent} from './gx-tasks-report/gx-tasks-report.component';
import {GxSliderCardComponent} from './gx-slider-card/gx-slider-card.component';
import {GxInfoBasicCardComponent} from '@gaxon/components/cards/gx-info-basic-card/gx-info-basic-card.component';
import {GxInfoClassicCardComponent} from '@gaxon/components/cards/gx-info-classic-card/gx-info-classic-card.component';
import {GxInfoPanelCardComponent} from '@gaxon/components/cards/gx-info-panel-card/gx-info-panel-card.component';
import {GxPropertiesComponent} from './gx-properties/gx-properties.component';
import {GxTopVendorsComponent} from './gx-top-vendors/gx-top-vendors.component';
import {GxRatingsComponent} from './gx-ratings/gx-ratings.component';
import {GxReferralTrafficComponent} from './gx-referral-traffic/gx-referral-traffic.component';
import {GxInvoicesComponent} from './gx-invoices/gx-invoices.component';
import {GxMyTasksComponent} from './gx-my-tasks/gx-my-tasks.component';
import {GxFlexCardComponent} from '@gaxon/components/cards/gx-flex-card/gx-flex-card.component';
import {GxStatisticsCardComponent} from './gx-statistics-card/gx-statistics-card.component';
import {GxClientsListComponent} from './gx-clients-list/gx-clients-list.component';
import {GxCryptoCardComponent} from './gx-crypto-card/gx-crypto-card.component';
import {GxCurrencyCalculatorComponent} from './gx-currency-calculator/gx-currency-calculator.component';
import {GxInviteFriendsCardComponent} from './gx-invite-friends-card/gx-invite-friends-card.component';
import { GxDownloadAppsCardComponent } from './gx-download-apps-card/gx-download-apps-card.component';
import {GxOnlineUserListCardComponent} from '@gaxon/components/cards/gx-online-user-list-card/gx-online-user-list-card.component';
import {GxMediaIconCardComponent} from '@gaxon/components/cards/gx-media-icon-card/gx-media-icon-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule,
    ChartsModule,
    AmChartsModule,
    GxIconModule,
    GxCardModule,
    BsCardModule,
    WidgetsModule,
    DirectivesModule,
    PipesModule,
    ChartistModule
  ],
  declarations: [
    GxCounterCardComponent,
    GxChartComponent,
    GxTrendingCardComponent,
    GxProgressCardComponent,
    GxProjectCardComponent,
    GxEmployeeCardComponent,
    GxNewsletterCardComponent,
    GxInfoCardComponent,
    GxIboxComponent,
    GxMediaCardComponent,
    GxIntroCardComponent,
    GxTripCardComponent,
    GxBasicCardComponent,
    GxCreptoNewsComponent,
    GxChartOverlayComponent,
    GxClientCardComponent,
    GxActivitiesComponent,
    GxStatusCardComponent,
    GxReportCardComponent,
    GxOperatorCardComponent,
    GxAnalyticCardComponent,
    GxSocialCardComponent,
    GxValueCalculatorComponent,
    GxEchartsLiquidfillComponent,
    GxChartistChartComponent,
    GxTasksReportComponent,
    GxSliderCardComponent,
    GxInfoBasicCardComponent,
    GxInfoClassicCardComponent,
    GxInfoPanelCardComponent,
    GxPropertiesComponent,
    GxTopVendorsComponent,
    GxRatingsComponent,
    GxReferralTrafficComponent,
    GxInvoicesComponent,
    GxMyTasksComponent,
    GxFlexCardComponent,
    GxStatisticsCardComponent,
    GxClientsListComponent,
    GxCryptoCardComponent,
    GxCurrencyCalculatorComponent,
    GxInviteFriendsCardComponent,
    GxDownloadAppsCardComponent,
    GxOnlineUserListCardComponent,
    GxMediaIconCardComponent
  ],
  exports: [
    GxCounterCardComponent,
    GxChartComponent,
    GxTrendingCardComponent,
    GxProgressCardComponent,
    GxProjectCardComponent,
    GxEmployeeCardComponent,
    GxNewsletterCardComponent,
    GxInfoCardComponent,
    GxIboxComponent,
    GxMediaCardComponent,
    GxIntroCardComponent,
    GxTripCardComponent,
    GxBasicCardComponent,
    GxCreptoNewsComponent,
    GxChartOverlayComponent,
    GxClientCardComponent,
    GxActivitiesComponent,
    GxStatusCardComponent,
    GxReportCardComponent,
    GxOperatorCardComponent,
    GxAnalyticCardComponent,
    GxSocialCardComponent,
    GxValueCalculatorComponent,
    GxEchartsLiquidfillComponent,
    GxChartistChartComponent,
    GxTasksReportComponent,
    GxSliderCardComponent,
    GxInfoBasicCardComponent,
    GxInfoClassicCardComponent,
    GxInfoPanelCardComponent,
    GxPropertiesComponent,
    GxTopVendorsComponent,
    GxRatingsComponent,
    GxReferralTrafficComponent,
    GxInvoicesComponent,
    GxMyTasksComponent,
    GxFlexCardComponent,
    GxStatisticsCardComponent,
    GxClientsListComponent,
    GxCryptoCardComponent,
    GxCurrencyCalculatorComponent,
    GxInviteFriendsCardComponent,
    GxDownloadAppsCardComponent,
    GxOnlineUserListCardComponent,
    GxMediaIconCardComponent
  ]
})
export class CardsModule {
}
