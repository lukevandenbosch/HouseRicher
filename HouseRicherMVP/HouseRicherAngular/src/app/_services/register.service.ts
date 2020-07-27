import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Register_User } from '../_model/register_user';
import { Register_Realtor } from '../_model/register_realtor';
import { DOCUMENT, LocationStrategy } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url: String;

  constructor(private http: HttpClient, @Inject(DOCUMENT) private readonly document: any, private readonly locationStrategy: LocationStrategy) {
    this.url = this.document.location.origin;
  }

  registerUser(user: Register_User) {
    const formData = new FormData();
    formData.append('FirstName', user.firstName);
    formData.append('LastName', user.lastName);
    formData.append('Email', user.email);
    formData.append('ProvinceState', user.province);
    formData.append('City', user.city);
    formData.append('Password', user.password);
    formData.append('TermsAndConditions', user.termsAndConditions.toString());

    return this.http.post(`${this.url}/api/register/person`, formData);
  }

  registerRealtor(realtor_register: Register_Realtor) {
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
    formData.append('TermsAndConditions', realtor_register.termsAndConditions.toString());
    formData.append('Trial', realtor_register.trial.toString());

    return this.http.post(`${this.url}/api/register/realtor`, formData);
  }
}
