import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { ListCheckoutComponent } from './list-checkout/list-checkout.component';
import { CheckoutConfirmComponent } from './checkout-confirm/checkout-confirm.component';


@NgModule({
  declarations: [
    ListCheckoutComponent,
    CheckoutConfirmComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    SharedModule
  ],
  entryComponents: [
    CheckoutConfirmComponent
  ]
})
export class CheckoutModule { }
