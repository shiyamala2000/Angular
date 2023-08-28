import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {

  employee: Employee = { id: 0, name: '', designation: '',gender:'',email:'', phoneNo: '' };
  // availableDesignations: string[] = ['Trainee', 'Junior Associate', 'Associate', 'Senior Associate'];
  
  
  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  onSubmit(): void {
    this.employeeService.addEmployee(this.employee).subscribe(
      () => {
        console.log('Employee added successfully');
        this.router.navigate(['/employees']);
      },
    );
  }
}
