import { Component } from "@angular/core";

import {ApiService} from '../service/api.service'
import { Router } from "@angular/router";

@Component({
    selector:'login',
    templateUrl:'./app.loginComponent.html'

})

export class LoginComponent {
    errorr:string="";
    data:any={};
   
//  constructor(public apiservice:ApiService, private router:Router){}

constructor (public apiservice: ApiService, public route: Router){}

 login(){
    this.errorr=""; 
this.data;
this.apiservice.getlogindetails(this.data.username, this.data.Password).subscribe(res=>this.success(res) , res=>this.error(res))
 }


 success(res){
debugger;
var result = JSON.parse(res._body);
if(result==true)
{

 localStorage.setItem('id',this.data.username);
    this.route.navigate(['dashboard'])
    // this.apiservice.getemplist().subscribe(res=>this.postdata(res),res=>this.handleerror(res))
}
else{
    this.errorr="Invalid user name or password";
}
 }

 error(res){


 }

//  postdata(res){
//      debugger;

//      var emplist = JSON.parse(res._body);

//  }
//  handleerror(error){

// }

}