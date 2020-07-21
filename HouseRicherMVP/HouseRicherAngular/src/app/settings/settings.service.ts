import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {NavigationStart, Router} from '@angular/router';
import {Platform} from '@angular/cdk/platform';

@Injectable()
export class SettingsService {
  settings: any;
  defaultSettings: any;
  onSettingChanged: BehaviorSubject<any>;

  constructor(private router: Router, public platform: Platform) {
    // Set the default settings
    /*this.defaultSettings = {
      layout: {
        mode: 'full-width', // 'boxed', 'full-width', 'framed'
        theme: 'semidark',
        themeColor: '',
        navigationStyle: 'default', // 'default', 'folded', 'drawer'
        lockedNavStyle: '', // 'default', 'folded', 'drawer'
        navigationFixed: true, // true, false
        activeNavDrawer: false, // true, false
        isDrawerLocked: false, // true, false
        headerFixed: true, // true, false
      },
      customScrollbars: true
    };

    const _settings = localStorage.getItem('settings');
    if (_settings) {
      this.defaultSettings = JSON.parse(_settings);
    }

    /!**
     * Disable Custom Scrollbars if Browser is Mobile
     *!/
    if (this.platform.ANDROID || this.platform.IOS) {
      this.defaultSettings.customScrollbars = false;
    } else {
      this.defaultSettings.customScrollbars = true;
    }

    // Set the settings from the default settings
    this.settings = Object.assign({}, this.defaultSettings);

    // Reload the default settings on every navigation start
    router.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {
          this.setSettings({layout: this.defaultSettings.layout});
        }
      }
    );*/

    // Create the behavior subject
    this.onSettingChanged = new BehaviorSubject(this.settings);
  }

  /**
   * Update settings
   * @param settings
   */
  setSettings(settings) {
    /**
     * Disable Custom Scrollbars if Browser is Mobile
     */
    if (this.platform.ANDROID || this.platform.IOS) {
      settings.customScrollbars = false;
    }

    // Set the settings from the given object
    this.settings = Object.assign({}, this.settings, settings);
    localStorage.setItem(settings.layout + '-settings', JSON.stringify(this.settings));

    // Trigger the event
    this.onSettingChanged.next(this.settings);
  }

}
