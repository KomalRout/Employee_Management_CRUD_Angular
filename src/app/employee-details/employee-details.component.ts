import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) {}

  ngOnInit() {
    this.updateEmployee();
  }
  updateEmployee(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.employeeService.getID(id).subscribe((emp) => (this.employee = emp));
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.employee) {
      this.employeeService
        .updateEmployee(this.employee)
        .subscribe(() => this.goBack());
    }
  }
}
