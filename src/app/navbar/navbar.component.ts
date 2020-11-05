import { Component, OnDestroy } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NavbarService } from '../navbar.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  loginName: any;
  private helper = new JwtHelperService;

  constructor(private loginService: LoginService, private navService: NavbarService) {

    if (sessionStorage.getItem('token') != null) {
      this.loginName = this.helper.decodeToken(sessionStorage.getItem('token')).nome;
    } else {
      this.navService.navstate$.subscribe((state: any) => this.loginName = state.nome);
    }
  }

 /* logout () {
     this.loginService.logout();
   } */

   ngOnDestroy () {
     this.logout();
   }

   logout() {
    sessionStorage.removeItem('token');
  }

  isLoggedIn() {
      const token = sessionStorage.getItem('token');
      if ( token && this.helper.isTokenExpired(token)) {
        return true;
      } else {
        return false;
      }
  }
}