import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getAllEmployees().subscribe((employees: Employee[]) => {
      console.log('res for getAllEmployee==>', employees);
      this.employees = employees;
    });
  }

  onDeleteConfirm(employeeId: number): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.employeeService.deleteEmployee(employeeId).subscribe(
          () => {
            console.log('Employee deleted successfully');
            this.getEmployees();
        });
      }
    });
  }
}
