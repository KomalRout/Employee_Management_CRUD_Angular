import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'employeeFilter',
})
export class EmployeeFilterPipe implements PipeTransform {
  transform(empArray: Employee[], searchTerm: string): Employee[] {
    let employees: Employee[] = [];
    for (let emp of empArray) {
      if (emp.name.toUpperCase().startsWith(searchTerm.toUpperCase()))
        employees.push(emp);
    }
    return employees;
  }
}
