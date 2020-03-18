import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms';
import {Finance} from '../../finance';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {StudentService} from '../../../student/service/student.service';


@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.scss']
})
export class GenerateBillComponent implements OnInit {

  displayedColumns = ['full name'];
  totalAmount: any ;
  amount: any = {};
     invoiceID: any;
     dataSource : any;
  invoiceForm: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private _studentService: StudentService) { }

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
      amount: new FormControl({value: '', disabled: true}),
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
 

 

  generateID(event: any){
    let data = {
      param : 1,
      class : event.value
    }
    this.invoiceID = `${new Date().getFullYear()}${Math.floor(Math.random() * (3000 - 1000) + 4)}`;
    this._studentService.getClassStudents(data).subscribe(data=>{
      console.log(data);
    },error=>{
      console.warn("Error");
    })
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

  onKey(event: any, i){

    let quantity = this.invoiceForm.value.items[i].quantity;
    let rate = this.invoiceForm.value.items[i].rate;
    let amount =  quantity * rate;
    this.invoiceForm.value.items[i].amount = amount;
   this.amount[i] = amount;

    console.log(this.amount);

    // if(this.invoiceForm.value.items.length != 0){
    //   let arr = this.invoiceForm.value.items;
    //   let holder = [];
    //   for(let item of arr){
    //    this.totalAmount =+ parseInt(item.amount)
    //   }
    //   console.log(arr)
    // }




  }
  

  // get total(){
  //   if(this.invoiceForm.value.items.length != 0){
  //     let arr = this.invoiceForm.value.items;
  //     let holder = [];
  
  //     let sum = 0;
  //     for(let item of arr){
  //       console.log(typeof(item.amount))
  //      sum =+ item.amount
  //     }

  //     console.log(sum)
  //   }
  //   return this.invoiceForm.value.items
  //   // if(this.invoiceForm.value.items){
  //   //   let arr = this.invoiceForm.value.items;
  //   //   let holder ;
  
  //   //   for(let item of arr){
  //   //     holder.push(item.amount);
  //   //   }
  
  //   //   console.log(holder)
  //   //   return holder;
  //   // }
    
  // }



}
