import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import {StudentService} from '../../../student/service/student.service';
import {FinanceService} from '../../service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {MatSnackBar} from '@angular/material/snack-bar';
import { CollectFeeDialogComponent } from '../collect-fee-dialog/collect-fee-dialog.component';

@Component({
  selector: 'app-collect-school-fees',
  templateUrl: './collect-school-fees.component.html',
  styleUrls: ['./collect-school-fees.component.scss']
})
export class CollectSchoolFeesComponent implements OnInit {
  showTable : boolean = false;
  param: any ;
  value: any;
  isClass: boolean = true;
  displayedColumns = ['full name', 'class', 'age', 'gender','action'];
  dataSource : any ;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  classes: String[] = [
    'Class 1','Class 2','Class 3','Class 4','Class 5', 'Class 6','Form 1', 'Form 2','Form 3'
  ]
  constructor(private dialog: MatDialog,  private _snackBar: MatSnackBar, private _studentService: StudentService, private _financeService: FinanceService) {

   }


   openDialog(student) {

    const dialogRef = this.dialog.open(CollectFeeDialogComponent,  {
      width: '550px',
      data: student
    });


    dialogRef.afterClosed().subscribe(result => {
      if(result.saved){
        this._financeService.paySchoolFees(result).subscribe(data=>{
          console.log(data)
        }, error=>{
          console.warn(error)
        })
        this._snackBar.open(  `Payment for ${result.name} made `, "", {
          duration: 3000,
        });
      }else{
        this._snackBar.open("Payment Failed", "", {
          duration: 3000,
        });
      }
     

      console.log(result);
      
    });
}
  ngOnInit() {
    this._studentService.listStudents().subscribe(data=>{

      let response : any= data
      this.dataSource = new MatTableDataSource(response.data);
      
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.showTable = true;
  
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
    if(value  != 'class' ){
      this.isClass = false;
    }else{
      this.isClass = true;
    }

  }


  makePayment(student){
   this.openDialog(student);
  }

  searchStudents(){
    let data = {
      param: this.param,
      value: this.value
    }
    this._studentService.searchStudentByParam(data).subscribe(data=>{
      
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

