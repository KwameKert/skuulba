import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms';
import {Finance} from '../../finance';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { Student} from '../../../student/components/student';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {StudentService} from '../../../student/service/student.service';


@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.scss']
})


export class GenerateBillComponent implements OnInit {

  displayedColumns =  ['select','full name',];

  totalAmount: any ;
  total : any;
  amount: any = {};
  invoiceID: any;
  dataSource : any;
  invoiceForm: FormGroup;
  public selection = new SelectionModel<Student>(true, []);

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private _studentService: StudentService) { }

  ngOnInit() {

    this.invoiceForm = this.fb.group({
      studentClass: '',
      notes: '',
      terms: '',
      date: '',
      dateDue: '',
      amount:  new FormControl({value: this.totalAmount, disabled: true}),
      students: '',
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
      amount: new FormControl({value:'', disabled: true}),
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
      value : event.value
    }
    this.invoiceID = `${new Date().getFullYear()}${Math.floor(Math.random() * (3000 - 1000) + 4)}`;
    this._studentService.getClassStudents(data).subscribe(data=>{
      let response: any  = data;
     this.dataSource = new MatTableDataSource(response.data)
    },error=>{
      console.warn("Error");
    })
  }



  downloadBill(){
    this._snackBar.open(  `Bill downloaded successfully`, "", {
      duration: 3000,
    });

    this.invoiceForm.patchValue({
      students: this.selection.selected
    })

    //console.log(this.selection.selected)
    console.log(this.invoiceForm.value)
  }


  sendBill(){

    console.log(this.invoiceForm.value);
    this._snackBar.open(  `Bill sent successfully`, "", {
      duration: 3000,
    });

  }


    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      if(this.dataSource){
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
      }
     
    }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
    }
  
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: Student): string {
      if (!row) {
        return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.studentId + 1}`;
    }


  sumValues = obj => Object.values(obj).reduce((a: any, b: any) => a + b, 0)

  onKey(event: any, i){

    let quantity = this.invoiceForm.value.items[i].quantity;
    let rate = this.invoiceForm.value.items[i].rate;
    let amount =  quantity * rate;
    this.invoiceForm.value.items[i].amount = amount;
    this.amount[i] = amount;

    this.totalAmount = this.sumValues(this.amount);

    this.total = "  Total(₵) : " +this.totalAmount;



  }
  




}
