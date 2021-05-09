import { Injectable } from '@angular/core';
import { Evaluation } from '../interfaces/models/evaluation.model';
import { CharacterologicalQuestion, VocationalOrientationQuestion } from '../interfaces/type-evaluations.interface';

@Injectable({
  providedIn: 'root'
})
export class EvaluationValueService {
  public typeEvaluation = '';
  public numberIndexQuestionsSelected = 0;
  public lastIndexQuestionVocationalOrientation = 0;
  public lastIndexQuestionMultipleIntelligence = 0;
  public lastIndexQuestionCharacterological = 0;
  public evaluationSelected: (any)[] = [];

  public evaluationInit: Evaluation = {
    tests: ['', '', ''],
    results: [
      { code: 0, chord: false },
      { code: 1, chord: false },
      { code: 2, chord: false },

    ],
    last: [0, 0, 0],
    message: ''
  };

  constructor(

  ) { }


}
