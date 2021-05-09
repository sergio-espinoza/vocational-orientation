import { Component, OnInit, OnChanges, OnDestroy, Input, SimpleChanges } from '@angular/core';
import { EvaluationValueService } from 'src/app/services/evaluation-value.service';
import { UserTokenService } from 'src/app/services/user-token.service';

@Component({
  selector: 'app-vocational-orientation-evaluation',
  templateUrl: './vocational-orientation.component.html',
  styleUrls: ['./vocational-orientation.component.scss']
})
export class VocationalOrientationEvaluationComponent implements OnChanges, OnInit, OnDestroy {
  @Input() indexQuestion = 0;
  answer1: boolean;
  answer2: boolean;
  answer3: boolean;
  answers: string[] = [];
  resultCurrent = 0;

  constructor(
    private userTokenService: UserTokenService,
    public evaluationValueService: EvaluationValueService,

  ) {
    this.answer1 = false;
    this.answer2 = false;
    this.answer3 = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const prop1 = 'indexQuestion';
    console.log(this.answers);
    console.log(changes[prop1].currentValue);

    if (this.answers !== undefined) {
      this.checkAnswerResult(+this.answers[changes[prop1].currentValue]);

    }


  }


  ngOnInit(): void {
    if (!this.userTokenService?.evaluation?.last?.[2]) {
      return;
    }
    this.indexQuestion = this.userTokenService.evaluation.last[2];
    this.answers = this.userTokenService.evaluation.tests[2].split('');
    this.checkAnswerResult(+this.answers[this.indexQuestion]);
  }

  doAnswer1(): void {
    this.answer3 = false;
    if (this.answer1) {
      this.resultCurrent += 2;
    } else {
      this.resultCurrent -= 2;
    }
  }

  doAnswer2(): void {
    this.answer3 = false;
    if (this.answer2) {
      this.resultCurrent += 1;
    } else {
      this.resultCurrent -= 1;
    }
  }

  doAnswer3(): void {
    this.answer1 = false;
    this.answer2 = false;
    this.resultCurrent = 0;
  }

  checkAnswerResult(laterResult: number): void {
    if (isNaN(laterResult)) {
      laterResult = 0;
    }

    this.resultCurrent = laterResult;

    switch (laterResult) {
      case 3:
        this.answer1 = true; this.answer2 = true; this.answer3 = false;
        break;
      case 2:
        this.answer1 = true; this.answer2 = false; this.answer3 = false;
        break;
      case 1:
        this.answer1 = false; this.answer2 = true; this.answer3 = false;
        break;
      case 0:
        this.answer1 = false; this.answer2 = false; this.answer3 = true;
        break;
    }
  }

  answerQuestion(): void {
    if (!this.userTokenService?.evaluation?.last?.[2]) {
      return;
    }

    if (this.indexQuestion >= 80) {

      this.answers[this.indexQuestion] = this.resultCurrent.toString();
      this.indexQuestion = 0;
      this.userTokenService.evaluation.last[2] = 80;
      this.checkAnswerResult(+this.answers[this.indexQuestion]);
      return;
    }
    this.answers[this.indexQuestion] = this.resultCurrent.toString();

    this.indexQuestion++;
    this.checkAnswerResult(+this.answers[this.indexQuestion]);

    if (this.userTokenService.evaluation.last[2] < 80) {
      this.userTokenService.evaluation.last[2]++;
    }
  }


  ngOnDestroy(): void {
    if (!this.userTokenService?.evaluation?.last?.[2]) {
      return;
    }
    this.answers[this.indexQuestion] = this.resultCurrent.toString();
    this.userTokenService.evaluation.tests[2] = this.answers.join('');
  }

}
