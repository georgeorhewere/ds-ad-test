import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ADTokenResult } from 'src/app/models/adtoken-result';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.scss']
})
export class VerifyUserComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 


  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      // { order: "popular" }
      //his.order = params.order;
      //console.log(this.order); // popular
    }
  ); 

  var tokenKeys = this.route.snapshot.fragment?.split('&')
  var tokenObj:any ={};
  
  tokenKeys?.forEach(x=> {   

    var splitKey = x.split('=')
    var key = splitKey[0];
    tokenObj[key] = splitKey[1];  
  
  });
  
  var authTokenObj:ADTokenResult = tokenObj as ADTokenResult;
  console.log(authTokenObj)
  console.log("Init verify")
  var expiryTimeInMinutes = +authTokenObj.expires_in/60;
  console.log("expires in", expiryTimeInMinutes)

  }



}
