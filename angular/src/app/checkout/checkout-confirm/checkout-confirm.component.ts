import { MatDialogRef } from '@angular/material';
import { VisitorService } from './../../shared/services/users/visitor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-confirm',
  templateUrl: './checkout-confirm.component.html',
  styleUrls: ['./checkout-confirm.component.css']
})
export class CheckoutConfirmComponent implements OnInit {

  checked: boolean = false;

  constructor(private service: VisitorService, public dialogRef: MatDialogRef<CheckoutConfirmComponent>) { }

  ngOnInit() {
  }

  checkout() {
    this.checked = true; 
    let visitor = { id: this.service.user.id, checkout: 1 };
    this.service.updateUser(visitor)
          .subscribe(res => { 
            if(res['success']) {
              this.dialogRef.close(true);
            }
          })
  }

}
