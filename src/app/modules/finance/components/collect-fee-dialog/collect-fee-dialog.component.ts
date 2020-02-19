import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CollectSchoolFeesComponent } from '../collect-school-fees/collect-school-fees.component';


@Component({
  selector: 'app-collect-fee-dialog',
  templateUrl: './collect-fee-dialog.component.html',
  styleUrls: ['./collect-fee-dialog.component.scss']
})
export class CollectFeeDialogComponent implements OnInit {

  amount: number =0;
  result: any;
  constructor(public dialogRef: MatDialogRef<CollectSchoolFeesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onCancel(): void{
    this.dialogRef.close();
  }

 

  onSuccess(){
    return this.result = {
      saved: true,
      name: this.data.surname + ' ' + this.data.otherNames,
      message: 'Payment Successful',
      amount: this.amount
    }
  }

}
