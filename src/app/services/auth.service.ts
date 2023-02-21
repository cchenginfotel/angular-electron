import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isLoggedObservable: Observable<boolean> = this._isLogged.asObservable();
  private isLogged: boolean;

  constructor() {
    this.isLogged = false;
    this.isLoggedObservable.subscribe(val => {
      console.log("user login status: "+val);
      this.isLogged = val;
    });
  }

  public connect(username: string, password: string): void {
    if (username === "morten" && password === "ervik") {
      this._isLogged.next(true);
    }
  }

  public disconnect(): void {
    this._isLogged.next(false);
  }

  public isAuthenticated(): boolean {
    return this.isLogged;
  }
}
