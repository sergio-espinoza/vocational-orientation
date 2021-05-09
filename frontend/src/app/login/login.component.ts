import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentConfig } from '../config/globals.config/render-component.global.config';
import { UserGlobalConfig } from '../config/globals.config/user.global.config';
import { DataLogin } from '../interfaces/data-login.inteface';
import { MessageStatus, StatusGeneral } from '../interfaces/input-status.interface';
import { User } from '../interfaces/models/user.model';
import { UserPostProvider } from '../providers/post.providers/user.post.provider';
import { UserTokenService } from '../services/user-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  dataLogin: DataLogin;

  labelIdLogin: MessageStatus;
  labelPswLogin: MessageStatus;

  constructor(
    private router: Router,
    private userPostProvider: UserPostProvider,
    private userGlobalConfig: UserGlobalConfig,
    private userTokenService: UserTokenService,
    private componentConfig: ComponentConfig,

  ) {
    this.dataLogin = {
      id: '',
      password: ''
    };

    this.labelIdLogin = {
      message: '', status: StatusGeneral.dark
    };

    this.labelPswLogin = {
      message: '', status: StatusGeneral.dark
    };

  }

  ngOnInit(): void {

  }


  login() {
    const conditionId = this.dataLogin.id.length >= 8;
    const conditionPassword = this.dataLogin.password.length >= 6;

    this.labelIdLogin.message = '';
    this.labelPswLogin.message = '';

    if (!conditionId) {
      this.labelIdLogin = {
        message: '⚠️verificar', status: StatusGeneral.warning
      };

    }

    if (!conditionPassword) {
      this.labelPswLogin = {
        message: '⚠️verificar', status: StatusGeneral.warning
      };
    }

    if (conditionId && conditionPassword) {
      this.userPostProvider.postDataForLogin(this.dataLogin)
        .subscribe(
          (userToken: User) => {
            console.log(userToken);
            localStorage.setItem('usertoken', JSON.stringify(userToken));
            localStorage.setItem('evaluationtoken', JSON.stringify(userToken.evaluation));
            localStorage.setItem('typeuser', userToken.type || '');
            this.userTokenService.evaluation = userToken.evaluation;
            this.userGlobalConfig.typeUser = userToken.type || '';
            this.componentConfig.renderNavbar = true;

            this.router.navigateByUrl('/evaluations');

          },
          (err) => {
            this.labelIdLogin = {
              message: '⚠️verificar', status: StatusGeneral.secondary
            };

            this.labelPswLogin = {
              message: '⚠️verificar', status: StatusGeneral.secondary
            };

            return alert(err.error.text);
          }
        );
    }

  }

}
