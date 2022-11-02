import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
empId!:number;
employeeDetails:any;
  constructor( private _service:EmployeService,private activatedRouter:ActivatedRoute) {}

  ngOnInit(): void {
  this.activatedRouter.params.subscribe(data=>this.empId=data.id);
    
    this._service.viewEmp(this.empId).subscribe(data=>
      this.employeeDetails=data);
  }

}
