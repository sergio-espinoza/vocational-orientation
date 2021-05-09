import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location,

  ) { }

  ngOnInit() {

    if (localStorage.getItem('usertoken') === null) {
      this.router.navigateByUrl('/login');
      return;
    }

  }

  goToBack(): void {
    this.location.back();
  }

  logout(): void {
    localStorage.clear();

    this.router.navigateByUrl('/login');
  }

}
