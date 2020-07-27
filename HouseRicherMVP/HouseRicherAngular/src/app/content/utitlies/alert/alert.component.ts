import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import {SwalComponent} from '@sweetalert2/ngx-sweetalert2';

import { AlertService } from '../../../_services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  messageValue: string;

  secondsLeft = 2000;
  timerInterval;

  @ViewChild('toastTypeError') private toastTypeError: SwalComponent;
  @ViewChild('toastTypeInformation') private toastTypeInformation: SwalComponent;

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {
    this.subscription = this.alertService.getAlert()
      .subscribe(message => {
        switch (message && message.type) {
          case 'success':
            break;
          case 'information':
            if (typeof message.text !== "string") {
              this.messageValue = "Unknown Message";
            } else {
              this.messageValue = message.text;
            }
            this.toastTypeInformation.html = this.messageValue;
            this.toastTypeInformation.fire();
            break;
          case 'error':
            if (typeof message.text !== "string") {
              this.messageValue = "Unknown Error";
            } else {
              this.messageValue = message.text;
            }
            this.toastTypeError.html = this.messageValue;
            this.toastTypeError.fire();
            break;
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public openAutoClose(event): void {
    this.timerInterval = setInterval(() => {
      this.secondsLeft = this.secondsLeft - 50;
    }, 50);
  }

  public closeAutoClose(event): void {
    this.secondsLeft = 2000;
    clearInterval(this.timerInterval);
  }
}
