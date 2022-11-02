import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent implements OnInit {
  empId!:number;
  constructor(private route:ActivatedRoute, private service:EmployeService,private snackbar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.empId=data.id;
    });

    if(this.empId){
      this.service.deleteEmp(this.empId).subscribe(data=>{
        this.snackbar.open("Employee Deleted !!");
        this.router.navigate(['employee/list']);
      },error=>this.snackbar.open("Something went wrong!!"))
    }

  }

}
