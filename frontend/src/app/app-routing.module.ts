import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluationsComponent } from './evaluations/evaluations.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { SchoolComponent } from './school/school.component';
import { SchoolsComponent } from './schools/schools.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VocationalOrientationResultComponent } from './result-types.group/vocational-orientation/vocational-orientation.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'evaluations', component: EvaluationsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'schools', component: SchoolsComponent },
  { path: 'evaluation', component: EvaluationComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'school', component: SchoolComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'resultvocational', component: VocationalOrientationResultComponent },
  { path: '**', component: PageNotFoundComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
