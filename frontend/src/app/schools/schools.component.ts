import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserGlobalConfig } from '../config/globals.config/user.global.config';
import { School } from '../interfaces/models/school.model';
import { User } from '../interfaces/models/user.model';
import { SchoolGetProvider } from '../providers/get.providers/school.get.provider';
import { UserGetProvider } from '../providers/get.providers/user.get.provider';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})


export class SchoolsComponent implements OnInit {
  public schools: Array<School> = [];

  constructor(
    private router: Router,
    private schoolGetProvider: SchoolGetProvider,
    private userGetProvider: UserGetProvider,
    public userGlobalConfig: UserGlobalConfig,

  ) { }

  ngOnInit() {
    if (localStorage.getItem('usertoken') === null) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.schoolGetProvider.getSchools()
      .subscribe((schools: Array<School>) => {
        this.schools = schools;
      });
  }

  goToStudentsBySchool(school: School): void {
    localStorage.setItem('school', JSON.stringify(school));

    this.userGetProvider.getStudentsBySchool(school._id || '')
      .subscribe(
        (students: Array<User>) => {
          this.userGlobalConfig.studentsBySchool = students;
          this.router.navigateByUrl('/school');
        },
        (err) => alert(err.error.text)
      );
  }

}
