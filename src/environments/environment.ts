// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl:'http://localhost:58980/',  
  cloudUrl:'https://login.microsoftonline.com',
  scopeUri: ['api://9eba0b88-c9e1-4471-841e-5191a80fe014/Access_DocStream_As_A_User'],  
  tenantId: 'd75facc4-6467-47d9-ac73-f8fcb4ba0845',  
  clienId: '6d045903-d5fe-40ad-82b5-c74b9dab40e6',
  domainUrl:'docstreamdev.onmicrosoft.com',  
  redirectUrl: 'http://localhost:4200'  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
