import { Component } from "@angular/core";

import {ApiService} from '../service/api.service'
import { Router } from "@angular/router";

import { GridModule } from '@progress/kendo-angular-grid';

import { State, process } from '@progress/kendo-data-query';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';

//newform
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { style } from "@angular/animations";
//newformend


@Component({
selector:'App-registration',
templateUrl:'./app.registrationComponent.html',
providers:[ApiService],
styleUrls:['./app.registrationComponent.css'],


})
export class RigistrationComponent{
data:any={};
kendoData:any;
isvlidmail:boolean=true;

//ken
private gridData: any[] = [
    {
      "ProductID": 1,
      "ProductName": "Wheat - Food Item",
      "SupplierID": 1,
      "CategoryID": 1,
      "QuantityPerUnit": "520 bags",
      "UnitPrice": 5000.00,
      "UnitsInStock": 480,
      "UnitsOnOrder": 6594,
      "ReorderLevel": 1,
      "Discontinued": true,
      "Category": {
          "CategoryID": 1,
          "Name": "Wheat Foods",
          "Description": "Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. There are many species of wheat which together make up the genus Triticum; the most widely grown is common wheat"
      }
    }, {
        "ProductID": 2,
        "ProductName": "Rice  - Food Item",
        "SupplierID": 1,
        "CategoryID": 1,
        "QuantityPerUnit": "500 bags",
        "UnitPrice": 6000.00,
        "UnitsInStock": 17,
        "UnitsOnOrder": 2322,
        "ReorderLevel": 2,
        "Discontinued": false,
        "Category": {
            "CategoryID": 1,
            "Name": "Rice Foods",
            "Description": "Rice is the seed of the grass species Oryza sativa or Oryza glaberrima. As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population, especially in Asia"
        }
    }];

//kenend

//newform
rForm: FormGroup;
post:any;                     // A property for our submitted form
description:string = '';
username:string = '';
titleAlert:string = 'This field is required';
//ndewend

buttontxt:string="Submit";

constructor(public apiservice:ApiService, private router:Router, private fb:FormBuilder){
//newfoem

this.rForm = fb.group({
    'UserName' : [null, Validators.required],
    'Password' : [null, Validators.required],
    
    'EmailId' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(500)])],
    'validate' : ''
  });
//enwend

    debugger;
  this.apiservice.getemplist().subscribe(res=>this.success(res),res=>this.error(res))

}

//from
addPost(post) {
    debugger;
    var id = this.data;
    this.data= post;
    this.apiservice.validateEmail(this.data.EmailId).subscribe(res=>this.validateemailsucess(res), res=>this.handleerror(res))

  }
//formend

success(res){
    debugger;
    var result= JSON.parse(res._body)
    this.kendoData = result;
}
error(res){}
// constructor (private router:Router){}
// Id:number=1;
register(){
    debugger;
    this.data;
    // Id = 1;
// this.apiservice.editemp(this.data,this.Id).subscribe(res=>this.sc(res),res=>this.er(res))

    // this.apiservice.validateEmail(this.data.EmailId).subscribe(res=>this.validateemailsucess(res), res=>this.handleerror(res))
   // this.apiservice.postData(this.data).subscribe(res=>this.postDatasucess(res),res=>this.handleerror(res));
}

// sc(res){
    
// }
// er(res){}



validateemailsucess(res) {
        var result = JSON.parse(res._body);
        debugger;
        if(result==true){
   this.apiservice.postData(this.data).subscribe(res=>this.postDatasucess(res),res=>this.handleerror(res));
            

   
        }

    }
    postDatasucess (res){
var result = JSON.parse(res._body)

        debugger;
if(result==true){
debugger;
this.apiservice.getemplist().subscribe(res=>this.success(res),res=>this.error(res))
// this.router.navigate(['']);
}else{
    this.isvlidmail = false;
}

    }

    handleerror(error){

    }

    checkmail(email:any)
    {

    
        
         alert(email)
    }

    //onchn
    public onStateChange(event) {
        //var rowData = event.selectedRows[0].dataItem;
        //this.data = rowData;
        Object.assign(this.data,event.selectedRows[0].dataItem)
        // debugger;
        // this.gridState = state;
        // this.editService.read();
    }

}