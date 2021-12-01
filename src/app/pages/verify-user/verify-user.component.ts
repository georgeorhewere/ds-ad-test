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
  


  var tokenKeys = this.route.snapshot.fragment?.split('&')
  var tokenObj:any ={};
  
  tokenKeys?.forEach(x=> {   

    var splitKey = x.split('=')
    var key = splitKey[0];
    tokenObj[key] = splitKey[1];  
  
  });
  
  var authTokenObj:ADTokenResult = tokenObj as ADTokenResult;
  console.log(authTokenObj)

//  var expiryTimeInMinutes = +authTokenObj.expires_in/60;
  // console.log("expires in", expiryTimeInMinutes)

  }



}
