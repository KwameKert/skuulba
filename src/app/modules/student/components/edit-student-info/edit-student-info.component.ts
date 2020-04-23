import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormControl, Validators, FormGroup  } from '@angular/forms';
import {StudentService} from '../../service/student.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-edit-student-info',
  templateUrl: './edit-student-info.component.html',
  styleUrls: ['./edit-student-info.component.scss']
})
export class EditStudentInfoComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  studentImg: any;

  studentId : any;
  studentForm:any;
  studentMotherForm:any;
  studentFatherForm:any;
  fileData: File = null;
  previewUrl:any = null;
  responseData: any ;
  isMotherDeceased: boolean = false;

  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  languageList: string[] = ['Twi', 'Ewe', 'Ga', 'Dagomba', 'Talensi', 'Fante','French','Other'];
 // email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private _studentService: StudentService,  private _snackBar: MatSnackBar ) { }

  ngOnInit() {

    this.studentId = this.route.snapshot.paramMap.get('id');
    this.previewUrl = 'assets/images/profile.jpg';

    this.studentForm = new FormGroup({
      id: new FormControl(''),
      lastName: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      otherNames: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      religion: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      motherTongue: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      homeTown: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      gender: new FormControl('',[Validators.required]),
      dob: new FormControl('',[Validators.required]),
      image_url: new FormControl(''),
      livingWith: new FormControl('',[Validators.required]),
      noSiblings: new FormControl('',[Validators.required,Validators.pattern('[0-9]*$')]),
      languages: new FormControl('',[Validators.required])
    });

    
    

    this.studentMotherForm = new FormGroup({
      id: new FormControl(''),
      studentId: new FormControl(`${this.studentId}`),
      relation: new FormControl('mother'),
      fullName:  new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      address:  new FormControl('',[Validators.required]),
      phoneNumber:  new FormControl('',[Validators.required,  Validators.pattern('[0-9]*$')]),
      email:  new FormControl('',[ Validators.email]),
      occupation: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      educationStatus: new FormControl('',[Validators.required]),
      religion: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      numSpouse: new FormControl('',[Validators.required,  Validators.pattern('[0-9]*$')]),
      dateDeceased: new FormControl(''),
      isDeceased: new FormControl(''),
      relationToStudent: new FormControl('mother')
    });


    this.studentFatherForm = new FormGroup({
      id: new FormControl(''),
      studentId:new FormControl(`${this.studentId}`),
      relation: new FormControl('father'),
      fullName:  new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      address:  new FormControl('',[Validators.required]),
      phoneNumber:  new FormControl('',[Validators.required,  Validators.pattern('[0-9]*$')]),
      email:  new FormControl('',[ Validators.email]),
      occupation: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      educationStatus: new FormControl('',[Validators.required]),
      religion: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      numSpouse: new FormControl('',[Validators.required,  Validators.pattern('[0-9]*$')]),
      dateDeceased: new FormControl(''),
      isDeceased: new FormControl(''),
      relationToStudent: new FormControl('father')
    });

    this._studentService.getStudentDetails(this.studentId).subscribe( data=>{

      this.responseData = data;

    
      console.log(this.responseData.data)
      if(this.responseData.data.student != null){
        this.studentImg = this.responseData.data.student.image_url;
         console.log(this.studentImg)
        this.patchStudentForm(this.responseData.data.student)
      }



      if(this.responseData.data.studentParent[0] != null){
        this.patchStudentMotherForm(this.responseData.data.studentParent[0])
      }
      if(this.responseData.data.studentParent[1] != null){
        this.patchStudentFatherForm(this.responseData.data.studentParent[1])
      }

    }, error=>{

    })



  }


  patchStudentForm(student){
    this.studentForm.patchValue({
      id: student.id,
      lastName: student.lastName,
      otherNames: student.otherNames,
      religion: student.religion,
      motherTongue: student.motherTongue,
      homeTown: student.homeTown,
      gender: student.gender,
      dob: new Date(student.dob),
      image_url: student.image_url,
      livingWith:student.livingWith,
      studentClass: student.studentClass,
      noSiblings: student.noSiblings,
      languages: student.languages

    })
    console.log(this.studentFatherForm.value)
  }


  patchStudentMotherForm(studentMother){
    this.studentMotherForm.patchValue({
      id:studentMother.id,
      studentId: this.studentId,
      fullName:  studentMother.fullName,
      address:  studentMother.address,
      phoneNumber:  studentMother.phoneNumber,
      email:  studentMother.email,
      occupation: studentMother.occupation,
      educationStatus: studentMother.educationStatus,
      religion: studentMother.religion,
      numSpouse: studentMother.numSpouse,
      dateDeceased: new Date(studentMother.dateDeceased),
      isDeceased: studentMother.isDeceased,
    })

  }



    patchStudentFatherForm(studentFather){
      this.studentFatherForm.patchValue({
        id:studentFather.id,
        studentId: this.studentId,
        fullName:  studentFather.fullName,
        address:  studentFather.address,
        phoneNumber:  studentFather.phoneNumber,
        email:  studentFather.email,
        occupation: studentFather.occupation,
        educationStatus: studentFather.educationStatus,
        religion: studentFather.religion,
        numSpouse: studentFather.numSpouse,
        dateDeceased: new Date(studentFather.dateDeceased),
        isDeceased: studentFather.isDeceased,
      })


  }



 
  
fileProgress(fileInput: any) {
  this.fileData = <File>fileInput.target.files[0];
  this.preview();
}

preview() {
// Show preview 
var mimeType = this.fileData.type;
if (mimeType.match(/image\/*/) == null) {
  return;
}

var reader = new FileReader();      
reader.readAsDataURL(this.fileData); 
reader.onload = (_event) => { 
  this.previewUrl = reader.result; 
}
}




updateStudent(stepper: MatStepper){
  this._studentService.updateStudent(this.studentForm.value).subscribe(data=>{
    this.responseData = data; 
    if(this.responseData.status == 200){
      this._snackBar.open("Student  Updated 🙂", "", {
        duration: 3000,
      });
      stepper.next();
    }
  
  }, error =>{
    this._snackBar.open("Oops an error occured", "", {
      duration: 3000,
    });
  })
}

updateStudentMother(stepper: MatStepper){
  this._studentService.updateStudentParent(this.studentMotherForm.value).subscribe(data=>{
    this.responseData = data; 
    if(this.responseData.status == 200){
      this._snackBar.open("Student Mother  Updated 🙂", "", {
        duration: 3000,
      });
      stepper.next();
    }
  
  }, error =>{
    this._snackBar.open("Oops an error occured", "Undo", {
      duration: 3000,
    });
  })
}


updateStudentFather(stepper: MatStepper){
  this._studentService.updateStudentParent(this.studentFatherForm.value).subscribe(data=>{
    this.responseData = data; 
    if(this.responseData.status == 200){
      this._snackBar.open("Student Father  Updated 🙂", "", {
        duration: 3000,
      });
      stepper.next();
    }
  
  }, error =>{
    this._snackBar.open("Oops an error occured", "Undo", {
      duration: 3000,
    });
  })
}


onSubmit() {
const formData = new FormData();
  formData.append('file', this.fileData);

}


editStudentDetails(){
  this.router.navigate([`student/editStudentDetails/${this.studentId}`]);
}

}
