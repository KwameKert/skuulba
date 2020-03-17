import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Student} from '../../../student/components/student';
import {FinanceService} from '../../service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogContentComponent } from '../../components/dialog-content/dialog-content.component';
import { MatDialogConfig} from "@angular/material";
import {StudentService} from '../../../student/service/student.service';

import {MatSnackBar} from '@angular/material/snack-bar';



declare var $: any;
@Component({
  selector: 'app-daily-fees',
  templateUrl: './daily-fees.component.html',
  styleUrls: ['./daily-fees.component.scss']
})
export class DailyFeesComponent implements OnInit {
  loading: boolean = false;
  showTable : boolean = false;
  param: any ;
  value: any;
  isClass: boolean = true;
  displayedColumns = ['full name', 'class', 'gender','action'];
  dataSource : any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  classes: String[] = [
    'Class 1','Class 2','Class 3','Class 4','Class 5', 'Class 6','Form 1', 'Form 2','Form 3'
  ]
  constructor(private dialog: MatDialog,  private _snackBar: MatSnackBar, private _studentService: StudentService, private _financeService: FinanceService) {

   }


   openDialog(student) {


    const dialogRef = this.dialog.open(DialogContentComponent,  {
      width: '550px',
      data: student,
    });

    //console.log(student);

    dialogRef.afterClosed().subscribe(result => {
      if(result.status){
        this._financeService.payDailyFees(result).subscribe(data=>{
         
            this._snackBar.open("Payment saved", "", {
              duration: 3000,
            });
          
        }, error=>{
          console.warn(error)
        })
      }
      
    });
}
  ngOnInit() {
  this.loading = true;
   this._studentService.listStudents().subscribe(data=>{

    let response : any= data
    if(response.data){
    
      this.loading = false;
      this.dataSource = new MatTableDataSource(response.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.showTable = true;
      console.log(this.dataSource)
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






