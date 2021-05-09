import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL } from '../../config/constants.config/http.constant.config';
import { Evaluation } from 'src/app/interfaces/models/evaluation.model';

@Injectable({
  providedIn: 'root'
})

export class EvaluationPutProvider {
  constructor(
    private http: HttpClient,

  ) { }

  putTypeEvaluation(evaluation: Evaluation): Observable<any> {
    return this.http.put<any>(`${URL}/student/evaluation`, evaluation);
  }
}
