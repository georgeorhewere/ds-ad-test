

import { Component, OnDestroy, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent  implements OnInit, OnDestroy {
  title = 'ds-ad-test';
 

  constructor(public oidcSecurityService: OidcSecurityService) {
    
   }
   login() {
    console.log('start login');
    this.oidcSecurityService.authorize();
    
    //this.oidcSecurityService.authorizeWithPopUp().subscribe((r)=>{
      //console.log("authorize result ");
      //console.log(r);
    //});
  }

  refreshSession() {
    console.log('start refreshSession');
    this.oidcSecurityService.authorize();
  }

  logout() {
    console.log('start logoff');
    this.oidcSecurityService.logoff();
  }
  ngOnInit() {
    
    //this.oidcSecurityService.checkAuth().subscribe((auth) => console.log('is authenticated', auth));
  }
  
  
  ngOnDestroy(): void {
   
  }



}
