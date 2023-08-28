import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "./employee";
import { Observable, catchError } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/employee';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl+ '/');
  }

  getEmployeeById(id: number) {
    console.log("Employee id : ",id);
    const url = `${this.apiUrl}/${id}`;
    console.log("Employee URl: "+ this.http.get<Employee>(url));
    return this.http.get<Employee>(url);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.apiUrl}/${id}`, value);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    console.log('Request Payload:', employee);
    return this.http.post<Employee>(this.apiUrl + '/', employee)
      .pipe(
        catchError(error => {
          console.error('Error adding employee:', error);
          throw error;
      })
    );
  }

  deleteEmployee(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}