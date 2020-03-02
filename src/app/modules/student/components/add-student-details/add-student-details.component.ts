import { Component, OnInit } from '@angular/core';
import { FormArray , FormBuilder, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
//import 'rxjs/add/operator/filter';
import { switchMap } from 'rxjs/operators';
import {StudentService} from '../../service/student.service';



@Component({
  selector: 'app-add-student-details',
  templateUrl: './add-student-details.component.html',
  styleUrls: ['./add-student-details.component.scss']
})
export class AddStudentDetailsComponent implements OnInit {

  studentInfoForm: any;
  studentId: any;
  studentData: any;
  



  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private route: ActivatedRoute,
    private router: Router,private _studentService: StudentService) {
   }

  ngOnInit() {
    //let id = this.route.snapshot.paramMap.get('id');
    this.studentData = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this._studentService.getStudent(parseInt(params.get('id'))))
    );

    console.log(this.studentData)

   

    this.studentInfoForm = this.fb.group({
      primaryCarePhysician: ['',Validators.pattern('[a-zA-Z]*')],
      pcpNumber: ['',Validators.pattern('[0-9]*$')],
      insuranceNumber: ['',Validators.pattern('[0-9]*$')],
      preferredMedicalFacility: ['',Validators.pattern('[a-zA-Z]*')],
      policyHolderName: ['',Validators.pattern('[a-zA-Z]*')],
      insuranceName: ['',Validators.pattern('[a-zA-Z]*')],
      policyNumber: ['',Validators.pattern('[0-9]*$')],
      dates: this.fb.array([
        this.fb.control('')
      ]),
      weights: this.fb.array([
        this.fb.control('',[Validators.required,Validators.pattern('[0-9]*$')])
      ]),
      heights: this.fb.array([
        this.fb.control('',[Validators.required,Validators.pattern('[0-9]*$')])
      ]),
      remarks: this.fb.array([
        this.fb.control('',[Validators.required,Validators.pattern('[a-zA-Z]*')])
      ]),
      schoolNames: this.fb.array([
        this.fb.control('',[Validators.required,Validators.pattern('[a-zA-Z]*')])
      ]),
      admissionDates: this.fb.array([
        this.fb.control('',[Validators.required])
      ]),
      lastAdmissionDates: this.fb.array([
        this.fb.control('',[Validators.required])
      ]),
      traits: this.fb.array([
        this.fb.control('')
      ]),
      classes: this.fb.array([
        this.fb.control('')
      ]),
      scores: this.fb.array([
        this.fb.control('')
      ]),
      personalityRemarks: this.fb.array([
        this.fb.control('')
      ]),
      handicapParts: this.fb.array([
        this.fb.control('')
      ]),
      handicapDescriptions: this.fb.array([
        this.fb.control('')
      ]),
      specialTalentDates: this.fb.array([
        this.fb.control('')
      ]),
      specialTalentParticulars: this.fb.array([
        this.fb.control('')
      ]),
      awardDates: this.fb.array([
        this.fb.control('')
      ]),
      awardNames: this.fb.array([
        this.fb.control('')
      ]),
      awardRemarks: this.fb.array([
        this.fb.control('')
      ]),

      


    });
  
  }

  get dates() {
    return this.studentInfoForm.get('dates') as FormArray;
  }

  addDate() {
    this.dates.push(this.fb.control(''));
  }


  get admissionDates() {
    return this.studentInfoForm.get('admissionDates') as FormArray;
  }

  addAdmissionDate() {
    this.admissionDates.push(this.fb.control(''));
  }

  get schoolNames() {
    return this.studentInfoForm.get('schoolNames') as FormArray;
  }

  addSchoolName() {
    this.schoolNames.push(this.fb.control(''));
  }


  get lastAdmissionDates() {
    return this.studentInfoForm.get('lastAdmissionDates') as FormArray;
  }

  addLastAdmissionDate() {
    this.lastAdmissionDates.push(this.fb.control(''));
  }

  get weights() {
    return this.studentInfoForm.get('weights') as FormArray;
  }

  addWeight() {
    this.weights.push(this.fb.control(''));
  }

  get heights() {
    return this.studentInfoForm.get('heights') as FormArray;
  }

  addHeight() {
    this.heights.push(this.fb.control(''));
  }

  get remarks() {
    return this.studentInfoForm.get('remarks') as FormArray;
  }

  addRemark() {
    this.remarks.push(this.fb.control(''));
  }

  addPhysique(){
    this.addDate();
    this.addHeight();
    this.addWeight();
    this.addRemark();
  }

  addSchool(){
    this.addLastAdmissionDate();
    this.addSchoolName();
    this.addAdmissionDate();
  }

  get traits() {
    return this.studentInfoForm.get('traits') as FormArray;
  }

  addTrait() {
    this.traits.push(this.fb.control(''));
  }

  get classes() {
    return this.studentInfoForm.get('classes') as FormArray;
  }

  addClass() {
    this.classes.push(this.fb.control(''));
  }

  get scores() {
    return this.studentInfoForm.get('scores') as FormArray;
  }

  addScore() {
    this.scores.push(this.fb.control(''));
  }

  get personalityRemarks() {
    return this.studentInfoForm.get('personalityRemarks') as FormArray;
  }

  addPersonalityRemark() {
    this.personalityRemarks.push(this.fb.control(''));
  }

  addPersonality(){
    this.addTrait();
    this.addScore();
    this.addPersonalityRemark();
    this.addClass();
  }


  get handicapParts() {
    return this.studentInfoForm.get('handicapParts') as FormArray;
  }

  addHandicapPart() {
    this.handicapParts.push(this.fb.control(''));
  }


  get handicapDescriptions() {
    return this.studentInfoForm.get('handicapDescriptions') as FormArray;
  }

  addHandicapDescription() {
    this.handicapDescriptions.push(this.fb.control(''));
  }

  addHandicap(){
    this.addHandicapPart();
    this.addHandicapDescription();
  }


  
  get specialTalentDates() {
    return this.studentInfoForm.get('specialTalentDates') as FormArray;
  }

  addSpecialTalentDate() {
    this.specialTalentDates.push(this.fb.control(''));
  }


  get specialTalentParticulars() {
    return this.studentInfoForm.get('specialTalentParticulars') as FormArray;
  }

  addSpecialTalentParticulars() {
    this.specialTalentParticulars.push(this.fb.control(''));
  }


  addSpecialTalent(){
    this.addSpecialTalentDate();
    this.addSpecialTalentParticulars();
  }


  get awardDates() {
    return this.studentInfoForm.get('awardDates') as FormArray;
  }

  addAwardDate() {
    this.awardDates.push(this.fb.control(''));
  }


  get awardNames() {
    return this.studentInfoForm.get('awardNames') as FormArray;
  }

  addAwardName() {
    this.awardNames.push(this.fb.control(''));
  }

  get awardRemarks() {
    return this.studentInfoForm.get('awardRemarks') as FormArray;
  }

  addAwardRemark() {
    this.awardRemarks.push(this.fb.control(''));
  }


  addAward(){
    this.addAwardDate();
    this.addAwardName();
    this.addAwardRemark();
  }



  saveDetails(){
    this._snackBar.open("Student Details Saved", "", {
      duration: 3000,
    });
  }







}
