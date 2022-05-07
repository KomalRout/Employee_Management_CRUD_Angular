import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  employee: Employee[] = [];
  employees: Employee;
  employeeForm!: FormGroup;
  emp_name: FormControl;
  emp_email: FormControl;
  emp_mobile: FormControl;
  emp_location: FormControl;
  constructor(
    private employeeService: EmployeeService,
    private location: Location,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createFormControls();
    this.creatGroup();
  }
  creatGroup() {
    this.employeeForm = new FormGroup({
      emp_name: this.emp_name,
      emp_location: this.emp_location,
      emp_mobile: this.emp_mobile,
      emp_email: this.emp_email,
    });
  }
  createFormControls() {
    this.emp_name = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z ]+$'),
    ]);
    this.emp_mobile = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]);
    this.emp_location = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z ]+$'),
    ]);
    this.emp_email = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  }
  goBack(): void {
    this.location.back();
  }
  add(name: string, email: string, phone: string, location: string) {
    name = name.trim();
    email = email.trim();
    phone = phone.trim();
    location = location.trim();
    this.employeeService
      .addEmployee({ name, email, phone, location } as Employee)
      .subscribe((emp) => {
        this.employee.push(emp);
        this.goBack();
      });
  }
}
