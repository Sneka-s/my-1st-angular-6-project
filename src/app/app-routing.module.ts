import { DetailsComponent } from './details/details.component';
import { AccountComponent } from './account/account.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';


const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent,
  },

 { path: 'account',
  component: AccountComponent,

},

{ path: 'details',
component: DetailsComponent,

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
