import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { SchoolComponent } from './school/school.component';
import { SchoolsComponent } from './schools/schools.component';

import { ResultsComponent } from './results/results.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';

import { MultipleIntelligenceEvaluationComponent } from './evaluation-types.group/multiple-intelligence/multiple-intelligence.component';
import { CharacterologicalEvaluationComponent } from './evaluation-types.group/characterological/characterological.component';
import { VocationalOrientationEvaluationComponent } from './evaluation-types.group/vocational-orientation/vocational-orientation.component';
import { CharacterologicalResultComponent } from './result-types.group/characterological/characterological.component';
import { MultipleIntelligenceResultComponent } from './result-types.group/multiple-intelligence/multiple-intelligence.component';
import { VocationalOrientationResultComponent } from './result-types.group/vocational-orientation/vocational-orientation.component';

import { UserSearchComponent } from './modals.group/user-search/user-search.component';
import { ResultViewComponent } from './modals.group/result-view/result-view.component';
import { UserPostProvider } from './providers/post.providers/user.post.provider';
import { SchoolGetProvider } from './providers/get.providers/school.get.provider';
import { UserGetProvider } from './providers/get.providers/user.get.provider';
import { UserGlobalConfig } from './config/globals.config/user.global.config';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EvaluationsComponent,
    LoginComponent,
    RegisterComponent,
    SchoolComponent,
    SchoolsComponent,
    EvaluationComponent,
    ResultsComponent,
    PageNotFoundComponent,
    CharacterologicalEvaluationComponent,
    MultipleIntelligenceEvaluationComponent,
    VocationalOrientationEvaluationComponent,
    CharacterologicalResultComponent,
    MultipleIntelligenceResultComponent,
    VocationalOrientationResultComponent,
    UserSearchComponent,
    ResultViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    UserPostProvider,
    Title,
    SchoolGetProvider,
    UserGetProvider,
    UserGlobalConfig,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
