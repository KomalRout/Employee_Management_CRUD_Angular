import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employee: Employee[] = [];
  searchValue: string = '';
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    this.employeeService
      .getEmployees()
      .subscribe((heroes) => (this.employee = heroes));
  }
  delete(emp: Employee): void {
    this.employee = this.employee.filter((h) => h !== emp);
    this.employeeService.deleteEmployee(emp.id).subscribe();
  }
}
