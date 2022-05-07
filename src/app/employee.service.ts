import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employee } from './employee';
import { EMPLOYEES } from './mock';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}
  private path = 'api/emp';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  getEmployees(): Observable<Employee[]> {
    // return EMPLOYEES;
    return this.http.get<Employee[]>(this.path).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  getID(id: number): Observable<Employee> {
    const url = `${this.path}/${id}`;
    return this.http.get<Employee>(url);
  }

  addEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.path, emp, this.httpOptions);
  }
  updateEmployee(emp: Employee): Observable<any> {
    return this.http.put(this.path, emp, this.httpOptions);
  }
  deleteEmployee(id: number): Observable<Employee> {
    const url = `${this.path}/${id}`;
    return this.http.delete<Employee>(url, this.httpOptions);
  }
  /* getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );*/
}
