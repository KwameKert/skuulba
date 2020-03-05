import { Component, OnInit } from '@angular/core';
import { FormArray , FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {StudentService} from '../../service/student.service';


@Component({
  selector: 'app-edit-student-details',
  templateUrl: './edit-student-details.component.html',
  styleUrls: ['./edit-student-details.component.scss']
})
export class EditStudentDetailsComponent implements OnInit {

  physicalsaveShow: boolean= false;
  awardsaveShow: boolean= false;
  talentSaveShow: boolean= false;
  personalitySaveShow: boolean= false;
  educationsaveShow: boolean= false;
  handicapSaveShow: boolean= false;
  studentInfoForm: any;
  studentId: any;
  responseData: any;
  student:any;
  studentEducation: any;
  studentHandicap: any;
  studentAward: any;
  studentTalent: any;
  studentHealth: any;
  studentPersonality; any;
  studentPhysicalForm: any;
  studentEducationForm: any;
  studentPersonalityForm: any;
  studentHandicapForm: any;
  studentTalentForm: any;
  studentAwardForm: any;
  studentHealthForm: any;



  constructor(private fb: FormBuilder, private router: Router, private _snackBar: MatSnackBar, private route: ActivatedRoute, private _studentService: StudentService) { }

  ngOnInit() {

    this.studentId = this.route.snapshot.paramMap.get('id');



    
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
      id: '',
      studentId: this.studentId,
      primaryCarePhysician: [''],
      pcpNumber: ['',Validators.pattern('[0-9]*$')],
      insuranceNumber: ['',[Validators.pattern('[0-9]*$')]],
      preferredMedicalFacility: [''],
      policyHolderName: [''],
      insuranceName: [''],
      policyNumber: ['',Validators.pattern('[0-9]*$')],
    })
 

    this._studentService.getStudentDetails(this.studentId).subscribe( data=>{

      this.responseData = data;
      this.student = this.responseData.data.student;
      this.studentEducation = this.responseData.data.studentEducation;
      this.studentPersonality = this.responseData.data.studentPersonalities;
      this.studentHealth = this.responseData.data.studentHealth;
      this.studentHandicap = this.responseData.data.studentHandicap;
      this.studentTalent = this.responseData.data.studentTalent;
      this.studentAward = this.responseData.data.studentAward;

      console.log(this.studentPersonality);
      
      if(this.responseData.data.studentPhysical){
        for(let physical of this.responseData.data.studentPhysical){
          this.physicals.push( this.fb.group({
            id: physical.id,
            studentId: this.studentId,
            date: physical.date,
            weight: physical.weight,
            height: physical.height,
            remark: physical.remark,
          }));
        }
      }


      if(this.responseData.data.studentEducation){
     

      for(let education of this.studentEducation){
        this.educations.push( this.fb.group({
          id: education.id,
          studentId: this.studentId,
          schoolName:  education.schoolName,
          admissionDate: education.admissionDate,
          lastAdmissionDate: education.lastAdmissionDate,

        }));
      }
      }


      if(this.responseData.data.studentPersonalities){
      for(let personality of this.responseData.data.studentPersonalities){
        console.log(personality)
        this.personalities.push( this.fb.group({
          id: personality.id,
          studentId: this.studentId,
          trait:  personality.trait,
          studentClass: personality.studentClass,
          score: personality.score,
          remark:  personality.remark
        }));
      }
    }


    if(this.studentHealth){
      this.studentHealthForm.patchValue({
        id: this.studentHealth.id,
        studentId: this.studentId,
        primaryCarePhysician: this.studentHealth.primaryCarePhysician,
        pcpNumber: this.studentHealth.pcpNumber,
        insuranceNumber: this.studentHealth.insuranceNumber,
        preferredMedicalFacility: this.studentHealth.preferredMedicalFacility,
        policyHolderName: this.studentHealth.policyHolderName,
        insuranceName: this.studentHealth.insuranceName,
        policyNumber:this.studentHealth.policyNumber,

      })
    }


  //  console.log(this.studentHandicap);
    

    if(this.studentHandicap){
      for(let handicap of this.studentHandicap){
        this.handicaps.push( this.fb.group({
        id: handicap.id,
        studentId: this.studentId,
        handicapPart:  handicap.handicapPart,
        handicapDescription: handicap.handicapDescription
      }));
    }
  }


  if(this.studentTalent){
    for(let talent of this.studentTalent){
      this.talents.push( this.fb.group({
      id: talent.id,
      date:  talent.date,
      particulars: talent.particulars
    }));
  }
}


if(this.studentAward){
  for(let award of this.studentAward){
    this.awards.push( this.fb.group({
    id: award.id,
    date:  award.date,
    awardName: award.awardName,
    remark: award.remark
  }));
}
}
    

    }, error=>{

    })
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
  if(this.physicals.value[i].id){
    this._studentService.deleteStudentPhysical(this.physicals.value[i].id).subscribe(data=>{

        this.responseData = data;
      if(this.responseData.status == 200){
        this._snackBar.open(  `Student Physical deleted `, "", {
          duration: 2000,
        });
        this.physicals.removeAt(i);
      }else{
        this._snackBar.open(  `Oops an error occured `, "", {
          duration: 2000,
        });
      }
    
    }, error=>{
      this._snackBar.open(  `Oops an error occured `, "", {
        duration: 2000,
      });
    })
  }else{
    this.physicals.removeAt(i);
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
  if(this.educations.value[i].id){
    this._studentService.deleteStudentEducation(this.educations.value[i].id).subscribe(data=>{

        this.responseData = data;
      if(this.responseData.status == 200){
        this._snackBar.open(  `Student Education deleted `, "", {
          duration: 2000,
        });
        this.educations.removeAt(i);
      }else{
        this._snackBar.open(  `Oops an error occured `, "", {
          duration: 2000,
        });
      }
    
    }, error=>{
      this._snackBar.open(  `Oops an error occured `, "", {
        duration: 2000,
      });
    })
  }else{
    this.educations.removeAt(i);
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
  if(this.personalities.value[i].id){
    this._studentService.deleteStudentPersonality(this.personalities.value[i].id).subscribe(data=>{

        this.responseData = data;
      if(this.responseData.status == 200){
        this._snackBar.open(  `Student Education deleted `, "", {
          duration: 2000,
        });
        this.personalities.removeAt(i);
      }else{
        this._snackBar.open(  `Oops an error occured `, "", {
          duration: 2000,
        });
      }
    
    }, error=>{
      this._snackBar.open(  `Oops an error occured `, "", {
        duration: 2000,
      });
    })
  }else{
    this.personalities.removeAt(i);
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
    id: '',
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
  if(this.handicaps.value[i].id){
    this._studentService.deleteStudentHandicap(this.handicaps.value[i].id).subscribe(data=>{

        this.responseData = data;
      if(this.responseData.status == 200){
        this._snackBar.open(  `Student Handicap deleted `, "", {
          duration: 2000,
        });
        this.handicaps.removeAt(i);
      }else{
        this._snackBar.open(  `Oops an error occured `, "", {
          duration: 2000,
        });
      }
    
    }, error=>{
      this._snackBar.open(  `Oops an error occured `, "", {
        duration: 2000,
      });
    })
  }else{
    this.handicaps.removeAt(i);
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
    id: '',
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
  if(this.talents.value[i].id){
    this._studentService.deleteStudentTalent(this.talents.value[i].id).subscribe(data=>{

        this.responseData = data;
      if(this.responseData.status == 200){
        this._snackBar.open(  `Student Talent deleted `, "", {
          duration: 2000,
        });
        this.talents.removeAt(i);
      }else{
        this._snackBar.open(  `Oops an error occured `, "", {
          duration: 2000,
        });
      }
    
    }, error=>{
      this._snackBar.open(  `Oops an error occured `, "", {
        duration: 2000,
      });
    })
  }else{
    this.talents.removeAt(i);
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
  if(this.awards.value[i].id){
    this._studentService.deleteStudentAward(this.awards.value[i].id).subscribe(data=>{

        this.responseData = data;
      if(this.responseData.status == 200){
        this._snackBar.open(  `Student Award deleted `, "", {
          duration: 2000,
        });
        this.talents.removeAt(i);
      }else{
        this._snackBar.open(  `Oops an error occured `, "", {
          duration: 2000,
        });
      }
    
    }, error=>{
      this._snackBar.open(  `Oops an error occured `, "", {
        duration: 2000,
      });
    })
  }else{
    this.awards.removeAt(i);
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
  editStudentInfo(){
    this.router.navigate([`student/editStudentInfo/${this.studentId}`]);
  }





}
