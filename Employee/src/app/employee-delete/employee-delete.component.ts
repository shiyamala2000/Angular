import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {
  employeeId: number = -1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.employeeId = Number(params.get('id'));
    });
  }

  deleteEmployee(): void {
    this.employeeService.deleteEmployee(this.employeeId).subscribe(
      () => {
        console.log('Employee deleted successfully');
        this.router.navigate(['/employees']);
      },
    );
  }

  goBack(): void {
    this.router.navigate(['/employees']);
  }
}

