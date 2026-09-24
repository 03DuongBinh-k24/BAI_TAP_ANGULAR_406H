import { Component, OnInit } from '@angular/core';
import { CustomerHttpService } from '../../services/customer-http';


@Component({
  selector: 'app-group-customers',
  standalone: false,
  templateUrl: './group-customers.html',
  styleUrls: ['./group-customers.css']
})
export class GroupCustomersComponent implements OnInit {
  customerGroups: any;
  errMessage: string = '';

  constructor(private _service: CustomerHttpService) { }

  ngOnInit(): void {
    this._service.getCustomerGroups().subscribe({
      next: (data) => { this.customerGroups = data; },
      error: (err) => { this.errMessage = err.message || err; }
    });
  }
}