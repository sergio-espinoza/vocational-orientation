import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../interfaces/models/user.model';
import { UserGlobalConfig } from '../config/globals.config/user.global.config';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
  public students: User[] = [];
  constructor(
    private router: Router,
    public userGlobalConfig: UserGlobalConfig,

  ) { }

  ngOnInit() {
    if (!localStorage.getItem('usertoken')) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.students = this.userGlobalConfig.studentsBySchool;
  }

}

