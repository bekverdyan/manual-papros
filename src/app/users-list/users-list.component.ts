import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../types/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.listUsers().subscribe((value: User[]) => {
      this.users = value;
    });
  }

  //

}
