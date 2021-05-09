import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UserGlobalConfig } from '../config/globals.config/user.global.config';
import { UserTokenService } from '../services/user-token.service';
import { ComponentConfig } from '../config/globals.config/render-component.global.config';
import { EvaluationPutProvider } from '../providers/put.providers/evaluation.put.provider';
import { NavbarItem } from '../interfaces/navbar-item.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  styleNavBar: any;
  render: boolean = false;
  typeUser: string = '';

  constructor(
    private titleService: Title,
    private router: Router,
    public userGlobalConfig: UserGlobalConfig,
    private userTokenService: UserTokenService,
    public componentConfig: ComponentConfig,
    private evaluationPutProvider: EvaluationPutProvider

  ) {
    this.styleNavBar = {};

  }

  ngOnInit(): void {
    if (!localStorage.getItem('usertoken')) {
      this.router.navigateByUrl('/login');
      return;
    }

    this.typeUser = localStorage.getItem('typeuser') || '';
  }



  action(navbarItem: NavbarItem): void {
    this[navbarItem.action as keyof NavbarComponent](navbarItem.dir);
  }

  openBarSearchStudents(content: any): void {
    console.log('componenetDIR', content);
  }

  goTo(componentDIR: string): void {
    this.router.navigateByUrl(componentDIR);
  }

  logout(componentDIR: string): void {
    localStorage.clear();
    this.componentConfig.renderNavbar = false;
    this.userGlobalConfig.typeUser = '';

    if (!this.userTokenService?.evaluation) {
      return;
    }

    this.evaluationPutProvider.putTypeEvaluation(this.userTokenService.evaluation)
      .subscribe(
        result => console.log(result),
        err => console.error(err)
      );

    this.router.navigateByUrl(componentDIR);
  }

}
