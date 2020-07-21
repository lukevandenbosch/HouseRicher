import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'gx-avatar',
  templateUrl: './gx-avatar.component.html',
  styleUrls: ['./gx-avatar.component.scss']
})
export class GxAvatarComponent implements OnInit {
  @Input() avatarClass = '';
  @Input() charLength = 1;

  private _user: any;
  thumbPlaceHolders = ['bg-dark-blue', 'bg-orange', 'bg-success', 'bg-danger'];
  defaultClasses = ['dt-avatar', 'text-white'];

  @Input()
  set user(profile: any) {
    if (!profile.name && profile.first_name) {
      profile.name = profile.first_name + ' ' + profile.last_name;
    }

    if (!profile.thumb && profile.avatar) {
      profile.thumb = profile.avatar;
    }

    this._user = profile;
  }

  get user() {
    return this._user;
  }

  constructor(private eleRef: ElementRef) {
    this.defaultClasses.forEach((className) => {
      this.eleRef.nativeElement.classList.add(className);
    });
  }

  ngOnInit() {
    if (this.user.color) {
      this.user.color.split(' ').forEach((className) => {
        this.eleRef.nativeElement.classList.add(className);
      });
    } else if (this.user.thumb_placeholder) {
      this.user.thumb_placeholder.split(' ').forEach((className) => {
        this.eleRef.nativeElement.classList.add(className);
      });
    } else {
      const randomIndex = Math.floor(Math.random() * this.thumbPlaceHolders.length);
      this.eleRef.nativeElement.classList.add(this.thumbPlaceHolders[randomIndex]);
    }

    if (!this.user.color && this.avatarClass) {
      this.eleRef.nativeElement.classList.add(this.avatarClass);
    }
  }

}
