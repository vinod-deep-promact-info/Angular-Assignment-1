import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Employee } from '../Models/employee.model';
import { Observable, config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseApiUrl = 'https://localhost:7114';
  private readonly headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')



  constructor(private http : HttpClient) { }

  getAllEmployees() : Observable<Employee[]>{
     return this.http.get<Employee[]>(this.baseApiUrl + '/api/Employees');
  }

  addemployee(addemployeerequest: Employee) : Observable<Employee>{
    return this.http.post<Employee>(this.baseApiUrl + '/api/Employees', addemployeerequest);
 }

  updateEmployee(updatedEmployee: Employee,id: number): Observable<Employee> {
    return this.http.put<Employee>(this.baseApiUrl + '/api/Employees/' + id, updatedEmployee);
 }

  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete<any>(this.baseApiUrl + '/api/Employees/' + employeeId);
 }

  getEmployeeById(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(this.baseApiUrl + '/api/Employees/' + employeeId);
  }
}
