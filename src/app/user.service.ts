import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { User } from './types/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: AuthService,
              private http: HttpClient) {
  }

  /**
   * name
   */
  public listUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/shfunc');
  }
}
