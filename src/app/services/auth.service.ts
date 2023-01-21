import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}
  _registerURL = 'http://localhost:3000/api/register';

  registerUser(user: any) {
    return this._http.post<any>(this._registerURL, user);
  }
}
