import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvaluationValueService } from '../services/evaluation-value.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.scss']
})
export class EvaluationComponent implements OnInit {
  evaluationType = '';
  indexQuestion = 0;

  constructor(
    private router: Router,
    public evaluationValueService: EvaluationValueService,

  ) { }

  ngOnInit() {
    if (localStorage.getItem('usertoken') === null) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.evaluationType = localStorage.getItem('evaluationtype') || '';
  }

}




