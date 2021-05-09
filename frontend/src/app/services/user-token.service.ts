import { Injectable } from '@angular/core';
import { Evaluation } from '../interfaces/models/evaluation.model';
import { User } from '../interfaces/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserTokenService {
  public typeUser = '';
  public user?: User;
  public evaluation?: Evaluation;

  constructor() {
  }

  setUserDataToken(typeUser: string, user: User, evaluation: Evaluation): void {
    this.typeUser = typeUser;
    this.user = user;
    this.evaluation = evaluation;
  }
}
