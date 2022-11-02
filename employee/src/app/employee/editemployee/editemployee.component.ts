import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
empId!:number;
empDetails!:any;
editEmpForm:FormGroup=new FormGroup({});
isEmpDetailsPresent:Boolean=false;
  constructor(private route: ActivatedRoute, private service:EmployeService,private formBuilder:FormBuilder,
    private snackbar:MatSnackBar,private router:Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(data=>{this.empId=data.id});

    if(this.empId!==0){
      this.service.viewEmp(this.empId).toPromise().then(data=>{
        this.empDetails=data;
        Object.assign(this.empDetails,data);
        console.log(this.empDetails);

        this.editEmpForm=this.formBuilder.group({
          'empName':new FormControl(this.empDetails.empName),
      'empSal':new FormControl(this.empDetails.empSal),
      'empDesg':new FormControl(this.empDetails.empDesg)

        })
        this.isEmpDetailsPresent=true;
      })
      .catch(err=>{
        console.log(err)
      })

    }

  
  }

  updateEmp(){
    this.service.updateEmp(this.empId,this.editEmpForm.value).subscribe(
      data=>{this.snackbar.open("Employee Updated!!");
      this.editEmpForm.reset();
      this.router.navigate(['employee/list']);
  },error=>{this.snackbar.open("Something went wrong!!")})
  }
}
