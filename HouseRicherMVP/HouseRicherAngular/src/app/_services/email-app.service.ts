import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class EmailAppService {
  private url: string;

  constructor(private http: HttpClient, @Inject(DOCUMENT) private readonly document: any) { 
    this.url = this.document.location.origin;
  }

  contactUs(name: string, email: string, message: string) {
    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Email', email);
    formData.append('Message', message);

    return this.http.post(`${this.url}/api/Email/ContactUs`, formData);
  }
}
