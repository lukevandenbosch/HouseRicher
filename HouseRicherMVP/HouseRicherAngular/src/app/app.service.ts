import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  notificationsUrl = 'api/my-notifications';
  messagesUrl = 'api/my-messages';

  messages: any[];
  notifications: any[];

  onMessagesChanged: BehaviorSubject<any> = new BehaviorSubject([]);
  onNotificationsChanged: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  getUserData() {
    this.getUserMessages();
    this.getUserNotifications();
  }

  /**
   * Get User notifications
   */
  getUserNotifications(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.notificationsUrl)
        .subscribe((response: any) => {
          this.notifications = response;
          this.onNotificationsChanged.next(this.notifications);
          resolve(this.notifications);
        }, reject);
    });
  }

  /**
   * Get User Messages
   */
  getUserMessages(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.messagesUrl)
        .subscribe((response: any) => {
          this.messages = response;
          this.onMessagesChanged.next(this.messages);
          resolve(this.messages);
        }, reject);
    });
  }
}
