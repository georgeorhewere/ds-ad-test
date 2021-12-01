import { NgModule } from '@angular/core';

import { AuthModule, LogLevel } from 'angular-auth-oidc-client';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [],
  imports: [
    AuthModule.forRoot({
    /* */  config: {
        authority: `${environment.cloudUrl}/${environment.tenantId}/v2.0`,
        authWellknownEndpointUrl: `${environment.cloudUrl}/${environment.domainUrl}/v2.0`,
        redirectUrl: `${window.location.origin}${environment.authRedirectUrl}`,
        postLogoutRedirectUri: window.location.origin,
        clientId: environment.clienId,
        scope: `openid profile email ${environment.scopeUri}`,
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
