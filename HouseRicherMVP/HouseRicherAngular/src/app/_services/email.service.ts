import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  // contactUs() {
  //   const formData = new FormData();
  //   if (postId == null) {
  //     formData.append('PostId', "");
  //   } else {
  //     formData.append('PostId', postId.toString());
  //   }
  //   formData.append('Subject', subject);
  //   formData.append('Message', message);
  //   if (termsAndConditions == null) {
  //     formData.append('TermsAndConditions', "");
  //   } else {
  //     formData.append('TermsAndConditions', termsAndConditions.toString());
  //   }

  //   if (currentUser == null) {
  //     return this.http.post(`${this.url}/api/feed/post`, formData);
  //   } else {
  //     return this.http.post(`${this.url}/api/feed/post`, formData, {
  //       headers: { 'Authorization': ('Bearer ' + currentUser.token) }
  //     });
  //   }
  // }
}
