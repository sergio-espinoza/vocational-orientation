import { Component, OnInit, ElementRef } from '@angular/core';

export interface VocationalOrientationResult {
  interest: string;
  points: string | number;
  first: string | number;
  second: string | number;
  third: string | number;
  fourth: string | number;
  fifth: string | number;
  sixth: string | number;
  seventh: string | number;
  eighth: string | number;
  nineth: string | number;

}

const vocationalOrientationResults: Array<VocationalOrientationResult> = [
  {
    interest: 'ALTO',
    points: 18,
    first: '',
    second: 1,
    third: 11,
    fourth: '',
    fifth: 1,
    sixth: '',
    seventh: '',
    eighth: 1,
    nineth: ''
  },
  {
    interest: 'ALTO',
    points: 17,
    first: '',
    second: 0,
    third: 11,
    fourth: '', fifth: 0,
    sixth: '',
    seventh: '',
    eighth: 0,
    nineth: ''
  },
  {
    interest: 'ALTO',
    points: 16,
    first: '',
    second: 0,
    third: 11,
    fourth: '', fifth: 0,
    sixth: '',
    seventh: '',
    eighth: 0,
    nineth: ''
  },
  {
    interest: 'ALTO',
    points: 15,
    first: '',
    second: 0,
    third: 11,
    fourth: '', fifth: 0,
    sixth: '',
    seventh: '',
    eighth: 0,
    nineth: ''
  },
  {
    interest: 'ALTO',
    points: 14,
    first: '',
    second: 0,
    third: 11,
    fourth: '',
    fifth: 0,
    sixth: '',
    seventh: '',
    eighth: 0,
    nineth: ''
  },
  {
    interest: 'ALTO',
    points: 13,
    first: '',
    second: 0,
    third: 11,
    fourth: '',
    fifth: 0,
    sixth: '',
    seventh: '',
    eighth: 0,
    nineth: ''
  },
  {
    interest: 'MEDIO',
    points: 12,
    first: '',
    second: 0,
    third: 11,
    fourth: '',
    fifth: 0,
    sixth: '',
    seventh: '',
    eighth: 0,
    nineth: ''
  },
  {
    interest: 'MEDIO',
    points: 11,
    first: '',
    second: 0,
    third: 11,
    fourth: '',
    fifth: 0,
    sixth: '',
    seventh: '',
    eighth: 0,
    nineth: ''
  },
  {
    interest: 'MEDIO',
    points: 10,
    first: '',
    second: 0,
    third: 11,
    fourth: '',
    fifth: 0,
    sixth: '',
    seventh: '',
    eighth: 0,
    nineth: ''
  },
  {
    interest: 'MEDIO',
    points: 9,
    first: '',
    second: 0,
    third: 11,
    fourth: '',
    fifth: 0,
    sixth: '',
    seventh: '',
    eighth: 0,
    nineth: ''
  },
  {
    interest: 'MEDIO',
    points: 8,
    first: '',
    second: 0,
    third: 11,
    fourth: '',
    fifth: 0,
    sixth: '',
    seventh: '',
    eighth: 0,
    nineth: ''
  },
  {
    interest: 'MEDIO',
    points: 7,
    first: '',
    second: 0,
    third: 11,
    fourth: '',
    fifth: 0,
    sixth: '',
    seventh: '',
    eighth: 0,
    nineth: ''
  },
  {
    interest: 'BAJO',
    points: 6,
    first: '',
    second: 0,
    third: 11,
    fourth: '',
    fifth: 0,
    sixth: '',
    seventh: '',
    eighth: 0,
    nineth: ''
  },
  {
    interest: 'BAJO',
    points: 5,
    first: '',
    second: 0,
    third: 11,
    fourth: '',
    fifth: 0,
    sixth: '',
    seventh: '',
    eighth: 0,
    nineth: ''
  },
  {
    interest: 'BAJO',
    points: 4,
    first: '',
    second: 0,
    third: 11,
    fourth: '',
    fifth: 0,
    sixth: '',
    seventh: '',
    eighth: 0,
    nineth: ''
  },
  {
    interest: 'BAJO',
    points: 3,
    first: '',
    second: 0,
    third: 11,
    fourth: '',
    fifth: 0,
    sixth: '',
    seventh: '',
    eighth: 0,
    nineth: ''
  },
  {
    interest: 'BAJO',
    points: 2,
    first: '',
    second: 0,
    third: 11,
    fourth: '',
    fifth: 0,
    sixth: '',
    seventh: '',
    eighth: 0,
    nineth: ''
  },
  {
    interest: 'BAJO',
    points: 1,
    first: '',
    second: 0,
    third: 11,
    fourth: '',
    fifth: 0,
    sixth: '',
    seventh: '',
    eighth: 0,
    nineth: ''
  },
  {
    interest: '1',
    points: '',
    first: 'CIENCIAS FISICAS',
    second: 'CIENCIAS BIOLÓGICAS',
    third: 'CÁLCULO',
    fourth: 'PERSUASIVO',
    fifth: 'ORGANIZATIVOS',
    sixth: 'SERVICIO SOCIAL',
    seventh: 'LITERARIOS',
    eighth: 'ARTÍSTICOS',
    nineth: 'MUSICALES'
  },

];


@Component({
  selector: 'app-vocational-orientation-result',
  templateUrl: './vocational-orientation.component.html',
  styleUrls: ['./vocational-orientation.component.scss']
})
export class VocationalOrientationResultComponent implements OnInit {
  displayedColumns: string[] = [
    'interest',
    'points',
    'first',
    'second',
    'third',
    'fourth',
    'fifth',
    'sixth',
    'seventh',
    'eighth',
    'nineth'
  ];
  dataSource = vocationalOrientationResults;
  constructor(
    private el: ElementRef,

  ) { }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = '';
  }

}
