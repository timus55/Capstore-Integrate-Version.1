import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { ManageAddressComponent } from './manage-address/manage-address.component';
import { WalletComponent } from './wallet/wallet.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { StatusComponent } from './status/status.component';
import { ReturnComponent } from './return/return.component';
import { AddAddressComponent } from './add-address/add-address.component';


const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
    /*
    Write the same routing required here inside.
    For Example: 
    { path :'addCustomer' , component: AddCustomerComponent }
   
   */
  {path:'add-address', component:AddAddressComponent},
  {path:'edit-customer', component:EditCustomerComponent},
  {path:'manage-address', component:ManageAddressComponent},
  {path:'wallet', component:WalletComponent},
  {path:'orderlist',component:OrderlistComponent},
  {path:'status',component:StatusComponent},
  {path:'return',component:ReturnComponent},
  {path:'**', component:CustomerHomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
