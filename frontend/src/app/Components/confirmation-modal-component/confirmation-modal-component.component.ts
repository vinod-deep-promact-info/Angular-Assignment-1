import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-modal-component',
  templateUrl: './confirmation-modal-component.component.html',
  styleUrls: ['./confirmation-modal-component.component.css']
})
export class ConfirmationModalComponentComponent {

  employees : Employee[] = [];
  showDeleteConfirmation: boolean = false;
  selectedEmployee: Employee | null = null;

  constructor(private employeesService : EmployeeService, private router: Router){}



  confirmDelete(employee: Employee): void {
    this.showDeleteConfirmation = true;
    this.selectedEmployee = employee;

  }

  cancelDelete(): void {
    this.showDeleteConfirmation = false;
    this.selectedEmployee = null;
  }

  deleteEmployee(): void {
    if (this.selectedEmployee) {
      this.employeesService.deleteEmployee(this.selectedEmployee.id).subscribe({
        next: () => {
          this.showDeleteConfirmation = false;
          this.selectedEmployee = null;
          this.refreshEmployeeList();
        },
        error: (error: any) => {
          console.error(error);
        }
      });
    }
  }

  refreshEmployeeList(): void {
    this.employeesService.getAllEmployees().subscribe({
      next: (employees: Employee[]) => {
        this.employees = employees;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}
