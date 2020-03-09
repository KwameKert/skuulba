import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {FinanceService} from '../../service.service';

import {StudentService} from '../../../student/service/student.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-list-daily-fees',
  templateUrl: './list-daily-fees.component.html',
  styleUrls: ['./list-daily-fees.component.scss']
})
export class ListDailyFeesComponent implements OnInit {
  showTable : boolean = false;
  param: any ;
  value: any;
  isClass: boolean = true;
  displayedColumns = ['full name','amount','date_paid','class', 'gender'];
  dataSource : any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  classes: String[] = [
    'Class 1','Class 2','Class 3','Class 4','Class 5', 'Class 6','Form 1', 'Form 2','Form 3'
  ]
  constructor( private _snackBar: MatSnackBar,private _financeService: FinanceService, private _studentService: StudentService) {

  }
  ngOnInit() {

    this._financeService.listDailyFees().subscribe(data=>{
 
     let response : any= data
     this.dataSource = new MatTableDataSource(response.data);
     
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
     if(response.data){
      this.showTable = true;
     }else{
       this.showTable = false;
     }
    
 
    }, error=>{
 
    })
 
 
   }
 
 
   applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
 
     if (this.dataSource.paginator) {
       this.dataSource.paginator.firstPage();
     }
   }
 
   changeSearchField({value}){
     if(value  != 1 ){
       this.isClass = false;
     }else{
       this.isClass = true;
     }
 
   }
 
 
   
 
 
 
   searchStudents(){
     let data = {
       param: this.param,
       value: this.value
     }
     this._financeService.searchFinanceByParam(data).subscribe(data=>{
       
     let response : any= data
     if(response.data){
       this.dataSource = new MatTableDataSource(response.data);
     
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
       this.showTable = true;
     }else{
       this.showTable = false;
     }
 
    
     }, error=>{
 
       console.warn(error)
 
     })
    // console.log(this.param,this.value)
   }



}
