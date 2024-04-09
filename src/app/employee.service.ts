import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the 'HttpClient' class
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getDistinctEmployees(): Observable<any> {
    return this.http.get('http://localhost:8080/employees');
  }
}
