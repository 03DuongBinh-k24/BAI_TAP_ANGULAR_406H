import { ICustomer } from './customer';

export interface ICustomerGroup {
  CustomerTypeId: number;
  CustomerTypeName: string;
  Customers: ICustomer[];
}