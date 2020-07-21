import {Component, HostBinding, HostListener, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {SettingsService} from '@app/settings/settings.service';
import {NavigationService} from '@gaxon/components';
import {Subscription} from 'rxjs/Subscription';
import {DOCUMENT} from '@angular/common';
import {LayoutConfig} from './layout.config';

import {NavigationModel} from './navigation/navigation.model';
import {HeaderMenuModel} from './navigation/header-menu.model';

@Component({
  selector: 'app-listing-layout',
  templateUrl: './listing-layout.component.html',
  styleUrls: ['./listing-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListingLayoutComponent implements OnInit, OnDestroy {
  @HostBinding('class') classNames = 'dt-root__inner';
  settings: any;
  modes = ['framed', 'full-width', 'boxed'];
  onSettingChanged: Subscription;

  constructor(private navService: NavigationService,
              private settingService: SettingsService,
              @Inject(DOCUMENT) private document: any) {
    this.settingService.setSettings(new LayoutConfig().configs);

    this.onSettingChanged = this.settingService.onSettingChanged.subscribe(
      (newSettings) => {
        this.settings = newSettings;
        this.applyNewLayoutMode(this.settings.mode);
          this.document.body.classList.add('dt-layout--' + this.settings.layout);
      }
    );

    // Set the navigation model
    this.navService.setNavigationModel(new NavigationModel());
    this.navService.setHeaderMenu(new HeaderMenuModel());
  }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.applyNewLayoutMode(this.settings.mode);
  }

  /**
   * On click overlay
   */
  onClickOverlay() {
    this.settings.activeNavDrawer = false;
    this.settingService.setSettings(this.settings);
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
