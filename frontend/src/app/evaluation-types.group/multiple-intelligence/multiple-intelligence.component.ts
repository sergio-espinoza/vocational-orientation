import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { EvaluationValueService } from 'src/app/services/evaluation-value.service';
import { UserTokenService } from 'src/app/services/user-token.service';

@Component({
  selector: 'app-multiple-intelligence-evaluation',
  templateUrl: './multiple-intelligence.component.html',
  styleUrls: ['./multiple-intelligence.component.scss']
})
export class MultipleIntelligenceEvaluationComponent implements OnInit, OnDestroy {
  @Input() indexQuestion = 0;
  answers: string[] = [];

  constructor(
    private userTokenService: UserTokenService,
    public evaluationValueService: EvaluationValueService,

  ) {
  }

  ngOnInit(): void {
    if (!this.userTokenService?.evaluation?.last?.[1]) {
      return;
    }
    this.indexQuestion = this.userTokenService.evaluation.last[1];
    this.answers = this.userTokenService.evaluation.tests[1].split('');
  }

  questionResponse(option: string): void {
    if (!this.userTokenService?.evaluation?.last?.[1]) {
      return;
    }

    if (this.indexQuestion >= 71) {
      this.answers[this.indexQuestion] = option;
      this.indexQuestion = 0;
      this.userTokenService.evaluation.last[1] = 71;
      return;
    }
    this.answers[this.indexQuestion] = option;
    this.indexQuestion++;
    if (this.userTokenService.evaluation.last[1] < 71) {
      this.userTokenService.evaluation.last[1]++;
    }
  }

  ngOnDestroy(): void {
    if (!this.userTokenService?.evaluation?.tests?.[1]) {
      return;
    }
    this.userTokenService.evaluation.tests[1] = this.answers.join('');
  }
}
