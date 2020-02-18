import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, Validators, FormGroup  } from '@angular/forms';


@Component({
  selector: 'app-edit-student-info',
  templateUrl: './edit-student-info.component.html',
  styleUrls: ['./edit-student-info.component.scss']
})
export class EditStudentInfoComponent implements OnInit {

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

    this.previewUrl = 'assets/images/profile.jpg';

    this.studentForm = new FormGroup({
      surname: new FormControl('Asante',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      otherNames: new FormControl('Kwame Vincent',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      religion: new FormControl('Christian',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      motherTongue: new FormControl('Twi',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      homeTown: new FormControl('Asante Mampong',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      gender: new FormControl('male',[Validators.required]),
      dob: new FormControl(new Date(),[Validators.required]),
      livingWith: new FormControl('both',[Validators.required]),
      image: new FormControl('',[Validators.required]),
      numSibblings: new FormControl(2,[Validators.required,Validators.pattern('[0-9]*$')]),
      languages: new FormControl(['Ewe','Twi'],[Validators.required])
    });

    

    this.studentMotherForm = new FormGroup({
      fullName:  new FormControl('Maame Serwaa',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      address:  new FormControl('Sobolo St',[Validators.required]),
      phoneNumber:  new FormControl('02023413',[Validators.required,  Validators.pattern('[0-9]*$')]),
      email:  new FormControl('maame@gmail.com',[Validators.required,  Validators.email]),
      occupation: new FormControl('Trader',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      educationStatus: new FormControl('Degree',[Validators.required]),
      religion: new FormControl('Christian',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      numSpouse: new FormControl(1,[Validators.required,  Validators.pattern('[0-9]*$')]),
      dateDeceased: new FormControl(''),
      isDeceased: new FormControl(''),
      relationToStudent: new FormControl('mother')
    });


    this.studentFatherForm = new FormGroup({
      fullName:  new FormControl('Mr Boateng',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      address:  new FormControl('Sobolo St',[Validators.required]),
      phoneNumber:  new FormControl('023413434',[Validators.required,  Validators.pattern('[0-9]*$')]),
      email:  new FormControl('boat@gmail.com',[Validators.required,  Validators.email]),
      occupation: new FormControl('Salesman',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      educationStatus: new FormControl('Degree',[Validators.required]),
      religion: new FormControl('Christian',[Validators.required,  Validators.pattern('[a-zA-Z ]*')]),
      numSpouse: new FormControl(1,[Validators.required,  Validators.pattern('[0-9]*$')]),
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


editStudentDetails(){
  this.router.navigate(['student/editStudentDetails']);
}

}
