import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormBuilder, FormControl, Validators} from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';
import {Student} from '../student';
import { Router, ActivatedRoute } from '@angular/router';
import {StudentService} from '../../service/student.service';
import {MatDialog} from '@angular/material/dialog';
import { DeleteStudentComponent } from '../delete-student/delete-student.component';



@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.scss']
})
export class SearchStudentComponent implements OnInit {
  loading: boolean = true;
  studentId: any;
  displayedColumns = ['full name', 'class', 'age', 'gender','action'];
  dataSource :any ;
  responseData: any ;
  students: any;
  searchStudentForm: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private router: Router, private _studentService: StudentService,private route: ActivatedRoute, private fb: FormBuilder,public dialog: MatDialog) { }


  deleteStudent(id: Number): void {
    const dialogRef = this.dialog.open(DeleteStudentComponent, {
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loading = true;
      if(result){
        this._studentService.deleteStudent(id).subscribe(data=>{
          let responseData: any = data;
          this.students =responseData.data;
          this.loading = false;
        }, error=>{
          console.warn(error)
        })
      }
    });
  }



  ngOnInit() {

    
    this.searchStudentForm = this.fb.group({
      param : new FormControl(''),
      value: new FormControl('', Validators.required)
    })
   

    this.getAllStudents();
   
 
  }

  getAllStudents(){
    this._studentService.listStudents().subscribe(data=>{
      this.responseData = data;
      this.dataSource  = new MatTableDataSource(this.responseData.data);
      //console.log();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
      if(this.responseData.data){
        this.students = this.responseData.data;
        this.loading = false;
      }
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

  editStudent(id: any){
    this.router.navigate([`student/editStudentInfo/${id}`]);
  }


  searchStudent(){
    this._studentService.searchStudent(this.searchStudentForm.value).subscribe(data=>{
      let response: any  =data; 
      this.dataSource  = new MatTableDataSource(response.data);
      // this.students = response.data;
      // console.log(this.students)
    })
    console.log(this.searchStudentForm.value)
  }
}



