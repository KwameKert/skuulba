import { Component, OnInit } from '@angular/core';
import { FormArray , FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {StudentService} from '../../service/student.service';



@Component({
  selector: 'app-add-student-details',
  templateUrl: './add-student-details.component.html',
  styleUrls: ['./add-student-details.component.scss']
})
export class AddStudentDetailsComponent implements OnInit {

  physicalsaveShow: boolean= false;
  awardsaveShow: boolean= false;
  talentSaveShow: boolean= false;
  personalitySaveShow: boolean= false;
  educationsaveShow: boolean= false;
  handicapSaveShow: boolean= false;
  studentInfoForm: any;
  studentHealthForm: any;
  studentId: any;
  studentData: any ;
  responseData : any;
  studentPhysicalForm: any;
  studentEducationForm: any;
  studentPersonalityForm: any;
  studentHandicapForm: any;
  studentTalentForm: any;
  studentAwardForm: any;
  

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private route: ActivatedRoute,
    private router: Router,private _studentService: StudentService) {
   }

  ngOnInit() {
    
    this.studentId = this.route.snapshot.paramMap.get('id');
   
 
    this._studentService.getStudent(parseInt(this.studentId)).subscribe(data=>{
      this.responseData = data;
      this.studentData = this.responseData.data;

    }, error => {
      console.log(error)
    })


    this.studentPhysicalForm = this.fb.group({
      physicals: this.fb.array([
      ]) ,
    });


    this.studentEducationForm = this.fb.group({
      educations: this.fb.array([
      ]) ,
    });


    this.studentAwardForm = this.fb.group({
      awards: this.fb.array([
      ]) ,
    });

    this.studentPersonalityForm = this.fb.group({
      personalities: this.fb.array([
      ]) ,
    });


    this.studentHandicapForm = this.fb.group({
      handicaps: this.fb.array([
      ]) ,
    });


    this.studentTalentForm = this.fb.group({
      talents: this.fb.array([
      ]) ,
    });

    this.studentHealthForm = this.fb.group({
      studentId: this.studentId,
      primaryCarePhysician: [''],
      pcpNumber: ['',Validators.pattern('[0-9]*$')],
      insuranceNumber: ['',[Validators.pattern('[0-9]*$')]],
      preferredMedicalFacility: [''],
      policyHolderName: [''],
      insuranceName: [''],
      policyNumber: ['',Validators.pattern('[0-9]*$')],
    })
    

   

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

  //physical form 
  get physicals() : FormArray {
    return this.studentPhysicalForm.get("physicals") as FormArray
  }
 
  newPhysical(): FormGroup {
    return this.fb.group({
      studentId: this.studentId,
      date: '',
      weight: new FormControl('',[Validators.required,Validators.pattern('[0-9]*$')]),
      height: new FormControl('',[Validators.required,Validators.pattern('[0-9]*$')]),
      remark: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
    })
  }
 
  addPhysical() { 
    if(this.physicals.length != null){
      this.physicalsaveShow = true;
    }else{
      this.physicalsaveShow = false;
    }
    this.physicals.push(this.newPhysical());
  }
 
  removePhysical(i:number) {
    this.physicals.removeAt(i);
    if(this.physicals.length != null){
      this.physicalsaveShow = true;
    }else{
      this.physicalsaveShow = false;
    }
  }
 
  savePhysical() {

    this._studentService.saveStudentPhysical(this.studentPhysicalForm.value).subscribe(data=>{
      this.responseData = data;
      console.log(this.responseData.data)
      if(this.responseData.status == 200){
        this._snackBar.open(  `Student Physical Form saved successfully`, "", {
          duration: 3000,
        });
      }

  }, error=>{
    this._snackBar.open(  `Ooops an error occured`, "", {
      duration: 3000,
    });
  })
   
  }



  //education form 
  get educations() : FormArray {
    return this.studentEducationForm.get("educations") as FormArray
  }
 
  newEducation(): FormGroup {
    return this.fb.group({
      studentId: this.studentId,
      schoolName:  new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      admissionDate: '',
      lastAdmissionDate: '',
    })
  }
 
  addEducation() { 
    if(this.educations.length != null){
      this.educationsaveShow = true;
    }else{
      this.educationsaveShow = false;
    }
    this.educations.push(this.newEducation());
  }
 
  removeEducation(i:number) {
    this.educations.removeAt(i);
    if(this.educations.length != null){
      this.educationsaveShow = true;
    }else{
      this.educationsaveShow = false;
    }
  }
 
  saveEducation() {

    this._studentService.saveStudentEducation(this.studentEducationForm.value).subscribe(data=>{
      this.responseData = data;
      console.log(this.responseData.data)
      if(this.responseData.status == 200){
        this._snackBar.open(  `Student Education Form saved successfully`, "", {
          duration: 3000,
        });
      }

  }, error=>{
    this._snackBar.open(  `Ooops an error occured`, "", {
      duration: 3000,
    });
  })

  }


  //personality form 
  get personalities() : FormArray {
    return this.studentPersonalityForm.get("personalities") as FormArray
  }
 
  newPersonality(): FormGroup {
    return this.fb.group({
      studentId: this.studentId,
      trait:  new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      studentClass: new FormControl('',[Validators.required]),
      score: new FormControl('',[Validators.required,  Validators.pattern('[0-9]*$')]),
      remark:  new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')])
    })
  }
 
  addPersonality() { 
    if(this.personalities.length != null){
      this.personalitySaveShow = true;
    }else{
      this.personalitySaveShow = false;
    }
    this.personalities.push(this.newPersonality());
  }
 
  removePersonality(i:number) {
    this.personalities.removeAt(i);
    if(this.personalities.length != null){
      this.personalitySaveShow = true;
    }else{
      this.personalitySaveShow = false;
    }
  }
 
  savePersonality() {

    this._studentService.saveStudentPersonality(this.studentPersonalityForm.value).subscribe(data=>{
      this.responseData = data;
      if(this.responseData.status == 200){
        this._snackBar.open(  `Student Personality Form saved successfully`, "", {
          duration: 3000,
        });
      }

  }, error=>{
    this._snackBar.open(  `Ooops an error occured`, "", {
      duration: 3000,
    });
  })

  }


  saveHealth(){

    this._studentService.saveStudentHealth(this.studentHealthForm.value).subscribe(data=>{
      this.responseData = data;
      if(this.responseData.status == 200){
        this._snackBar.open(  `Student Health Form saved successfully`, "", {
          duration: 3000,
        });
      }

  }, error=>{
    this._snackBar.open(  `Ooops an error occured`, "", {
      duration: 3000,
    });
  })



  }


  //handicap form 
  get handicaps() : FormArray {
    return this.studentHandicapForm.get("handicaps") as FormArray
  }
 
  newHandicap(): FormGroup {
    return this.fb.group({
      studentId: this.studentId,
      handicapPart:  new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      handicapDescription: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')])
    })
  }
 
  addHandicap() { 
    if(this.handicaps.length != null){
      this.handicapSaveShow = true;
    }else{
      this.handicapSaveShow = false;
    }
    this.handicaps.push(this.newHandicap());
  }
 
  removeHandicap(i:number) {
    this.handicaps.removeAt(i);
    if(this.handicaps.length != null){
      this.handicapSaveShow = true;
    }else{
      this.handicapSaveShow = false;
    }
  }
 
  saveHandicap() {

    this._studentService.saveStudentHandicap(this.studentHandicapForm.value).subscribe(data=>{
      this.responseData = data;
      if(this.responseData.status == 200){
        this._snackBar.open(  `Student Handicap Form saved successfully`, "", {
          duration: 3000,
        });
      }

  }, error=>{
    this._snackBar.open(  `Ooops an error occured`, "", {
      duration: 3000,
    });
  })

  }


  //talents form 
  get talents() : FormArray {
    return this.studentTalentForm.get("talents") as FormArray
  }
 
  newTalent(): FormGroup {
    return this.fb.group({
      studentId: this.studentId,
      date:  '',
      particulars: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')])
    })
  }
 
  addTalent() { 
    if(this.talents.length != null){
      this.talentSaveShow = true;
    }else{
      this.talentSaveShow = false;
    }
    this.talents.push(this.newTalent());
  }
 
  removeTalent(i:number) {
    this.talents.removeAt(i);
    if(this.talents.length != null){
      this.talentSaveShow = true;
    }else{
      this.talentSaveShow = false;
    }
  }
 
  saveTalent() {

    this._studentService.saveStudentTalent(this.studentTalentForm.value).subscribe(data=>{
      this.responseData = data;
      if(this.responseData.status == 200){
        this._snackBar.open(  `Student Talent Form saved successfully`, "", {
          duration: 3000,
        });
      }

  }, error=>{
    this._snackBar.open(  `Ooops an error occured`, "", {
      duration: 3000,
    });
  })

  }


  //awards form 
  get awards() : FormArray {
    return this.studentAwardForm.get("awards") as FormArray
  }
 
  newAward(): FormGroup {
    return this.fb.group({
      studentId: this.studentId,
      date:  '',
      awardName:  ['',[Validators.required]],
      remark:  ['',[Validators.required]]
    })
  }
 
  addAward() { 
    if(this.awards.length != null){
      this.awardsaveShow = true;
    }else{
      this.awardsaveShow = false;
    }
    this.awards.push(this.newAward());
  }
 
  removeAward(i:number) {
    this.awards.removeAt(i);
    if(this.awards.length != null){
      this.awardsaveShow = true;
    }else{
      this.awardsaveShow = false;
    }
  }
 
  saveAward() {

    this._studentService.saveStudentAward(this.studentAwardForm.value).subscribe(data=>{
      this.responseData = data;
      if(this.responseData.status == 200){
        this._snackBar.open(  `Student Award Form saved successfully`, "", {
          duration: 3000,
        });
      }

  }, error=>{
    this._snackBar.open(  `Ooops an error occured`, "", {
      duration: 3000,
    });
  })

  }

















}
