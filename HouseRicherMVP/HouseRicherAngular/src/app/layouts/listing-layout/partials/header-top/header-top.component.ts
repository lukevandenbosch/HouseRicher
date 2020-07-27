import {Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {SettingsService} from '@app/settings/settings.service';
import {AuthenticationService} from '../../../../_services/authentication.service';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit, OnDestroy {
  @HostBinding('class') classNames = 'dt-header__top';
  settings: any;
  languages = [
    {
      id: 'en',
      title: 'Canada',
      flag: 'flag-icon-ca'
    }
  ];
  currentLanguage: any;
  currentUser: any ;

  onSettingChanged: Subscription;
  onLanguageChanged: Subscription;

  constructor(private settingService: SettingsService,
              public translate: TranslateService,
              private authService: AuthenticationService) {
    this.setActiveLang(this.translate.currentLang);
    this.onLanguageChanged = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setActiveLang(event.lang);
    });

    this.onSettingChanged = this.settingService.onSettingChanged.subscribe((settings) => {
      this.settings = settings;
    });
  }

  ngOnInit() {
    this.currentUser = this.authService.currentUserValue;
  }

  toggleNavigation() {
    if (this.settings.navigationStyle === 'drawer' || window.innerWidth < 992) {
      this.settings.activeNavDrawer = !this.settings.activeNavDrawer;
    } else if (this.settings.navigationStyle === 'folded') {
      this.settings.navigationStyle = 'default';
    } else {
      this.settings.navigationStyle = 'folded';
    }

    this.settingService.setSettings(this.settings);
  }

  setActiveLang(lang: string) {
    this.languages.forEach((language) => {
      if(language.id === lang) {
        this.currentLanguage = language;
      }
    });
  }

  switchLanguage(lang) {
    this.translate.use(lang.id);
    localStorage.setItem('language', lang.id);
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.onSettingChanged.unsubscribe();
    this.onLanguageChanged.unsubscribe();
  }

}
