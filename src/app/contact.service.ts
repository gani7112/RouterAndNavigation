import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  API_URL: string = "/api/";

  x
  getContacts() {
    setTimeout(() => (this.x = this.http.get(this.API_URL + 'contacts')),10000)
    if (!this.x)
      return of(this.x)
    else
      return this.x
  }
  getContact(contactId) {
    return this.http.get(`${this.API_URL + 'contacts'}/${contactId}`)
  }
}
