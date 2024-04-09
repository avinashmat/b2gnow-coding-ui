import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'b2g-now-coding-ui';

  constructor(private employeeService: EmployeeService) { }

  employees = [
    { id: 1, name: 'ABC' },
    { id: 1, name: 'DEF' },
    { id: 1, name: 'GEH' },
  ];

  searchText = "";

  get filteredEmployees() {
    // this.employeeService.getDistinctEmployees().subscribe((data: any[]) => { });

    return this.employees.filter(employee => {
      return employee.name.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
}
