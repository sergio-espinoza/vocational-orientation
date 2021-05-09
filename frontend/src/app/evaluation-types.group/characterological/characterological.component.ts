import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { EvaluationValueService } from 'src/app/services/evaluation-value.service';
import { UserTokenService } from 'src/app/services/user-token.service';

@Component({
  selector: 'app-characterological-evaluation',
  templateUrl: './characterological.component.html',
  styleUrls: ['./characterological.component.scss']
})
export class CharacterologicalEvaluationComponent implements OnInit, OnDestroy {
  @Input() indexQuestion: number;
  answers: string[] = [];

  constructor(
    private userTokenService: UserTokenService,
    public evaluationValueService: EvaluationValueService,

  ) {
  this.indexQuestion = 0;
  }

  ngOnInit(): void {
    if (!this.userTokenService?.evaluation?.last?.[0]) {
      return;
    }
    this.indexQuestion = this.userTokenService.evaluation.last[0];
    this.answers = this.userTokenService.evaluation.tests[0].split('');
  }

  questionResponse(option: string): void {
    if (!this.userTokenService?.evaluation?.last?.[0]) {
      return;
    }
    if (this.indexQuestion >= 29) {
      this.answers[this.indexQuestion] = option;
      this.indexQuestion = 0;
      this.userTokenService.evaluation.last[0] = 29;
      return;
    }
    this.answers[this.indexQuestion] = option;
    this.indexQuestion++;

    if (this.userTokenService.evaluation.last[0] < 29) {
      this.userTokenService.evaluation.last[0]++;
    }
  }

  ngOnDestroy(): void {
    if (!this.userTokenService?.evaluation?.tests?.[0]) {
      return;
    }
    this.userTokenService.evaluation.tests[0] = this.answers.join('');
  }

}
