import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from './types/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authToken: Token;

  public set token(value: Token) {
    this.authToken = value;
  }

  public get token(): Token {
    return this.authToken;
  }


  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<Token> {
    return this.http.post<Token>('http://localhost:3000/api/login', { email, password });
  }
}
