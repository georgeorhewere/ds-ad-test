import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ADTokenResult } from '../models/adtoken-result';


@Injectable({
  providedIn: 'root'
})
export class DsADAuthService {

  private accessToken: any;  

  constructor(private http: HttpClient,) {

   }


   verifyUserAccessToken(adToken: ADTokenResult)
   {

    

   }
  
}
