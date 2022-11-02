import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  addEmpForm: FormGroup = new FormGroup({});

  constructor(private formbuilder:FormBuilder, private _service:EmployeService, private _snackbar:MatSnackBar) { }

  ngOnInit(): void {

    this.addEmpForm=this.formbuilder.group({
      'empName':new FormControl(''),
      'empSal':new FormControl(''),
      'empDesg':new FormControl('')
    })
  }

  createUser(){
     this._service.addEmp(this.addEmpForm.value).subscribe(data=>{
       this._snackbar.open("Employee Added!!");
      this.addEmpForm.reset();},
      error=>this._snackbar.open("Something went wrong!!")
       )
  }

}
