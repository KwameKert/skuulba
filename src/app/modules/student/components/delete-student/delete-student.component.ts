import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.scss']
})
export class DeleteStudentComponent implements OnInit {
  constructor(  public dialogRef: MatDialogRef<DeleteStudentComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {


  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
