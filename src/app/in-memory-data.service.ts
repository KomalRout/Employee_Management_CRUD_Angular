import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const emp = [
      {
        id: 1,
        name: 'Ram',
        location: 'Bangalore',
        email: 'ram@gmail.com',
        phone: '987654321',
      },
      {
        id: 2,
        name: 'Raj',
        location: 'Chennai',
        email: 'raj@gmail.com',
        phone: '987654321',
      },
      {
        id: 3,
        name: 'Vinay',
        location: 'Pune',
        email: 'vinay@gmail.com',
        phone: '987654321',
      },
    ];
    return { emp };
  }
}
