import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {SettingsService} from '@app/settings/settings.service';

@Component({
  selector: 'app-navbar-vertical',
  templateUrl: './navbar-vertical.component.html',
  styleUrls: ['./navbar-vertical.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarVerticalComponent implements OnInit, OnDestroy {
  settings: any;
  sidebarRef: any;
  onSettingChanged: Subscription;

  constructor(eleRef: ElementRef, private settingService: SettingsService) {
    this.sidebarRef = eleRef.nativeElement;
    this.sidebarRef.classList.add('dt-sidebar');

    this.onSettingChanged = this.settingService.onSettingChanged.subscribe((settings) => {
      this.settings = settings;
      this.toggleNavigation();
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.toggleNavigation();
  }

  ngOnInit() {
  }

  toggleNavigation() {
    if (this.settings.navigationStyle === 'drawer' || window.innerWidth < 992) {
      this.sidebarRef.classList.add('dt-drawer');
      this.sidebarRef.classList.add('position-left');

      if (this.settings.activeNavDrawer) {
        this.sidebarRef.classList.add('open');
      } else {
        this.sidebarRef.classList.remove('open');
      }
    } else {
      this.sidebarRef.classList.remove('dt-drawer');
      this.sidebarRef.classList.remove('position-left');

      if (window.innerWidth >= 992 && this.settings.activeNavDrawer) {
        this.settings.activeNavDrawer = false;
        this.settingService.setSettings(this.settings);
        this.settingService.setSettings(this.settings);
      }
    }
  }

  ngOnDestroy() {
    this.onSettingChanged.unsubscribe();
  }

}
