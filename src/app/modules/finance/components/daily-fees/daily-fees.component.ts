import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Student} from '../../../student/components/student';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogContentComponent } from '../../components/dialog-content/dialog-content.component';
import { MatDialogConfig} from "@angular/material";

import {MatSnackBar} from '@angular/material/snack-bar';



declare var $: any;
@Component({
  selector: 'app-daily-fees',
  templateUrl: './daily-fees.component.html',
  styleUrls: ['./daily-fees.component.scss']
})
export class DailyFeesComponent implements OnInit {
  isClass: boolean = true;
  displayedColumns = ['full name', 'class', 'age', 'gender','action'];
  dataSource = new MatTableDataSource(STUDENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  classes: String[] = [
    'Class 1','Class 2','Class 3','Class 4','Class 5', 'Class 6','Form 1', 'Form 2','Form 3'
  ]
  constructor(private dialog: MatDialog,  private _snackBar: MatSnackBar) {

   }


   openDialog(student) {


    const dialogRef = this.dialog.open(DialogContentComponent,  {
      width: '550px',
      data: student,
    });

    console.log(student);

    dialogRef.afterClosed().subscribe(result => {
      this._snackBar.open("Payment saved", "", {
        duration: 3000,
      });
      
    });
}
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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

}


const STUDENT_DATA: Student[] = [
  {studentId: 1, surname: 'Johnson', otherNames: 'Kwame Micheal',age:14,class:4,gender:'M'},
  {studentId: 2, surname: 'Asante', otherNames: 'Fifi John',age:10,class:4,gender:'M'},
  {studentId: 3, surname: 'Dodoo', otherNames:  'John Daniel',age:17,class:6,gender:'M'},
  {studentId: 4, surname: 'Commey', otherNames: 'Kojo Philip',age:12,class:3,gender:'M'},
  {studentId: 5, surname: 'Hughes', otherNames: 'Yaw Samuel',age:11,class:1,gender:'M'},
  {studentId: 6, surname: 'Annan', otherNames: 'Kwabena Sean',age:12,class:2,gender:'M'},
  {studentId: 3, surname: 'Dodoo', otherNames:  'John Daniel',age:17,class:6,gender:'M'},
  {studentId: 4, surname: 'Commey', otherNames: 'Kojo Philip',age:12,class:3,gender:'M'},
  {studentId: 5, surname: 'Hughes', otherNames: 'Yaw Samuel',age:11,class:1,gender:'M'},
  {studentId: 6, surname: 'Annan', otherNames: 'Kwabena Sean',age:12,class:2,gender:'M'},
  
];



