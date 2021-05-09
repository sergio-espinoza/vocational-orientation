import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { characterologicalQuestions } from '../config/constants.config/evaluation-types/characterological';
import { multipleIntelligenceQuestions } from '../config/constants.config/evaluation-types/multiple-intelligence.';
import { vocationalOrientationQuestions } from '../config/constants.config/evaluation-types/vocational-orientation.constant';
import { animateProgressBar } from '../config/dom.config/evaluations.dom.config';
import { EvaluationChart } from '../interfaces/evaluation-chart';
import { EvaluationType } from '../interfaces/type-evaluations.interface';
import { EvaluationValueService } from '../services/evaluation-value.service';
import { EvaluationService } from '../services/evaluation.service';
import { UserTokenService } from '../services/user-token.service';


@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.scss']
})
export class EvaluationsComponent implements OnInit, AfterViewInit {
  evaluations: EvaluationChart[] = [];
  evaluationsPercentages: [number, number, number] = [0, 0, 0];

  constructor(
    private router: Router,
    public userTokenService: UserTokenService,
    public evaluationService: EvaluationService,
    private evaluationValueService: EvaluationValueService,

  ) {

  }

  ngOnInit() {
    if (localStorage.getItem('usertoken') === null) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.evaluations = this.evaluationService.evaluations || [];

    if (!this.userTokenService?.evaluation?.last) {
      return;
    }

    this.evaluationsPercentages = [
      this.userTokenService.evaluation.last[2] / 80,
      this.userTokenService.evaluation.last[1] / 71,
      this.userTokenService.evaluation.last[0] / 29,
    ];
  }


  ngAfterViewInit(): void {
    if (!this.evaluations) {
      return;
    }

    for (let i = 0; i < this.evaluations.length; i++) {
      let valueProgressRight = this.evaluationsPercentages[i] * 100;
      let valueProgressLeft = 0;

      if (valueProgressRight > 50) {
        valueProgressLeft = valueProgressRight - 50;
        valueProgressRight = 50;
      }

      if (valueProgressRight >= 100) {
        valueProgressLeft = 50;
        valueProgressRight = 50;
      }

      const selectProgressBarLeft = document.getElementById(`progress-bar-left-${i}`);
      const selectProgressBarRight = document.getElementById(`progress-bar-right-${i}`);

      animateProgressBar(selectProgressBarLeft, valueProgressLeft, 1000);
      animateProgressBar(selectProgressBarRight, valueProgressRight, 0);
    }

  }

  goToEvaluation(evaluation: EvaluationChart) {
    localStorage.setItem('evaluationtype', evaluation.type);

    switch (evaluation.type) {
      case EvaluationType.intelligence:
        this.evaluationValueService.evaluationSelected = multipleIntelligenceQuestions;
        break;
      case EvaluationType.vocational:
        this.evaluationValueService.evaluationSelected = vocationalOrientationQuestions;
        break;
      case EvaluationType.charactelogical:
        this.evaluationValueService.evaluationSelected = characterologicalQuestions;
        break;
    }

    this.router.navigateByUrl('/evaluation');
  }
}
