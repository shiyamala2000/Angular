import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit{

  employee: Employee = {
    id: 0,
    name: '',
    designation: '',
    gender:'',
    email:'',
    phoneNo: '',
  };

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('getEmployee id value', id);
    if (id !== null) { // Check for null explicitly
      this.employeeService.getEmployeeById(+id).subscribe(
        (employee) => {
          console.log('Response for employee detail:', employee);
          this.employee = employee;
        },
        (error) => {
          console.error('Error fetching employee:', error);
        }
      );
    }
  }

}
