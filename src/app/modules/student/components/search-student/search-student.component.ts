import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Student} from '../student';
import { Router, ActivatedRoute } from '@angular/router';
import {StudentService} from '../../service/student.service';


@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.scss']
})
export class SearchStudentComponent implements OnInit {
  studentId: any;
  displayedColumns = ['full name', 'class', 'age', 'gender','action'];
  dataSource :any ;
  responseData: any ;
  students: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private router: Router, private _studentService: StudentService,private route: ActivatedRoute) { }

  ngOnInit() {

   

    this.getAllStudents();
   
 
  }

  getAllStudents(){
    this._studentService.listStudents().subscribe(data=>{
      this.responseData = data;
      this.dataSource  = new MatTableDataSource(this.responseData.data);
      //console.log();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.students = this.responseData.data;
    }, error=>{
      console.log(error)
    })
  }




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewStudent(id: any){
    //console.log(id);
    this.router.navigate([`student/viewStudent/${id}`]);
  }

  editStudent(){
    this.router.navigate(['student/editStudentInfo']);
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