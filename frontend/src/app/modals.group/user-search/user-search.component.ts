import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/models/user.model';
import { UserGetProvider } from 'src/app/providers/get.providers/user.get.provider';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  students: User[];
  inputSeachStudent = '';

  constructor(
    private userGetProvider: UserGetProvider,

  ) {
    this.students = [];
    this.inputSeachStudent = '';

  }

  ngOnInit() {
  }

  searchStudents(): void {
    if (this.inputSeachStudent.length >= 3) {
      this.userGetProvider.getStudents(this.inputSeachStudent)
        .subscribe(
          (students: Array<User>) => this.students = students,
          (err) => alert(err.error.text)
        );
    } else {
      alert('Se Requiere más de tres caracteres');
      return;
    }
  }

}
