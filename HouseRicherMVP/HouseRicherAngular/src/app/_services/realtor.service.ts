import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
}
