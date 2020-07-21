import {Component, HostBinding, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {SettingsService} from '@app/settings/settings.service';
import {Subscription} from 'rxjs/Subscription';
import {DOCUMENT} from '@angular/common';
import {LayoutConfig} from './layout.config';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthComponent implements OnInit, OnDestroy {
  @HostBinding('class') classlist = 'dt-root__inner';
  settings: any;
  modes = ['framed', 'full-width', 'boxed'];

  onSettingChanged: Subscription;

  constructor(private settingService: SettingsService, @Inject(DOCUMENT) private document: any) {
    this.settingService.setSettings(new LayoutConfig().configs);

    this.onSettingChanged = this.settingService.onSettingChanged.subscribe(
      (newSettings) => {
        this.settings = newSettings;
        this.applyNewLayoutMode(this.settings.mode);
      }
    );
  }

  ngOnInit() {
  }

  /**
   * Apply New Mode
   * @param newLayoutMode
   */
  applyNewLayoutMode(newLayoutMode) {
    this.modes.map((layoutMode) => {
      if (newLayoutMode === layoutMode) {
        this.document.body.classList.add('dt-layout--' + layoutMode);
      } else {
        this.document.body.classList.remove('dt-layout--' + layoutMode);
      }
    });
  }

  ngOnDestroy() {
    this.onSettingChanged.unsubscribe();
  }

}
