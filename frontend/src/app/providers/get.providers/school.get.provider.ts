import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { School } from 'src/app/interfaces/models/school.model';
import { URL } from 'src/app/config/constants.config/http.constant.config';

@Injectable()

export class SchoolGetProvider {
  constructor(
    private http: HttpClient,

  ) { }

  getSchools(): Observable<School[]> {
    return this.http.get<School[]>(`${URL}/school`);
  }

}
