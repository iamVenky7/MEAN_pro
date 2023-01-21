import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registeruserData = {
    username: '',
    password: '',
  };
  constructor(private _auth: AuthService) {}
  registerUser() {
    // console.log(this.registeruserData);
    this._auth.registerUser(this.registeruserData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
