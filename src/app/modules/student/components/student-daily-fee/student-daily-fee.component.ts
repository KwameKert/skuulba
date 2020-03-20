import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-student-daily-fee',
  templateUrl: './student-daily-fee.component.html',
  styleUrls: ['./student-daily-fee.component.scss']
})
export class StudentDailyFeeComponent implements OnInit {

  studentID: any ;

  constructor(private route: ActivatedRoute, private router: Router){}


  ngOnInit() {
    this.studentID = this.route.snapshot.paramMap.get('id');
    console.log(this.studentID);
  }



 
}
