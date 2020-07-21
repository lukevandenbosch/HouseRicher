import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProfilePictureService {
  private url: String;
  constructor(private http: HttpClient, @Inject(DOCUMENT) private readonly document: any) {
    this.url = this.document.location.origin;  
  }

  upload(picture: File, pictureType: string, email: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Image-Type': pictureType,
        'Email': email
      })
    };

    const formData = new FormData();
    formData.append('files', picture, picture.name);

    return this.http.post(`${this.url}/api/profilepicture/post`, formData, httpOptions);
  }
}
