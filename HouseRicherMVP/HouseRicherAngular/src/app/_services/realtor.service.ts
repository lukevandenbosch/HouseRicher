import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register_Realtor } from '../_model/register_realtor'
import { DOCUMENT } from '@angular/common';
import { Observable, BehaviorSubject } from 'rxjs';
import { Realtor } from '../_model/realtor'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RealtorService {
  private url: String;
  private realtorSubject: BehaviorSubject<Realtor>;
  public realtor: Observable<Realtor>;

  constructor(private http: HttpClient, @Inject(DOCUMENT) private readonly document: any) {
    this.url = this.document.location.origin;
    this.realtorSubject = new BehaviorSubject<Realtor>(JSON.parse(localStorage.getItem('realtors')));
    this.realtor = this.realtorSubject.asObservable();
  }

  getRealtors(realtorNumber: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Range': realtorNumber.toString()
      })
    };

    return this.http.get(`${this.url}/api/realtor/get`, httpOptions)
    .pipe(map(realtorValue => {
      localStorage.setItem('realtors', JSON.stringify(realtorValue));
      this.realtorSubject.next(<any>realtorValue);
      return realtorValue;
    }));
  }

  register(realtor_register: Register_Realtor) {
    const formData = new FormData();
    formData.append('ProfilePicture', realtor_register.profilePicture, realtor_register.profilePicture.name);
    formData.append('FileType', realtor_register.fileType);
    formData.append('FirstName', realtor_register.firstName);
    formData.append('LastName', realtor_register.lastName);
    formData.append('Email', realtor_register.email);
    formData.append('Password', realtor_register.password);
    formData.append('PhoneNumberOffice', realtor_register.officePhone);
    formData.append('PhoneNumberCell', realtor_register.cellPhone);
    formData.append('Website', realtor_register.website);
    formData.append('Facebook', realtor_register.facebook);
    formData.append('Linkedin', realtor_register.linkedin);
    formData.append('Twitter', realtor_register.twitter);
    formData.append('Instagram', realtor_register.instagram);
    formData.append('About', realtor_register.about);
    formData.append('Address', realtor_register.officeAddress);
    formData.append('City', realtor_register.city);
    formData.append('ProvinceState', realtor_register.province);

    return this.http.post(`${this.url}/api/realtor/post`, formData);
  }
}
