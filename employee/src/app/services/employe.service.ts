import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private _http:HttpClient) { }

  listEmp(){
    return this._http.get("http://localhost:8090/employee");
  }

  viewEmp(id:number){
    return this._http.get("http://localhost:8090/employee/"+id);
  }

  addEmp(emp:Employee){
    return this._http.post("http://localhost:8090/employee",emp);
  }

  deleteEmp(id:number){
    return this._http.delete("http://localhost:8090/employee/"+id);
  }

  updateEmp(id:number,emp:Employee){
    return this._http.post("http://localhost:8090/employee/"+id,emp);
  }
}
