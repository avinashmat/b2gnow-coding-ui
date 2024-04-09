import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'b2g-now-coding-ui';

  employees = [
    { id: 1, name: 'ABC' },
    { id: 1, name: 'DEF' },
    { id: 1, name: 'GEH' },
  ];

  searchText = "";

  get filteredEmployees(){
    return this.employees.filter(employee => {
      return employee.name.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
}
