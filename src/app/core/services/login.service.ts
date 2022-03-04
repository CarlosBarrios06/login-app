import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('user'))
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): any {
    return this.userSubject.value;
  }

  public setUser(user: any): any {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
    this.userSubject.next(user);
  }


  login(username: string, password?: string) {
    return this.http.post<any>('signin/', { username, password }).pipe(map((user)=>{
        if (Object.keys(user).length > 0) {
          // If normal login (password)
          if (user) {            
          let userSession = user;  
          localStorage.setItem('user', JSON.stringify(userSession));
          this.userSubject.next(userSession);
          return user;            
          } 
        } else {
          return false;
        }
      })
    );
  }
  logOut() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['security/login']);
  }

}
