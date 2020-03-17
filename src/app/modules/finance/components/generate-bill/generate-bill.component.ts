import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms';
import {Finance} from '../../finance';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.scss']
})
export class GenerateBillComponent implements OnInit {

     invoiceID: any;
  //items: FormArray;
  invoiceForm: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit() {

    this.invoiceForm = this.fb.group({
      studentClass: '',
      notes: '',
      terms: '',
      date: '',
      dateDue: '',
      amount: '',
      code: new FormControl({value: this.invoiceID, disabled: true}),
      items: this.fb.array([]) ,
    });
  }

  get items() : FormArray {
    return this.invoiceForm.get("items") as FormArray
  }
 
  newItem(): FormGroup {
    return this.fb.group({
      name: '',
      quantity: '',
      rate: '',
      amount:  new FormControl({value: '', disabled: true}),
    })
  }
 
  addItem() { 
    this.items.push(this.newItem());
  }
 
  removeItem(i:number) {
    this.items.removeAt(i);
  }
 
  onSubmit() {
    console.log(this.invoiceForm.value);
  }
 

 

  generateID(){
    this.invoiceID = `${new Date().getFullYear()}${Math.floor(Math.random() * (3000 - 1000) + 4)}`;
  }



  downloadBill(){
    this._snackBar.open(  `Bill downloaded successfully`, "", {
      duration: 3000,
    });
  }


  sendBill(){

    console.log(this.invoiceForm.value);
    this._snackBar.open(  `Bill sent successfully`, "", {
      duration: 3000,
    });

  }
  




}
