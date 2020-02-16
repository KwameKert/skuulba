import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  studentLinks = false;
  financeLinks = false;
  constructor() { }

  ngOnInit() {
  }

  showStudentLinks(){
    this.studentLinks = !this.studentLinks;
  }

  showFinanceLinks(){
    this.financeLinks = !this.financeLinks;
  }
}
