import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/core/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginSubscription: Subscription;

  constructor(private lf: FormBuilder, private userSrvc: LoginService, private notification: ToastrService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.lf.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.userSrvc.user.subscribe((x) => {
      if(x){
      this.router.navigate(['/'])
      };  
    })
  }

  loginUser() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginSubscription = this.userSrvc
      .login(
        
        this.loginForm.get('username')?.value,
       this.loginForm.get('password')?.value,
        
      )
      .subscribe(
        (res) => {
          console.log(res);
          if (res) {
            // this.spinner.hide();
            this.loginForm.reset();
          }
          if (res === false) {
            this.notification.error('Password or Email invalid');
            console.log('algo salio mal');
          } else {
            this.notification.success('Wellcome ');
            this.router.navigate(['/']);
          }
        },
        (error) => {
          this.notification.error('Login could not be completed');
          console.log('algo salio mal', error);
          
        }
      );
  }
}
