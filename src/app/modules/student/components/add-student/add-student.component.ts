import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, Validators, FormGroup  } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { StudentService} from '../../service/student.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  @ViewChild('imageHolder',{static: true}) imageHolder: ElementRef;
  isLinear = false;
  studentResponse: any;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  studId: any;
  imageData: any = new FormData();
  studentForm:any;
  studentMotherForm:any;
  studentFatherForm:any;
  fileData: File = null;
  previewUrl:any = null;
  isMotherDeceased: boolean = false;

  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  public currentUrl: string;
  languageList: string[] = ['Twi', 'Ewe', 'Ga', 'Dagomba', 'Talensi', 'Fante','French','Other'];
 // email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private fb: FormBuilder, private router: Router,private studentService: StudentService, private _snackBar: MatSnackBar ) {

   }

  ngOnInit() {

    this.studentForm = new FormGroup({
      lastName: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      otherNames: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      religion: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      motherTongue: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      homeTown: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      gender: new FormControl('',[Validators.required]),
      dob: new FormControl('',[Validators.required]),
      livingWith: new FormControl('',[Validators.required]),
      image_url: new FormControl(''),
      numSiblings: new FormControl('',[Validators.required,Validators.pattern('[0-9]*$')]),
      languages: new FormControl('',[Validators.required]),
      status: new FormControl('active'),  
      studentClass: new FormControl('',[Validators.required])
    });

    

    this.studentMotherForm = new FormGroup({
      studentId: new FormControl(''),
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
      studentId: new FormControl(''),
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

  }

  //saveStudent
  saveStudent(stepper: MatStepper){
    

    if(this.fileData){
        this.uploadImage().then(()=>{

    this.studentService.createStudent(this.studentForm.value).subscribe(data=>{
      this.studentResponse = data;
     if(this.studentResponse.data.length != 0){
       this.studId = this.studentResponse.data.id;
        this.updateStudentFatherMother(this.studentResponse.data.id);
        this._snackBar.open("Student  Saved 🙂", "Undo", {
          duration: 3000,
        });
        stepper.next();
      }else{
        this._snackBar.open("Oops🥺  An error occured", "Undo", {
          duration: 3000,
        });
      }
     
    },error=>{
      this._snackBar.open("Oops🥺  An error occured", "", {
        duration: 3000,
      });
    })
        })

    }  
   
   
}


saveStudentMother(stepper: MatStepper){
  this.studentService.createStudentParent(this.studentMotherForm.value).subscribe(data=>{
    this.studentResponse = data;
   if(this.studentResponse.data.length != 0){
      this._snackBar.open("Student Mother Saved 🙂", "Undo", {
        duration: 3000,
      });
      stepper.next();
    }else{
      this._snackBar.open("Oops🥺  An error occured", "Undo", {
        duration: 3000,
      });
    }
   
  },error=>{
    this._snackBar.open("Oops🥺  An error occured", "", {
      duration: 3000,
    });
  })
 
}



saveStudentFather(stepper: MatStepper){

  this.studentService.createStudentParent(this.studentForm.value).subscribe(data=>{
    this.studentResponse = data;
   if(this.studentResponse.data.length != 0){
      this._snackBar.open("Student  Father Saved 🙂", "Undo", {
        duration: 3000,
      });
      stepper.next();
    }else{
      this._snackBar.open("Oops🥺  An error occured", "Undo", {
        duration: 3000,
      });
    }
   
  },error=>{
    this._snackBar.open("Oops🥺  An error occured", "", {
      duration: 3000,
    });
  })
 



}

updateStudentFatherMother(studID) {
  this.studentMotherForm.patchValue({
    studentId: studID
  });

  this.studentFatherForm.patchValue({
    studentId: studID
  });
}

 
  
fileProgress(fileInput: any) {
  this.fileData = <File>fileInput.target.files[0];
  this.imageData.append('image', this.fileData, this.fileData.name);
  this.preview();
}

uploadImage(){
    return new Promise((resolve, reject)=>{
        this.studentService.uploadImage(this.imageData).subscribe((data: any) =>{
            this.studentForm.patchValue({
                image_url: data.data.link
            });
            resolve(true)
        })
    })
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



finishStudentForm(){
  this.router.navigate([`student/editStudentDetails/${this.studId}`]);
}

addNewRecord(stepper: MatStepper){
  this.previewUrl =  null;
  this.imageHolder.nativeElement.value = '';
  stepper.reset()
}


}
