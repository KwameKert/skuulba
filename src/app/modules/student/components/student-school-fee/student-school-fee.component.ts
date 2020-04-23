import { Component, OnInit, ViewChild } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource } from '@angular/material/table';
import {FinanceService} from '../../../finance/service.service';


@Component({
  selector: 'app-student-school-fee',
  templateUrl: './student-school-fee.component.html',
  styleUrls: ['./student-school-fee.component.scss']
})
export class StudentSchoolFeeComponent implements OnInit {

  showTable: boolean = false;
  studentID: any ;
  dataSource: any;
  feeColumns = ['id', 'date', 'amount'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private route: ActivatedRoute, private router: Router, private _financeService: FinanceService){}


  ngOnInit() {
    this.studentID = this.route.snapshot.paramMap.get('id');
    this._financeService.getStudentSchoolFees(this.studentID).subscribe(data=>{

      let responseData: any= data;
      if(responseData.data != null){
        this.dataSource = responseData.data;

        this.dataSource = new MatTableDataSource(responseData.data)

        this.showTable = true;
      }
    
    }, error=>{
      console.warn(error)
    })
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
