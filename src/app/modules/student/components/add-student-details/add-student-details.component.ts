import { Component, OnInit } from '@angular/core';
import { FormArray , FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-student-details',
  templateUrl: './add-student-details.component.html',
  styleUrls: ['./add-student-details.component.scss']
})
export class AddStudentDetailsComponent implements OnInit {

  studentInfoForm: any;
  



  constructor(private fb: FormBuilder) { }

  ngOnInit() {

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
      personality_remarks: this.fb.array([
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

  get personality_remarks() {
    return this.studentInfoForm.get('personality_remarks') as FormArray;
  }

  addPersonalityRemark() {
    this.personality_remarks.push(this.fb.control(''));
  }




  addPersonality(){
    this.addTrait();
    this.addScore();
    this.addPersonalityRemark();
    this.addClass();
  }

}
