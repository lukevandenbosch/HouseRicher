import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Location} from '@angular/common';
import {SettingsService} from '@app/settings/settings.service';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit, OnDestroy {
  isOpen = false;
  settings: any;
  onSettingChanged: Subscription;

  layoutModes = [
    {
      name: 'Framed',
      slug: 'framed',
      thumb: 'assets/images/customizer-icons/framed.png'
    },
    {
      name: 'Full Width',
      slug: 'full-width',
      thumb: 'assets/images/customizer-icons/full-width.png'
    },
    {
      name: 'Boxed',
      slug: 'boxed',
      thumb: 'assets/images/customizer-icons/boxed.png'
    }
  ];
  navStyles = [
    {
      name: 'Default',
      slug: 'default',
      thumb: 'assets/images/customizer-icons/layout-default.png'
    },
    {
      name: 'SAAS',
      slug: 'saas',
      thumb: 'assets/images/customizer-icons/layout-saas.png'
    },
    {
      name: 'Listing',
      slug: 'listing',
      thumb: 'assets/images/customizer-icons/layout-listing.png'
    },
    {
      name: 'Intranet',
      slug: 'intranet',
      thumb: 'assets/images/customizer-icons/layout-intranet.png'
    },
    {
      name: 'Back Office',
      slug: 'back-office',
      thumb: 'assets/images/customizer-icons/layout-back-office.png'
    },
    {
      name: 'Back Office Minimal',
      slug: 'back-office-mini',
      thumb: 'assets/images/customizer-icons/layout-back-office-mini.png'
    },
    {
      name: 'Modern',
      slug: 'modern',
      thumb: 'assets/images/customizer-icons/layout-modern.png'
    },
    {
      name: 'CRM',
      slug: 'crm',
      thumb: 'assets/images/customizer-icons/layout-crm.png'
    }
  ];

  @ViewChild('updateSwal') private updateSwal: SwalComponent;

  constructor(private settingService: SettingsService, private location: Location) {
    this.onSettingChanged = this.settingService.onSettingChanged.subscribe((settings) => {
      this.settings = settings;
    });
  }

  ngOnInit() {
  }

  /**
   * Toggle drawer
   * @param event
   */
  toggleDrawer(event) {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }

  /**
   * On change Layout
   * @param newLayoutMode
   * @param event
   */
  onLayoutModeChange(newLayoutMode, event) {
    event.preventDefault();

    this.settings.mode = newLayoutMode;
    this.settingService.setSettings(this.settings);
    this.updateSwal.fire();
  }

  /**
   * Get layout URL
   * @param layout
   */
  getLayoutUrl(layout) {
    return this.location.path().replace(this.settings.layout + '/', layout + '/');
  }

  ngOnDestroy() {
    this.onSettingChanged.unsubscribe();
  }

}
