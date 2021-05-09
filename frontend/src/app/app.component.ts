import { Component, OnInit } from '@angular/core';
import { characterologicalQuestions } from './config/constants.config/evaluation-types/characterological';
import { multipleIntelligenceQuestions } from './config/constants.config/evaluation-types/multiple-intelligence.';
import { vocationalOrientationQuestions } from './config/constants.config/evaluation-types/vocational-orientation.constant';
import { Evaluation } from './interfaces/models/evaluation.model';
import { User } from './interfaces/models/user.model';
import { EvaluationType } from './interfaces/type-evaluations.interface';
import { EvaluationValueService } from './services/evaluation-value.service';
import { UserTokenService } from './services/user-token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit {
  typeUser = '';
  user?: User;
  evaluation?: Evaluation;

  constructor(
    private userTokenService: UserTokenService,
    private evaluationValueService: EvaluationValueService,

  ) {

  }

  ngOnInit(): void {
    this.typeUser = localStorage.getItem('typeuser') || '';
    const userTokenString = localStorage.getItem('usertoken');
    const evaluationToken = localStorage.getItem('evaluationtoken');
    if (userTokenString && evaluationToken) {
      this.user = JSON.parse(userTokenString);
      this.evaluation = JSON.parse(evaluationToken);
      this.userTokenService.setUserDataToken(
        this.typeUser,
        this.user as User,
        this.evaluation as Evaluation
      );
    }

    switch (localStorage.getItem('evaluationtype')) {
      case EvaluationType.intelligence:
        this.evaluationValueService.evaluationSelected = multipleIntelligenceQuestions;
        break;
      case EvaluationType.vocational:
        this.evaluationValueService.evaluationSelected = vocationalOrientationQuestions;
        break;
      case EvaluationType.charactelogical:
        this.evaluationValueService.evaluationSelected = characterologicalQuestions;
        break;
      default:
        this.evaluationValueService.evaluationSelected = [];
        break;
    }
  }

}

