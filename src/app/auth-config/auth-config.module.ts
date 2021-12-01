import { NgModule } from '@angular/core';

import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [],
  imports: [
    AuthModule.forRoot({
    /* */  config: {
        authority: `${environment.cloudUrl}/${environment.tenantId}/v2.0`,
        authWellknownEndpointUrl: 'https://login.microsoftonline.com/docstreamdev.onmicrosoft.com/v2.0',
        redirectUrl: `${window.location.origin}/validate-user`,
        postLogoutRedirectUri: window.location.origin,
        clientId: '6d045903-d5fe-40ad-82b5-c74b9dab40e6',
        scope: 'openid profile email api://9eba0b88-c9e1-4471-841e-5191a80fe014/Access_DocStream_As_A_User',
        responseType: 'id_token token',
        silentRenewUrl: `${window.location.origin}/silent-renew.html`,
        startCheckSession: true,
        silentRenew: true,
        customParamsAuthRequest: {
          prompt: 'login',//, consent
        
        },
        logLevel: LogLevel.Debug,        
      }, 
     
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {



 }
