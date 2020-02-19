import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Student} from '../../../student/components/student';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['./student-attendance.component.scss']
})
export class StudentAttendanceComponent implements OnInit {
  class: any;

  displayedColumns = ['select','full name', 'class', 'age', 'gender'];
  dataSource = new MatTableDataSource<Student>(STUDENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  public selection = new SelectionModel<Student>(true, []);
 

  classes: String[] = [
    'Class 1','Class 2','Class 3','Class 4','Class 5', 'Class 6','Form 1', 'Form 2','Form 3'
  ]
  constructor(private _snackBar: MatSnackBar) { }

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
    let data = this.selection.selected;
    this._snackBar.open( ` ${this.class} attendance taken succesfully`, "", {
      duration: 3000,
    });;

   // return this.dataSource.data.forEach(row => this.selection.select(row));
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