import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/employee';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {

  listEmployee: any;
  constructor(private _service:EmployeService) { }

  ngOnInit(): void {
this._service.listEmp().subscribe(data=>{
  this.listEmployee=data;

});

  }

}
