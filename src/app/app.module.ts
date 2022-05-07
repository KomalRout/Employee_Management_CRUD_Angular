import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { InMemoryDataService } from './in-memory-data.service';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeFilterPipe } from './employee-filter.pipe';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [EmployeeService, InMemoryDataService],
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent,
    EmployeeUpdateComponent,
    EmployeeFilterPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
