import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Student} from '../student';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent implements OnInit {
  physicalColumns = ['date', 'weight', 'height', 'remark'];
  physicalSource = new MatTableDataSource(PHYSICAL_DATA);

  personalityColumns = ['trait', 'class', 'score', 'remark'];
  personalitySource = new MatTableDataSource(PERSONALITY_DATA);

  educationColumns = ['school', 'admissionDate', 'lastAdmissionDate'];
  educationSource = new MatTableDataSource(EDUCATION_DATA);

  talentColumns = ['date', 'particulars'];
  talentSource = new MatTableDataSource(TALENT_DATA);

  awardColumns = ['date', 'award', 'remark'];
  awardSource = new MatTableDataSource(AWARD_DATA);

  handicapColumns = ['part', 'description',];
  handicapSource = new MatTableDataSource(HANDICAP_DATA)


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
  constructor(private router: Router) { }

  ngOnInit() {
  }

  editStudent(){
    this.router.navigate(['student/editStudentInfo'])
  }

}

const PHYSICAL_DATA = [
  {date: new Date(2019, 0, 23),weight: 23, height: 12, remark: 'Nice Growth'},
  {date: new Date(2019, 0, 23),weight: 23, height: 12, remark: 'Nice Growth'},
  {date: new Date(2019, 0, 23),weight: 23, height: 12, remark: 'Nice Growth'},
]

const EDUCATION_DATA = [
  {lastAdmissionDate: new Date(),admissionDate: new Date(),school:'Ransom'},
  {lastAdmissionDate: new Date(),admissionDate: new Date(),school:'Ransom'},
  {lastAdmissionDate: new Date(),admissionDate: new Date(),school:'Ransom'},
]


const PERSONALITY_DATA = [
  {trait: 'brilliance',class: 2, score: 2, remark: 'Nice Growth'},
  {trait: 'brilliance',class: 2, score: 2, remark: 'Nice Growth'},
  {trait: 'brilliance',class: 2, score: 2, remark: 'Nice Growth'},
  {trait: 'brilliance',class: 2, score: 2, remark: 'Nice Growth'}
]

const HANDICAP_DATA = [
  {part: 'hand',description: 'weak hand'},
  {part: 'hand',description: 'weak hand'},
  {part: 'hand',description: 'weak hand'},
]

const TALENT_DATA = [
  {date: new Date(),particulars: 'Good listner'},
  {date: new Date(),particulars: 'Good listner'},
]

const AWARD_DATA = [
  {date: new Date(),award: 'Best Student', remark: 'Overall best student'},
  {date: new Date(),award: 'Best Student', remark: 'Overall best student'},
]


