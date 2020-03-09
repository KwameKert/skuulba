import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  type: any;
  amount : any;

  
  ngOnInit() {
  }

  response(){
    let res = {
      studentId: this.data.id,
      type: this.type,
      amount: this.amount
    }
    return res;
  }

}
