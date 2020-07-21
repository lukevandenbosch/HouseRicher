import {Component, HostBinding} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Location} from '@angular/common';
import * as firebase from 'firebase';
import {Subscription} from 'rxjs/Subscription';
import {NgProgress} from 'ngx-progressbar';
import {TranslateService} from '@ngx-translate/core';

import {AppService} from '@app/app.service';
import {AuthService} from '@app/layouts/auth-layout/auth.service';
import {SettingsService} from '@app/settings/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') classlist = 'dt-root';

  route: string;
  isAuthenticated: any = false;
  settings: any;
  onSettingChanged: Subscription;

  constructor(private appService: AppService,
              public translate: TranslateService,
              public authService: AuthService,
              public settingService: SettingsService,
              public ngProgress: NgProgress,
              private router: Router,
              location: Location) {
    // set translation
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

    const _language = localStorage.getItem('language');
    if(_language) {
      translate.use(_language);
    }
    // set translation end

    this.onSettingChanged = this.settingService.onSettingChanged.subscribe(
      (newSettings) => {
        this.settings = newSettings;
      }
    );

    this.isAuthenticated = this.authService.isAuthenticated();

    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.ngProgress.start();
        this.isAuthenticated = this.authService.isAuthenticated();
      }

      if (event instanceof NavigationEnd) {
        this.isAuthenticated = this.authService.isAuthenticated();
        this.ngProgress.done();

        const {fragment} = router.parseUrl(router.url);
        if (fragment) {
          const element = document.querySelector(`#${fragment}`);
          if (element) {
            element.scrollIntoView();
          }
        } else {
          // window.scrollTo({top: 0});
        }
      }

      this.route = location.path();
    });

    firebase.initializeApp({
      apiKey: 'AIzaSyA_dc3Eztlksb2pyYYVKKXjl-RuM6zrsos',
      authDomain: 'drift-angular.firebaseapp.com'
    });

    this.appService.getUserData();
  }

}
