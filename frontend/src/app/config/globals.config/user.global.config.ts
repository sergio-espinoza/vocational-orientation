import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/models/user.model';
import { NavbarItem } from 'src/app/interfaces/navbar-item.interface';
import { administratorNavbarItems, studentNavbarItems } from 'src/app/services/navbar-item.service';

@Injectable({
  providedIn: 'root'
})

export class UserGlobalConfig {
  public studentsBySchool: User[] = [];
  public typeUser = '';

  public studentNavbarItems: NavbarItem[] = studentNavbarItems;
  public administratorNavbarItems: NavbarItem[] = administratorNavbarItems;
}
