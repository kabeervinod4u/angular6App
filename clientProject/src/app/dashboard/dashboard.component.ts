import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  public emplist: EmployeeData[];


  constructor(public apiservice: ApiService, public route: Router) { }

  ngOnInit() {
    debugger;
if(localStorage.getItem('id')!=null){

    this.apiservice.getemplist().subscribe(res=>this.postdata(res),res=>this.handleerror(res))
  
}
else{


this.route.navigate(['login'])
}
    
  }

   postdata(res){
     debugger;

     var Getemplist = JSON.parse(res._body);
      this.emplist = Getemplist;

 }
 handleerror(error){

}
}

//ex

interface EmployeeData {
Id:number;
UserName: string;
EmailId: string;


}

