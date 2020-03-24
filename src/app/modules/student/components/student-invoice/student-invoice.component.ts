import { Component, OnInit, ViewChild } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource } from '@angular/material/table';
import {FinanceService} from '../../../finance/service.service';
import {MatDialog} from '@angular/material/dialog';
import {ViewInvoiceComponent} from '../view-invoice/view-invoice.component';


@Component({
  selector: 'app-student-invoice',
  templateUrl: './student-invoice.component.html',
  styleUrls: ['./student-invoice.component.scss']
})
export class StudentInvoiceComponent implements OnInit {

  showTable: boolean = false;
  studentID: any ;
  dataSource: any;
  feeColumns = ['id', 'date','code', 'amount','action'];

  
  constructor(private route: ActivatedRoute, private router: Router, private _financeService: FinanceService, public dialog: MatDialog){}

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngOnInit() {
    
    this.studentID = this.route.snapshot.paramMap.get('id');
    this._financeService.getStudentInvoice(this.studentID).subscribe(data=>{

      let responseData: any= data;
      if(responseData.data != null){
        this.dataSource = responseData.data;

        this.dataSource = new MatTableDataSource(responseData.data)
        this.dataSource.paginator = this.paginator;
        

        this.showTable = true;
      }

      this.dataSource.paginator = this.paginator;

    
    }, error=>{
      console.warn(error)
    })
  }


  viewStudent(invoice: any): void {
    console.log("hello")
    const dialogRef = this.dialog.open(ViewInvoiceComponent, {
      width: '920px',
      height: '420px',
      data: invoice
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      }
    );
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }





}
