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




  student: Student = {
    surname: 'Aboagye',
    otherNames: 'Kofi Bilson',
    age: 17,
    livingWith: 'Both',
    dob: new Date(),
    class: 4,
    gender: 'Male',
    motherTongue: 'Twi',
    numOfSiblings: 2,
    languages: ['twi','ewe','fante']
  };


  studentMother: any = {
    fullName: 'Theresa Aboagye',
    address: 'Dansoman',
    phone: '0234323423',
    email: 'theresa@gmail.com',
    educationStatus: 'Degree',
    religion: 'Christian',
    numSpouse: 1
  }


  studentFather: any = {
    fullName: 'Theresa Aboagye',
    address: 'Dansoman',
    phone: '0234323423',
    email: 'theresa@gmail.com',
    educationStatus: 'Degree',
    religion: 'Christian',
    numSpouse: 1
  }

  physicalDetails: any = [
    {date: new Date(),weight: 23, height: 12, remarks: 'Nice Growth'},
    {date: new Date(),weight: 23, height: 12, remarks: 'Nice Growth'},
    {date: new Date(),weight: 23, height: 12, remarks: 'Nice Growth'},
  ];

  // educationInfo: any = [
  //   [school:'Ransom Education Center',new Date(), new Date()],
  //   ['Ransom Education Center',new Date(), new Date()],
  //   ['Ransom Education Center',new Date(), new Date()],
  //   ['Ransom Education Center',new Date(), new Date()]
  // ];

  // personalityDetails: any = [
  //   ['Attentive Listener',4,12,'Good student'],
  //   ['Attentive Listener',4,12,'Good student'],
  //   ['Attentive Listener',4,12,'Good student'],
  //   ['Attentive Listener',4,12,'Good student'],
  //   ['Attentive Listener',4,12,'Good student'],
  // ];

  healthInfo: any = {
    primaryCarePhysician:'Dr Quartey',
    preferredMedicalFacility: 'Holy Trinity',
    insurance: 'National Health',
    insuranceNumber: 234234324,
    pcpNumber: 2342312,
    policyHolderName: 'Kwame',
    policyNumber: 12343
  };

  studentHandicap: any = [
    ['hand','Weak hand'],
    ['hand','Weak hand'],
  ]

  studentSpecialTalent: any = [
    [new Date(),'Fast Learner']
    [new Date(),'Fast Learner']
  ]


  studentAward: any = [
    [new Date(),'Best Student','Overall Best']
  ]
 

 

  editStudent(){
    this.router.navigate([`student/editStudentInfo/${this.studentId}`])
  }

}


