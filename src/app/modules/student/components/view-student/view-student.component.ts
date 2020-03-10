import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Student} from '../student';
import {Router, ActivatedRoute} from '@angular/router';
import {StudentService} from '../../service/student.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {

  isLoaded: boolean = false;
  studentId: any;
  studentData: any;
  responseData: any;
  studentMotherData: any;
  studentFatherData: any;
  studentHealth: any;
  physicalSource : any;
  physicalColumns = ['date', 'weight', 'height', 'remark'];
 

  personalityColumns = ['trait', 'class', 'score', 'remark'];
  personalitySource : any = null;

  educationColumns = ['school', 'admissionDate', 'lastAdmissionDate'];
  educationSource : any;

  talentColumns = ['date', 'particulars'];
  talentSource : any;

  awardColumns = ['date', 'award', 'remark'];
  awardSource : any;

  handicapColumns = ['part', 'description',];
  handicapSource : any;

  constructor(private route: ActivatedRoute, private router: Router, private _studentService: StudentService){}

  ngOnInit() {
    this.studentId = this.route.snapshot.paramMap.get('id');
    this.getStudentDetails();
  }

  getStudentDetails(){
    this._studentService.getStudentDetails(this.studentId).subscribe(data=>{
        this.responseData = data;
        this.studentData = this.responseData.data.student;
        if(this.studentData){
          this.isLoaded = true;
          console.log(this.isLoaded)
        }
        this.studentHealth = this.responseData.data.studentHealth;
        if(this.responseData.data.studentParent != null){

          this.studentMotherData = this.responseData.data.studentParent[0];
          this.studentFatherData = this.responseData.data.studentParent[1];
        }
        if (this.responseData.data.studentPhysical != null){
          this.physicalSource = new MatTableDataSource(this.responseData.data.studentPhysical)
        }
        if (this.responseData.data.studentPersonalities != null){
          this.personalitySource = new MatTableDataSource(this.responseData.data.studentPersonalities)
        }
        if (this.responseData.data.studentEducation != null){
          this.educationSource = new MatTableDataSource(this.responseData.data.studentEducation)
        }
        if (this.responseData.data.studentPhysical != null){
          this.physicalSource = new MatTableDataSource(this.responseData.data.studentPhysical)
        }

        if (this.responseData.data.studentAward != null){
          this.awardSource = new MatTableDataSource(this.responseData.data.studentAward)
        }
        if (this.responseData.data.studentHandicap != null){
          this.handicapSource = new MatTableDataSource(this.responseData.data.studentHandicap)
        }
        if (this.responseData.data.studentTalent != null){
          this.talentSource = new MatTableDataSource(this.responseData.data.studentTalent)
        }


        console.log(this.responseData.data);
    }, error => {
      console.warn("An error found");
    })
  }






 

  editStudent(){
    this.router.navigate([`student/editStudentInfo/${this.studentId}`])
  }

}


