import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '@app/app.service';
import {SettingsService} from '@app/settings/settings.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'my-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit, OnDestroy {
  messages: any[] = [];
  settings: any;

  onMessagesChanged: Subscription;
  onSettingChanged: Subscription;

  constructor(private appService: AppService, private settingService: SettingsService) {
  }

  ngOnInit() {
    this.onMessagesChanged = this.appService.onMessagesChanged.subscribe((messages: any[]) => {
      this.messages = messages;
    });

    this.onSettingChanged = this.settingService.onSettingChanged.subscribe((settings) => {
      this.settings = settings;
    });
  }

  ngOnDestroy() {
    this.onMessagesChanged.unsubscribe();
    this.onSettingChanged.unsubscribe();
  }

}
