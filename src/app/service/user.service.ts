import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../models/user.interface';




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }



  //    getEmployees()
  // {
  //   let basicString=this.getHeaders();

  //   let headers=new HttpHeaders(
  //     {Authorization:basicString}
  //   );
  //   console.log("test call");
  //   return this.httpClient.get<Employee[]>('http://localhost:8080/employees',{headers});
  // }

  // public deleteEmployee(employee) {
  //   return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/"+ employee.empId);
  // }
  

  createUser(user: User){
    return this.httpClient.post("http://localhost:8080/users", user);
  }


getHeaders(){
  let username='admin'
  let password='password'
  
  let  basicString='Basic '+window.btoa(username + ':' + password)
  return basicString;
}

}