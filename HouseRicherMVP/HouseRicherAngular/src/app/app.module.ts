import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgProgressModule} from 'ngx-progressbar';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastNoAnimationModule, ToastrModule} from 'ngx-toastr';

import {SharedModule} from '@gaxon/modules';
import {AppRoutingModule} from '@app/app-routing.module';

import {AppService} from '@app/app.service';
import {AuthenticationService} from './_services/authentication.service';
import {SettingsService} from '@app/settings/settings.service';
import {NavigationService} from '@gaxon/components/navigation/navigation.service';
import {UtiltiesModule} from './content/utitlies/utilties.module'

import {AppComponent} from './app.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastNoAnimationModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    UtiltiesModule,
    SharedModule,
    NgProgressModule,
    NgbModule
  ],
  providers: [
    SettingsService,
    NavigationService,
    AuthenticationService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
