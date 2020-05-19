import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CustomerRoutingModule } from './customer-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { WalletComponent } from './wallet/wallet.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { StatusComponent } from './status/status.component';
import { ReturnComponent } from './return/return.component';
import { AddAddressComponent } from './add-address/add-address.component';


@NgModule({
  declarations: [DashboardComponent, CustomerHomeComponent, ManageAddressComponent, WalletComponent, EditUserComponent, EditCustomerComponent, OrderlistComponent, StatusComponent, ReturnComponent, AddAddressComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
