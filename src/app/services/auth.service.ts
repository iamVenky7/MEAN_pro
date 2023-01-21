import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}
  private _registerURL = 'http://localhost:3000/api/register';
  private loginURL = 'https://localhost:300/api/login';
  registerUser(user: any) {
    return this._http.post<any>(this._registerURL, user);
  }

  loginUser(user: any) {
    return this._http.post<any>(this.loginURL, user);
  }
}
