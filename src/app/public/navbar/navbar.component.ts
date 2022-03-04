import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loged: boolean;

  constructor(private userSrvc: LoginService) {
    this.userSrvc.user.subscribe((x) => {
      if(x){
      this.loged = true;
      }else{
        this.loged = false;
      }    
    })
   }

  ngOnInit(): void {
    
  }
logout(){
 this.userSrvc.logOut();
}
}
