import {Component, OnInit} from '@angular/core';
import {AppService} from '@app/app.service';
import {SettingsService} from '@app/settings/settings.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'my-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: any[] = [];
  settings: any;

  onMessagesChanged: Subscription;
  onSettingChanged: Subscription;

  constructor(private appService: AppService, private settingService: SettingsService) {
  }

  ngOnInit() {
    this.onSettingChanged = this.settingService.onSettingChanged.subscribe((settings) => {
      this.settings = settings;
    });
  }
}
