import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee';
  displayedColumns = ['empId', 'empName', 'empSal', 'empDesg'];
  dataSource: any| null;
}
