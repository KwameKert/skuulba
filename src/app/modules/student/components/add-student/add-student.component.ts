import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, Validators, FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  studentForm:any;
  studentMotherForm:any;
  studentFatherForm:any;
  fileData: File = null;
  previewUrl:any = null;
  isMotherDeceased: boolean = false;

  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  languageList: string[] = ['Twi', 'Ewe', 'Ga', 'Dagomba', 'Talensi', 'Fante','French','Other'];
 // email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {


    this.studentForm = new FormGroup({
      surname: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      otherNames: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      religion: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      motherTongue: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      homeTown: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      gender: new FormControl('',[Validators.required]),
      dob: new FormControl('',[Validators.required]),
      livingWith: new FormControl('',[Validators.required]),
      image: new FormControl('',[Validators.required]),
      numSibblings: new FormControl('',[Validators.required,Validators.pattern('[0-9]*$')]),
      languages: new FormControl('',[Validators.required])
    });

    

    this.studentMotherForm = new FormGroup({
      fullName:  new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      address:  new FormControl('',[Validators.required]),
      phoneNumber:  new FormControl('',[Validators.required,  Validators.pattern('[0-9]*$')]),
      email:  new FormControl('',[Validators.required,  Validators.email]),
      occupation: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      educationStatus: new FormControl('',[Validators.required]),
      religion: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      numSpouse: new FormControl('',[Validators.required,  Validators.pattern('[0-9]*$')]),
      dateDeceased: new FormControl(''),
      isDeceased: new FormControl(''),
      relationToStudent: new FormControl('mother')
    });


    this.studentFatherForm = new FormGroup({
      fullName:  new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      address:  new FormControl('',[Validators.required]),
      phoneNumber:  new FormControl('',[Validators.required,  Validators.pattern('[0-9]*$')]),
      email:  new FormControl('',[Validators.required,  Validators.email]),
      occupation: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      educationStatus: new FormControl('',[Validators.required]),
      religion: new FormControl('',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      numSpouse: new FormControl('',[Validators.required,  Validators.pattern('[0-9]*$')]),
      dateDeceased: new FormControl(''),
      isDeceased: new FormControl(''),
      relationToStudent: new FormControl('father')
    });

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

onSubmit() {
const formData = new FormData();
  formData.append('file', this.fileData);

}


finishStudentForm(){
  this.router.navigate(['addStudentDetails']);
}

}
