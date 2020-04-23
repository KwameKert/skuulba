import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {FormBuilder,Validators, FormControlName, FormControl} from '@angular/forms';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Student} from '../../../student/components/student';
import {MatSnackBar} from '@angular/material/snack-bar';
import {StudentService} from '../../service/student.service';

export interface PeriodicElement {
  name: string;
  class: string;
  gender: number;
}


@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.scss']
})
export class StudentAttendanceComponent implements OnInit {
  class: any;
  searchClassForm: any;
  student : any;
  tableShow: boolean = false;
  displayedColumns = ['select','full name', 'class',  'gender'];
  dataSource : any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  public selection = new SelectionModel<Student>(true, []);
 

  classes: String[] = [
    'Class 1','Class 2','Class 3','Class 4','Class 5', 'Class 6','Form 1', 'Form 2','Form 3'
  ]
  constructor(private _snackBar: MatSnackBar, private fb: FormBuilder, private _studentService: StudentService) { }

  ngOnInit() {

    // this._studentService.listStudents().subscribe(data=>{
    //   let res : any= data;

    //   if (res.data.length > 0){
    //     this.tableShow = true;
    //   }
     
     
    // })
  
    this.searchClassForm = this.fb.group({
      studentClass:  new FormControl('', Validators.required)
    })
    
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }






  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
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


  generateStudents(){
    let data = {
      students: this.selection.selected
    }

    this._studentService.takeAttendance(data).subscribe(data=>{

      console.log(data);

    },error=>{
      console.warn(error)
    })
    console.log(data)
    this._snackBar.open( ` ${this.class} attendance taken succesfully`, "", {
      duration: 3000,
    });;

    
   // return this.dataSource.data.forEach(row => this.selection.select(row));
  }



  searchClass(){
    let data = {
      value : this.class
    }
    this._studentService.getClassStudents(data).subscribe(data=>{
      let res : any= data;
      if(res.data){
        this.tableShow = true;
        this.dataSource =  new MatTableDataSource<Student>(res.data);
        this.dataSource =  new MatTableDataSource<Student>(res.data);
        this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      }else{
        this.tableShow = false;
      }
     
    })
  }
}




