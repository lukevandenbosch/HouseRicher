import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '@app/app.service';
import {SettingsService} from '@app/settings/settings.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'my-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit, OnDestroy {
  notifications: any[] = [];
  settings: any;

  onNotificationsChanged: Subscription;
  onSettingChanged: Subscription;

  constructor(private appService: AppService, private settingService: SettingsService) {
  }

  ngOnInit() {
    this.onNotificationsChanged = this.appService.onNotificationsChanged.subscribe((notifications: any[]) => {
      this.notifications = notifications;
    });

    this.onSettingChanged = this.settingService.onSettingChanged.subscribe((settings) => {
      this.settings = settings;
    });
  }

  ngOnDestroy() {
    this.onNotificationsChanged.unsubscribe();
    this.onSettingChanged.unsubscribe();
  }

}
