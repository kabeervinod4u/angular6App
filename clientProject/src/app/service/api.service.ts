import {Injectable} from '@angular/core';
import {Http,Response, URLSearchParams} from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/toPromise';
import {employee} from '../model/emp.model';



@Injectable()

export class ApiService {
    headers: Headers;
    options: RequestOptions;
    baseUrl:string;
 
    constructor (private _http:Http){
        this.headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        this.options = new RequestOptions({ headers: this.headers });
        this.baseUrl= 'http://localhost:50232/api/';
    }

    postData(data){
        debugger;
        return this._http.post(this.baseUrl+"Account/Register", data, this.options)
    }

    validateEmail(email){
        return this._http.get(this.baseUrl+"Account/validateEmail?email="+email)

    }
   
    getemplist(){
debugger;
return this._http.get(this.baseUrl+"Account/GetEmployee")
    }


    getlogindetails(username, password){

        return this._http.get(this.baseUrl+"Account/login?username="+username + "&password="+password )

    }

//     editemp(data, Id){
//         debugger;
// return this._http.put(this.baseUrl+"Accont/Edit?id="+Id,data)

//     }


    
}
