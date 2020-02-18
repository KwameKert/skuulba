import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms';
import {Finance} from '../../finance';



@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.scss']
})
export class GenerateBillComponent implements OnInit {

     invoiceID: any;
  //items: FormArray;
  invoiceForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.invoiceForm = this.fb.group({
      invoiceID: this.invoiceID,
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
      amount: ''
    })
  }
 
  addItem() {
    console.log("Adding item",this.newItem());
    console.log("Items", this.items)  
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




  




}
