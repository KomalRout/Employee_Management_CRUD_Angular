import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css'],
})
export class EmployeeUpdateComponent implements OnInit {
  emp: Employee | undefined;
  empForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getEmployee();
  }
  creatGroup() {}
  getEmployee(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.employeeService.getID(id).subscribe((emp) => (this.emp = emp));
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.emp) {
      this.employeeService
        .updateEmployee(this.emp)
        .subscribe(() => this.goBack());
    }
  }
}
