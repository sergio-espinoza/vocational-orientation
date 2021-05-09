import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/models/user.model';
import { DataLogin } from 'src/app/interfaces/data-login.inteface';
import { URL } from 'src/app/config/constants.config/http.constant.config';


@Injectable()

export class UserPostProvider {
  constructor(
    public http: HttpClient,

  ) { }

  postUserToRegister(user: User): Observable<any> {
    return this.http.post<any>(`${URL}/register`, user);
  }

  postDataForLogin(dataLogin: DataLogin): Observable<User> {
    return this.http.post<User>(`${URL}/login`, dataLogin);
  }

}
