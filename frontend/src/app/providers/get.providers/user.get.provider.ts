import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from "src/app/interfaces/models/user.model";
import { URL } from "src/app/config/constants.config/http.constant.config";


@Injectable()

export class UserGetProvider {
  constructor(
    private http: HttpClient,

  ) { }

  getStudentsBySchool(idSchool: string): Observable<User[]> {
    return this.http.get<User[]>(`${URL}/school/students/${idSchool}`);
  }

  getStudents(inputSeachStudent: string): Observable<User[]> {
    return this.http.get<User[]>(`${URL}/users/${inputSeachStudent}`);
  }
}
