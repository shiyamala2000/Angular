import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  // employee: Employee[]=[];
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
    private router: Router,
    private employeeService: EmployeeService  ,
    
  ) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    const url = this.route.snapshot.url[2].toString();
    console.log("second part of url",url);
    this.employeeService.getEmployeeById(+url).subscribe(
        (data) => {
          this.employee=data;
          console.log(" Employee ",this.employee);
        }
    );
  }

  onSubmit(): void {
    this.employeeService.updateEmployee(this.employee.id,this.employee).subscribe(() => {
      this.router.navigate(['/employees']);
    });
  }
  // var id = this.route.snapshot.paramMap.get('id');
    // console.log('getEmplyee id value'+id);
    // if (id!=null) {
    //    this.employeeService.getEmployeeById(+id).subscribe((employee) => {
    //     console.log('response for edit employee==>', employee);
    //     this.employee =Object.assign([],employee);
    //   },
    //   (error) => {
    //     console.error('Error fetching employee:', error);
    //   });
    // }
}
